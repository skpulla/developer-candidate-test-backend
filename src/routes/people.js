import { Router } from 'express';

import PeopleController from '../controllers/peopleController';

const router = Router();

/**
 * @swagger
 * /people:
 *    get:
 *      description: This should return all the people
 */
router.get('/', (req, res) => PeopleController.getPeople(req, res));

export default router;
