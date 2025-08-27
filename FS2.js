const hello = require("fs")

hello.writeFileSync("invite.txt", "you are invited")

console.log("Invitation text are written by invite.txt")