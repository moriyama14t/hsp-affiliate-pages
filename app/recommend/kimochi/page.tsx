export default function KimochiPage() {
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
          HSP専門のオンラインカウンセリング
        </h1>
        <p className="text-lg mb-8" style={{ color: 'var(--color-hsp-text)' }}>
          あなたの繊細さを理解する<br />専門カウンセラーが寄り添います
        </p>
      </section>

      {/* 特徴セクション */}
      <section className="px-6 py-8">
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-hsp-primary)' }}>
            Kimochiの特徴
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>HSPの特性を理解した専門カウンセラー</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>オンラインで自宅から相談可能</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>月額4,400円から始められるサブスクプラン</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="px-6 py-8 text-center">
        <a 
          href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YZ76" 
          rel="nofollow"
          className="inline-block px-8 py-4 text-white font-bold rounded-lg text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-hsp-primary)' }}
        >
          無料カウンセリングを始める
        </a>
        <img 
          {...{border: "0"} as any}
          width="1" 
          height="1" 
          src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YZ76" 
          alt=""
        />
        
        <p className="mt-4 text-sm" style={{ color: 'var(--color-hsp-text)' }}>
          ※外部サイトへ移動します
        </p>
      </section>

      {/* バナー広告セクション */}
      <section className="px-6 py-8 text-center">
        <a href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5ZEMP" rel="nofollow">
          <img 
            {...{border: "0"} as any}
            width="300" 
            height="250" 
            alt="Kimochiオンラインカウンセリング" 
            src="https://www27.a8.net/svt/bgt?aid=250830657848&wid=001&eno=01&mid=s00000026504001005000&mc=1"
          />
        </a>
        <img 
          {...{border: "0"} as any}
          width="1" 
          height="1" 
          src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5ZEMP" 
          alt=""
        />
      </section>

      {/* フッター */}
      <footer className="px-6 py-8 text-center text-sm" style={{ color: 'var(--color-hsp-text)' }}>
        <p>HSPサポートアプリ 運営チーム</p>
      </footer>
    </main>
  );
}