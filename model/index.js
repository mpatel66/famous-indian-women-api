const mongoose = require('mongoose');
require('dotenv').config();

const {DB_HOST, DB_NAME} = process.env;

mongoose.connect(`${DB_HOST}/${DB_NAME}`, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}, () => console.log(`Connected database ${DB_NAME} 🗄`));

module.exports = mongoose;