export default function AwarefyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-hsp-orange)' }}>
      {/* ヘッダー */}
      <header className="p-4">
        <a href="#" className="text-sm" style={{ color: 'var(--color-hsp-text)' }}>
          ← アプリに戻る
        </a>
      </header>

      {/* ヒーローセクション */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-hsp-text)' }}>
          AIメンタルパートナー Awarefy
        </h1>
        <p className="text-lg mb-8" style={{ color: 'var(--color-hsp-text)' }}>
          毎日に寄りそい<br />気づきを増やす
        </p>
      </section>

      {/* 特徴セクション */}
      <section className="px-6 py-8">
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-hsp-green)' }}>
            Awarefyの特徴
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>認知行動療法をベースにしたセルフケア</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>感情の可視化とストレスケア機能</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>300種類以上の瞑想・睡眠ガイド</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>AI チャットで悩み相談</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="px-6 py-8 text-center">
        <a 
          href="https://www.awarefy.com/app"
          rel="nofollow"
          className="inline-block px-8 py-4 text-white font-bold rounded-lg text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-hsp-green)' }}
        >
          無料でダウンロード
        </a>
        
        <p className="mt-4 text-sm" style={{ color: 'var(--color-hsp-text)' }}>
          ※外部サイトへ移動します
        </p>
      </section>

      {/* フッター */}
      <footer className="px-6 py-8 text-center text-sm" style={{ color: 'var(--color-hsp-text)' }}>
        <p>HSPサポートアプリ 運営チーム</p>
      </footer>
    </main>
  );
}