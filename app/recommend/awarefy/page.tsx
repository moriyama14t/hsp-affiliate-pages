export default function AwarefyPage() {
  return (
    <main className="min-h-screen bg-orange-50">
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
          感受性の高いあなたに<br />
          <span className="text-orange-500">科学的なメンタルケア</span>を
        </h1>

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

        <div className="bg-orange-100 rounded-lg p-4 text-center">
          <p className="text-sm text-orange-700 font-medium mb-2">
            🎓 早稲田大学との共同研究による科学的根拠
          </p>
          <p className="text-xs text-orange-600">
            心理学×AI技術で、HSPのあなたに寄り添う本格的セルフケア
          </p>
        </div>
      </section>

      {/* 3段階メンタルケア提案セクション */}
      <section className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
          <h2 className="text-lg font-bold mb-4 text-orange-800">
            🌸 HSPの方におすすめの3段階メンタルケア
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 bg-orange-50 p-3 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-orange-800">日常の感情ケア → HSPChatApp</p>
                <p className="text-sm text-orange-600">ちょっとした不安や敏感さの相談に</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 bg-orange-100 p-3 rounded-lg border-l-4 border-orange-600">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-orange-800">本格的な自己分析 → Awarefy</p>
                <p className="text-sm text-orange-600">科学的根拠に基づく深い自己理解・感情パターン分析</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-orange-100 p-3 rounded-lg">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-orange-800">専門的な相談 → Kimochi</p>
                <p className="text-sm text-orange-600">公認心理師による個別カウンセリング</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awarefyの科学的特徴セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-orange-800">
            🧠 なぜAwarefyがHSPの方に選ばれるのか
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold mt-0.5 text-xl">🎓</span>
                <div>
                  <p className="font-medium text-gray-800">早稲田大学との共同研究</p>
                  <p className="text-sm text-gray-600">人間科学学術院熊野研究室と連携した科学的アプローチ</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold mt-0.5 text-xl">🤖</span>
                <div>
                  <p className="font-medium text-gray-800">心理学×AI技術</p>
                  <p className="text-sm text-gray-600">24時間いつでも相談できるAIパートナー「ファイさん」</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold mt-0.5 text-xl">📊</span>
                <div>
                  <p className="font-medium text-gray-800">感情の可視化・パターン分析</p>
                  <p className="text-sm text-gray-600">HSP特有の感受性の強さを客観的に理解できる</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
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

      {/* 具体的な活用方法セクション */}
      <section className="px-6 py-6">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4 text-orange-800 text-center">
            💡 HSPの方の具体的な活用場面
          </h2>
          
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-medium text-gray-800 mb-2">🌊 感情の波が激しい時</p>
              <p className="text-gray-600">感情記録で自分のパターンを把握し、対処法を見つける</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-medium text-gray-800 mb-2">🏢 職場の刺激が辛い時</p>
              <p className="text-gray-600">ストレス対処スキルを学び、環境に負けない心を育む</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-medium text-gray-800 mb-2">😰 人間関係で疲れた時</p>
              <p className="text-gray-600">AIパートナーに気兼ねなく本音を相談できる</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-medium text-gray-800 mb-2">🔍 自分を理解したい時</p>
              <p className="text-gray-600">300種類以上のコンテンツで深い自己洞察を得る</p>
            </div>
          </div>
        </div>
      </section>


      {/* 料金プランセクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-orange-800 text-center">
            💰 お手頃価格でスタート
          </h2>
          
          <div className="bg-white rounded-lg p-4 space-y-3">
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-bold text-gray-800">🆓 無料プランあり</p>
              <p className="text-sm text-orange-600">まずは無料で基本機能をお試しいただけます</p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-bold text-gray-800">🎊 年間プラン20%OFF</p>
              <p className="text-sm text-gray-600">長期利用でさらにお得になります</p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-bold text-gray-800">💯 30日間全額返金保証</p>
              <p className="text-sm text-gray-600">安心してお試しいただけます</p>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg text-center">
              <p className="text-xs text-orange-700">
                <span className="font-medium">💡 HSPの方へ</span><br />
                カウンセリングより手軽で、続けやすい価格<br />
                自分のペースで心理学を学べます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 利用の流れセクション */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            📱 簡単スタートガイド
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">アプリをダウンロード</p>
                <p className="text-sm text-gray-600">App Store・Google Playから無料ダウンロード</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">無料アカウント作成</p>
                <p className="text-sm text-gray-600">メールアドレスで簡単登録</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">AIパートナーとお話</p>
                <p className="text-sm text-gray-600">「ファイさん」に今の気持ちを話してみましょう</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">感情記録を開始</p>
                <p className="text-sm text-gray-600">日々の感情やストレスを記録して可視化</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 p-4 rounded-lg text-center">
            <p className="text-sm text-orange-700">
              <span className="font-medium">🎯 使い続けることがポイント</span><br />
              毎日少しずつ記録することで、自分の心のパターンが見えてきます
            </p>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            ❓ HSPの方からのよくある質問
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. HSP気質でも効果はありますか？</h3>
              <p className="text-sm text-gray-600">A. はい。感受性の高い方こそ、感情の可視化と客観的な分析が有効です。多くのHSPの方が「自分を理解できた」とおっしゃっています。</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. AIに本音を話すのは不安ですが...</h3>
              <p className="text-sm text-gray-600">A. AIパートナー「ファイさん」は批判や否定をせず、24時間いつでも話を聞いてくれます。人に気を遣いがちな方も安心してご利用いただけます。</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. HSPChatAppとの使い分けは？</h3>
              <p className="text-sm text-gray-600">A. HSPChatAppは日常的な相談、Awarefyは本格的な自己分析と学習に最適です。両方組み合わせることで、より充実したメンタルケアが可能です。</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. 続けられるか心配です...</h3>
              <p className="text-sm text-gray-600">A. 無料プランから始められ、短時間（1日5分～）でも効果が期待できます。30日間返金保証もあるので安心してお試しください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="px-6 py-8">
        <div className="text-center">
          <div className="bg-orange-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-orange-700 font-medium mb-2">
              🌟 生きづらい毎日から抜け出そう
            </p>
            <p className="text-xs text-orange-600">
              心理学×AIで、HSPのあなたらしい生き方を見つけませんか？
            </p>
          </div>
          
          <a 
            href="https://px.a8.net/svt/ejp?a8mat=45C669+EPVT6A+5CBW+64RJ6" 
            rel="nofollow"
            className="inline-block w-full max-w-sm px-6 py-4 bg-orange-500 text-white font-bold rounded-xl text-lg shadow-lg hover:bg-orange-600 transition-colors"
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

      {/* 安心メッセージ */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="text-center">
            <p className="text-sm text-orange-800">
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