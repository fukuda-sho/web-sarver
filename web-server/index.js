const express = require('express');
//Node.jsに標準で入っているモジュールの1つがpathモジュール
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false}));

console.log(__dirname);

//webサーバー内階層の「public」フォルダを指定している。
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//     res.send('トップ')
// });

// app.get('/about', function (req, res) {
//     res.send('<h1>アバウト</h1>')
// });


//これだけだとテキストだけ返していることになる
app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if(answer === "2") {
        res.redirect("/correct.html");
    } else {
        res.redirect("/wrong.html");
    }
    res.send(answer);
});

app.get('/api/v1/users', function (req, res) {
    res.send({
        name: "翔",
        age: 28,
        na: 112,

    });
});

//サーバーの実行環境の情報取得(herokuのサーバー)
//ローカルの時は3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('こんばんちゃ')
});

console.log('最終行')