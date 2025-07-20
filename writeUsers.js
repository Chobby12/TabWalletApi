const {writeFileSync} = require('fs')
const users = require('./users-generator')

writeFileSync('./content/subfolder/users.js',JSON.stringify(users))