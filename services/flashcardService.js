const { readJSON, writeJSON } = require('../services/fileService');

const FLASHCARDS_FILE = '/data/flashcards.json';


const flashcardService = {
    getAll() {
        return readJSON(FLASHCARDS_FILE);
    },

    create(flashcard) {
        const flashcards = this.getAll();

        flashcard.id = flashcards.length ? flashcards[flashcards.length - 1].id + 1 : 1;
        flashcards.push(flashcard);

        writeJSON(FLASHCARDS_FILE, flashcards);
    },

    update(id, word, translation, language) {
        let flashcards = readJSON(FLASHCARDS_FILE);

        flashcards = flashcards.map(flashcard =>
            flashcard.id == id ? { ...flashcard, word, translation, language } : flashcard
        );
    
        writeJSON(FLASHCARDS_FILE, flashcards);
    },

    delete(id) {
        let flashcards = readJSON(FLASHCARDS_FILE);

        flashcards = flashcards.filter(flashcard => flashcard.id != id);
        writeJSON(FLASHCARDS_FILE, flashcards);
    },

    filterByLanguage(lang) {
        let flashcards = readJSON(FLASHCARDS_FILE);

        if (lang) {
            flashcards = flashcards.filter(flashcard => flashcard.language === lang);
        }

        return flashcards
    }
};

module.exports = flashcardService;