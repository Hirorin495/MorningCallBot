// 外部ファイル読み込み
const LINE = require('@line/bot-sdk');
const DUST = require('./libs/dust.js');

/**
 * LINEメッセージ送信Lambda関数
 * @param {*} event
 */
exports.handler = async (event) => {
  // アクセストークンとユーザーIDを設定する
  const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
  const LINE_USER_ID = process.env.LINE_USER_ID;

  // LINEへの送信クライアントを用意する
  const client = new LINE.Client({
    channelAccessToken: LINE_ACCESS_TOKEN
  });
  
  // 出せるごみの情報を取得
  const today = DUST.getToday();
  const dustItem = DUST.getDustSchedule(today.weekNum, today.count);
  
  // メッセージ設定
  event['text'] = makeMessage(today, dustItem);

  // 引数eventをmessageに詰めて送信する
  const message = event;
  await client.pushMessage(LINE_USER_ID, message);
};

/**
 * LINEでの送信メッセージを作成する
 * @param {object} today 
 * @param {string | null} dustItem 
 * @returns 送信メッセージ
 */
const makeMessage = (today, dustItem) => {
  let dustMessage = "今日出せるごみはないようですね。";
  if (dustItem) {
    dustMessage = `${dustItem}の日です。忘れずに出して下さい。`;
  }
  
  return `おはようございます。\n本日は${today.month}月${today.day}日、第${today.weekNum}${today.week}曜日です。\n${dustMessage}`;
};