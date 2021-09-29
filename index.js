const  express = require('express');
const {getAnalyticsData} = require('./report');

const app = express();

app.get("/", async (req, res) => {
 const m =  await getAnalyticsData();
 console.log(m)
});

app.listen('8000')