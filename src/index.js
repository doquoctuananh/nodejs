const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// ghi ra cac log
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World!123');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
