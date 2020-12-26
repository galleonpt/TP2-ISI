import express from 'express';
import cors from "cors"
import swaggerUi  from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerOptions from './config/swagger'
import 'dotenv/config' 

import routes from "./routes"

const app = express();

// const swaggerOptions={
//   swaggerDefinition:{
//     info: {
//       version:"1.0.0",
//       title: "TP2-ISI",
//       description: "",
//       contact: {
//         name:"José Luís",
//         email:"a17616@alunos.ipca.pt",
//       },
//     },
//   },
//   apis:[path.resolve(__dirname, "routes.ts"), path.resolve(__dirname, "swagger.yaml")]
// }

const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }))

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333, ()=>{console.log('Ligado')})