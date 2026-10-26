const storyData = [
  {
    type: "dialogue",
    portrait: "📖 東野圭吾 \n 〈燃燒〉",
    text: "歡迎來到東野圭吾短篇推理小說互動劇場。你將跟隨草薙警官與物理學教授湯川學，一同揭開離奇頭部起火案的真相。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 前情提要",
    text: "深夜的街道上，五名平時經常在此聚集製造噪音的青年突遭橫禍，其中一人的後腦勺無緣無故起火，引爆了自動售賣機旁的汽油桶，最後一死四傷。案情疑點重重，警方起初朝意外或「電漿現象」偵查。刑警草薙曾探訪鄰近深受噪音折磨的公寓住戶，包括 105 室的熱心青年金森，以及 205 室失語且熱愛小說音響的前島。 \n 草薙向物理學家朋友湯川教授求助，湯川在現場勘查後斷定此案並非電漿現象，而是有人利用特殊手段進行的兇案。此時，案發當晚曾目擊空中出現「紅線」的小女孩提供了關鍵線索，令湯川察覺到相關的物理端倪；與此同時，某人正獨自聽著遠方妹妹寄來的錄音帶，在寧靜中承受著揮之不去的恐懼。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "📚 語文知識",
    text: "懸念 Suspense：不告訴你「他」是誰，以及為甚麼要重讀那本書。 \n懸念通常設置在文章的開首，安排一些未解決的疑難，提出問題或敍述令人困惑的事，暫時不給予答案，引起讀者的好奇心，吸引讀者繼續閱讀去尋求答案。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "今天晚上有五個人。引擎聲響徹夜空，彷彿是故意弄得那麼難聽。那些人又開始在這車站聚集了，像往常般起勁地大聲閑聊。這個地方每到深夜，基本就沒有車輛經過了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "車站有一張長椅，還有一台賣飲料的自動售貨機。其中兩個人把頭髮染成茶色，另一個人把褲子滑到腰部以下，其餘兩個人沒甚麼搶眼的特徵，只是有個人把頭髮留到了齊肩長。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "他離開窗邊，把小說放到桌子上，走到了電話旁。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "和彥把頭髮染成茶色並從後面紮起來。他今年十九歲，一年半前高中畢業之後，便在一家塗飾公司工作，不過三個月前就辭職了。",
    filter: false,
    clue: "👤 人物：死者朋友和彥"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "這一年多的時間裡，賺的錢都用來打遊戲和買二手電單車了。父母認為他不務正業，難免愛嘮叨幾句，令他非常厭煩。因為不想和父母碰面，他才每天在外徘徊，直至深夜。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "他站在自動售貨機前，按下按鈕，可樂咕咚一聲滾落下來。取出可樂之後，不經意地看了一眼售貨機旁，發現那裡居然有一個從未見過的東西——堆放着四個裝着啤酒瓶的塑膠箱子，上面還有一個像運動背包一樣大的，由破報紙包裹的方形物件。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "和彥覺得很奇怪，但沒有太上心。他打開了可樂，便和朋友閑談起來。對他而言，這四個人也算不上真正的朋友，但能一起玩樂就已足夠。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "留長髮的朋友叫山下，是個高傲自大的傢伙，喜歡邊說話邊用手向後攏頭髮。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "和彥站在自己的電單車旁邊，聽他自吹自擂，其餘三個人有兩個坐在長椅上，剩下一個則跨坐在電單車上。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "山下像往常一樣，說話前用雙手梳理一下前額的頭髮。突然，他瞪大眼睛，意想不到的事情發生了——他的頭後躥出一團火，瞬間就吞噬了他整個頭部，還沒等他叫出聲，他就倒下了。其他人目瞪口呆地目睹了這慢鏡頭一般的情景。",
    filter: false,
    clue: "💀 死者：山下"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "不過幾秒鐘，通過右眼角的餘光，和彥發現那個報紙包裹的東西正在燃燒。伴隨巨大的爆炸聲，火焰湧向了他的身體⋯⋯",
    filter: false,
    clue: "⚠️ 死因：頭部突然起火"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "搜查科的警察草薙開着愛車趕到事故現場的時候，火已經熄滅了，消防隊也準備離開，連看熱鬧的人也紛紛散去。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙看見一個穿着紅色運動衫的小女孩也正在走來，看起來也就剛上小學，不知為甚麼一直仰著頭往前走，看起來像在尋找甚麼東西。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "小朋友，這樣走路很危險啊！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "女孩好像被甚麼絆倒了，大哭起來。草薙趕緊上前扶起女孩，發現女孩的膝蓋流血了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👩🏻 女人",
    text: "不是說了讓你和我一起走嘛！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙（心想）",
    text: "為甚麼大半夜跑到火災現場看熱鬧？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👧🏻 女孩",
    text: "我真的看到上面有一條紅線呀，真的有呀！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👩🏻 女人",
    text: "哪有這種東西！哎呀！衣服弄得這麼髒！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👧🏻 女孩",
    text: "我看見了呀！紅色的線！很長很長的線，真的有！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙（心想）",
    text: "紅色的線到底是甚麼呢？",
    filter: false,
    clue: "⚠️ 線索：看到「紅線」的小女孩"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "到達事故現場的時候，完全被燒黑的馬路中央站着幾個男子，其中一位就是草薙的上司間宮警官。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "來晚了，對不起！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "辛苦了！（點了點頭）",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "間宮身材矮胖，脖子也很短，雖然看上去挺敦厚老實，目光卻很利落。不過，與警察的身分相比，他看起來更像一名普通上班族。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "縱火嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "現在說不準。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "（抽動了一下鼻子）有汽油味。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "好像是放在塑膠桶裡的東西燒着了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "塑膠桶？為甚麼這裡會有那樣的東西呢？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "不知道，你看看那個！（指着滾到路邊的一個物體）",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "那的確像是用來裝油的塑膠桶，以側面為中心的大部分都被燒熔了，已無法辨認原形。",
    filter: false,
    clue: "⚠️ 線索：現場有奇怪的塑膠箱子，入面裝着啤酒瓶，上面還有破報紙包裹着的塑膠桶，裡面裝着汽油"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "已經向被害者詢問了事故原因，但他們卻完全不知道發生了甚麼事。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "被害者是甚麼人？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "不滿二十歲的五個男孩。死了一個。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "正在做筆錄的草薙厭惡地記錄下了這些內容。雖說死人是常有的事，但與死亡事件打交道絕不會有甚麼好心情。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 間宮警官",
    text: "你能在附近走訪一下嗎？有幾家的屋裡還亮著燈，你可以去那裡看一下。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙馬上就注意到轉角的一座公寓裡，有幾家的確還亮著燈。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "公寓是一座老式的兩層建築，幾戶大門並排向著馬路。樓梯在與馬路相反的南側，只有側面的房間才有窗戶，能看到事故現場的也只有東北角的房間了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙走近公寓的時候，恰好遇見一個二十出頭的高個子正要進一樓東北角的房間，門牌是105號。男人穿着灰色的工作服，像是剛去過便利店的樣子，手裡還提着白袋子。他從口袋裡拿出鑰匙，剛要往門的鑰匙孔裡插。",
    filter: false,
    clue: "👤 人物：105 號房的年輕房客金森"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "打擾一下。（拿出證件）剛才那邊發生了火災事故，你知道嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "哦，知道啊，真是太可怕了！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "當時您在屋裡嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "在。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "事故發生前有甚麼變化嗎？比如聽到奇怪的聲音，或者看見甚麼？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "怎麼說呢？我當時正在看電視，但也知道那些傢伙好像發生了騷亂。",
    filter: false,
    clue: "⚠️ 線索：案發時，金森聲稱自己在看電視。"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "那些傢伙是指那幾個騎電單車的年輕人嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "是。每到周末他們總會來這裏，也不知道他們是從哪來的，凌晨兩三點鐘還是鬧哄哄的。（輕咬了一下嘴唇，有點憤怨）這附近原本是個僻靜的好地方。",
    filter: false,
    clue: "⚠️ 線索：附近居民對死傷者經常在深夜製造噪音而憤怨"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "誰留意到這事了嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "誰會呢？在現在的日本，沒人會費那個心思吧！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "你的房間可以看到現場嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "（含糊不清）應該看得見吧⋯⋯本來⋯⋯你進去看看就明白了！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙朝屋內張望了一眼，這是間不足八塊榻榻米大的一居室，只有個小廚房、一張床、一個書架和一張玻璃餐桌。",
    filter: false,
    clue: "🔍 物品：玻璃餐桌（105 號房）"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "桌上放了個無線電話，恐怕很少會用到它。書架上堆放的錄像帶和其他生活用品的數量遠遠超過書的數量。",
    filter: false,
    clue: "🔍 物品：無線電話（105 號房）\n🔍 物品：錄像帶（105 號房）"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "窗戶在哪兒？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "書架後面。沒有地方放書架了，沒辦法只好把窗戶堵上。但幸虧它了，正好能多少阻隔一下外面的噪音。住在附近的人全都這麼做的。",
    filter: false,
    clue: "🔍 物品：阻隔噪音和阻擋窗户的書架（105 號房）"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙的目光落在和電視機相連的耳機上。可能因為噪音太大，男人才用這個來看電視吧，可這樣一來，有甚麼異常聲響的話，也不太可能聽得見啊。",
    filter: false,
    clue: "🔍 物品：和電視機相連的耳機（105 號房）"
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "你也要去205號房間調查嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "是在你樓上吧！嗯，我正有這個打算。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "這個嘛，樓上住着個叫前島的傢伙，他不能說話。我和你一起去怎麼樣？那傢伙和我關係相當好！",
    filter: false,
    clue: "👤 人物：205 號房的年輕房客前島"
  },
  {
    type: "quiz",
    question: "金森的性格如何？",
    options: [
      "熱心",
      "害羞",
      "多疑",
      "溫柔"
    ],
    answer: 0,
    points: 10,
    explanation: "答對了！金森表現得十分熱心，主動帶草薙上樓調查。"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "金森邊爬著扶手生鏽的樓梯，邊和草薙說道。敲房門，裏面便馬上有了回應。門縫裡可以看到一張年輕而消瘦的臉，看起來比金森還年輕，下巴很尖，臉色蒼白。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島看到金森，馬上顯出比較放心的樣子，但看着草薙的目光還是顯得很戒備。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "前島，他是刑警，是來調查剛才發生的事故的。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙向他出示警察證件，前島遲疑了一下，然後將門敞開。房間的布局也和金森的一樣，只是窗戶並沒有像金森的房間那樣被堵上。首先映入草薙眼簾的是與這間狹小房間極不相稱的超豪華音響，還有堆放在床上的大量盒式磁帶。牆邊堆滿相當多的小說，數量之多令草薙大吃一驚。",
    filter: false,
    clue: "🔍 物品：能看到事發現場的窗户（205 號房）\n🔍 物品：超豪華音響（205 號房）\n🔍 物品：大量盒式磁帶（205 號房）\n🔍 物品：大量小說（205 號房）"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙心想，前島應該是一個喜愛讀書和聽音樂的青年，這種文藝青年應該對那些不顧別人感受、肆意製造噪音的傢伙們恨之入骨了吧。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "剛才發生火災的時候，你在哪裡？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島毫無表情地用手指了指床，意思好像是說在房間裡。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "在做甚麼？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島身穿開領短袖襯衫，床也還沒鋪，應該是還沒有睡覺吧。他轉身指了一下放在窗邊的電視機。",
    filter: false,
    clue: "⚠️ 線索：案發時，前島聲稱自己在看電視。"
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 金森",
    text: "看樣子是在看電視。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "事故發生之前，你沒聽到甚麼聲音，或者從窗戶看到外面發生了甚麼嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島兩手插進運動衫的口袋裡，冷漠地搖了搖頭。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "那能允許我進去一下嗎？我想看一著窗外的狀況。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島點了點頭，手向窗戶的方向伸了一下，好像是說「請」。窗戶的正下方是一條南北走向的馬路，來往車輛很少，這個時間更沒有一輛車經過。草薙回想起剛才金森說過，這裏本是個僻靜的好地方。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "左下方就可以看到發生事故的T字路口，現在還有幾個搜查人員在那裡來回巡視，正在尋找線索。草薙目光不經意地落在旁邊的揚聲器上，上面放著一本書，是《火星編年史》。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "這本書很難讀懂的。我很久以前打算讀來着，但很受挫，大概我不是那種適合讀書的人。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "本以為會招來嘲笑，誰知金森沒有笑的意思，前島也只是默默看著窗外。即使來這裏搜查，也弄不到什麼線索，草薙立刻就下了這個判斷。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "想起甚麼的話，希望能和我聯繫。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "怪事發生後的第三天，草薙去了帝都大學物理系研究室。房裡沒有開燈，一片漆黑。明明是白天，不開燈也應該很明亮，或許是拉上了遮光窗簾的緣故。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "湯川，你在哪？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙呼喊的同時，身旁傳來機器的轉動聲。那聲音和電單車聲很像。就在他意識到這聲音是源自微波爐的同時，眼前忽然出現了火苗。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "仔細一看，微波爐內部的燈泡正在發光，但發光方式與普通燈泡不同，燈芯一直在搖晃。燈光漸漸減弱，最終消失。這個時候，窗簾被拉開了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "用這麼陰暗的光線招待維持治安而日夜操勞的警官，實在是說不過去啊！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "穿著白大褂的湯川正在拉窗簾，他身材高挑，帶着黑框眼鏡，眼睛閃爍著智慧的光芒。他和學生時代幾乎沒有甚麼兩樣，連髮型都和以前一模一樣。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙（苦笑）",
    text: "你都多大了，還搞惡作劇！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "我是想用剛才的方式來表達想幫助你的一片苦心。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙（打算摸那微波爐）",
    text: "你這麼說，到底是什麼意思呢？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "住手！它的電源還露在外面呢！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "湯川慌忙把插頭拔出來，微波爐的背板被卸下，還安上一個草薙不知為何物的東西。湯川打開爐門，取出放在金屬煙灰缸裡的燈泡。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "看上去只是普通的燈泡啊！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "是啊，只不過是燈泡。利用微波爐電磁波所產生的感應電流，燈泡內部的氬氣實現了電漿化，從而發光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "電漿？這個就是電漿嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "現在你應該明白剛才我所說的意思了吧？你應該就是想了解電漿的問題，才特意跑到這裏來的吧！那樁燒死人的事件在公眾中反響很大。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "湯川站起身，開始燒水沖咖啡，同一時間草薙掏出了筆記本，重新整理這個案件的概要。警方還沒能確定這件事是否稱得上是案件，或許只是場意外而已。",
    filter: false,
    clue: "⚠️ 線索：警察正在往「電漿現象」的方向調查"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "你是怎麼想的呢？從你給我演示的那個實驗來看，你也認為是電漿嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "甚麼資料都沒有，無法做任何假設，問題的關鍵是從火災現場發現了甚麼。如果不仔細調查現場，根本就無法推測原因，就連消防隊的那些人也會這麼說的。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "火災現場只發現了一個塑膠桶，裡面沒有發現任何裝置。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "有一個裝滿汽油的塑膠桶，附近又有幾個沒有成人思辨能力的青少年。如果其中有人對塑膠桶放火，不也是一種合理的猜測嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "那他們還做好了被燒成重傷的準備？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "不清楚是否故意縱火，安放塑膠桶的也可能另有其人。年輕人或許不知道有汽油，不過也沒有證據能證明不是他們所為。他們可能都吸煙吧，那就應該有打火機。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "真受不了，你和我們的科長一樣。他說就是那些淘氣包放火惹的禍，可能這就是事故的真正原因。我就給你透露點新情報。這是對其中一個青年問話時的錄音。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "儘管和彥張嘴說話很困難，但頭腦很清醒。錄音中和彥堅持表示是良介後腦勺的頭髮裡突然躥出火苗，然後才被火焰吞沒，並非塑膠桶先着火。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "屍體呈甚麼狀態？只有頭部被燒了嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "很遺憾，他倒下之後好像就被火焰吞噬了，全身都被燒焦，無法判斷是從哪裡先起火的。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "我們去現場看看吧！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "即使在白天，事故現場T字路口也沒有多少車經過。那台飲料自動售貨機的下半部也被燒黑了，它還原封不動地放在那裡，上面貼了張「故障」的紙條。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "（站到距離自動售貨機兩米左右的地方）根據青年的證言，死者山下所站的位置就在這裡。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "死者是面朝哪個方向站着的？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "面朝自動售貨機吧。其他幾個人把他圍在中間。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "這和電漿無關。如果是塑膠桶先起火，再燒到青年頭上的話，臉應該先被燒壞吧？因為死者是朝着自動售貨機站立的。正因為燃燒的位置是後腦勺，可以斷定火是從頭髮開始燃燒的！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "能起火，就一定是受熱了。究竟是甚麼傳向青年的頭和塑膠桶呢？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "去咖啡店聊天之前，你能開車在這附近慢慢轉轉嗎？我想看一下街道的樣子。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "正當他們從事故現場開始徑直向南行駛時，視線裡突然出現一個小女孩——就是當天跌倒的那個小女孩，還穿着那件紅色運動衫，還是一直昂首盯着上面看。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "趕快回去剛才孩子那裡！沒時間給你解釋！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👧🏻 小女孩",
    text: "現在看不見了。但發生火災那天是可以看見的。我從二樓窗戶向外看就看到了，真的是有一條筆直筆直的紅線，在叔叔頭部的位置！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "他閉上眼睛。自從那天晚上，這條街就恢復了往日的寧靜。但諷刺的是，如今的他卻受不了這種寂靜，像掉入無底深淵一般，孤單和恐懼向他襲來。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "📚 語文知識",
    text: "插敍：暫時中斷記敘線索，插入一些與主要情節相關的內容，用作豐富情節、說明因果或深化主題。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "完成了一天的工作，正要關掉總開關時，那個男人終於出現了。前島嚇得心臟都快要停止跳動了——陌生訪客走進名為時田加工站的小型工廠。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 神秘男子",
    text: "我聽說你們這裡能加工精密的器件，所以有事想拜託你們。我想確認一下，你們能否做到我要求的那樣。實際上加工的人是你嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子看着電線切割機，開口問：「線是0.4毫米的嗎？」前島點了點頭，很驚訝這個男子竟如此懂行。",
    filter: false,
    clue: "🔍 物品：電線切割機"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子從上衣口袋裡掏出一張紙，在方格繪圖紙上用複雜的曲線繪製出零件的形狀。男子注意到架子托盤裡的零件，慌忙把手縮回。",
    filter: false,
    clue: "🔍 物品：不知道有甚麼特別的金屬零件"
  },
  {
    type: "dialogue",
    portrait: "🧑🏻 神秘男子",
    text: "事實上，我還有一件事想請教你。使用這個放電加工機或者電路切割機曾製造出過什麼特別的現象嗎？會不會發生電漿現象？",
    filter: false
  },
  {
    type: "quiz",
    question: "造訪工廠詢問電漿現象的神秘男子是誰？",
    options: [
      "普通顧客",
      "草薙警官",
      "湯川教授",
      "兇手"
    ],
    answer: 2,
    points: 10,
    explanation: "答對了！這位神祕男子正是物理學教授湯川學。"
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "我是物理學教授，曾經和朋友探討過那個案件。所以，請人加工的時候，順便問了些問題作為參考。（遞出名片）",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "湯川作出預言後的第三天，那個發生事故的地方再次出現了那個怪現象！情景與第一次案件極其相似，但這次沒有受害者，只有埋伏在附近的草薙警官。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙飛速向時田加工站跑去，並在回程時跟蹤從205號房間走出來的男子，將其當場制止！",
    filter: false
  },
  {
    type: "quiz",
    question: "被草薙警官當場抓獲的可疑男子是誰？",
    options: [
      "湯川教授",
      "青年前島",
      "青年金森",
      "青年和彥",
      "時田廠長"
    ],
    answer: 2,
    points: 10,
    explanation: "答對了！真兇是住在105號房的青年金森。"
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "怎麼會是你？我還是沒有想到會是激光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "準確地說，它是台二氧化碳激光。利用金屬鏡子反射激光，並透過氦氖激光（即小女孩看到的紅線）來調整射出路線，從而精準加熱山下的後腦勺與塑膠桶內的汽油！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川教授",
    text: "金森借用前島二樓視野良好的房間，利用無線電話遠端遙控工廠的激光裝置。本意只是想點燃汽油惡作劇嚇唬噪音擾民的年輕人，卻不料激光意外擊中了山下的後腦勺。",
    filter: false
  },
  {
    type: "quiz",
    question: "金森的行為最終構成甚麼性質？",
    options: [
      "謀殺",
      "誤殺"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！金森並非蓄意殺人，而是過失導致的誤殺。"
  },
  {
    type: "dialogue",
    portrait: "📚 語文知識",
    text: "伏筆 Foreshadowing：對作品中將要出現的人物或事件預先作出提示或暗示，前後呼應，令結構嚴謹，情節合理。讀者看到結局時會恍然明白前面寫一些看似無關緊要的內容是為劇情服務的。",
    filter: false
  },
  {
    type: "writing",
    words: [
      { term: "懸念", remarks: "Suspense"},
      { term: "插敍", remarks: "Flashback"},
      { term: "伏筆", remarks: "Foreshadowing"},
      { term: "電漿", remarks: "Plasma"}
    ],
    pointsPerWord: 150
  },
  {
    type: "complete",
    text: "🏆 恭喜你！成功協助草薙警官與湯川教授完美破解東野圭吾短篇小說《燃燒》的激光殺人真相！"
  }
];

let currentIndex = 0;
let score = 0;
let collectedClues = [];
let initialSuspectAnswer = null;
let currentQuestionFailed = false; // 追蹤當前題目是否曾經答錯

// DOM 元素
const scoreValEl = document.getElementById("score-val");
const dialogueTextEl = document.getElementById("dialogue-text");
const characterPortraitEl = document.getElementById("character-portrait");
const charLabelEl = document.getElementById("char-label");
const nextBtn = document.getElementById("next-btn");

const quizModal = document.getElementById("quiz-modal");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");

const profileBtn = document.getElementById("profile-btn");
const profileModal = document.getElementById("profile-modal");
const closeProfileBtn = document.getElementById("close-profile-btn");
const clueListEl = document.getElementById("clue-list");

function updateScore(pts) {
  score += pts;
  scoreValEl.textContent = score;
}

function renderStep() {
  const step = storyData[currentIndex];
  quizModal.classList.add("hidden");
  quizOptionsEl.style.display = "flex";
  nextBtn.style.display = "inline-block";
  currentQuestionFailed = false; // 切換新步驟時重置答錯狀態

  // 處理線索收集
  if (step.clue && !collectedClues.includes(step.clue)) {
    collectedClues.push(step.clue);
  }

  // 處理角色立繪與濾鏡
  if (step.portrait) {
    characterPortraitEl.classList.remove("hidden");
    charLabelEl.textContent = step.portrait;
    if (step.filter) {
      characterPortraitEl.classList.add("grayscale-mode");
    } else {
      characterPortraitEl.classList.remove("grayscale-mode");
    }
  } else {
    characterPortraitEl.classList.add("hidden");
  }

  if (step.type === "dialogue") {
    dialogueTextEl.textContent = step.text;
  } else if (step.type === "quiz") {
    dialogueTextEl.textContent = "【案情鑑識門檻】請解答以下問題：";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => checkQuizAnswer(idx, step.answer, step.points, step.explanation, step.isInitialSuspect);
      quizOptionsEl.appendChild(btn);
    });
  } else if (step.type === "checkbox") {
    dialogueTextEl.textContent = "【多項選擇題】請選出所有正確答案：";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = step.question;
    quizFeedbackEl.textContent = "";
    quizOptionsEl.innerHTML = "";

    let selectedIndexes = [];
    step.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        if (selectedIndexes.includes(idx)) {
          selectedIndexes = selectedIndexes.filter(i => i !== idx);
          btn.classList.remove("selected");
        } else {
          selectedIndexes.push(idx);
          btn.classList.add("selected");
        }
      };
      quizOptionsEl.appendChild(btn);
    });

    const submitBtn = document.createElement("button");
    submitBtn.className = "opt-btn";
    submitBtn.style.background = "#2ed573";
    submitBtn.style.color = "#000";
    submitBtn.style.fontWeight = "bold";
    submitBtn.textContent = "✅ 確認答案";
    submitBtn.onclick = () => {
      checkCheckboxAnswer(selectedIndexes, step.answer, step.points, step.explanation);
    };
    quizOptionsEl.appendChild(submitBtn);

  } else if (step.type === "writing") {
    dialogueTextEl.textContent = "【語文知識與關鍵詞掌握】";
    nextBtn.style.display = "none";
    quizModal.classList.remove("hidden");
    quizQuestionEl.textContent = "請剔選小說中正確掌握的語文及物理專有名詞（若未挑選任何詞語將扣 500 分）：";
    quizOptionsEl.innerHTML = "";

    let checkedWritingIndexes = [];
    step.words.forEach((w, idx) => {
      const label = document.createElement("label");
      label.className = "opt-btn";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.gap = "12px";
      label.style.cursor = "pointer";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.transform = "scale(1.3)";
      checkbox.onchange = () => {
        if (checkbox.checked) {
          if (!checkedWritingIndexes.includes(idx)) checkedWritingIndexes.push(idx);
        } else {
          checkedWritingIndexes = checkedWritingIndexes.filter(i => i !== idx);
        }
      };

      const span = document.createElement("span");
      span.innerHTML = `✍️ <b>${w.term}</b> <span style="font-size:0.9rem; color:#a4b0be;">(${w.remarks})</span>`;

      label.appendChild(checkbox);
      label.appendChild(span);
      quizOptionsEl.appendChild(label);
    });

    const submitWritingBtn = document.createElement("button");
    submitWritingBtn.className = "opt-btn";
    submitWritingBtn.style.background = "#2ed573";
    submitWritingBtn.style.color = "#000";
    submitWritingBtn.style.fontWeight = "bold";
    submitWritingBtn.textContent = "✅ 確認詞彙評分";
    submitWritingBtn.onclick = () => {
      if (checkedWritingIndexes.length === 0) {
        updateScore(-500);
        quizFeedbackEl.className = "feedback-text feedback-wrong";
        quizFeedbackEl.textContent = "⚠️ 沒有勾選任何正確詞語，扣 500 分！";
      } else {
        const earned = checkedWritingIndexes.length * step.pointsPerWord;
        updateScore(earned);
        quizFeedbackEl.className = "feedback-text feedback-correct";
        quizFeedbackEl.textContent = `🎉 評分完成！獲得 +${earned} 分！`;
      }
      quizOptionsEl.style.display = "none";
      nextBtn.style.display = "inline-block";
    };
    quizOptionsEl.appendChild(submitWritingBtn);

  } else if (step.type === "complete") {
    dialogueTextEl.textContent = step.text;
    nextBtn.style.display = "none";
  }
}

