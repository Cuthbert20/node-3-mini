
//after npm install dotenv you need to require and then run .config() function on it.
require("dotenv").config();
//after npm install massive you need to require it
const express = require("express");
const massive = require("massive");
const ctrl = require('./controller')

const app = express();

app.get('/api/planes', ctrl.getPlanes)

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance =>{
  app.set('db', dbInstance);
//massive takes our db folder and converts the sql files to functions that interact with our database.
  // dbInstance.new_planes()
  //   .then( planes => console.log( planes ) )
  //   .catch( err => console.log( err ) );
  //massive takes our db folder and converts the sql files to functions that interact with our database.
  // dbInstance.get_planes()
  // .then(planes => console.log(planes))
  // .catch(err => console.log(err))
});

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
