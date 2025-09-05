export default function KimochiPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      {/* ヘッダー */}
      <header className="p-4 bg-white shadow-sm">
        <a 
          href="/"
          className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
        >
          ← HSPChatAppに戻る
        </a>
      </header>

      {/* ヒーローセクション */}
      <section className="px-6 py-8 text-center">
        <div className="mb-6">
          <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full font-medium">
            HSPChatAppユーザーにおすすめ
          </span>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800 leading-tight">
          もう少し深く相談したい時に<br />
          <span className="text-orange-500">Kimochi</span>があります
        </h1>
        
        <p className="text-gray-600 leading-relaxed">
          HSPChatAppで日常的な相談をしているあなたに、<br />
          国家資格を持つ心理師による<br />
          本格的なカウンセリングサービスをご紹介
        </p>
      </section>

      {/* HSPChatAppとの比較セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            🌸 HSPChatApp + Kimochi で、より充実したサポート
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">日常の相談 → HSPChatApp</p>
                <p className="text-sm text-gray-600">ちょっとした悩みや感情の整理に</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">深い相談 → Kimochi</p>
                <p className="text-sm text-gray-600">人間関係や恋愛、仕事の本格的な悩みに</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kimochiの特徴セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-orange-600">
            Kimochiの特徴
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">国家資格を持つ心理師がサポート</p>
                <p className="text-sm text-gray-600">専門的な知識と経験を持ったプロが対応</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">初月2,980円からスタート</p>
                <p className="text-sm text-gray-600">お手頃価格でプロのカウンセリング</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">平日夜・土日祝も予約可能</p>
                <p className="text-sm text-gray-600">お仕事帰りや休日にゆっくり相談</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">オンラインで安心・便利</p>
                <p className="text-sm text-gray-600">自宅から気軽に本格カウンセリング</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応できる悩みセクション */}
      <section className="px-6 py-6">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">
            こんな悩みに専門的にサポート
          </h3>
          
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 text-center">
              💕 人間関係・恋愛の悩み
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              💼 仕事・キャリアの相談
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              🏠 家族関係・パートナーシップ
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              🌱 自分らしさ・人生設計
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="px-6 py-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            HSPChatAppでは解決できない深い悩みも<br />
            Kimochiなら専門家と一緒に解決できます
          </p>
          
          <a 
            href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YRHE" 
            rel="nofollow"
            target="_blank"
            className="inline-block w-full max-w-sm px-6 py-4 bg-orange-500 text-white font-bold rounded-xl text-lg shadow-lg hover:bg-orange-600 transition-colors"
          >
            Kimochiで相談を始める
          </a>
          <img 
            width="1" 
            height="1" 
            src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YRHE" 
            alt=""
            style={{ display: 'none', border: 0 }}
          />
          
          <p className="mt-3 text-xs text-gray-500">
            ※外部サイト（Kimochi公式サイト）に移動します<br />
            初月2,980円から利用可能
          </p>
        </div>
      </section>

      {/* 安心メッセージ */}
      <section className="px-6 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="text-center">
            <p className="text-sm text-blue-800">
              <span className="font-medium">🔒 プライバシー完全保護</span><br />
              HSPChatAppとKimochiは別々のサービスです。<br />
              どちらのサービスも個人情報を適切に管理しています。
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="px-6 py-8 text-center">
        <div className="text-xs text-gray-500 space-y-1">
          <p>HSPChatApp 運営チーム</p>
          <p>おすすめサービスのご紹介</p>
        </div>
      </footer>
    </main>
  );
}