function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hejsan svejsan ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
