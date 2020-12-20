import { Router } from 'express';
const routes = Router();

import UserController from './Controllers/UserController'

const userController = new UserController();

/**
 * @swagger
 * /teste:
 *  get:
 *    description: asdkasd
 *    responses:
 *      '200':
 *        description: akojshbdoasnd 
 */
routes.get('/teste', (request, response)=>{
  return response.send('ola mundo')
})

routes.get('/users', userController.create)


export default routes;