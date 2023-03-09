import { Router } from 'express';
import { productRoutes } from '#modules/products/application';

export const routes = Router();

routes.use('/products', productRoutes);
