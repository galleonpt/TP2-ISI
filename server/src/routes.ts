import { Router } from 'express';
const routes = Router();


import UserController from './Controllers/UserController'
import AuthenticationController from './Controllers/AuthenticationController'
import AuthService from './services/AuthService'

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

/**
 * @swagger
 * /teste:
 *  get:
 *    description: asdkasd
 *    responses:
 *      '200':
 *        description: akojshbdoasnd 
 */
routes.post('/users', userController.create)

/**
 * @swagger
 * /teste:
 *  get:
 *    description: asdkasd
 *    responses:
 *      '200':
 *        description: akojshbdoasnd 
 */
routes.get('/authenticate', authenticationController.login)

/**
 * @swagger
 * /teste:
 *  get:
 *    description: asdkasd
 *    responses:
 *      '200':
 *        description: akojshbdoasnd 
 */
routes.get('/private',AuthService.verifyToken, (request, response)=>{response.send('passou aqui')})


export default routes;