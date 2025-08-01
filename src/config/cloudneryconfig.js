const { CLODE_NAME, CLOUDNERY_KEY, CLOUDNERY_SECRET_KEY } = require('./serverConfig.js');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:CLODE_NAME,
    api_key:CLOUDNERY_KEY,
    api_secret:CLOUDNERY_SECRET_KEY,
})

module.exports = cloudinary;