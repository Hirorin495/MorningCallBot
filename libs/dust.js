// ごみスケジュールモジュール
module.exports = {
  // 現在日付情報の取得
  getToday: () => {
    const today = new Date();
    const yobi= new Array("日","月","火","水","木","金","土");

    return {
      month   : today.getMonth()+1,             // 月
      day     : today.getDate(),                // 日
      weekNum : today.getDay(),                 // 曜日番号
      week    : yobi[today.getDay()],           // 曜日
      count   : Math.ceil(today.getDate() / 7)  // 第x曜日の数値。第2月曜日なら2
    };
  },
  // 対応する捨てられるゴミの取得
  getDustSchedule: (weekNum, count) => {
    let dust = null;

    /*
     * 曜日の数値は以下の通り
     * 0 : 日
     * 1 : 月
     * 2 : 火
     * 3 : 水
     * 4 : 木
     * 5 : 金
     * 6 : 土
     */
    switch (weekNum) {
      case 0:
        // caseに応じた曜日で出すごみについて記載する
        dust = "日曜日に出すごみ";
      case 1:
        // 第2と第4月曜日だけ。としたい場合は下記のようにcount変数を使って分岐する
        if ([2, 4].includes(count)) dust = "第2,3月曜日に出すごみ";
        break;
      case 3:
      case 6:
        // case文をまとめることで複数の曜日で出すごみをまとめられます
        dust = "水曜日、土曜日に出すごみ";
        break;
      // ごみを出せる曜日ではない場合はコメントアウトや処理を消すことで対応します。
      // case 4:
      //   dust = "";
      //   break;
    }
  
    return dust
  }
};