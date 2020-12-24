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
 * definitions:
 *   User:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */

 /**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   post:
 *     description: Criar um utilizador
 *     parameters:
 *       - name: User
 *         in: body
 *         description: Dados do utilizador
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User' 
 *     responses:
 *         '201':
 *           description: Utilizador criado com sucesso
 *         '400'
 *           description: Utilizador já existente
 */
routes.post('/users', userController.create)

/**
 * @swagger
 * /login:
 *   post:
 *     description: Gerar o token para aceder ao sistema
 *     parameters:
 *       - name: User
 *         in: body
 *         description: Dados do utilizador
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Login' 
 *     responses:
 *         '200':
 *           description: Token criado com sucesso
 *         '401':
 *           description: Password incorreta ou utilizador não encontrado
 */
routes.post('/login', authenticationController.login)


/**
 * @swagger
 * /private/user-repos:
 *  get:
 *    description: Generate token to login in the system
 *    security:
 *      - Bearer: []
 *    responses:
 *      '200':
 *        description:
 */
routes.get('/private/user-repos',AuthService.verifyToken, reposController.show)

/**
 * @swagger
 * /private/me:
 *  get:
 *    description: Generate token to login in the system
 *    security:
 *      - Bearer: []
 *    responses:
 *      '200':
 *        description:funciona
 */
routes.get('/private/me',AuthService.verifyToken, reposController.me)

export default routes;