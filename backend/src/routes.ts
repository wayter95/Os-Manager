import express, { response } from "express";

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: "Initialized Api"
    });
});

export default routes;