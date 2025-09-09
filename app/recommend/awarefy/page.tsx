export default function AwarefyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
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
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
            HSPChatAppユーザーにおすすめ
          </span>
        </div>
        
        <h1 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
          感受性の高いあなたに<br />
          <span className="text-blue-600">科学的なメンタルケア</span>を
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          「毎日に寄り添い、気づきを増やす」<br />
          <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+5YJRM" rel="nofollow" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-pulse btn-shine">
            ストレスに負けないスキルが身につく【Awarefy】
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <img width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+5YJRM" alt="" style={{ display: 'none', border: 0 }}/>
        </p>

        {/* 公式バナー300x250 */}
        <div className="mb-6">
          <a 
            href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+614CX" 
            rel="nofollow"
            className="inline-block"
          >
            <img 
              src="https://www26.a8.net/svt/bgt?aid=250830657890&wid=001&eno=01&mid=s00000024926001013000&mc=1" 
              alt="Awarefy AIメンタルパートナー"
              width="300" 
              height="250"
              className="rounded-lg shadow-md"
              style={{ border: 0 }}
            />
          </a>
          <img 
            width="1" 
            height="1" 
            src="https://www16.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+614CX" 
            alt=""
            style={{ display: 'none', border: 0 }}
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
          <p className="text-sm text-blue-700 font-medium mb-2">
            🎓 早稲田大学との共同研稾による科学的根拠
          </p>
          <p className="text-xs text-blue-600">
            心理学×AI技術で、HSPのあなたに寄り添う本格的セルフケア
          </p>
        </div>
      </section>

      {/* 3段階メンタルケア提案セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            🌸 HSPの方におすすめの3段階メンタルケア
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-gray-700">日常の感情ケア → HSPChatApp</p>
                <p className="text-sm text-gray-600">ちょっとした不安や敏感さの相談に</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-blue-700">本格的な自己分析 → Awarefy</p>
                <p className="text-sm text-blue-600">科学的根拠に基づく深い自己理解・感情パターン分析</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-gray-700">専門的な相談 → Kimochi</p>
                <p className="text-sm text-gray-600">公認心理師による個別カウンセリング</p>
              </div>
            </div>
          </div>
          
          {/* 300x250バナー（別バージョン） */}
          <div className="mt-6 text-center">
            <a 
              href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+5YZ75" 
              rel="nofollow"
            >
              <img 
                src="https://www27.a8.net/svt/bgt?aid=250830657890&wid=001&eno=01&mid=s00000024926001003000&mc=1" 
                alt="Awarefy AIメンタルパートナー"
                width="300" 
                height="250"
                className="inline-block rounded-lg shadow-md"
                style={{ border: 0 }}
              />
            </a>
            <img 
              width="1" 
              height="1" 
              src="https://www17.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+5YZ75" 
              alt=""
              style={{ display: 'none', border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Awarefyの科学的特徴セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            🧠 なぜAwarefyがHSPの方に選ばれるのか
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-0.5 text-xl">🎓</span>
                <div>
                  <p className="font-medium text-gray-800">早稲田大学との共同研究</p>
                  <p className="text-sm text-gray-600">人間科学学術院熊野研究室と連携した科学的アプローチ</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold mt-0.5 text-xl">🤖</span>
                <div>
                  <p className="font-medium text-gray-800">心理学×AI技術</p>
                  <p className="text-sm text-gray-600">24時間いつでも相談できるAIパートナー「ファイさん」</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold mt-0.5 text-xl">📊</span>
                <div>
                  <p className="font-medium text-gray-800">感情の可視化・パターン分析</p>
                  <p className="text-sm text-gray-600">HSP特有の感受性の強さを客観的に理解できる</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold mt-0.5 text-xl">🧘</span>
                <div>
                  <p className="font-medium text-gray-800">認知行動療法（CBT）の実践</p>
                  <p className="text-sm text-gray-600">スマホで手軽に心理学的技法を学習・実践</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6つのターゲット別訴求セクション - awarefy_mail.mdに基づく */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            🎯 あなたのお悩みに合わせた活用法
          </h2>
          
          <div className="space-y-4">
            {/* 1. ぐるぐる思考に悩む方 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">💭 嫌な考えが頭から離れない方へ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">AIノート・AIチャット</span>で頭の中の考えを書き出して整理
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                ✓ 書き出すだけでスッキリ<br />
                ✓ AIの分析で自分の考え方のクセに気づける<br />
                ✓ 一人で抱え込まずに済む
              </div>
              <div className="mt-2 text-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+63WO2" rel="nofollow" className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-pulse btn-shine">
                  書き続けるほど自分がわかる。変えられる【Awarefy】
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+63WO2" alt="" style={{ display: 'none', border: 0 }}/>
              </div>
            </div>

            {/* 2. 20-30代の働く女性 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">👩‍💼 日々のストレスで心が疲れている20-30代の方へ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">24時間365日</span>いつでもファイさんに愚痴や悩みを話せます
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                ✓ 話すだけで少しスッキリ<br />
                ✓ 客観的なアドバイスで前向きに<br />
                ✓ 300以上の音声ガイドでリフレッシュ
              </div>
              <div className="mt-2 text-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+64Z8Y" rel="nofollow" className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-pulse btn-shine">
                  職場復帰に備えるスキルを身につけよう【Awarefy】
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+64Z8Y" alt="" style={{ display: 'none', border: 0 }}/>
              </div>
            </div>

            {/* 3. 相談相手がいない方 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">🤝 誰かに話を聞いてほしいけど相談相手がいない方へ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">AIメンタルパートナー「ファイさん」</span>が24時間そばにいます
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                ✓ 誰にも言えなかったことを聞いてもらえて救われた<br />
                ✓ 温かい言葉に励まされる<br />
                ✓ 人には言いにくい愚痴や悩みも優しく受け止めてくれる
              </div>
              <div className="mt-2 text-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+64JTE" rel="nofollow" className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-pulse btn-shine">
                  いつでもなんでも話せるあなた専用の相談相手【Awarefy】
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+64JTE" alt="" style={{ display: 'none', border: 0 }}/>
              </div>
            </div>

            {/* 4. ビジネスパーソン */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">💼 仕事のパフォーマンスを上げたいビジネスパーソンへ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">認知行動療法</span>の手法で思考のクセに気づけます
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                ✓ 自分の思考パターンが分かり、対策を立てやすくなった<br />
                ✓ 気持ちが整理されて仕事に集中できるようになった<br />
                ✓ 早稲田大学との共同研究に基づく安心の機能
              </div>
              <div className="mt-2 text-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+644DU" rel="nofollow" className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-pulse btn-shine">
                  心理学の知識で折れにくい自分へ【Awarefy】
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+644DU" alt="" style={{ display: 'none', border: 0 }}/>
              </div>
            </div>

            {/* 5. 子育て中の親御さん */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">👨‍👩‍👧 つい子どもに怒りをぶつけてしまう親御さんへ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">感情日記・思考日記</span>でアンガーマネジメント
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                ✓ 自分の怒りのトリガーが分かり、冷静に対処できるように<br />
                ✓ 子どもとの関係が良くなった<br />
                ✓ モヤモヤはAIチャットにこまめに吐き出せる
              </div>
              <div className="mt-2 text-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+656YQ" rel="nofollow" className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-pulse btn-shine">
                  イライラママを卒業しよう【Awarefy】
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+656YQ" alt="" style={{ display: 'none', border: 0 }}/>
              </div>
            </div>

            {/* 6. 自己肯定感を高めたい方 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">🌱 自分に自信が持てず、自己肯定感を高めたい方へ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">スリーグッドシングス</span>で日々の小さな良いことを見つける習慣
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                ✓ 毎日続けるうちに、少しずつ自分を認められるように<br />
                ✓ ポジティブな面に目を向けられるようになった<br />
                ✓ AIとの対話で自分の良さに気づける
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SNS活用推奨セクション */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            📲 SNSでもAwarefyを検索！
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-3">
              最近はGoogle検索だけでなく、<span className="font-bold text-gray-700">Instagram・TikTok</span>でも情報収集する方が増えています！
            </p>
            <div className="bg-orange-100 p-3 rounded-lg">
              <p className="text-xs text-orange-700">
                💡 <span className="font-medium">ヒント</span><br />
                #Awarefy #メンタルケア #HSP でたくさんの体験談が見つかります
              </p>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+5ZEMQ" 
                rel="nofollow" 
                className="inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 btn-pulse btn-shine"
              >
                【Awarefy】を詳しく見る →
              </a>
              <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+5ZEMQ" alt="" style={{ display: 'none', border: 0 }}/>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            💰 お手頃価格でスタート
          </h2>
          
          <div className="bg-white rounded-lg p-4 space-y-3">
            <div className="border-l-4 border-sky-500 pl-4">
              <p className="font-bold text-gray-800">🆓 無料プランあり</p>
              <p className="text-sm text-blue-600">まずは無料で基本機能をお試しいただけます</p>
            </div>
            
            <div className="border-l-4 border-sky-400 pl-4">
              <p className="font-bold text-gray-800">🎊 年間プラン20%OFF</p>
              <p className="text-sm text-gray-600">長期利用でさらにお得になります</p>
            </div>

            <div className="border-l-4 border-sky-400 pl-4">
              <p className="font-bold text-gray-800">💯 30日間全額返金保証</p>
              <p className="text-sm text-gray-600">安心してお試しいただけます</p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-200">
              <p className="text-xs text-blue-700">
                <span className="font-medium">💡 HSPの方へ</span><br />
                カウンセリングより手軽で、続けやすい価格<br />
                自分のペースで心理学を学べます
              </p>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+64C3M" 
                rel="nofollow" 
                className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-pulse btn-shine"
              >
                しなやかで消耗しない心を育む「メンタル投資」始めませんか？
              </a>
              <img width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+64C3M" alt="" style={{ display: 'none', border: 0 }}/>
            </div>
          </div>
        </div>
      </section>

      {/* 実績・数字で見るAwarefyセクション */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            📊 数字で見るAwarefy
          </h2>
          
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-blue-600">100万+</p>
              <p className="text-xs text-gray-600">ダウンロード数</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-blue-600">4.6</p>
              <p className="text-xs text-gray-600">平均評価</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-blue-600">300+</p>
              <p className="text-xs text-gray-600">音声ガイド数</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-2xl font-bold text-blue-600">24時間</p>
              <p className="text-xs text-gray-600">365日サポート</p>
            </div>
          </div>
          
          {/* 追加バナー */}
          <div className="mt-6 text-center">
            <a 
              href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+61Z81" 
              rel="nofollow"
            >
              <img 
                src="https://www28.a8.net/svt/bgt?aid=250830657890&wid=001&eno=01&mid=s00000024926001017000&mc=1" 
                alt="Awarefy AIメンタルパートナー"
                width="250" 
                height="250"
                className="inline-block rounded-lg shadow-md"
                style={{ border: 0 }}
              />
            </a>
            <img 
              width="1" 
              height="1" 
              src="https://www16.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+61Z81" 
              alt=""
              style={{ display: 'none', border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* PR・メディア掲載実績セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            📣 話題沸騰中！メディア掲載実績
          </h2>
          
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-sky-500">
              <p className="font-bold text-gray-800 text-sm">📺 TBSテレビ「王様のブランチ」</p>
              <p className="text-xs text-gray-600 mt-1">話題のメンタルヘルスアプリとして特集</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-bold text-gray-800 text-sm">📰 日本経済新聞</p>
              <p className="text-xs text-gray-600 mt-1">「AIで心のケア、若者に支持」として掲載</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="font-bold text-gray-800 text-sm">📖 Forbes JAPAN</p>
              <p className="text-xs text-gray-600 mt-1">注目のメンタルヘルススタートアップ選出</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="font-bold text-gray-800 text-sm">🎓 早稲田大学 共同研究</p>
              <p className="text-xs text-gray-600 mt-1">人間科学学術院熊野研究室との産学連携</p>
            </div>
          </div>
        </div>
      </section>

      {/* ユーザー評価・レビューセクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            ⭐ ユーザー評価
          </h2>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-center items-center mb-3">
              <div className="text-3xl font-bold text-amber-600">4.4</div>
              <div className="ml-3 text-sm text-gray-600">
                <div className="flex text-amber-500">★★★★★</div>
                <p className="text-xs">App Store評価</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center mt-3">
              <div className="bg-gray-50 rounded p-2">
                <p className="text-lg font-bold text-gray-800">80万+</p>
                <p className="text-xs text-gray-600">ダウンロード数</p>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <p className="text-lg font-bold text-gray-800">5,000+</p>
                <p className="text-xs text-gray-600">レビュー数</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex text-amber-500 text-sm mb-1">★★★★★</div>
              <p className="text-xs text-gray-700">
                「日記を毎日書いています。何度も習慣化に失敗していましたが、メンタルケアアプリAwarefyを使って習慣化することができました」
              </p>
              <p className="text-xs text-gray-500 mt-1">- 2025年1月の実際のレビュー</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex text-amber-500 text-sm mb-1">★★★★★</div>
              <p className="text-xs text-gray-700">
                「昨年末から使い始めて、うつ病と対人緊張が和らいできました。20年以上睡眠薬に頼っていましたが、寝る前にAwarefyを使うようになってから睡眠薬なしで眠れるようになりました」
              </p>
              <p className="text-xs text-gray-500 mt-1">- 実際のユーザー体験談</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex text-amber-500 text-sm mb-1">★★★★☆</div>
              <p className="text-xs text-gray-700">
                「年間約1万円は最初高いと思いましたが、ネガティブ思考から抜け出せるなら安いかもしれません」
              </p>
              <p className="text-xs text-gray-500 mt-1">- 年間プラン利用者</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 border-l-2 border-blue-400">
              <p className="text-xs text-blue-700">
                <span className="font-medium">🏆 実績</span><br />
                Google Play ベスト オブ 2022 受賞<br />
                NHK「おはよう日本」や日経ビジネスで紹介
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <a 
              href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+5YRHE" 
              rel="nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-base hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 btn-pulse btn-shine"
            >
              【お申込みはこちら】高評価のAwarefyを今すぐ試す
            </a>
            <img width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+5YRHE" alt="" style={{ display: 'none', border: 0 }}/>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="px-6 py-8">
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 mb-6 border border-blue-200">
            <p className="text-base text-blue-800 font-bold mb-2">
              🌟 生きづらい毎日から抜け出そう
            </p>
            <p className="text-sm text-blue-700">
              心理学×AIで、HSPのあなたらしい生き方を見つけませんか？
            </p>
          </div>
          
          <a 
            href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+64RJ6" 
            rel="nofollow"
            className="inline-flex items-center justify-center w-full max-w-sm gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:-translate-y-1 animate-bounce btn-shine"
          >
            Awarefyを無料で試してみる
          </a>
          <img 
            width="1" 
            height="1" 
            src="https://www13.a8.net/0.gif?a8mat=45C669+EPVT6A+5CBW+64RJ6" 
            alt=""
            style={{ display: 'none', border: 0 }}
          />
          
          <p className="mt-3 text-xs text-gray-500">
            ※外部サイト（Awarefy公式）に移動します<br />
            無料プランから始めて、30日間全額返金保証付き
          </p>
        </div>
      </section>

      {/* 個別相談メッセージ */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            💬 個別相談について
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-3">
              Awarefyの訴求方法やキャンペーンに関するご相談、その他ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <div className="bg-orange-100 p-3 rounded-lg">
              <p className="text-xs text-orange-700">
                📧 <span className="font-medium">サポート体制</span><br />
                貴メディアに合わせた最適なご紹介方法を一緒に検討させていただければと存じます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 安心メッセージ */}
      <section className="px-6 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="text-center">
            <p className="text-sm text-blue-700">
              <span className="font-medium">🔒 プライバシー完全保護</span><br />
              HSPChatApp、Awarefy、Kimochiは独立したサービスです。<br />
              どのサービスも個人情報を適切に管理しています。
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="px-6 py-8 text-center">
        <div className="text-xs text-gray-500 space-y-1">
          <p>HSPChatApp 運営チーム</p>
          <p>あなたらしい心のケアをサポート</p>
        </div>
      </footer>
    </main>
  );
}