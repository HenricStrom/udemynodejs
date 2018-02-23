console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
console.log(argv);
var command = argv._[0];
console.log('Command: ', command);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log(`Note added! Title: ${note.body}, Body: ${note.body}`);
  }
  else{
    console.log('The provided note already exists in the list.');
  }
}
else if (command === 'list'){
  notes.getAll();
}
else if (command === 'read'){
  notes.readNote(argv.title);
}
else if (command === 'remove'){
  notes.removeNote(argv.title);
}
else {
  console.log('Command not recognized');
}