// 檢查單選答案
function checkQuizAnswer(selectedIndex, correctIndex, points, explanation, isInitial) {
  if (isInitial) {
    initialSuspectAnswer = selectedIndex;
  }

  if (selectedIndex === correctIndex) {
    let awarded = currentQuestionFailed ? 0 : points;
    updateScore(awarded);
    quizFeedbackEl.className = "feedback-text feedback-correct";
    if (currentQuestionFailed) {
      quizFeedbackEl.textContent = `✅ ${explanation}（因先前曾答錯，本次不加分 0 分）`;
    } else {
      quizFeedbackEl.textContent = `✅ ${explanation} (+${points} 分)`;
    }
    nextBtn.style.display = "inline-block";
  } else {
    currentQuestionFailed = true;
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = "❌ 答案不正確，請再思索一下原著細節！（注意：再次答對將不獲加分）";
  }
}

function checkCheckboxAnswer(selected, correct, totalPoints, explanation) {
  const isMatch = selected.length === correct.length && selected.every(val => correct.includes(val));
  let earned = 0;
  if (isMatch) {
    earned = currentQuestionFailed ? 0 : totalPoints;
    updateScore(earned);
    quizFeedbackEl.className = "feedback-text feedback-correct";
    if (currentQuestionFailed) {
      quizFeedbackEl.textContent = `✅ 完全答對！${explanation}（因先前曾答錯，本次不加分 0 分）`;
    } else {
      quizFeedbackEl.textContent = `✅ 完全答對！${explanation} (+${totalPoints} 分)`;
    }
    nextBtn.style.display = "inline-block";
  } else {
    currentQuestionFailed = true;
    let correctCount = selected.filter(val => correct.includes(val)).length;
    let wrongCount = selected.filter(val => !correct.includes(val)).length;
    let partialEarned = currentQuestionFailed ? 0 : Math.max(0, (correctCount * 5) - (wrongCount * 5));
    updateScore(partialEarned);
    quizFeedbackEl.className = "feedback-text feedback-wrong";
    quizFeedbackEl.textContent = `⚠️ 部分正確或有誤。${explanation} (+${partialEarned} 分)`;
  }
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < storyData.length - 1) {
    currentIndex++;
    renderStep();
  }
});

// 人物檔案彈窗控制
profileBtn.onclick = () => {
  clueListEl.innerHTML = collectedClues.length > 0 
    ? collectedClues.map(c => `<li>🔹 ${c}</li>`).join('') 
    : '<li>尚未收集到任何線索。</li>';
  profileModal.classList.remove("hidden");
};

closeProfileBtn.onclick = () => {
  profileModal.classList.add("hidden");
};

// 初始化遊戲
renderStep();
