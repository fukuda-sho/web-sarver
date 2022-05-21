const fs = require('fs');

const person = {
    name: "福田",
    age: 28,
}

const read = function() {
    fs.readFile("./sample.json", "utf8", (err, data) => {
       const person = JSON.parse(data);
        console.log(person.name);
    });
};

const write = function() {
    fs.writeFile("sample.json", JSON.stringify(person), function() {
    console.log("書き出し完了！");
    });
};

module.exports = {
    read: read,
    write: write,
}