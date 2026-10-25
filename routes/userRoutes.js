const express = require ('express') ;
const router = express . Router () ;
const { registerUser , loginUser , getUserProfile , getAllUsers , updatePassword, updateUserRole } = require ('../controllers/userController') ;
const { protect , adminOnly } = require ('../middlewares/authMiddleware') ;
// Routes d’ authentification publiques
router.post('/register', registerUser ) ;
router.post('/login', loginUser ) ;
// Route privee protegee par Token JWT
router.get('/profile', protect , getUserProfile ) ;
// Route reservee aux administrateurs ( JWT valide + role admin requis )
router.get('/', protect , adminOnly , getAllUsers ) ;
// Route pour mettre à jour le role d’un utilisateur (Administrateurs uniquement)
router.put('/:id/role', protect, adminOnly, updateUserRole);
// Route pour mettre à jour le mot de passe de l’utilisateur connecté
router.put('/update-password', protect, updatePassword);
module.exports = router ;