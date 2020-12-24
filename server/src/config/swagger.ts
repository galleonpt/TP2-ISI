import path from "path";
import swaggerjson from '../swagger.json'

const swaggerOptions={
  swaggerDefinition:{
    components: {},
    schemas: {swaggerjson},
    info: {
      version:"1.0.0",
      title: "TP2-ISI",
      description: "",
      contact: {
        name:"José Luís",
        email:"a17616@alunos.ipca.pt",
      },
      servers:['http://localhost:3333']
    },
  },
  apis:[path.resolve(__dirname,'..', "routes.ts"), path.resolve(__dirname,'..', 'swagger.json')]
}

export default swaggerOptions