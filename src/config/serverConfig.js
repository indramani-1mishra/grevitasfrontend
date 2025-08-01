require('dotenv').config();  // 👈 Load env vars first

const PORT = process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const CLOUDNERY_SECRET_KEY=process.env.CLOUDNERY_SECRET_KEY;
const CLOUDNERY_KEY =process.env.CLOUDNERY_KEY ;
const CLODE_NAME= process.env.CLODE_NAME;

module.exports={
    PORT,
    MONGO_URL,
    CLODE_NAME,
    CLOUDNERY_KEY,
    CLOUDNERY_SECRET_KEY,
}