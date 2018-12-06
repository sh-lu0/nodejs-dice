// httpモジュール読み込み
const http = require('http')

// webサーバーを実行
const svr = http.createServer(handler) //Webサーバー生成
svr.listen(8081) //ポート8081で待ち受け開始

//サーバーにアクセスされたとき
function handler(req, res) {
  console.log('url:', req.url)
  console.log('method;', req.method)
  //HTTPヘッダーを出力
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  //レスポンスの本体を出力
  res.end('<h1>Hello,World</h1>\n')
}
