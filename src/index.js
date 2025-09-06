const express = require('express');
const { PORT } = require('./config/serverConfig');
const connectDv = require('./config/databaseConfig');
const cors = require('cors');
const apiRouter = require('./router/api');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: ['http://localhost:5173',"https://grevitasc.netlify.app/"], 
    credentials: true                 
}));

app.use('/api',apiRouter);
app.get('/',(req,res)=>{
    res.send("<h1>server is running ....</h1>")
})

app.listen(PORT, async()=>{
    await connectDv();
   console.log(`server running on http://localhost:${PORT}`);
})