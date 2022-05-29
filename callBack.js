function explain_callback(name, age, task){
    console.log('Hello ', name);
    console.log('Your age ', age);
    task();
}
function washHand(){
    console.log('Wash hand with soap')
}

function takeShower(){
    console.log('Take Shower')
}

explain_callback('Rahim', 23, washHand);
explain_callback('Karim', 25, takeShower);