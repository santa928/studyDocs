# Dockerfileの基本（読めるようになる）

## この章でできるようになること

- Dockerfile が「何のためのファイルか」を説明できる
- 最小の Dockerfile を読んで、何をしているか言葉にできる
- `docker build` と `docker run` のつながりがわかる

## Dockerfileとは

Dockerfile は **イメージを作るためのレシピ**です。

「どの土台を使い、何を入れ、どう起動するか」を順番に書きます。

## 最小例（静的サイトを配信する）

```dockerfile
FROM nginx:alpine

COPY ./public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

読むポイントは次の4つです。

- `FROM`: 土台にするイメージ
- `COPY`: コンテナの中にファイルを入れる
- `EXPOSE`: コンテナ側の「待ち受けポート」を示す（公開そのものではない）
- `CMD`: 起動時に実行するコマンド

## build → run の最小ループ

Dockerfile を書いたら、次の流れで動かします。

```bash
# 1) イメージを作る（build）
# 何が起きるか: Dockerfile から実行用の型（イメージ）を作る
docker build -t my-static-site:dev .

# 2) コンテナを起動する（run）
# 何が起きるか: 作ったイメージから実体（コンテナ）を起動する
docker run --name my-static-site -p 8080:80 -d my-static-site:dev

# 3) ログや状態を見る
# 何が起きるか: 動いているか確認する
docker ps
docker logs -f my-static-site
```

## タグ（`:dev` など）の意味

`my-static-site:dev` の `:dev` はタグです。

- 名前だけだと `:latest` 扱いになることが多い
- `:dev` / `:stg` / `:prod` のように分けると会話が楽になります
