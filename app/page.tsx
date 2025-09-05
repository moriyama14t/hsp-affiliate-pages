export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-hsp-orange)' }}>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-hsp-text)' }}>
          HSPの方へおすすめサービス
        </h1>
        <p className="mb-8" style={{ color: 'var(--color-hsp-text)' }}>
          アプリ内からアクセスしてください
        </p>
        <div className="space-y-4">
          <a 
            href="/recommend/kimochi/" 
            className="block px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Kimochi - オンラインカウンセリング
          </a>
          <a 
            href="/recommend/awarefy/" 
            className="block px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Awarefy - AIメンタルパートナー
          </a>
        </div>
      </div>
    </main>
  );
}