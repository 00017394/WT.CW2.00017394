# Language Learning App

## About
This web application allows users to create, manage, and filter flashcards or vocabulary lists for different languages. The flashcards can be organized by language, and users can add, update, and delete flashcards.

## Features
- Create, update, and delete flashcards.
- Filter flashcards by language (English, Spanish, French, German, Russian).
- Minimalistic user interface with Bootstrap 5.

## Project Structure
| Path                          | Description                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| /WT.CW.00017394               | Root folder of the project. Usually named after the project.                                 |
| app.js                        | Entry point of the application. Can be named `app.js` or `index.js`.                         |
| package.json                  | Project configuration file. Usually created with `npm init`.                                 |
| package-lock.json             | Auto-generated file to lock dependencies' versions.                                          |
| .gitignore                    | Used to exclude files/folders like `node_modules` from version control.                      |
| /public                       | Contains static client-side assets like stylesheets and JavaScript.                          |
| └── /css/styles.css           | Example CSS file used for styling the front-end.                                             |
| /routes                       | Defines route handlers/controllers for different parts of the app.                           |
| ├── index.js                  | Main or default route file.                                                                  |
| └── flashcards.js             | Route file specific to flashcards functionality.                                             |
| /views                        | Holds the template files (EJS in this case) used to render HTML on the server side.          |
| ├── index.ejs                 | Template for the main page.                                                                  |
| ├── flashcards.ejs            | Template for the flashcards page.                                                            |
| └── layout.ejs                | Layout template that other views can extend.                                                 |
| /controllers                  | Contains logic for controlling app behavior (e.g., which services to use).                   |
| └── flashcards.js             | Flashcard request response controller file.                                                  |
| └── index.js                  | Example controller file.                                                                     |
| /services                     | Contains reusable logic for handling business processes and data.                            |
| ├── fileService.js            | Handles file operations.                                                                     |
| ├── flashcardService.js       | Handles flashcard-related logic.                                                             |
| ├── languageService.js        | Handles language-related logic.                                                              |
| └── index.js                  | Service entry or index file.                                                                 |
| /data                         | Stores JSON files used as data sources.                                                      |
| ├── flashcards.json           | JSON data for flashcards.                                                                    |
| └── languages.json            | JSON data for languages.                                                                     |
| README.md                     | Documentation file describing the project.                                                   |


## Installation

1. Clone the repository:
    ```
    git clone https://github.com/00017394/WT.CW2.00017394.git
    cd WT.CW2.00017394
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Run the application locally:
    ```
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Dependencies
- express
- ejs
- bootstrap
- fs (Node.js core module)
- express-partials

## Deployment
- GitHub repository: https://github.com/00017394/WT.CW2.00017394
- Deployed app: [Hosted App Link]

---

