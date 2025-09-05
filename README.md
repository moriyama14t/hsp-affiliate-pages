# HSP Affiliate Pages

HSP (Highly Sensitive Person) 向けアフィリエイトページ

## 🌟 概要

このプロジェクトは、HSP（繊細さん）向けのおすすめサービスを紹介するアフィリエイトページです。

### 紹介サービス
- **Kimochi**: オンラインカウンセリングサービス
- **Awarefy**: AI メンタルパートナーアプリ

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS
- **ホスティング**: Firebase Hosting
- **デプロイ**: GitHub Actions (自動デプロイ)

## 🔗 本番URL

https://hsp-affiliate.web.app

## 📱 開発用コマンド

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 🎯 自動デプロイ

- **mainブランチ**: 本番環境に自動デプロイ
- **プルリクエスト**: プレビュー環境を自動生成

## ⚠️ 設定が必要な項目

GitHub Actions自動デプロイには以下の設定が必要です：

1. **Firebase Service Account**: `FIREBASE_SERVICE_ACCOUNT_HSP_AFFILIATE` をGitHub Secretsに設定
2. **詳細手順**: `DEPLOY_SETUP.md` を参照
