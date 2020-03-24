
const program = require('commander');
const init=require('./init')
 
program
  .version('0.1.0')
//   .option('-f, --foo', 'enable some foo')
//   .option('-b, --bar', 'enable some bar')
 
program
  .command('init')
  .action(function () {
    init()
  })

program.parse(process.argv)