# Dockerfileサンプル集

## この章でできるようになること

- よくあるDockerfileの型を3パターン見て、読み方がわかる
- `FROM / COPY / RUN / CMD` の役割をサンプルで追える

## サンプル1: Node.js（開発向け最小）

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
```

読むポイント（最小）:

- 依存は `package*.json` を先にコピーしてから `npm ci`
- その後に全体を `COPY . .` する
- `CMD` は「起動時に何を走らせるか」

## サンプル2: Python（開発向け最小）

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000
CMD ["python", "app.py"]
```

読むポイント（最小）:

- `requirements.txt` を先に入れて依存を解決
- `--no-cache-dir` はイメージを重くしにくい

## サンプル3: 静的サイト（nginxで配信）

```dockerfile
FROM nginx:alpine

COPY ./public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

読むポイント（最小）:

- `public/` の中身を nginx の配信ディレクトリへ置く
- `daemon off;` はフォアグラウンドで動かすため
