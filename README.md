# studyDocs

勉強会資料を **Markdown** で管理し、**GitHub Pages** に公開するためのリポジトリです。  
非エンジニアがエンジニアと対等に会話できるレベルまで理解を引き上げることを狙っています。

## 公開サイト

- **GitHub Pages**: `https://santa928.github.io/studyDocs/`

## できること

- `docs/` 配下の Markdown をサイト化（MkDocs + Material）
- Docker Compose でローカルプレビュー（ホストを汚さない）
- GitHub Actions で GitHub Pages へ自動デプロイ

## ローカル起動（Docker Compose）

```bash
docker compose up
```

起動後にブラウザで `http://localhost:8000` を開きます。

## 公開（GitHub Pages）

1. GitHub のリポジトリ設定で Pages を有効化  
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` / `/(root)`  
   （※ Actions が `gh-pages` を更新します）
2. `main` へ push すると自動でデプロイされます（`.github/workflows/deploy-mkdocs.yml`）

## コンテンツ

- 入口: `docs/index.md`
- Git/GitHub 初学者向け:
  - `docs/git-github/what-is-git.md`
  - `docs/git-github/what-is-github.md`
  - `docs/git-github/commands.md`
  - `docs/git-github/glossary.md`

