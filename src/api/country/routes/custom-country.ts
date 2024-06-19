export default {
    type :"content-api",
    routes: [
      {

        method: "POST",
        path: "/create-many",
        handler: "country.createMany",
        config :{
            policies:[],
            auth:false,
        },
      },
    ],
  };