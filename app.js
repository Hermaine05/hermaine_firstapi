import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/student.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
