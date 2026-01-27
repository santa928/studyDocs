# Docker Composeサンプル集

## この章でできるようになること

- `docker-compose.yml` の最小例を読める
- 1サービスと2サービスの違いを説明できる
- Composeでの起動・停止・ログ確認ができる

## サンプル1: 1サービス（nginx）

```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
```

最小ポイント:

- `services` の下に `web` という名前のサービスを作っている
- `ports` の `8080:80` は「ホスト8080 → コンテナ80」

## サンプル2: Web + DB（nginx + postgres）

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

ポイント（会話で効くところ）:

- `depends_on` は「起動順の依存」を表す（準備完了の保証ではない）
- `volumes` を使うと DB のデータを残しやすい

## よく使う操作（Compose版）

```bash
# 起動（バックグラウンド）
docker compose up -d

# 状態を見る
docker compose ps

# ログを見る
docker compose logs -f

# 片付ける
docker compose down
```
