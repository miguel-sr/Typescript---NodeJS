import { Router } from 'express';
const router = Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Seja bem vindo (a) a API!',
    version: '1.0.0'
  });
});

export default router;