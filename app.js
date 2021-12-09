// const fs=require('fs')

// fs.writeFileSync('notes.txt','Notes file text')

// fs.appendFileSync('notes.txt','New appended line')

// const addFunc=require('./utils')

// console.log('sum',addFunc(2,3))

// const getNotes=require('./notes')

// console.log(getNotes())

// const validator=require('validator')

// console.log(validator.isEmail('ram@gmail.com'))

import chalk from 'chalk'

const success=chalk.bold.green
console.log(success('success text from chalk'))