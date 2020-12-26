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
 * tags:
 *   - name: Users
 *     description: Login e criação de conta
 *   - name: Repositórios
 *     description: Dados dos repositórios dos utilizadores
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     required:
 *       - username
 *       - password
 *       - github_name
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       github_name:
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
 * definitions:
 *   UserRepos:
 *     required:
 *       - username
 *     properties:
 *       username:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   post:
 *     description: Criar um utilizador
 *     tags: [Users]
 *     parameters:
 *       - name: User
 *         in: body
 *         description: Dados do utilizador
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User' 
 *     responses:
 *       '201':
 *         description: Utilizador criado com sucesso
 *       '400':
 *         description: Utilizador já existente
 */
routes.post('/users', userController.create)

/**
 * @swagger
 * /login:
 *   post:
 *     description: Gerar o token para aceder ao sistema
 *     tags: [Users]
 *     parameters:
 *       - name: User
 *         in: body
 *         description: Dados do utilizador
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Login' 
 *     responses:
 *       '200':
 *         description: Token criado com sucesso
 *       '401':
 *         description: Password incorreta ou utilizador não encontrado
 */
routes.post('/login', authenticationController.login)


/**
 * @swagger
 * /private/user-repos:
 *  get:
 *    description: Obter repositórios de um utilizador
 *    tags: [Repositórios]
 *    parameters:
 *      - name: Username
 *        in: body
 *        description: Username do github do utilizador para listar os repositórios
 *        required: true
 *        schema:
 *          $ref: '#/definitions/UserRepos'
 *    security:
 *      - Bearer: []
 *    responses:
 *      '200':
 *        description: Lista com os repositórios
 *      '404':
 *        description: Utilizador não encontrado
 */
routes.get('/private/user-repos',AuthService.verifyToken, reposController.show)

/**
 * @swagger
 * /private/me:
 *  get:
 *    description: Repositórios do user logado na aplicação
 *    tags: [Repositórios]
 *    security:
 *      - Bearer: []
 *    responses:
 *      '200':
 *        description: Lista dos repositórios do user logado.
 *      '404':
 *        description: Utilizador não encontrado.
 */
routes.get('/private/me',AuthService.verifyToken, reposController.me)

export default routes;