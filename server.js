const express = require("express");
const app = require('express')();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/instructorsSchedulePublishButtonPage', (req, res) => {
    res.sendFile(__dirname + '/instructorsSchedulePublishButtonPage/index.html')
})

app.get('/updateCoursesAvailableInstructorsButtonPage', (req, res) => {
    res.sendFile(__dirname + '/updateCoursesAvailableInstructorsButtonPage/index.html')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})