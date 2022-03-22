import { v4 as uuidv4 } from 'uuid';
var rug = require('random-username-generator');

const users = [];
const hobbies = [];




for(let i = 0; i < 1000; i++){
    let id = uuidv4();
    let username = rug.generate();
    let user = {id: id, username: username};
    users.push(user)
}

console.log(users)