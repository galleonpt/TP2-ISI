import express from 'express';
import cors from "cors"
import swaggerUi  from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerOptions from './config/swagger'
import 'dotenv/config' 

import routes from "./routes"

const app = express();

const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333, ()=>{console.log('Ligado')})
 

