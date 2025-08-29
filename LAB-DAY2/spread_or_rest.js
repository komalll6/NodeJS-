const num = [1,2,3,4,5]
const moveNum = [6,7,8,9,10]

const allNum = [...num, ...moveNum]

console.log(allNum)

function hello(name, ...msg){
    console.log(`hello ${name} !`)

    msg.forEach((msg) =>{
        console.log(`Message: ${msg}`)
    })
}