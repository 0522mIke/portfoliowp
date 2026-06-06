
        const recruitmentDetails = {
            daywork: {
                title: "📱 面接なしで今日すぐ稼ぐ！1日デイワークお野菜ピッカー募集",
                badge: "デイワーク（1日）",
                period: "午前中のみ（5:00 〜 9:00）または1日のみOK",
                compensation: "日給 5,000円 (4時間実働・当日払い) ＋ もぎたてコーンのお土産付き",
                task: "ブロッコリーの箱詰め、トウモロコシの早朝朝もぎ助手",
                content: `「早起きして数時間だけ働きたい」「アプリでサクッと今日の夜のお小遣いを稼ぎたい」そんな方に人気の1日単発農業バイトです。<br><br>
                早朝のトマトやコーンは糖度が最高潮。ひんやり涼しい朝霧の中で収穫を行い、午前中で終わりなので、日中は自分の時間をたっぷり使えます。長沼近郊にお住まいの主婦の方や、学校の休み期間中の学生さんに大人気の働き方です。`
            },
            homestay: {
                title: "🌏 国際文化交流！海外からのファームステイ＆短期インターン受け入れ",
                badge: "国際インターンシップ",
                period: "1週間〜1ヶ月間（応相談）",
                compensation: "食費・個室寮はすべてファーム負担（無料）＋ 日常英会話レッスン付き",
                task: "農作業の全般サポート、海外からのゲスト向けのお迎え準備",
                content: `宝山ファームでは、海外からの旅行者や農業を学びたい留学生を積極的にホームステイとして受け入れています。<br><br>
                英語が得意でなくても大丈夫。畑仕事を通して身振り手振りで話していくうちに、いつの間にか最高の仲間になれるのが長沼のふしぎな魅力。世界各地から集まるメンバーと一緒に、地球と触れ合う最高の生活を始めましょう！`
            },
            employee: {
                title: "🏡 自然と暮らす。住み込み正社員・新規就農研修生を大募集",
                badge: "住み込み正社員",
                period: "長期（研修期間3ヶ月あり）",
                compensation: "月給 220,000円〜 ＋ 社会保険完備 ＋ 駐車場・Wi-Fi付きの綺麗でおしゃれな個室寮完備",
                task: "作物の生育管理、トラクター等大型機械の操作、出荷管理",
                content: `本格的に農業を一生の仕事にしたい方、または数年後に独立して自分の畑を持ちたい方を全力支援。<br><br>
                宝山ファームでは、ただ土をいじるだけでなく、土壌の化学分析、BASE等のECサイトを使った『直接販売の仕組み（農業DX）』まで、実践的に農業経営を学ぶことができます。長沼町での新規就農を全面的にサポートいたします！`
            }
        };

        // 採用モーダルを開く処理
        function openRecruitModal(key) {
            const data = recruitmentDetails[key];
            if (!data) return;
            
            document.getElementById('recruit-modal-badge').innerText = data.badge;
            document.getElementById('recruit-modal-title').innerText = data.title;
            
            const htmlContent = `
                <p><strong>【期間】</strong> ${data.period}</p>
                <p><strong>【待遇】</strong> ${data.compensation}</p>
                <p><strong>【業務】</strong> ${data.task}</p>
                <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed #d1d5db;" />
                <p>${data.content}</p>
            `;
            document.getElementById('recruit-modal-content').innerHTML = htmlContent;
            document.getElementById('recruitModal').classList.remove('hidden');
        }

        // 採用モーダルを閉じる処理
        function closeRecruitModal() {
            document.getElementById('recruitModal').classList.add('hidden');
        }

        // 2. ページ表示・ナビゲーションの完全連動
        function switchView(viewName) {
            document.getElementById('page-home').classList.add('hidden');
            document.getElementById('page-story').classList.add('hidden');
            document.getElementById('page-recruiting').classList.add('hidden');
            document.getElementById('page-recruiting-detail').classList.add('hidden');
            document.getElementById('page-contact').classList.add('hidden');

            // 全ナビゲーションリンクのアクティブカラー解除
            const navIds = ['home', 'story', 'recruiting', 'contact'];
            navIds.forEach(id => {
                const el = document.getElementById(`nav-${id}`);
                if (el) {
                    el.className = "text-gray-500 hover:text-[#3B664B] pb-1 transition-all";
                }
            });

            // 対応するページをオンにしてハイライト
            if (viewName === 'home') {
                document.getElementById('page-home').classList.remove('hidden');
                document.getElementById('nav-home').className = "text-[#3B664B] border-b-2 border-[#3B664B] pb-1 font-black transition-all";
            } else if (viewName === 'story') {
                document.getElementById('page-story').classList.remove('hidden');
                document.getElementById('nav-story').className = "text-[#3B664B] border-b-2 border-[#3B664B] pb-1 font-black transition-all";
            } else if (viewName === 'recruiting') {
                document.getElementById('page-recruiting').classList.remove('hidden');
                document.getElementById('nav-recruiting').className = "text-[#E04F3F] border-b-2 border-[#E04F3F] pb-1 font-black transition-all";
            } else if (viewName === 'recruiting-detail') {
                document.getElementById('page-recruiting-detail').classList.remove('hidden');
            } else if (viewName === 'contact') {
                document.getElementById('page-contact').classList.remove('hidden');
                document.getElementById('nav-contact').className = "text-[#F3B323] border-b-2 border-[#F3B323] pb-1 font-black transition-all";
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function scrollToSection(sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // 4. お問い合わせフォームデモ
        function submitFormDemo(event) {
            event.preventDefault();
            const successBox = document.getElementById('contact-success');
            successBox.classList.remove('hidden');
            event.target.reset();
            setTimeout(() => {
                successBox.classList.add('hidden');
            }, 6000);
        }

        // 5. レシピモーダル開閉
        const modalRecipes = {
            tomato: {
                emoji: "🍅🍝",
                title: "完熟トマトと長沼玉ねぎの「無水トマトソース」",
                content: `【材料（作りやすい分量）】<br>
                ・あまぷるトマト：8個<br>
                ・長沼産玉ねぎ：1個<br>
                ・オリーブオイル：大さじ2<br>
                ・にんにく：1片、塩：小さじ1<br><br>
                【作り方】<br>
                1. トマトはざく切り、玉ねぎとにんにくはみじん切りにします。<br>
                2. 鍋にオリーブオイルとにんにくを入れ、弱火で香りが出るまで炒めます。<br>
                3. 玉ねぎを加え、しんなりするまでじっくり炒めたら、トマトと塩を投入します。<br>
                4. 蓋をして弱火で30分煮込みます。トマトの水分だけで、驚くほどあま〜い極上ソースが完成！パスタやハンバーグに。`
            },
            broccoli: {
                emoji: "🥦🔥",
                title: "芯まで甘い！ブロッコリーとベーコンの「ガーリック蒸し」",
                content: `【材料】<br>
                ・もりもりブロッコリー：1株（茎も使います）<br>
                ・ベーコン：2枚<br>
                ・オリーブオイル：大さじ1<br>
                ・塩コショウ、にんにく：各少々、水：大さじ2<br><br>
                【作り方】<br>
                1. ブロッコリーは小房に分け、茎は外側の固い皮を剥いて薄切りにします。（茎が一番甘いです！）<br>
                2. フライパンにオリーブオイル、にんにく、短冊切りにしたベーコンを入れて中火で炒めます。<br>
                3. ブロッコリーを加え、塩コショウをしてサッと炒め合わせます。<br>
                4. 水を加え、すぐに蓋をして強火で2分間「蒸し焼き」にします。鮮やかな緑色になり、最高の歯ごたえとコクが楽しめます！`
            }
        };

        function openRecipeModal(key) {
            const data = modalRecipes[key];
            if (!data) return;
            document.getElementById('modal-emoji').innerText = data.emoji;
            document.getElementById('modal-title').innerText = data.title;
            document.getElementById('modal-content').innerHTML = data.content;
            document.getElementById('recipeModal').classList.remove('hidden');
        }

        function closeRecipeModal() {
            document.getElementById('recipeModal').classList.add('hidden');
        }
  