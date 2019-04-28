import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /people:
 *    get:
 *      description: This should return all the people
 */
router.get('/', (req, res) => res.send({ hello: 'world' }));

export default router;
