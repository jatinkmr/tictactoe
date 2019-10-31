const express = require('express')
const app = express();
const http = require('http').Server(app);

app.use( express.static('public') );

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 5551;

app.listen(PORT, () => {
	console.log('server started at ....' + PORT);
	console.log('http://localhost:5551/');
});