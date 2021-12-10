const yargs = require("yargs")
const { addNote, getNotes, removeNote, getSingleNote } = require("./notes")

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        getNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Reading notes',
    handler(argv){
       getSingleNote(argv.title)
    }
})

console.log(yargs.parse())