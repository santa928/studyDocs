# ALB（アプリの入口）

## この章でできるようになること

- ALB が「HTTP/HTTPSの入口」だと説明できる
- URLで振り分ける仕組みがわかる
- どこに置くサービスかがイメージできる

## まず結論（超短縮）

- ALB = Webアプリの入口（HTTP/HTTPSの受付）
- パスやドメインで振り分けできる
- その奥にEC2/ECS/Lambdaなどがいる

## ALBとは

ALB（Application Load Balancer）は **HTTP/HTTPSの入口**です。

アクセスを受けて、裏側のアプリに振り分けます。

## 何ができる？

- `example.com/api` と `example.com/app` を別のアプリに振り分ける
- `api.example.com` と `app.example.com` を分ける
- 複数のサーバーに分散して落ちにくくする

## どこに置く？（ざっくり）

- ALB は Public Subnet に置くのが一般的
- その奥にアプリ（EC2/ECS/Lambda）がいる

## 会話で使える言い方

- 「ALBは“Webの入口”」
- 「URLで振り分けられるロードバランサー」
