const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const alertRouter = require('./routes/alertRouter');

const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan())

app.use('/api/WebAppsProject1', alertRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
});