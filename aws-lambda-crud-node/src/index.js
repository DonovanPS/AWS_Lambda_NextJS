module.exports.handler = async (event) => {

  console.log("entro a index");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola mundo!",
        input: event,
      },
      null,
      2
    ),
  };
};
