# Firebase Hosting 自動デプロイ設定手順書

## 概要
HSPアフィリエイトページのGitHub Actions自動デプロイ設定手順です。

## 🎯 自動デプロイの仕組み
- **mainブランチプッシュ時**: 本番環境に自動デプロイ
- **プルリクエスト時**: プレビュー環境を自動生成

## 📋 必要な設定作業

### 1. GitHubリポジトリ作成
```bash
# 新規リポジトリ「hsp-affiliate-pages」を作成
# https://github.com/moriyama14t/hsp-affiliate-pages
```

### 2. Firebase Service Account作成とGitHubシークレット設定

#### Firebase側の設定
1. [Firebase Console](https://console.firebase.google.com/project/hsp-affiliate/settings/serviceaccounts/adminsdk) にアクセス
2. 「プロジェクト設定」→「サービスアカウント」
3. 「新しい秘密鍵の生成」をクリック
4. JSONファイルをダウンロード（⚠️ 安全に保管）

#### GitHubシークレット設定
1. GitHubリポジトリページ: `https://github.com/moriyama14t/hsp-affiliate-pages`
2. 「Settings」→「Secrets and variables」→「Actions」
3. 「New repository secret」をクリック
4. 以下のシークレットを追加：

**Name:** `FIREBASE_SERVICE_ACCOUNT_HSP_AFFILIATE`
**Value:** ダウンロードしたJSONファイルの**全内容**をコピー&ペースト
```json
{
  "type": "service_account",
  "project_id": "hsp-affiliate",
  "private_key_id": "...",
  "private_key": "...",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "..."
}
```

### 3. Service Account権限設定

Firebase Consoleで以下の権限を付与：
- ✅ **Firebase Hosting Admin** - Hostingファイルの管理
- ✅ **Service Account User** - App Engine デフォルトサービスアカウント用

### 4. 初回プッシュとテスト

```bash
# ローカルでコミット・プッシュ
git add .
git commit -m "feat: Firebase Hosting自動デプロイ設定完了"
git branch -M main
git remote add origin https://github.com/moriyama14t/hsp-affiliate-pages.git
git push -u origin main
```

## 🔄 動作確認

### 自動デプロイが成功すると...
1. **GitHub Actions**タブで緑色のチェックマーク
2. **自動デプロイ先**: https://hsp-affiliate.web.app
3. **プレビュー**: PRごとに一意のURLが生成

### トラブルシューティング

#### ❌ 「Permission denied」エラー
- Service Accountの権限不足
- Firebase Hosting Adminロールを追加

#### ❌ 「Service account key invalid」エラー  
- JSONキーの形式エラー
- 改行や文字化けがないか確認

#### ❌ ビルドエラー
- `npm run build`がローカルで成功するか確認
- `package.json`のスクリプト設定を確認

## 📈 成功後の運用フロー

### 日常的な更新
1. ローカルで変更を加える
2. `git push origin main` でプッシュ
3. 自動的に本番環境にデプロイ完了！

### 安全な変更管理
1. 新ブランチで作業: `git checkout -b feature/new-affiliate`
2. GitHub上でPull Request作成
3. プレビューURLで動作確認
4. 問題なければmainブランチにマージ → 自動本番デプロイ

## 🎊 完了！
これでCRMダッシュボードやFirebase Functionsと同じく、**プッシュするだけで自動反映**される仕組みが完成しました！