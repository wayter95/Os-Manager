import express from "express";
import Knex from './database/connection';

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: "Initialized Api!"
    });
});

routes.get('/sectors', async (req, res) => {
    const sectors = await Knex('sectors').select('*');

    return res.json(sectors);
})

export default routes;