import { Router } from 'express';
const routes = Router();

import UserController from './Controllers/UserController'
import AuthenticationController from './Controllers/AuthenticationController'

const userController = new UserController();
const authenticationController= new AuthenticationController();

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

routes.post('/users', userController.create)

routes.get('/authenticate', authenticationController.login)


export default routes;