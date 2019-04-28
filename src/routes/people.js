import { Router } from 'express';

import PeopleController from '../controllers/peopleController';

const router = Router();

/**
 * @swagger
 * /people:
 *    get:
 *      description: This should return all the people
 *      produces:
 *       - application/json
 *      parameters:
 *       - in: query
 *         name: age
 *         schema:
 *          type: integer
 *         description: Filter people based on age.
 *       - in: query
 *         name: gender
 *         schema:
 *          type: string
 *          enum: [male, female]
 *         description: Filter people based on gender.
 *       - in: query
 *         name: limit
 *         schema:
 *          type: integer
 *         description: Limit the result set to be of these many results.
 *       - in: query
 *         name: offset
 *         schema:
 *          type: integer
 *         description: Skip these many number of results.
 *      responses:
 *       200:
 *         description: List of people
 */
router.get('/', (req, res) => {
  const filters = {};

  if (req.query.gender && ['male', 'female'].includes(req.query.gender.toLowerCase())) filters.gender = req.query.gender.toLowerCase();
  if (!Number.isNaN(Number.parseInt(req.query.age, 10))) {
    filters.age = Number.parseInt(req.query.age, 10);
  }

  PeopleController.getPeople(req, res, filters);
});

export default router;
