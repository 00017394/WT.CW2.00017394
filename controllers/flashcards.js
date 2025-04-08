const { readJSON, writeJSON } = require('../services/fileService');

const FLASHCARDS_FILE = 'data/flashcards.json';
const LANGUAGES_FILE = 'data/languages.json';

// Get all flashcards
exports.getFlashcards = (req, res) => {
    const flashcards = readJSON(FLASHCARDS_FILE);
    const languages = readJSON(LANGUAGES_FILE);
    res.render('flashcards', { flashcards, languages, selectedLang: '' });
};

// Add a new flashcard
exports.addFlashcard = (req, res) => {
    const { word, translation, language } = req.body;
    const flashcards = readJSON(FLASHCARDS_FILE);

    const newFlashcard = {
        id: flashcards.length ? flashcards[flashcards.length - 1].id + 1 : 1,
        word,
        translation,
        language
    };

    flashcards.push(newFlashcard);
    writeJSON(FLASHCARDS_FILE, flashcards);

    res.redirect('/flashcards');
};

// Update a flashcard
exports.updateFlashcard = (req, res) => {
    const { id } = req.params;
    const { word, translation, language } = req.body;
    let flashcards = readJSON(FLASHCARDS_FILE);

    flashcards = flashcards.map(flashcard =>
        flashcard.id == id ? { ...flashcard, word, translation, language } : flashcard
    );

    writeJSON(FLASHCARDS_FILE, flashcards);
    res.redirect('/flashcards');
};

// Delete a flashcard
exports.deleteFlashcard = (req, res) => {
    const { id } = req.params;
    let flashcards = readJSON(FLASHCARDS_FILE);

    flashcards = flashcards.filter(flashcard => flashcard.id != id);
    writeJSON(FLASHCARDS_FILE, flashcards);

    res.redirect('/flashcards');
};

// Filter flashcards by language
exports.filterFlashcards = (req, res) => {
    const { language } = req.query;
    let flashcards = readJSON(FLASHCARDS_FILE);
    const languages = readJSON(LANGUAGES_FILE);

    if (language) {
        flashcards = flashcards.filter(flashcard => flashcard.language === language);
    }

    res.render('flashcards', { flashcards, languages, selectedLang: language });
};

