// LINE BOT SDKを用意する
const LINE = require('@line/bot-sdk');

/**
 * LINEメッセージ送信Lambda関数
 * @param {*} event
 * @returns
 */
exports.handler = async (event) => {
  // アクセストークンとユーザーIDを設定する
  const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
  const LINE_USER_ID = process.env.LINE_USER_ID;

  // LINEへの送信クライアントを用意する
  const client = new LINE.Client({
    channelAccessToken: LINE_ACCESS_TOKEN
  });
  
  // メッセージ設定
  event['text'] = makeMessage();
  

  // 引数eventをmessageに詰めて送信する
  const message = event;
  await client.pushMessage(LINE_USER_ID, message);
};

const makeMessage = () => {
    //月・日・曜日を取得する
    const today = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    const month = today.getMonth()+1;
    const day = today.getDate();
    const week = today.getDay();

    const yobi= new Array("日","月","火","水","木","金","土");
    
    return `おはようございます。\n本日は${month}月${day}日${yobi[week]}曜日です。\n今日も頑張りましょう。`;
};