import express, { Router } from 'express';
import path from "path";
import cors from "cors"
import swaggerUi  from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"

import 'dotenv/config' 

import routes from "./routes"

const app = express();

const swaggerOptions={
  swaggerDefinition:{
    
    info: {
      version:"1.0.0",
      title: "TP2-ISI",
      description: "",
      contact: {
        name:"José Luís",
        email:"a17616@alunos.ipca.pt",
      },
    },
  },
  apis:[path.resolve(__dirname,"routes.ts")]
}

const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333, ()=>{console.log('Ligado')})
 

