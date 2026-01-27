# 単体コンテナの流れ（Composeの前にここまで）

## この章でできるようになること

- 「単体のDocker操作」を一通り言葉で説明できる
- pullベースとbuildベースの2パターンを区別できる
- うまく動かないときの確認順がわかる

## まず全体の流れ（この順で考える）

1. どのイメージを使うか決める（pull する or build する）
2. コンテナを起動する（run）
3. 状態とログを見る（ps / logs）
4. 中に入って確認する（exec）
5. 止めて片付ける（stop / rm）

## パターンA: 既存イメージを pull して run

```bash
# 1) イメージを取得する
docker pull nginx:alpine

# 2) 起動する（名前を付け、ポートをつなぎ、バックグラウンドで動かす）
docker run --name my-nginx -p 8080:80 -d nginx:alpine

# 3) 状態を見る
docker ps

# 4) ログを見る
docker logs -f my-nginx

# 5) 止めて片付ける
docker stop my-nginx
docker rm my-nginx
```

## パターンB: Dockerfileから build して run

```bash
# 1) Dockerfile からイメージを作る
docker build -t my-app:dev .

# 2) 作ったイメージから起動する
docker run --name my-app -p 3000:3000 -d my-app:dev

# 3) ログと状態を見る
docker ps
docker logs -f my-app
```

## 永続化の最小イメージ（-v / volumes）

コンテナは「消すと中のデータも消える」前提です。

データを残したいときはボリュームやバインドマウントを使います。

```bash
# 何が起きるか: 手元の public/ をコンテナ内に読み取り専用で見せる
docker run --name my-nginx -p 8080:80 \
  -v "$(pwd)/public:/usr/share/nginx/html:ro" \
  -d nginx:alpine
```

## うまく動かないときの確認順（まずはこれだけ）

1. `docker ps`（そもそも動いているか）
2. `docker logs -f <name>`（何が起きているか）
3. `docker exec -it <name> sh`（中に入って確認する）
