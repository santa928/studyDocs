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
  - `assets/images/`: スクリーンショットなどの画像置き場
  - `stylesheets/`: 追加 CSS（スクショ上への番号オーバーレイ等）

## ローカル起動仕様

- **起動コマンド**: `docker compose up`
- **待受**: `http://localhost:8000`
- **ホットリロード**: `docs/` の変更は即時反映される想定
  - `mkdocs.yml` の変更（例: `extra_css` / `nav`）は **再起動が必要**になることがある

## UI スクリーンショット（番号オーバーレイ）仕様

- **目的**: 「GitHub のヘッダー解説が実画面のどこか」をスクショ上で一意に示す
- **方式**: Markdown 内の HTML + CSS で、画像上に番号（ピン）を絶対配置する
  - CSS: `docs/stylesheets/overlays-v2.css`
  - MkDocs 設定: `mkdocs.yml` の `extra_css` に読み込みを追加
- **画像の置き場**: `docs/assets/images/`
  - `github-global-header.png`（GitHub 全体ヘッダー）
  - `github-global-header-logged-in.png`（GitHub 全体ヘッダー：ログイン後の例）
  - `github-repo-tabs.png`（リポジトリのタブ列）
- **位置調整**: `docs/git-github/github-header.md` 内の `left/top`（%）を編集して合わせる

## 公開（GitHub Pages）仕様

- **デプロイブランチ**: `gh-pages`
- **トリガー**: `main` ブランチへの push（または手動実行）
- **出力**: MkDocs の `site/` を Pages に配信

## 執筆ルール（最低限）

- 章の冒頭に「この章でできるようになること」を書く
- コマンド例は「何が起きるか」を 1 行で添える
- 用語は本文中で初出時に短く定義する
- 「手順」よりも「役割と意味」を優先する（非エンジニア向け）


