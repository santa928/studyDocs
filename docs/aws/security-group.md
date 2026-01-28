# Security Group（通信の許可ルール）

## この章でできるようになること

- Security Group が「通信の許可表」だと説明できる
- Inbound / Outbound の違いがわかる
- ポートという言葉の意味がつかめる

## まず結論（超短縮）

- Security Group = 通信の“許可ルール”
- Inbound（入ってくる通信）と Outbound（出ていく通信）を制御する
- どのポートを開けるかが会話の焦点

## Security Groupとは

Security Group は **通信を許可するためのルール表**です。

「このポートはOK、この相手はNG」を決めます。

## Inbound と Outbound

- Inbound: 外から入ってくる通信
- Outbound: 内から外へ出ていく通信

Webサーバーなら、Inboundで `80` / `443` を許可するのが典型です。

## ポートって何？（超ざっくり）

ポートは **同じサーバーの中で“どの種類の通信か”を分ける番号**です。

- 80: HTTP
- 443: HTTPS
- 22: SSH

## 会話で使える言い方

- 「Security Groupは“通信の許可表”」
- 「Inboundで“外から入っていい通信”を決める」
