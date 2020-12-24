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
 *     description: Use to return all customers
 *     parameters:
 *       - name: customer
 *         in: body
 *         description: Name of our customer
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User' 
 *     responses:
 *         '201':
 *           description: Successfully created user
 */
routes.post('/users', userController.create)

/**
 * @swagger
 * /login:
 *   post:
 *     description: Use to return all customers
 *     parameters:
 *       - name: customer
 *         in: body
 *         description: Name of our customer
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Login' 
 *     responses:
 *         '200':
 *           description: Generate Token
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