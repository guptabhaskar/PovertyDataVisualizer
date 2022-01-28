const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const povertyRouter = require("./routes/povertyRouter.js")
require('dotenv').config()
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, auth_token');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS,PUT');
    next()
})
app.get('/', (req, res) => res.send("chalgya mja aa gya"));
app.use("/api", povertyRouter)
const port = process.env.port || 9000;
try {
    app.listen(port, () => {
        mongoose
            .connect(process.env.CONNECTION_URL, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
            .then(console.log(`cononected to ${9000}`))
            .catch((err) => console.log(err));
    })
    
} catch (error) {
    console.log(error)
}

exports = module.exports = app;