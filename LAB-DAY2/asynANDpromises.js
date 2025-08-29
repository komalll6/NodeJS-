const FetchNewPromise =((resolve, reject) =>{
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000 );
})

FetchNewPromise()
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.error(error);
});