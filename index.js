const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const connectDB = require('./database/connect');
const routes = require('./routes/router');

dotenv.config({ path: 'config.env' });

const port = process.env.PORT || 2000;

const app = express();
app.use(cors());

connectDB();

app.use(express.static(path.join(__dirname, 'client','build')));
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.use('/data', routes);

app.listen(port, () => {
  console.log(`Server Running : http://localhost:${port}`);
});