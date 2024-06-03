import express from 'express';
import config from './shared/config/index.js';
import connectDb from './db/index.js';
import cors from 'cors';
import ErrorHandle from './shared/errors/errorStatus.js';
import mainRouter, { swaggerSpec } from './_api.js';
import cookieParser from 'cookie-parser';
import { modelSync, relation } from './utils/relation.js';
import path from "path"



const app = express();


app.use('/upload', express.static(path.join(process.cwd(), 'upload')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(mainRouter);
app.use(ErrorHandle);

const startAppServer = async () => {
  await relation();
  await modelSync();

  try {
    await connectDb.authenticate();
    console.log('Database ga ulanish muvaffaqiyatli bajarildi!');
    await connectDb.sync({ alter: true });
  } catch (err) {
    console.log('Database ga ulanishda xatolik', err);
  }
 
  app.listen(config.port, () => {
    console.log(`Server running on port http://localhost:${config.port}`);
  });
};

startAppServer();
