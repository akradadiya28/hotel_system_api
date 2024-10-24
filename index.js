import express from 'express';
const app = express();
import router from './routes/index.router.js';
import bodyParser from 'body-parser';
import env from 'dotenv';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
env.config();
const port = process.env.PORT || '3000';
import db from './config/db.js';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use('/api', router);


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on http://localhost:${port}/api/v1`);
    }
})