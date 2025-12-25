# CONTRIBUTING（運営者・作成者向け）

このリポジトリは「学習者が読むページ」と「運営者が更新する手順」を分けます。  
学習者向けの本文（`docs/git-github/` 等）には **リポジトリ更新手順を書かない**方針です。

## ローカルプレビュー（Docker Compose）

```bash
cd /Users/santa/Desktop/studyDocs
docker compose up
```

- ブラウザ: `http://localhost:8000/studyDocs/`
- `mkdocs.yml` を変更した場合は、再起動が必要なことがあります:

```bash
docker compose restart docs
```

## スクショ＋番号ピン（オーバーレイ）を更新する

### 画像の置き場所

- `docs/assets/images/`
  - `github-global-header.png`（ログイン前の例）
  - `github-repo-tabs.png`（リポジトリタブの例）

### ピン位置の調整

- 対象: `docs/git-github/github-header.md`
- `style="left: XX%; top: YY%;"` を調整します（%は画像左上基準）

### CSS

- `docs/stylesheets/overlays-v2.css`
- `mkdocs.yml` の `extra_css` で読み込みます


