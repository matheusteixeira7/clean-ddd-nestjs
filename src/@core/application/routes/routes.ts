import { Router } from 'express'
import { productRoutes } from '@/src/@core/modules/product/application'

export const routes = Router()

routes.use('/products', productRoutes)
