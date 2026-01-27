# Docker（入口）

## この章でできるようになること

- Docker が何を解決する道具かを説明できる
- Image / Container / Dockerfile の関係を言葉でつなげられる
- 単体コンテナの流れ（build → run → logs）を説明できる
- Docker Compose を「後半戦の道具」として位置づけられる

## まず読む（おすすめ順）

1. [Dockerとは](what-is-docker.md)
2. [ImageとContainerの違い（超重要）](image-vs-container.md)
3. [Dockerfileの基本（読めるようになる）](dockerfile-basics.md)
4. [単体コンテナの流れ（Composeの前にここまで）](single-container-workflow.md)
5. [Dockerfileサンプル集](dockerfile-samples.md)
6. [Docker Compose入門（後半戦）](compose-intro.md)
7. [Docker Composeサンプル集](compose-samples.md)
8. [Docker / Compose チートシート（会話用）](cheatsheet.md)

## 最短まとめ（3行）

- Docker は「動かすための環境ごと再現する道具」
- Image は型、Container は起動した実体
- Dockerfile で型を作り、Compose は複数連携の後半戦

## いまはこの理解で十分（超短縮版）

- Docker: 環境ごと再現する仕組み（詳しくは[Dockerとは](what-is-docker.md)）
- Image / Container: 設計図と実体（詳しくは[ImageとContainerの違い](image-vs-container.md)）
- Dockerfile: Imageを作るレシピ（詳しくは[Dockerfileの基本](dockerfile-basics.md)）
- Compose: 複数をまとめて扱う道具（詳しくは[Compose入門](compose-intro.md)）
