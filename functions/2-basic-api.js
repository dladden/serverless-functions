//refer to ./assets/data.js
//Instead of housing the raw data in the function file we can store it in a more acessible file at our choosing
//and export it out.

//Additionally, you can create your own HEADER which allows you to change information about the status of the request
//In this instance we set access to all '*' with the 'Access-Control-Allow-Origin':'*'. Now data will be accessible in any project.

const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  //event log shows information about the object
  //   console.log(event);
  //   console.log(context);
  return {
    //this HEADER must be included in the function you choose to be accessible to all the data
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
