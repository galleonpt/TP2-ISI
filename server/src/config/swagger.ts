import path from "path";

const swaggerOptions={
  swaggerDefinition:{
    openapi:'3.0.0',
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
  apis:[path.resolve(__dirname,'..', "routes.ts"), path.resolve(__dirname,'..', "swagger.yaml")]
}

export default swaggerOptions