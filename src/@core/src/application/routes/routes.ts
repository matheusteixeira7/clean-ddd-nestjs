import { Router } from 'express'
import { productRoutes } from '#modules/product/application'

export const routes = Router()

routes.use('/products', productRoutes)
