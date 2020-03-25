const program = require('commander');
const init = require('./init')
const packageJson = require('../package.json')


program
  .version(packageJson.version)

program
  .command('init')
  .action(() => {
    init()
  })

program.parse(process.argv)