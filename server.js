//Install Node
//npm init -y
//npm install express
//Run server.js => node server.js
//And your app work in http://localhost:3000
// import express from 'express';
// import path from 'path'
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the "public" folder for HTML and assets
app.use(express.static(path.join(process.cwd(), 'public')));

// Serve JavaScript files from the "src" folder
app.use('/src', express.static(path.join(process.cwd(), 'src')));
app.use('/A', express.static(path.join(process.cwd(), 'A' )))

// Handling the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});