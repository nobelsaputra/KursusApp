require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
