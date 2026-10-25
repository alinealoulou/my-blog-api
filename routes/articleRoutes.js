
const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    getMyArticles
} = require('../controllers/articleController');

const { protect } = require('../middlewares/authMiddleware');

// Consultation publique
router.get('/', getAllArticles);
router.get('/my-articles', protect, getMyArticles); //only for authenticated users
router.get('/:id', getArticleById);

// Opérations d'écriture protégées par authentification JWT
router.post('/', protect, createArticle);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

module.exports = router;
