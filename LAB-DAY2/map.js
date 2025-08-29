const fruit = ['apple', 'banana', 'orange', 'mango'];

fruit.map((fruit, index) => {
   console.log(`fruit: ${index + 1} : ${fruit}`)
})

fruit.filter((fruit) =>{
    console.log(`filter: ${fruit}`)
})