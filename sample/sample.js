const {name, add} = require("./helper");



console.log(name);
console.log(add(1, 5));


function test() {
    console.log("this is test()")
}

setTimeout(function() {
    console.log("タイマー関数が呼ばれました")
}, 3000);