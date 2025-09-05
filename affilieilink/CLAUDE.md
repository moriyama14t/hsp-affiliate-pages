# CLAUDE.md - A8.netアフィリエイトリンク管理

このファイルは、アフィリエイトリンクディレクトリでコードを扱う際のClaude Code (claude.ai/code) への指針を提供します。

## ディレクトリ概要

**HSPプロジェクトアフィリエイトリンク集** は、メンタルヘルス関連サービスのA8.netアフィリエイトリンクを管理するディレクトリです。HSPChatAppユーザー向けの推奨サービスとして、収益化とユーザー支援を両立させることを目的としています。

## 収録サービスの詳細

### Awarefy（アウェアファイ）
- **サービスタイプ**: AI×心理学のメンタルヘルスアプリ
- **アフィリエイトID**: `45C669+EPVT6A+5CBW`
- **ターゲット層**: 
  - ストレスに悩むビジネスパーソン
  - メンタル投資に興味がある人
  - 自己理解を深めたい人
- **訴求ポイント**:
  - 「ストレスに負けないスキルが身につく」
  - 「心理学の知識で折れにくい自分へ」
  - 「書き続けるほど自分がわかる。変えられる。」

### Kimochi（キモチ）
- **サービスタイプ**: オンラインカウンセリング
- **アフィリエイトID**: `45C669+E0VLRM+5OI8`
- **ターゲット層**:
  - プロのカウンセリングを求める人
  - 人間関係・恋愛・仕事の悩みがある人
  - 初めてカウンセリングを受ける人
- **訴求ポイント**:
  - 「国家資格を持つ心理師がサポート」
  - 「初月2,980円からスタート」
  - 「平日夜/土日祝も予約可能」

## リンクタイプと使い分け

### バナー広告の選び方
```markdown
# 大型バナー（601x600、600x500）
- トップページやヘッダー部分に最適
- 視認性が高く、ブランド認知に効果的

# 中型バナー（300x250）
- サイドバーや記事中に配置
- 最もクリック率が高いサイズ

# 小型バナー（100x60、120x60）
- フッターやウィジェットエリア向け
- 邪魔にならない控えめな表示
```

### テキストリンクの活用
```markdown
# シンプルテキスト
- 記事内の自然な文脈で使用
- 例: 「【Awarefy】を試してみる」

# キャッチコピー付き
- 訴求力の高い文言でアピール
- 例: 「ストレスに負けないスキルが身につく【Awarefy】」

# 複数行テキスト
- より詳細な説明が必要な場合
- メルマガやランディングページに最適
```

## 実装ガイドライン

### HTMLへの組み込み
```html
<!-- 基本的な実装例 -->
<div class="affiliate-banner">
  <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+60H7L" rel="nofollow">
    <img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=250830657890&wid=001&eno=01&mid=s00000024926001010000&mc=1">
  </a>
  <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+60H7L" alt="">
</div>
```

### React/Next.jsでの実装
```tsx
// Awarefy バナーコンポーネントの例
export const AwarefyBanner = () => {
  return (
    <div className="affiliate-banner">
      <a 
        href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+60H7L" 
        rel="nofollow"
        target="_blank"
      >
        <img 
          src="https://www25.a8.net/svt/bgt?aid=250830657890&wid=001&eno=01&mid=s00000024926001010000&mc=1"
          alt="Awarefy - AIメンタルヘルスアプリ"
          width={300}
          height={250}
        />
      </a>
      <img 
        src="https://www18.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+60H7L" 
        alt=""
        width={1}
        height={1}
        style={{ display: 'none' }}
      />
    </div>
  );
};
```

## HSPプロジェクトとの統合

### 推奨配置場所
1. **HSPChatApp内**
   - 設定画面の「その他のサービス」セクション
   - チャット終了後の推奨画面
   - プレミアム機能の補完サービスとして

2. **hsp-app-crm内**
   - ユーザー分析ダッシュボードのサイドバー
   - レポート画面の関連リンクセクション

3. **hsp-affiliate-pages**
   - 専用のランディングページ
   - サービス比較ページ

### パフォーマンス最適化
```javascript
// 遅延読み込みの実装
const loadAffiliateBanner = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // バナーを読み込む
        const banner = entry.target;
        banner.innerHTML = affiliateHTML;
        observer.unobserve(banner);
      }
    });
  });
  
  document.querySelectorAll('.affiliate-placeholder').forEach(el => {
    observer.observe(el);
  });
};
```

## A8.net管理画面の活用

### スクリーンショット参照
- `screencapture-pub-a8-net-a8v2-asLinkAction-do-*.png`
  - 広告リンク作成画面のキャプチャ
  - リンクコード生成の手順確認用

- `screencapture-pub-a8-net-a8v2-media-linkAction-do-*.png`
  - メディア向けリンク管理画面
  - パフォーマンス確認用

### 重要な設定項目
1. **リンクコード取得**
   - 「広告リンク作成」から対象プログラムを選択
   - 素材タイプを選んでコード生成

2. **レポート確認**
   - インプレッション数
   - クリック数・クリック率
   - コンバージョン数・報酬額

## コンプライアンスと注意事項

### 必須事項
- **rel="nofollow"** 属性を必ず付与
- トラッキング用1x1ピクセル画像を削除しない
- アフィリエイトリンクであることを明示（推奨）

### 禁止事項
- リンクパラメータの改変
- 直リンクの使用（必ずA8.net経由）
- 虚偽・誇大な表現での訴求

### HSPへの配慮
- 押し付けがましくない自然な紹介
- ユーザーの選択を尊重する表現
- メンタルヘルスの重要性を適切に伝える

## 今後の拡張予定

### 追加予定サービス
- うららか相談室
- cotree（コトリー）
- メンタルヘルス関連書籍
- セルフケア商品

### 機能拡張
- A/Bテスト機能の実装
- クリック率最適化の自動化
- 収益レポートの可視化

## Claude Code 設定

### 作業時の注意
- アフィリエイトリンクの正確性を最優先
- ユーザー体験を損なわない実装
- 法的・倫理的観点からの適切性確認
- HSPユーザーへの配慮を忘れない

### 開発方針
- コンポーネント化による再利用性向上
- レスポンシブデザインの徹底
- パフォーマンスへの配慮
- アクセシビリティの確保