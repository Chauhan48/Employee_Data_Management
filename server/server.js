const express = require('express');
const { PORT } = require('./config/config');
const { connectDB } = require('./app/startup/databaseStartup');
const app = express();

const startNodeServer = async () => {
    await connectDB();
    await require('./app/startup/serverStartup')(app);
}

startNodeServer().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`)
    });
}).catch((err) => {
    console.log('Error running server', err);
})