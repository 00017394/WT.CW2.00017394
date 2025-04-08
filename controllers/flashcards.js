const flashcardService = require("../services/flashcardService");
const languageService = require("../services/languageService");


// Get all flashcards
exports.getFlashcards = async (req, res) => {
    const flashcards = await flashcardService.getAll();
    const languages = await languageService.getAll();
    res.render('flashcards', { flashcards, languages, selectedLang: '' });
};

// Add a new flashcard
exports.addFlashcard = async (req, res) => {
    const { word, translation, language } = req.body;
    const newFlashcard = { word, translation, language };

    await flashcardService.create(newFlashcard);

    res.redirect('/flashcards');
};

// Update a flashcard
exports.updateFlashcard = async(req, res) => {
    const { id } = req.params;
    const { word, translation, language } = req.body;

    await flashcardService.update(id, word, translation, language);

    res.redirect('/flashcards');
};

// Delete a flashcard
exports.deleteFlashcard = async(req, res) => {
    const { id } = req.params;
    
    await flashcardService.delete(id);

    res.redirect('/flashcards');
};

// Filter flashcards by language
exports.filterFlashcards = async(req, res) => {
    const { language } = req.query;
    const languages = await languageService.getAll();
    
    const flashcards = await flashcardService.filterByLanguage(language);

    res.render('flashcards', { flashcards, languages, selectedLang: language });
};

