const express = require ('express') ; // 1. load the Express framework module

const dotenv = require ('dotenv') ; // load the dotenv module to read environment variables from .env file
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
//Load environment variables from .env file
dotenv.config();
const app = express () ; // 2. instantiate the server application
// Get the PORT from environment variables or use 3000 as default
const PORT = process.env.PORT || 3000;
app.use(express.json()) ; // middleware to parse JSON request bodies   

// 3. route definition : executed when a client requests GET /
app . get('/', (req , res) => {
    res . json ({ message : "Hello , I am the blog API" }) ;
}) ;
// Articles
app.use('/api/articles', articleRoutes); //we use the articleRoutes for all routes starting with /api/articles
// Users
app.use('/api/users', userRoutes); //we use the userRoutes for all routes starting with /api/users
// About 
app.get('/about', (req, res) => {
  res.json({app:"Blog API" , nom : "Aline" , version : "1.0.0" });
}) ;
//Contact 
app.post('/contact', (req,res) => {
  const {email , message} = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: "L'email et le message sont obligatoires" });
  }

  res.status(200).json({ message: 'Merci, votre message a bien été reçu' });
}) ;
// Async function to connect to MongoDB Atlas before listening for incoming requests
(async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Serveur disponible sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur lors de la connexion à MongoDB Atlas :', error);
    process.exit(1); // Exit the process with an error code
  }
})();