# Docker / Compose チートシート（会話用）

## Docker（単体）の基本コマンド

```bash
# イメージを取得する
docker pull nginx:alpine

# Dockerfileからイメージを作る
docker build -t my-app:dev .

# コンテナを起動する
docker run --name my-app -p 8080:80 -d nginx:alpine

# 起動中の一覧
docker ps

# ログを見る
docker logs -f my-app

# コンテナの中でコマンドを実行する
docker exec -it my-app sh

# 停止する
docker stop my-app

# 削除する
docker rm my-app

# イメージ一覧
docker images
```

## Compose（複数）の基本コマンド

```bash
# まとめて起動する
docker compose up -d

# 状態を見る
docker compose ps

# ログを見る
docker compose logs -f

# サービス内でコマンドを実行する
docker compose exec web sh

# 単発コマンドを実行する
docker compose run --rm web nginx -v

# まとめて片付ける
docker compose down
```

## 困ったときの確認順（まずはこれだけ）

1. `ps`（動いているか）
2. `logs`（何が起きているか）
3. `exec`（中に入って確認する）
