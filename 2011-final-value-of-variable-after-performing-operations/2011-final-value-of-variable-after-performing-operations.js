var finalValueAfterOperations = function(operations) {
    let X = 0;
    operations.forEach(operation=>{
        if(operation.includes('--')) X -=1
        else X +=1
    })
    return X
};