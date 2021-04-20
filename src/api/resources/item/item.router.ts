import { Router, Request, Response } from 'express';
// import itemController from './item.controller';

const itemRouter = Router();
const defaultController = (_req: Request, res: Response) => {
  res.send({ message: 'ok' });
};

// /api/item
itemRouter.route('/')
  .get(defaultController)
  .post(defaultController);

// /api/item/:id
itemRouter.route('/:id')
  .get(defaultController)
  .put(defaultController)
  .delete(defaultController);

export default itemRouter;