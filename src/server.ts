import app from "./app";
import dotenv from "dotenv";
import logger from './common/utils/logger';
dotenv.config();

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
  console.log(`Server is running on port ${process.env.PORT}`);
});
