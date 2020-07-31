import { Request, Response } from 'express';
import Knex from '../database/connection';

class SectorsControllers {
    async index(request: Request, response: Response) {
        const sectors = await Knex('sectors').select('*');

        return response.json(sectors);
    }
}

export default SectorsControllers;