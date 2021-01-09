import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessiosController = new SessionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessiosController.create,
);

export default sessionsRouter;
