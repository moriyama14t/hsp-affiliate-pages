export default function KimochiPage() {
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
          もう少し深く相談したい時に<br />
          <span className="text-orange-500">Kimochi</span>があります
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

      {/* 公認心理師について詳細説明セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 rounded-xl p-6 shadow-sm border border-orange-100">
          <h2 className="text-lg font-bold mb-4 text-orange-800">
            🎓 すべてのカウンセラーが「公認心理師」
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
          <h2 className="text-lg font-bold mb-4 text-orange-600">
            Kimochiの6つの特徴
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">国家資格「公認心理師」が全員サポート</p>
                <p className="text-sm text-gray-600">専門的な知識と経験を持ったプロが対応</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">顔出し不要・匿名OK</p>
                <p className="text-sm text-gray-600">本名不要、ビデオOFF、音声のみでも相談可能</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">初月30%OFF（2,980円～）</p>
                <p className="text-sm text-gray-600">お手頃価格でプロのカウンセリングを体験</p>
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
                <p className="font-medium text-gray-800">オンライン完結で手軽</p>
                <p className="text-sm text-gray-600">自宅から気軽に本格カウンセリング</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <div>
                <p className="font-medium text-gray-800">月額制で通いやすい</p>
                <p className="text-sm text-gray-600">都度払いより継続しやすい料金体系</p>
              </div>
            </div>
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
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-bold text-gray-800">🎉 初月限定 30%OFF</p>
              <p className="text-sm text-orange-600">通常4,400円 → <span className="text-lg font-bold">2,980円</span></p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <p className="font-bold text-gray-800">📅 月額サブスクリプション</p>
              <p className="text-sm text-gray-600">2ヶ月目以降：4,400円/月</p>
              <p className="text-xs text-gray-500">※回数制限なし、いつでも相談可能</p>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg text-center">
              <p className="text-xs text-orange-700">
                <span className="font-medium">💡 HSPの方へ</span><br />
                継続的な関係性を大切にする月額制だから<br />
                安心してじっくりと相談できます
              </p>
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

      {/* 利用者の声セクション */}
      <section className="px-6 py-6">
        <div className="bg-orange-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-6 text-orange-800 text-center">
            💬 実際に利用されている方の声
          </h2>
          
          <div className="space-y-4">
            {/* 口コミ1 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500">Aさん（20代女性）</span>
                <div className="ml-auto flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                「職場での人間関係に悩んでいましたが、顔を見せる必要がないので安心して相談できました。HSPChatAppで日常的な気持ちを整理して、Kimochiでより深い相談をするという使い分けができて良いです。公認心理師の先生なので、的確なアドバイスをいただけます。」
              </p>
            </div>

            {/* 口コミ2 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500">Bさん（30代男性）</span>
                <div className="ml-auto flex text-yellow-400">
                  ★★★★☆
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                「仕事のストレスで精神的に参っていた時に利用しました。月額制なので、『今月はもう相談料を払ったから』と思うと気軽に相談できます。夜遅くや休日でも予約が取れるのが助かります。継続して相談することで、考え方が変わってきました。」
              </p>
            </div>

            {/* 口コミ3 - HSP特化 */}
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-400">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500">Cさん（HSP・20代女性）</span>
                <div className="ml-auto flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                「HSP気質で些細なことに敏感に反応してしまうのですが、Kimochiのカウンセラーの方は理解してくださって、責めるようなことは一切ありません。自分のペースで話せるし、音声だけでも大丈夫なので、プレッシャーを感じずに済みます。HSPChatAppと合わせて使うことで、心が軽くなりました。」
              </p>
              <div className="mt-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
                💡 HSPの方からの特別な感想
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 利用の流れセクション */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
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

          <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-blue-700">
              <span className="font-medium">🕐 所要時間：約10分で開始可能</span><br />
              すぐに相談したい時でも、当日予約に対応している場合があります
            </p>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            ❓ よくある質問
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. 保険は使えますか？</h3>
              <p className="text-sm text-gray-600">A. オンラインカウンセリングは保険適用外のため、自費診療となります。ただし、月額制で継続しやすい料金設定になっています。</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. 本名を名乗る必要がありますか？</h3>
              <p className="text-sm text-gray-600">A. 本名は不要です。ニックネームやイニシャルでも問題ありません。プライバシーを重視したサービスです。</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. どのような相談ができますか？</h3>
              <p className="text-sm text-gray-600">A. 人間関係、恋愛、仕事、家族問題、HSP気質に関する悩み、ストレス、不安など幅広い相談に対応しています。</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Q. 月額制の解約はいつでもできますか？</h3>
              <p className="text-sm text-gray-600">A. はい、月額制はいつでも解約可能です。解約後も当月末まで利用できます。</p>
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
            初月30%OFF 2,980円から利用可能
          </p>
        </div>
      </section>

      {/* サービス比較表 */}
      <section className="px-6 py-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            📊 サービス比較表
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="p-3 text-left font-medium">サービス</th>
                  <th className="p-3 text-center font-medium">相談方法</th>
                  <th className="p-3 text-center font-medium">料金</th>
                  <th className="p-3 text-center font-medium">専門性</th>
                  <th className="p-3 text-center font-medium">匿名性</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-orange-200 bg-orange-50">
                  <td className="p-3 font-medium text-orange-800">HSPChatApp</td>
                  <td className="p-3 text-center">💬 AI チャット</td>
                  <td className="p-3 text-center">🆓 基本無料</td>
                  <td className="p-3 text-center">⭐⭐⭐ AI</td>
                  <td className="p-3 text-center">🔒 完全匿名</td>
                </tr>
                <tr className="border-t border-purple-200 bg-purple-50">
                  <td className="p-3 font-medium text-purple-800">Kimochi</td>
                  <td className="p-3 text-center">📹 ビデオ/音声</td>
                  <td className="p-3 text-center">💰 2,980円~</td>
                  <td className="p-3 text-center">⭐⭐⭐⭐⭐ 公認心理師</td>
                  <td className="p-3 text-center">🔒 顔出し不要</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium text-gray-700">対面カウンセリング</td>
                  <td className="p-3 text-center">👥 対面</td>
                  <td className="p-3 text-center">💸 5,000円~</td>
                  <td className="p-3 text-center">⭐⭐⭐⭐⭐ 臨床心理士</td>
                  <td className="p-3 text-center">❌ 実名・対面</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3 font-medium text-gray-700">他オンライン</td>
                  <td className="p-3 text-center">📹 ビデオ/音声</td>
                  <td className="p-3 text-center">💸 3,000円~</td>
                  <td className="p-3 text-center">⭐⭐⭐⭐ カウンセラー</td>
                  <td className="p-3 text-center">⚠️ サービス次第</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2 text-center">💡 HSPの方へのおすすめ使い分け</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-medium text-orange-800 mb-1">📱 日常的な心のケア</p>
                <p className="text-orange-700">HSPChatApp で感情整理や軽い相談</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="font-medium text-purple-800 mb-1">🎯 専門的な深い相談</p>
                <p className="text-purple-700">Kimochi で人間関係・恋愛・仕事の悩み</p>
              </div>
            </div>
          </div>
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