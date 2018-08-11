//Functions returning promises...
function doHomework() {
    return new Promise(function(resolve, reject) {
        //code to do homework...
        let homeWorkDone = true;
        if (homeWorkDone)
            resolve('HOMEWORK DONE!!');
        else
            reject('NO CAN DO!');
    });
}

function playGame() {
    return new Promise(function(resolve, reject){
        //Play LoL or anything else....
        let donePlaying = true;
        if (donePlaying)
            resolve('DONE PLAYING!');
        else
            reject('SOMETHING WENT WRONG!');
    });
}

function readBook() {
    return new Promise(function(resolve, reject) {
        //Read a book...
        let doneReading = true;
        if (doneReading)
            resolve('DONE READING!');
        else
            reject('CANT READ!');
    });
}


//Running promises in sequence...
doHomework().then(function(msg) {
    console.log("MSG from doHomework: " + msg);
    return playGame();
    
}).then(function(msg) {
    console.log("MSG from playGame: " + msg);
    return readBook();
    
}).then(function(msg){
    console.log("MSG from readBook: " + msg);
    console.log("All done!");
    
});
