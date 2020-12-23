import path from "path";

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
  apis:[path.resolve(__dirname,'..', "routes.ts")]
}

export default swaggerOptions