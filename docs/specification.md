# 仕様書

## 全体構成

- **サイト生成**: MkDocs + Material for MkDocs
- **ソース**: `docs/` 配下の Markdown
- **ローカル実行**: Docker Compose（ホストを汚さない）
- **公開**: GitHub Pages（GitHub Actions で自動反映）

## ディレクトリ構成

- `mkdocs.yml`: ナビゲーション、テーマ、拡張などの設定
- `docs/`: 公開コンテンツ（Markdown）
  - `index.md`: トップ
  - `requirements.md`: 要件定義書
  - `specification.md`: 仕様書（本ページ）
  - `features.md`: 機能一覧（Mermaid のフロー図を含む）
  - `git-github/`: Git/GitHub 学習資料
    - `github-header.md`: GitHub の画面メニュー（ヘッダー/リポジトリタブ）の説明

## ローカル起動仕様

- **起動コマンド**: `docker compose up`
- **待受**: `http://localhost:8000`
- **ホットリロード**: `docs/` や `mkdocs.yml` の変更が即時反映される想定

## 公開（GitHub Pages）仕様

- **デプロイブランチ**: `gh-pages`
- **トリガー**: `main` ブランチへの push（または手動実行）
- **出力**: MkDocs の `site/` を Pages に配信

## 執筆ルール（最低限）

- 章の冒頭に「この章でできるようになること」を書く
- コマンド例は「何が起きるか」を 1 行で添える
- 用語は本文中で初出時に短く定義する
- 「手順」よりも「役割と意味」を優先する（非エンジニア向け）


