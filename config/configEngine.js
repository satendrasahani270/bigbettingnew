import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Function to get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, '../public'))); // Adjust static directory path if necessary
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views')); // Set the views directory path
};

export default configViewEngine;
