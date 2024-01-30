// TASK 1
function delay(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    });
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));

// TASK 2
let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert); // Outputs 1, meaning it process only the first occurence of resolve & reject

// TASK 3
// not equivalent for error is processed via catch
promise.then(f1).catch(f2); // catches error
promise.then(f1, f2); // no error is catched
