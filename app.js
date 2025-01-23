require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, 'localhost', () => {
    console.log('listening for request on port', PORT);
});

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });

});
app.get('/contact-me', (req, res) => {
    res.sendFile('./views/contact-me.html', { root: __dirname });
});

// redirection
app.get('/contact', (req, res) => {
    res.redirect('/contact-me');
});

// 404 - or defaulting to a path when requested path not found
// .use() fires for every request coming in, BUT ONLY if the request gets to this point in the code (none of the .get()s fired)
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

