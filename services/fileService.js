const fs = require('fs');
const path = require('path');

const readJSON = (filePath) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '..', filePath), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return [];
    }
};

const writeJSON = (filePath, data) => {
    try {
        fs.writeFileSync(path.join(__dirname, '..', filePath), JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing to ${filePath}:`, error);
    }
};

module.exports = { readJSON, writeJSON };
