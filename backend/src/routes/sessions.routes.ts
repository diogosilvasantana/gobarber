import { Router } from 'express';

const sessionsRouter = Router();

import AuthenticateUserService from '../services/AuthenticateUserService';

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  await authenticateUser.execute({
    email,
    password,
  });

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return response.json({ userWithoutPassword, token });
});

export default sessionsRouter;
