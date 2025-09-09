export default function KimochiPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      {/* PR表記 */}
      <div className="bg-gray-50 border-b border-gray-200 py-2">
        <p className="text-center text-xs text-gray-500">
          本ページにはプロモーションが含まれています
        </p>
      </div>
      
      {/* ヘッダー */}
      {/* <header className="p-4 bg-white shadow-sm">
        <a 
          href="/"
          className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
        >
          ← HSPChatAppに戻る
        </a>
      </header> */}

      {/* ヒーローセクション */}
      <section className="px-6 py-8 text-center">
        <div className="mb-6">
          <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full font-medium">
            HSPChatAppユーザーにおすすめ
          </span>
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-gray-800 leading-tight">
          毎日を頑張る<span className="text-orange-600">20〜40代女性</span>の<br />
          心のメンテナンスに<span className="text-orange-600">Kimochi</span>
        </h1>

        {/* 公式バナー300x250 */}
        <div className="mb-6">
          <a 
            href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5ZEMP" 
            rel="nofollow"
            className="inline-block"
          >
            <img 
              src="https://www27.a8.net/svt/bgt?aid=250830657848&wid=001&eno=01&mid=s00000026504001005000&mc=1" 
              alt="Kimochiオンラインカウンセリング"
              width="300" 
              height="250"
              className="rounded-lg shadow-md"
              style={{ border: 0 }}
            />
          </a>
          <img 
            width="1" 
            height="1" 
            src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5ZEMP" 
            alt=""
            style={{ display: 'none', border: 0 }}
          />
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          恋愛・仕事・人間関係・家庭の悩みを<br />
          <span className="font-bold text-orange-700">専門家と一緒に解決</span>しませんか？<br /><br />
          <a href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YJRM" rel="nofollow" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-shine">
            国内最大級のオンラインカウンセリングサービス【Kimochi】
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YJRM" alt="" style={{ display: 'none', border: 0 }}/>
        </p>
        
        <div className="bg-orange-100 rounded-lg p-4 text-center mt-6 border border-orange-200">
          <p className="text-sm text-orange-700 font-medium mb-2">
            🎓 全員が国家資格「<span className="font-bold">公認心理師</span>」保持者
          </p>
          <p className="text-xs text-orange-600">
            忙しい毎日の中でも<span className="font-bold">手軽に心のケア</span>ができます<br />
            ビデオ通話・チャット相談で<span className="font-bold">続けやすい</span>環境を提供
          </p>
        </div>
      </section>

      {/* 年代別相談内容セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            <span className="text-orange-600">🌸 あなたのライフステージに</span>合わせた相談
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-800"><span className="text-pink-600">20代〜30代の方</span></p>
                  <p className="text-sm text-gray-600">恋愛・婚活・職場の人間関係・将来のキャリアについて</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-800"><span className="text-orange-600">30代〜40代の方</span></p>
                  <p className="text-sm text-gray-600">パートナーシップ・子育て・家庭の悩み・ワークライフバランス</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-orange-50 rounded-lg p-3 text-center">
            <p className="text-sm text-orange-700">
              <span className="font-bold">「自分らしく生きるためのヒントがほしい」</span><br />
              そんな想いを持つ方々にKimochiが寄り添います
            </p>
          </div>
        </div>
      </section>

      {/* 公認心理師について詳細説明セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 rounded-xl p-6 shadow-sm border border-orange-100">
          <h2 className="text-xl font-bold mb-4 text-orange-800">
            🎓 すべてのカウンセラーが<span className="text-2xl">「公認心理師」</span>
          </h2>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>公認心理師とは？</strong><br />
              心理学の知識と技術を用いて心理相談を行う<span className="text-orange-600 font-medium">国家資格</span>です。
              厚生労働省が認定する唯一の心理職の国家資格で、高い専門性と倫理観を持つプロフェッショナルです。
            </p>
            <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
              💡 Kimochiなら、どのカウンセラーを選んでも国家資格保持者による専門的なサポートを受けられます
            </div>
          </div>
        </div>
      </section>

      {/* Kimochiの特徴セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-orange-600">
            <span className="text-2xl">心のメンテナンス</span>ができるKimochiの特徴
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800"><span className="font-bold text-orange-600">国家資格「公認心理師」</span>が全員サポート</p>
                <p className="text-sm text-gray-600">専門的な知識と経験を持ったプロが対応</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">顔出し不要・匿名OK</p>
                <p className="text-sm text-gray-600">本名不要、ビデオOFF、音声のみでも相談可能</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800"><span className="font-bold text-orange-600 text-lg">初月30%OFF</span>（2,980円～）</p>
                <p className="text-sm text-gray-600">お手頃価格でプロのカウンセリングを体験</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">平日夜・土日祝も予約可能</p>
                <p className="text-sm text-gray-600">お仕事帰りや休日にゆっくり相談</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">オンライン完結で手軽</p>
                <p className="text-sm text-gray-600">自宅から気軽に本格カウンセリング</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-orange-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">月額制で<span className="font-bold text-orange-600">心のメンテナンス習慣</span>を築ける</p>
                <p className="text-sm text-gray-600">都度払いより継続しやすい料金体系。毎日の生活の一部として心のケアを</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <a href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YJRM" rel="nofollow" className="inline-flex items-center gap-1 text-xs text-orange-700 font-medium hover:underline">
              → 国内最大級のオンラインカウンセリングサービス【Kimochi】
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YJRM" alt="" style={{ display: 'none', border: 0 }}/>
          </div>
        </div>
      </section>

      {/* 料金プラン詳細セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-orange-800 text-center">
            💰 詳しい料金プラン
          </h2>
          
          <div className="bg-white rounded-lg p-4 space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold text-gray-800">🎉 初月限定 <span className="text-orange-600 text-xl">30%OFF</span></p>
              <p className="text-sm text-orange-600">ととのびプラン：4,400円 → <span className="font-bold">2,980円</span></p>
              <p className="text-sm text-orange-600">のびのびプラン：9,980円 → <span className="font-bold">6,980円</span></p>
              <p className="text-sm text-orange-600">じっくりプラン：19,980円 → <span className="font-bold">13,800円</span></p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-bold text-gray-800">📅 選べる3つのプラン</p>
              <p className="text-sm text-gray-600">ととのびプラン：4,400円/月（1回/月）</p>
              <p className="text-sm text-gray-600">のびのびプラン：9,980円/月（2回/月）</p>
              <p className="text-sm text-gray-600">じっくりプラン：19,980円/月（4回/月）</p>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-200">
              <p className="text-xs text-orange-700">
                <span className="font-medium">💡 HSPの方へ</span><br />
                継続的な関係性を大切にする月額制だから<br />
                安心してじっくりと相談できます
              </p>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YRHE" 
                rel="nofollow" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-shine"
              >
                人間関係・恋愛・仕事などの心理相談を始める
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YRHE" alt="" style={{ display: 'none', border: 0 }}/>
            </div>
          </div>
        </div>
      </section>


      {/* 利用者の声セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-6 text-orange-800 text-center">
            💬 実際に利用されている方の声
          </h2>
          
          <div className="space-y-4">
            {/* 口コミ1 - 実際の声 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500">30代女性</span>
                <div className="ml-auto flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                「いつも本当にありがとうございます。先生に話を聞いてもらうことが、私にとってすごく大事なことだと感じています。」
              </p>
              <div className="mt-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
                💡 <span className="font-bold">専門家と話すことで気持ちが整理され、前向きになれる</span>と96%が回答
              </div>
            </div>

            {/* 口コミ2 - 実際の声 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500">20代女性</span>
                <div className="ml-auto flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                「今後のキャリアについての相談を親身になって聞いてくださりありがとうございます。先生とのメッセージを通して悩みがクリアになり楽になりました。」
              </p>
            </div>

            {/* 特徴ボックス - 通過率8%の厳しい審査 */}
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
              <p className="text-sm font-bold text-orange-800 mb-2">
                🏅 全員が公認心理師 + 通過率8%の厳しい審査
              </p>
              <p className="text-xs text-orange-700">
                Kimochiでは国家資格「公認心理師」の中でも、さらに通過率8%の厳しい審査をクリアしたカウンセラーのみが在籍。相談経験300回以上のベテランが対応します。
              </p>
            </div>
            
            {/* 実績データ */}
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
              <p className="text-sm font-bold text-orange-800 mb-2">
                🏆 確かな実績
              </p>
              <p className="text-xs text-orange-700">
                ユーザー満足度<span className="font-bold text-lg">96%</span>（公式サイト公表値）<br />
                ※指導医の監修のもと運営されています
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 利用の流れセクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            📋 Kimochiの始め方（4ステップ）
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">無料会員登録</p>
                <p className="text-sm text-gray-600">メールアドレスで簡単登録（本名不要）</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">カウンセラー選択</p>
                <p className="text-sm text-gray-600">プロフィールを見て相談したいカウンセラーを選択</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">日時を予約</p>
                <p className="text-sm text-gray-600">空いている日時から都合の良い時間を予約</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">カウンセリング開始</p>
                <p className="text-sm text-gray-600">ビデオ・音声・チャットからお好みの方法で相談</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 p-4 rounded-lg text-center">
            <p className="text-sm text-orange-700">
              <span className="font-medium">🕐 所要時間：約10分で開始可能</span><br />
              すぐに相談したい時でも、当日予約に対応している場合があります
            </p>
          </div>
        </div>
      </section>

      {/* ユーザー評価・レビューセクション */}
      <section className="px-6 py-6">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg border-2 border-orange-200">
          <h2 className="text-xl font-bold mb-6 text-orange-800 text-center">
            🏆 <span className="text-2xl">なぜ選ばれ続けるのか</span>
          </h2>
          
          {/* 主要な理由を大きく強調 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-500">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">🏅 96%</p>
                <p className="text-lg font-bold text-gray-800">満足度</p>
                <p className="text-sm text-orange-700 font-medium">「気持ちが整理され前向きに」</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 mb-2">🎓 100%</p>
                <p className="text-lg font-bold text-gray-800">公認心理師</p>
                <p className="text-sm text-blue-700 font-medium">国家資格保持者のみが対応</p>
              </div>
            </div>
          </div>
          
          {/* 価格インパクト */}
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-4 mb-6 border-2 border-red-200">
            <div className="text-center">
              <p className="text-sm text-red-700 font-bold mb-2">通常のカウンセリングは<span className="text-lg">1万円以上</span>が相場ですが...</p>
              <p className="text-2xl font-bold text-orange-600">初月は <span className="text-3xl">2,980円</span>から！</p>
              <p className="text-lg font-bold text-red-600">プロのカウンセリングが<span className="text-xl">手軽で続けやすい</span></p>
            </div>
          </div>

          {/* 実際の利用者の声を大きく表示 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-center text-orange-800 mb-4">
              💬 <span className="text-xl">実際の利用者の声</span>
            </h3>
            
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-pink-400">
              <p className="text-sm font-medium text-gray-800 leading-relaxed mb-2">
                「<span className="font-bold text-pink-600">深い感情レベルまで理解してもらえる</span>カウンセリングを受けているように感じます」
              </p>
              <p className="text-sm text-gray-600 font-medium">- H.M.さん（20代後半女性）</p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-400">
              <p className="text-sm font-medium text-gray-800 leading-relaxed mb-2">
                「<span className="font-bold text-blue-600">キャリアに関する相談を受けて、悩みが明確になり</span>助かりました」
              </p>
              <p className="text-sm text-gray-600 font-medium">- T.K.さん（30代前半男性）</p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-400">
              <p className="text-sm font-medium text-gray-800 leading-relaxed mb-2">
                「長年抱えていた個人的な葛藤について話した後、<span className="font-bold text-green-600">認められたと感じました</span>」
              </p>
              <p className="text-sm text-gray-600 font-medium">- Y.K.さん（30代後半女性）</p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <a 
              href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YRHE" 
              rel="nofollow"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-base hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 btn-shine"
            >
              【お申込みはこちら】高評価のKimochiを今すぐ試す
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YRHE" alt="" style={{ display: 'none', border: 0 }}/>
          </div>
        </div>
      </section>



      {/* CTAセクション */}
      <section className="px-6 py-8">
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 mb-6 border border-orange-200">
            <p className="text-sm text-orange-800 font-bold mb-2">
              🌟 深い悩みを専門家に相談しよう
            </p>
            <p className="text-xs text-orange-700">
              HSPChatAppでは解決できない深い悩みも<br />
              Kimochiなら専門家と一緒に解決できます
            </p>
          </div>
          
          <a 
            href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YRHE" 
            rel="nofollow"
            className="inline-flex items-center justify-center gap-2 w-full max-w-sm px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold rounded-full text-lg shadow-xl hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 transition-all duration-300 transform hover:-translate-y-1 animate-bounce btn-shine"
          >
            Kimochiで相談を始める
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
            初月30%OFF 2,980円から<span className="font-bold">手軽で続けやすい</span>心のメンテナンスを
          </p>
        </div>
      </section>

      {/* SNS活用推奨セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 rounded-xl p-6 shadow-sm border border-orange-100">
          <h2 className="text-lg font-bold mb-4 text-orange-800 text-center">
            📲 SNSでもKimochiを検索！
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-3">
              最近はGoogle検索だけでなく、<span className="font-bold text-orange-700">Instagram・TikTok</span>でも情報収集する方が増えています！<br />
              <span className="font-bold text-orange-600">オンラインだから手軽で続けやすい</span>心のケアについて多くの体験談を見ることができます。
            </p>
            <div className="bg-orange-100 p-3 rounded-lg">
              <p className="text-xs text-orange-700">
                💡 <span className="font-medium">ヒント</span><br />
                #Kimochi #オンラインカウンセリング #公認心理師 でたくさんの体験談が見つかります
              </p>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://px.a8.net/svt/ejp?a8mat=45C669+E0VLRM+5OI8+5YZ76" 
                rel="nofollow" 
                className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-shine"
              >
                【Kimochi】を詳しく見る
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45C669+E0VLRM+5OI8+5YZ76" alt="" style={{ display: 'none', border: 0 }}/>
            </div>
          </div>
        </div>
      </section>


      {/* 安心メッセージ */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="text-center">
            <p className="text-sm text-orange-800">
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