import express from "express";

import SectorsController from './controllers/SectorsControllers';

const routes = express.Router();
const sectorsController = new SectorsController();

routes.get('/', (req, res) => {
    return res.json({
        message: "Initialized Api!"
    });
});

routes.get('/sectors', sectorsController.index);

export default routes;