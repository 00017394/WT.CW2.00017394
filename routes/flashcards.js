const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcards');

// Routes
router.get('/', flashcardController.getFlashcards);
router.post('/add', flashcardController.addFlashcard);
router.post('/update/:id', flashcardController.updateFlashcard);
router.post('/delete/:id', flashcardController.deleteFlashcard);
router.get('/filter', flashcardController.filterFlashcards);


module.exports = router;
