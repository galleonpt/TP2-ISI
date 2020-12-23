import { Router } from 'express';
const routes = Router();


import UserController from './Controllers/UserController'
import AuthenticationController from './Controllers/AuthenticationController'
import AuthService from './services/AuthService'
import ReposController from './Controllers/ReposController'


const userController = new UserController();
const authenticationController= new AuthenticationController();
const reposController = new ReposController();


/**
 * @swagger
 * /users:
 *  get:
 *    description: create an user
 *    responses:
 *      '200':
 *        description: akojshbdoasnd 
 */
routes.post('/users', userController.create)

/**
 * @swagger
 * /login:
 *  get:
 *    description: Generate token to login in the system
 *    responses:
 *      '200':
 *        description:
 */
routes.get('/login', authenticationController.login)


//pesquissar repositorios de um utilizador qualquer
routes.get('/private/user-repos',AuthService.verifyToken, reposController.show)

//quando faz login mostrar logo os repos da pessoa que logou
routes.get('/private/me',AuthService.verifyToken, reposController.me)

export default routes;