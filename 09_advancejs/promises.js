const promiseOne= new Promise(function(revolve,reject){

    setTimeout(function(){
        console.log("async tast is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("task completed")
})
