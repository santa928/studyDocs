# 覚えておくコマンドと意味（最小セット）

## この章でできるようになること

- よく出るコマンドの「意味」を説明できる（丸暗記しない）
- とくに **`add` と `commit` の違い**を言葉にできる
- 「いま何が起きているか」を `status` で確認する癖がつく

## まずはこの3つ（最重要）

### `git status`（いまの状態を確認）

```bash
git status
```

何が起きるか: 変更ファイル、ステージ状況、次にやることのヒントが出ます。

### `git add`（コミットに入れる変更を選ぶ）

```bash
git add <file>
```

何が起きるか: 変更を **ステージ**に載せます（「次のコミットに入れる」選別）。

### `git commit`（変更を履歴として確定）

```bash
git commit -m "メッセージ"
```

何が起きるか: ステージ上の変更を **コミット**として確定し、履歴に残します。

## add と commit の違い（会話用の言い方）

- **add**: 「次の提出物に入れるページを選んだ」
- **commit**: 「提出して、提出番号（履歴）を発行した」

add は「準備」、commit は「確定」です。

## 覚えると会話が通じるコマンド（頻出）

### `git diff`（差分を見る）

- ステージ前の差分:

```bash
git diff
```

- ステージ後の差分:

```bash
git diff --staged
```

### `git log`（履歴を見る）

```bash
git log --oneline --decorate --graph --all
```

## GitHubとセットで出てくるコマンド（最低限）

### `git clone`（リポジトリをコピーして持ってくる）

```bash
git clone <repo-url>
```

### `git pull`（リモートの更新を取り込む：fetch + merge）

```bash
git pull
```

注意: `pull` は内部的に「取りに行く（fetch）」と「取り込む（merge）」が一緒に起きます。

### `git push`（自分の履歴をリモートへ送る）

```bash
git push
```

## ブランチ関連（“概念がわかればOK”セット）

### `git branch`（ブランチ一覧）

```bash
git branch
```

### `git switch`（ブランチを切り替える / 作る）

```bash
git switch <branch>
git switch -c <new-branch>
```

### `git merge`（分岐を合流する）

```bash
git merge <branch>
```

## 困ったときの「戻す」2つだけ（入口）

### `git restore`（作業中の変更を戻す）

```bash
git restore <file>
```

### `git restore --staged`（ステージから外す：変更は残す）

```bash
git restore --staged <file>
```

## 最後に：迷ったら status

Git操作で不安になったら、まずこれです。

```bash
git status
```


