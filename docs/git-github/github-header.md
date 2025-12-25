# GitHub のヘッダー（メニュー）とは

## この章でできるようになること

- GitHub の画面上部やリポジトリ上部にあるメニューを見て「何をする場所か」を説明できる
- 「どこで Issue を作る？」「どこで PR を見る？」の迷いが減る
- エンジニアとの会話で出る導線（Issue → PR → CI → Merge）を画面と結びつけて理解できる

!!! note
    GitHub のメニュー表示は **権限**、**リポジトリ設定**、**有効化している機能（Discussions/Wiki 等）**で変わります。  
    ここでは「よく見る代表例」を “役割” で整理します。

## 0. 「どれがどれ？」を番号で一致させる（おすすめ）

文章だけだと「どれがどれ？」になりやすいので、この章では **番号付きの図**で「画面上の場所」と「役割」を対応させます。

!!! tip
    あなたの GitHub 画面と見た目が違っても大丈夫です。  
    **同じ名前（例: Issues / Pull requests / Notifications）**を探す、で迷いが減ります。

## 1. GitHub 全体のヘッダー（github.com の上部）

GitHub を開いたとき、どのページでも上部に出やすいメニューです（UI は変わることがあります）。

### スクショで見る（番号付き）

<div class="img-overlay compact">
  <div class="img-overlay-canvas">
    <img src="../../assets/images/github-global-header.png" alt="GitHub 全体ヘッダー（スクリーンショット）">
    <span class="pin" style="left: 2.6%; top: 42%;">1</span>
    <span class="pin" style="left: 22%; top: 42%;">2</span>
    <span class="pin" style="left: 68%; top: 42%;">3</span>
    <span class="pin" style="left: 86.2%; top: 42%;">4</span>
    <span class="pin" style="left: 92.2%; top: 42%;">5</span>
    <span class="pin" style="left: 97.4%; top: 42%;">6</span>
  </div>
  <div class="caption">図1: GitHub 全体ヘッダー（ログイン前の例）。※番号位置は必要なら調整してください。</div>
</div>

| 番号 | 画面上の場所 | 役割（何をする？） |
| --- | --- | --- |
| 1 | GitHub ロゴ | GitHub のトップ（ホーム）へ戻る |
| 2 | グローバルナビ（Platform / Solutions …） | GitHub の機能やプラン情報へ移動（ログイン前に出やすい） |
| 3 | 検索（Search or jump to…） | リポジトリ/コード/Issue/PR を横断検索 |
| 4 | Sign in | ログイン |
| 5 | Sign up | アカウント作成 |
| 6 | Appearance settings | 表示テーマ（ダーク/ライトなど）を切り替える |

### 文章での補足（最小）

!!! note
    ログイン後のヘッダーは「Pull requests」「Issues」「Notifications」「プロフィール」などが出て **構成が変わる**ことがあります。

## 1.5. ログイン後によく見るメニュー（場所は環境で変わる）

ログイン後は、上部ヘッダーに次のようなメニューが出ることが多いです（場所や並びは変わります）。

- **Pull requests**: 自分が関わる PR（レビュー待ち/自分のPRなど）を一覧で見る
- **Issues**: 自分が関わる Issue を一覧で見る
- **Notifications**: メンション/レビュー依頼/CI 失敗などの通知を見る
- **New（＋）**: 新規作成（リポジトリ作成等）。環境により出ないこともある
- **プロフィール（アイコン）**: 設定、Organizations、Your repositories など自分周り

## 2. リポジトリのヘッダー（リポジトリ上部のタブ）

リポジトリを開いたときに出る「タブ群」です。チーム開発でよく使うのはこの領域です。

### スクショで見る（番号付き）

<div class="img-overlay compact">
  <div class="img-overlay-canvas">
    <img src="../../assets/images/github-repo-tabs.png" alt="GitHub リポジトリのタブ（スクリーンショット）">
    <span class="pin" style="left: 4.6%; top: 40%;">1</span>
    <span class="pin" style="left: 13.2%; top: 40%;">2</span>
    <span class="pin" style="left: 26.1%; top: 40%;">3</span>
    <span class="pin" style="left: 35.5%; top: 40%;">4</span>
    <span class="pin" style="left: 44.8%; top: 40%;">5</span>
  </div>
  <div class="caption">図2: リポジトリのタブ列（例）。※リポジトリによりタブは増減します。</div>
</div>

| 番号 | タブ | 役割（何をする？） |
| --- | --- | --- |
| 1 | Code | ファイル/ブランチ/README の入口 |
| 2 | Issues | タスク/バグ/相談をチケットとして管理 |
| 3 | Pull requests | 変更提案（差分）をレビューして取り込む |
| 4 | Actions | CI/CD（テストや自動化）の実行履歴を見る |
| 5 | Projects | Issue/PR をまとめて進捗ボードで管理 |

!!! note
    リポジトリによっては **Wiki / Security / Insights** など、ここに載っていないタブも表示されます（後ろの節で説明します）。

### Code

- **何の場所？**: ソースコード（ファイル）とブランチの入口
- **よくやること**:
  - どのブランチのコードか確認する（例: `main` か feature ブランチか）
  - README を読む、フォルダ構成を眺める

### Issues

- **何の場所？**: タスク/バグ/相談/質問を「チケット」として管理する場所
- **よくやること**:
  - “やること” を文章で残す（背景、完了条件、優先度）
  - 担当者（Assignees）やラベル（Labels）で整理する

### Pull requests

- **何の場所？**: 変更提案（差分）をレビューして取り込むための場所
- **よくやること**:
  - 変更内容の要約を読む（目的・影響範囲・確認観点）
  - レビュー（OK/指摘/質問）や議論をする
  - CI の結果を見て「安全に取り込めるか」を判断する

### Actions

- **何の場所？**: 自動化（CI/CD）が実行された履歴を確認する場所
- **よくやること**:
  - テストが落ちていないかを見る
  - デプロイが成功したかを見る（運用している場合）

### Projects

- **何の場所？**: Issue/PR をまとめて「進捗ボード（一覧/カンバン/スプリント）」として扱う場所
- **よくやること**:
  - チームの “今やってる/次やる/終わった” を可視化する
  - Issue/PR をステータスや担当、期限で並べる

!!! tip
    Projects は「Issue の上位の見える化」です。  
    Issue は “1つ1つのチケット”、Projects は “チケット群の進行管理” と捉えると混乱しにくいです。

### Security

- **何の場所？**: 脆弱性や依存関係の警告、セキュリティ関連の設定を見る場所
- **よくやること**:
  - 依存ライブラリの脆弱性アラートを確認する（運用している場合）

### Insights

- **何の場所？**: リポジトリの分析（コミット/PR の傾向、トラフィックなど）を見る場所
- **よくやること**:
  - 活動量や傾向をざっくり把握する（運用や振り返りの参考）

### Settings（権限がある場合）

- **何の場所？**: リポジトリの設定（権限、ブランチ保護、機能のON/OFF など）
- **注意**: 変更するとチーム全体に影響するので、基本は管理者が扱う

## 3. よくある導線（最小）

「どこを見ればいい？」が迷いやすいので、最小の流れだけ押さえます。

- **相談/タスクを起票**: `Issues`
- **変更提案をレビューして取り込む**: `Pull requests`
- **自動テストやチェックの結果を見る**: `Actions`（PR から辿ることも多い）
- **チケット群の進捗を見る**: `Projects`


