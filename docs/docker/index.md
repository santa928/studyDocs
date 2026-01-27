# Docker（入口）

## この章でできるようになること

- Docker が「何を解決する道具か」を一言で説明できる
- **イメージ**と**コンテナ**の違いを会話で言い分けられる
- Docker Compose の用途を、具体例つきで説明できる
- Docker / Compose の基本コマンドを見ても意味が想像できる

## Dockerとは（ざっくり一言で）

Docker は **「動かすための環境ごと、ひとまとめにして再現する仕組み」**です。

「自分のPCでは動くのに、他の人のPCでは動かない」を減らすために使います。

## コンテナとは（VMとの違い）

Docker が作る「ひとまとめの実行環境」を **コンテナ**と呼びます。

仮想マシン（VM）と比べると、次の違いが会話でよく効きます。

- VM: OS を丸ごと載せる。重めだが強く分離できる
- コンテナ: OS を共有しつつ、アプリの実行環境を分ける。軽くて速い

厳密さよりも「**軽くて再現しやすい実行箱**」という理解で十分です。

## イメージとコンテナの違い（超重要）

この2つは会話で頻出です。

- イメージ: コンテナの「設計図」や「完成品の型」
- コンテナ: イメージを実際に起動した「動いている実体」

関係は「イメージからコンテナを作る（起動する）」です。

## Dockerfileとは（イメージの作り方）

Dockerfile は **イメージを作るためのレシピ**です。

ざっくり言うと、次を順番に書きます。

- どの土台（ベースイメージ）を使うか
- どのファイルを入れるか
- どのコマンドで起動するか

## Docker Composeとは

Docker Compose は **複数のコンテナを、まとめて定義して、まとめて操作する仕組み**です。

アプリ開発では「Webアプリ」と「DB」のように、複数の要素を同時に動かすことが多いです。  
Compose は、その「同時に動かしたいもの一式」を `docker-compose.yml` に書いておけます。

## Docker Composeの用途（なぜ便利か）

Compose の便利さは、次の3つで説明できます。

- 依存関係ごと動かせる  
  Web アプリと DB などを、セットで起動できる
- チームで再現しやすい  
  「これを実行すれば同じ環境になる」を共有しやすい
- 起動と停止がシンプル  
  `up` と `down` で、まとめて扱える

## Docker Composeの例（Web + DB）

次は「Web（nginx）」と「DB（postgres）」をまとめて動かす最小例です。

```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

この例のポイントです。

- `services` に「一緒に動かしたいもの」を並べる
- `ports` で「ホスト:コンテナ」をつなぐ
- `volumes` でデータを残せるようにする（DB で特に大事）

## Docker Composeの基本コマンド（会話に出る順）

まずは次の5つだけで十分です。

```bash
# 起動（フォアグラウンド）
docker compose up

# 起動（バックグラウンド）
docker compose up -d

# 停止と削除（まとめて片付け）
docker compose down

# ログを追う
docker compose logs -f

# 起動中の一覧を見る
docker compose ps
```

余裕が出てきたら、これも便利です。

```bash
# コンテナの中でコマンドを実行する（例: web の中で sh）
docker compose exec web sh

# 単発コマンドを新しいコンテナで実行して片付ける
docker compose run --rm web nginx -v
```

## よく出る言葉（会話のための最小セット）

- Dockerfile: イメージを作るためのレシピ
- build: Dockerfile からイメージを作ること
- run: イメージからコンテナを起動すること
- registry: イメージを置いて共有する場所（例: Docker Hub）

## まずはこの3つだけ覚える（会話が楽になる）

- Docker は「環境ごと再現する道具」
- イメージは「設計図」、コンテナは「起動した実体」
- Compose は「複数コンテナをまとめて扱う道具」
