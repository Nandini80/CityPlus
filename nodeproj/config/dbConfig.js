 
require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  dburl: process.env.MONGODB_URL ,  
};
