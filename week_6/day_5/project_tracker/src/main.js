import express from 'express';
import dotenv from 'dotenv';
import { connectMongo } from '#@/databases/connect-mongo.js';
import routes from '#@/routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectMongo(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Startup error', err);
    process.exit(1);
  }
})();
