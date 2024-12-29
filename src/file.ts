import { config } from 'dotenv'
//import 'dotenv/config'
config()
let a = process.env.SQLITE_DB_PATH
console.log('qwerty',a)

interface Account {
    id: number,
    displayName: string,
    version: 1
  }
   
  function welcome(user: Account) {
    console.log(user.id,user.some)
  }

  const usr:Account = {
    id:123,
    displayName:'qwert',
    version:1,
    some:99
  }
  welcome(usr)

 //Что за declare? 
 //declare function debug(value: any): void;
//  function debug(value:string){
//     console.log(value)
// }

//  debug('Hello, world!') // OK