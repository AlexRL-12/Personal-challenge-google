import express from 'express';
import { githubRouter } from './routes/github.routes';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.use('/github', githubRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



