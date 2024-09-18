const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})