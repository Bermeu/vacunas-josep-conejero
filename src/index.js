require("dotenv").config();
const debug = require("debug")("vacunas:root");
const chalk = require("chalk");
const connectDB = require("./database/index");

const mongoConnection = process.env.MONGODB_STRING;

(async () => {
  try {
    await connectDB(mongoConnection);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();
