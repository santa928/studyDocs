# Gitの基礎（参考）

## この章でできるようになること

- 変更状況を把握できる（`status` / `diff`）
- 変更をコミットできる（`add` / `commit`）
- 履歴を読める（`log`）
- 間違った操作を戻せる（`restore` / `reset` の使い分けの入口）

> 注: このページは「もう少し詳しく知りたい人向けの参考」です。  
> 初学者（非エンジニア）の方は、まず [覚えておくコマンドと意味](commands.md) を読めば十分です。

## 最初にやる設定（1回だけ）

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

何が起きるか: 「誰がコミットしたか」の情報と、デフォルトブランチ名を設定します。

## リポジトリを作る / 取得する

### 新規作成（既存フォルダをGit管理）

```bash
git init
```

### GitHubから取得（クローン）

```bash
git clone <repo-url>
cd <repo-name>
```

## 変更を見る

```bash
git status
```

何が起きるか: 変更ファイル、ステージ状況、次にやるべきことのヒントが表示されます。

差分を見る（ステージ前）:

```bash
git diff
```

差分を見る（ステージ後）:

```bash
git diff --staged
```

## コミットする（基本形）

```bash
git add <file>
git commit -m "説明的なメッセージ"
```

ポイント:

- **コミットは小さく**: レビューと復元が楽になります
- **メッセージは何をしたか**: 例「READMEに起動手順を追加」

## 履歴を見る

```bash
git log --oneline --decorate --graph --all
```

## よく使う: .gitignore

Gitで管理したくないファイル（例: `node_modules/`, `.env`）は `.gitignore` に書きます。

例:

```bash
echo ".env" >> .gitignore
```

## 戻す（入口）

### ワークツリーの変更を捨てる（未ステージ）

```bash
git restore <file>
```

### ステージから外す（変更は残す）

```bash
git restore --staged <file>
```

### コミットを戻す（慎重に）

- **やり直したいが履歴は残したい**: `git revert` を検討（共有ブランチ向き）
- **ローカルでやり直したい**: `git reset` を検討（共有後は事故りやすい）


