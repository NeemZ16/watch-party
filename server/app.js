import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/user.routes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send("hello world - alvi");
})

app.use('/api/users', userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
