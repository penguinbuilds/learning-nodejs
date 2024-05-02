const names = require('./04-names.js')
const sayHi = require('./05-utils.js')
const data = require('./06-alt-exporting-method.js')

require('./07-mind-grenade.js')

// console.log(data)
// console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)