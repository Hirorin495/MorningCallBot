# モーニングコールLINEbot

AWS Lambdaで動作するモーニングコールLINEbotです。
このリポジトリではAWS Lambdaで使用するソースコード・ライブラリを管理しています。

## 使用技術

- AWS Lambda
- AWS EventBridge
- LINE Messaging API
- Node

## 環境変数

| Key               | Value            |
| ----------------- | ---------------- |
| LINE_ACCESS_TOKEN | LINEbotのアクセストークン |
| LINE_USER_ID      | LINEのユーザID       |
| TZ                | Asia/Tokyo       |

## 動作

アイコンや台詞は自分好みにアレンジを加えていますが、画像のように決まった時間に通知してくれます。

![photo](https://user-images.githubusercontent.com/29344518/220379725-b3b12458-603a-4156-8668-4c12b1f2e8cd.png)
