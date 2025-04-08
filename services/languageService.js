const { readJSON, writeJSON } = require('../services/fileService');

const LANGUAGES_FILE = 'data/languages.json';


const languageService = {
    getAll: async() => {
        return readJSON(LANGUAGES_FILE);
    },
};

module.exports = languageService;