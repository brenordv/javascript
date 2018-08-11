//Defining a promise...
let promiseDoHomework = new Promise(function(resolve, reject) {
    //code to do homework...
    
    let homeWorkDone = true;
    if (homeWorkDone)
        resolve('ALL DONE!');
    else
        reject('NO CAN DO!');
});

//Running the promise...
promiseDoHomework.then(function(resolveReturn) {
    console.log("Homework done! Return: " + resolveReturn);
 }).catch(function(rejectReturn){
     console.log("Homework not done! Return: " + rejectReturn);
 });
