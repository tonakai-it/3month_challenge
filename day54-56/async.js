// const fs = require('fs')
const fs = require('fs/promise')


// function readFile() {
async function readFile() {

    let fileData;
    
    // fileData = fs.readFileSync('data.txt'); // 同期的ファイル読み込み ファイル読むまでここで止まる
    // fileData = fs.readFile('data.txt', (error, fileData)=>{  // 非同期ファイル読み込み, 第二引数はコールバック 終わったら実行される
    //     console.log('File parsing done!')
    //     console.log(fileData.toString())  //終わったらここでtoStringが使える 
    // });
    // 第二引数に、終わったら実行するコールバック関数を追加していく⇒多重ネスト⇒callback hell

    
    // Promise型
    // ↓try文は読み込めない readfileしてるときは干渉できない

    fs.readFile('data.txt')
        .then((fileData)=>{
            console.log('File parsing done!')
            console.log(fileData.toString())  //終わったらここでtoStringが使える
            // return anotherAsyncOperation //としてコールバックを書いてもいいが、.then()が使える
        })
        .then(()=>{})
        .catch((error)=>{ //これでエラーをキャッチする
            console.log(error)
        console.log('An error occurerred!');

        }) 

    // async awaitを使ってもっと簡単に
    fileData = await fs.readFile('data.txt')
    console.log(fileData.toString())

    // これはtry文使える
    try {
        fileData = await fs.readFile('data.txt')
        console.log(fileData.toString())
    } catch (error) {
        console.log(error)
    }

    // 非同期だとundefine.toStringになる
    // console.log(fileData.toString()) 
    console.log('Hi there!')
}

readFile();