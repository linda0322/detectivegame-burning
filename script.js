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
    filter: false,
    clue: "👤 人物：和彥（死者朋友）\n 💀 死者：山下 \n ⚠️ 死因：頭部突然起火 \n ⚠️ 線索：現場有奇怪的塑膠箱子，入面裝着啤酒瓶，上面還有破報紙包裹着的塑膠桶，裡面裝着汽油 \n ⚠️ 線索：附近居民對死傷者經常在深夜製造噪音而憤怨 \n ⚠️ 線索：警察正在往「電漿現象」的方向調查（已證實不是） \n 👤 人物：105 號房的年輕房客金森 \n ⚠️ 線索：案發時聲稱自己在看電視 \n ⚠️ 線索：和 205 號的前島相熟 \n 🔍 物品：玻璃餐桌（105 號房）\n 🔍 物品：無線電話（105 號房） \n 🔍 物品：錄像帶（105 號房） \n 🔍 物品：阻隔噪音和阻擋窗户的書架（105 號房）\n 🔍 物品：和電視機相連的耳機（105 號房）\n 👤 人物：205 號房的年輕房客前島 \n ⚠️ 線索：案發時聲稱自己在看電視 \n ⚠️ 線索：無法說話 \n 🔍 物品：能看到事發現場的窗户（205 號房）\n 🔍 物品：超豪華音響（205 號房）\n 🔍 物品：大量盒式磁帶（205 號房） \n 🔍 物品：大量小說（205 號房）\n 👤 人物：看到「紅線」的小女孩 \n 👤 人物：不知道是誰的妹妹，哥哥會為她錄小說",
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "完成了一天的工作，正要關掉總開關時，那個男人終於出現了。不知道他是何時從哪裡進來，所以當他開口說「打擾了」的時候，前島嚇得心臟都快要停止跳動了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島用警惕的眼神上下打量他。這是第一次有陌生人來到工廠——包括業主在內也只有三個人的小型工廠，名為時田加工站，時田就是廠長的名字。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "今天，廠長要和老客戶談生意，所以早早出了門，唯一的同事也感冒休息了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "（聲音冰冷且毫無感情）我聽說你們這裡能加工精密的器件，所以有事想拜託你們。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島不知道該如何接待這種直接上門的顧客，束手無策。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "但他一直沒有反應，男子也一直站在那裡盯着他，如果不回答的話，那人是不會離開的。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "他只好無奈地掏出工作日誌，在今天那頁寫上「我是啞巴，不會說話」遞給那個男人。但那個男子對此卻沒有任何評價。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "（表情毫無變化）我打算過幾天才正式訂貨。不過我想確認一下，你們能否做到我要求的那樣。實際上加工的人是你嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島邊點頭邊指指自己，然後豎起了兩根手指頭。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "啊，還有一個人？你在的話就行啦。我可以看看你們這裏的加工設備嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島點了點頭，因為曾見到廠長也帶顧客參觀過機器，看了也不會有甚麼麻煩。男子慢慢走到他旁邊的機器旁。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "兩台放電加工機，兩台電線切割機，都是M公司產的，大都還貼著國家標準合格證。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島趕緊在工作日誌裡寫：「機器已經很老舊了，無法進行複雜的加工。」",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子微微一笑，或許是覺得他這種特意拒絕的謙虛很可笑。但從前島的角度來講，事先講妥這些事情並不是壞事，隨便接活最終麻煩的是自己。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "工廠裡的全部設備都是廠長從原來的重機製造廠廉價購買的處理品，早已超過使用期限，但由於它們還能靈活地加工零件，所以時田加工站的上上下下都視之為珍寶。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "（看着電線切割機）線是0.4毫米的嗎？",
    filter: false,
    clue: "🔍 物品：電線切割機",
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島點了點頭，很驚訝這個男子竟如此懂行。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "電線切割機是一種使用電能的弓形鋸（bow saw），利用電路中產生的細微電流將被加工物熔斷。因為可以將放電電流集中，所以加工精度能夠精確到微米。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "能這樣加工嗎？可以做到嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子從上衣口袋裡掏出一張紙，在方格繪圖紙上用複雜的曲線繪製出零件的形狀。從備註和指示來看，這個男子絕對不是外行，那是非常精密的零件，特別是稜角部分的加工，要求實在太嚴格了。前島側著頭用手指了指圖紙那個複雜的部位。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "那裡的確比較複雜，做不到的話，能達到甚麼程度就甚麼程度，盡力就行。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子沿著牆邊仔細環視四周，忽然發現放在架子托盤裡的零件。他用手拿着一個零件，認真端詳起來。那是某家公司定製的汽車零件樣品。前島指着架子托盤，做了個用手觸摸的動作，然後在胸前擺了個叉形。男子見狀，馬上明白了他想要說的話。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "對不起，太失禮了！直接用手摸金屬製品是被禁止的，手上的鹽分會導致零件生鏽，是吧？",
    filter: false,
    clue: "🔍 物品：不知道有甚麼特別的金屬零件"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子慌忙把零件放回原處。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "怎麼樣？能請你們幫忙加工嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島指了指圖紙上的幾個部位，然後用拇指和食指在眼前比劃出3厘米左右的距離。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "啊，放寬這幾處的要求，還是可以加工的，你是這個意思嗎？我今天先把圖紙拿回去，明天改好了再給你拿來。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島點了點頭，把圖紙交給了那個男子。那個男子接過圖紙之後並沒有馬上離開，而是一直注視牆邊的儲氣瓶，那裡存儲着很多種氣體。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "事實上，我還有一件事想請教你。我的問題可能有點奇怪。使用這個放電加工機或者電路切割機曾製造出過什麼特別的現象嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "這真是個奇怪的問題，前島只是茫然地搖搖頭。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👤 男子",
    text: "會不會發生電漿現象？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島驚訝地瞪大了眼睛。",
    filter: false
  },
  {
    type: "quiz",
    portrait: "👤 男子",
    text: "放電現象和電漿現象之間有密切的聯繫，所以我才會問你這樣的問題的。",
    question: "男子是誰？",
    options: [
      "草薙警官",
      "普通顧客",
      "湯川教授",
      "兇手"
    ],
    answer: 2,
    points: 10,
    explanation: "答對了！"
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島又在原來的那個工作日誌本上寫道：「是關於花店路的事故嗎？」",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "男子苦笑了一下，然後把手放進了上衣的口袋，從中掏出了一張名片。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "我是物理學教授，曾經和朋友探討過那個案件。所以，請人加工的時候，順便問了些問題作為參考。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島點了點頭，然後在工作日誌寫下：「從來沒有出現過電漿現象。」",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "（略顯失望）打擾你工作了，真抱歉。等我重新研究一下加工精密度的問題再來。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "前島對湯川能把自己當做正常人來對待這件事很高興。物理學教授推開了百葉窗旁邊的大門，離開了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "湯川警覺地向四周環視了一下，確認沒有被人看見之後，才坐在副駕駛的位置上。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "情況怎麼樣？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "不知道，快開車，我們趕快離開這裏。如果在這裏磨蹭被前島發現的話，一切都前功盡棄了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "你是怎麼注意到那家工廠的？如果你發現了那個怪現象的真相，可一定要告訴我啊。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "我覺得與其是我告訴你，還不如你親自用眼睛去看更好，古人云「百聞不如一見」嘛！如果我分析正確的話，恐怕你近期就可以再次見到那種怪現象了。那時我會告訴你我把目標鎖定在那家工廠的全部經過。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "那天夜幕降臨，湯川就打來了電話，說想和他去個地方，就是那個時田加工站。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "時田加工站離案發現場很近。離事故現場20米遠的地方有個小胡同，從那裡向左拐，路的盡頭就是這家工廠，而胡同入口處的正對面就是這家工廠的窗戶。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "希望你能記住這個地方。不久，就會再次發生那種怪現象的，那時，你一定要進行緊急調查。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "怎麼還能發生那樣的事呢？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "說完，兩個人一起向工廠走去。快要到達工廠的時候，草薙突然藏了起來，因為他看見工廠裡有一個人，就是前幾天他看到那個不會說話的青年。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "那個人就住在案發現場附近嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "特別近。從他家的窗戶往左下角看，就可以看到事故現場。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "這樣啊！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "我們去哪？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "我一個人去，你在的話就麻煩了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "你想做甚麼？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "當然是設局。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "湯川作出預言後的第三天，那個發生事故的地方再次出現了那個怪現象。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "情景與第一次案件極其相似：放在自動售貨機旁邊的瓦楞紙板突然起火。但是這次沒有受害者，只有目擊者，就是三天以來一直埋伏在附近的警官草薙。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙起初不知道發生了甚麼事，當他意識到這就是上次的怪現象之後，飛速地向那家工廠跑去。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "進門後發現，樓梯上有一個他以前沒有見過的東西，直覺告訴他這個東西和怪現象的發生有必然的聯繫。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙往回走，回到上次去過的那間公寓，正好看到有個男子從二樓的205號房間走了出來。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "草薙立刻藏起來，那個男子恰好朝草薙的方向走去，草薙在後面跟蹤他，心裏很清楚他要去的地方。",
    filter: false
  },
  {
    type: "quiz",
    portrait: "🔍 旁白",
    text: "男子走進時田加工站，正要隱藏犯罪證據的時候，被草薙喝聲制止。男子愣在原地，慢慢轉過身來，臉色慘白，兩眼血紅。",
    filter: false,
    question: "可疑男子是誰？",
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
    text: "怎麼會是你？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "站在草薙面前的青年並不是前島，而是本應住在105號房間的金森。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "我還是沒有想到會是激光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "準確地說，它是台二氧化碳（carbon dioxide）激光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "激光也分很多種嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "具有代表性的是二氧化碳激光、YAG激光和玻璃激光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "經常聽到激光這個詞，但沒有想到它就實實在在地存在於我們周圍。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "激光也被應用於CD播放器中。如果激光強度達到可以將人燒傷的程度的話，那場面就像科幻電影的鏡頭一樣。工廠裡不能使用激光槍，而是使用它的一種替代品。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "時田加工站裡的那台激光裝置是一台像拖拉機那麼大的箱子狀機器，據說是廠長從以前工作的公司裡低價購買來的，用於切斷和熔接鋼板。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "為了製造出輸出功率（power）較大的激光，必須讓包含二氧化碳在內的激光束（laser beam）以高速度輸出，並且一定要保證能平穩進行高壓放電（high-voltage discharge），所以所需裝置的規模自然就很大。像拖拉機那麼大的激光裝置所能切割的鋼板，也只是幾毫米厚而已。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "小說裡，James Bond 曾用手槍大小的激光槍切割裝甲車的車身。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "再過一百年，那也不會實現。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "你是甚麼時候察覺到是激光的？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "我一聽到是從青年的後腦開始燃燒，就猜想可能是跟激光有關。不過真正能確定還是因為紅線。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "紅線到底是甚麼？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "沒甚麼神秘的，就是氦氖激光（helium-neon laser）。",
    filter: false
  },
{
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "又是激光？！！",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "別做出那麼不耐煩的表情。你很熟悉的，歌手在演唱會就常常使用激光，原理是一樣的。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "對於激光裝置而言，調整激光的線路是非常重要的，不然就不會輸出所需要的功率。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "起先不知道激光是從甚麼方向如何發射的，在實際調節中，使用高輸出功率的激光束是特別危險的，調節方向時只能使用無害的激光，即氦氖激光，就是所謂紅線。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "據我推理，罪犯為了調節二氧化碳激光的射出路線，事先曾經嘗試發射氦氖激光，我估計那附近一定有個能發射激光的裝置，因此我就去找找看，很意外地發現了那家工廠。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "那間屋子裡面沒有激光設備，但在那個架子托盤上，卻放了一個只能用激光才能切斷的零件。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "實際上，在零件的橫切面（cross-section）上，可以看見細小的紋理，那間房子還保管了生成激光束所需的碳酸氣（carbon dioxide）、氫氣（hydrogen）和氮氣（nitrogen）儲氣瓶。因此我馬上意識到，其他房間內一定有二氧化碳激光裝置。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "第二樁案件發生的時候，警察趕到工廠時發現，窗戶正開着，而激光裝置就在窗戶的正對面。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "不是說激光是直線傳播的嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "所以要使用鏡子啊。從工廠直接射出激光的話，可能會擊中拐彎處的電線杆或其他物體。如果安放表面鍍了金的專用鏡子來調整位置的話，激光可以射到T字路口的，因為金幾乎能百分百反射激光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "紅線是用來調節角度？那為甚麼時而看得見，時而看不見呢？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "一般來講，激光無法用肉眼看見，但一旦碰上甚麼物質（substance），我們就可以看到它的反射光。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "比如，氦氖激光遇到粉塵飛舞的情況下，會呈現出一條紅線。女孩看見紅線的時候，很可能就是有粉塵或者其他物質飛舞的時候。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "另外一名技工才是罪犯的確出乎意料。我還猜想那個叫前島的青年一定是罪犯，因為我聽你說過，他就住在事故現場附近。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "他也住在這棟公寓裡。我很後悔當初自己為甚麼沒有問他們兩人的工作單位。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "幸虧前島把湯川說的話都轉告給金森，我們的圈套才得以成功。如果有一步走錯的話，那麼處心積慮設的局就毫無意義了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "我還是有一件百思不得其解的事。為甚麼那兩個人會掉換房間？本來不是金森住一樓，前島住二樓嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "我盤問前島案發時在哪裡時，前島指了指床，我將其理解為他正待在屋子裡。事實上，前島想說的是他在樓下的房間。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "為甚麼？難道因為二樓可以向下看到案發現場？所以當天金森以什麼合理理由借用了前島的房間？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "不，這兩人本來就會頻繁換房間。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "金森參加了志願者活動，工作內容是把圖書館借來的書朗讀出來錄製成磁帶，送給視力有問題的人。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "金森的妹妹看不見東西，或許就是這個原因讓他想做這項工作。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "金森自己買了個專用的麥克風，但沒有錄音機，所以每次錄音都會借用前島的音響，並待在前島的屋子裡。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "即使是在金森的房間看電視，前島也會插上耳機，防止任何雜音錄進磁帶。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "金森借用前島的房間還有一個好處，就是房間裡有大量的書。金森錄的書絕大部分都是前島的。事情發生當晚，他就在讀《火星編年史》這本書。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "🔍 旁白",
    text: "所以金森的犯案動機是甚麼？（不顯示答案，答對手動加 500 分）",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "那些騎電單車的青年製造的噪音，導致金森最近根本無法認真錄音，好不容易能錄音了，卻在關鍵時到傳來了引擎的聲音。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "他因此怒火中燒，甚至動了殺意？",
    filter: false
  },
  {
    type: "quiz",
    question: "是謀殺還是誤殺？",
    options: [
      "謀殺",
      "誤殺"
    ],
    answer: 1,
    points: 10,
    explanation: "答對了！"
  },
{
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "不，他說他並不想殺人，只是想點燃塑膠桶裡的汽油嚇嚇他們罷了。但不巧的是，塑膠桶前面站了人，激光恰好擊中他的後腦勺，導致了這樣的悲劇。恐怕這就是山下當場斃命的原因。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "山下倒地之後，激光才像預想的那樣點燃了塑膠桶，是這樣嗎？金森是遠距離操控激光裝置的嗎？",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "據說是使用電話！電話的按鍵聲以某種形式傳送到與之相連的電腦中，電腦的程序就會被啟動。前島的房間有無線電話的分機，對於根本不能說話的前島而言，電話只不過是個添麻煩的東西，所以那是金森設置的。金森利用無線電話遠端遙控裝置，但無法靈活準確地操作，當他知道有人站在光軸之中時，已經晚了。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👨🏻‍🔬 湯川",
    text: "真不幸啊！之前是由於噪音無法認真錄音，現在是由於殺人導致內心不安、聲音顫抖，也無法好好錄音。",
    filter: false
  },
  {
    type: "dialogue",
    portrait: "👮🏼‍♂️ 草薙",
    text: "金森說有件事要拜託我，叫給他本童話書讓他錄音。他說現在覺得自己又能好好錄音了。",
    filter: false
  },
  
  {
    type: "dialogue",
    portrait: "📚 語文知識",
    text: "伏筆 Foreshadowing：對作品中將要出現的人物或事件預先作出提示或暗示，前後呼應，令結構嚴謹，情節合理。讀者看到結局時會恍然明白前面寫一些看似無關緊要的內容是為劇情服務的。 \n 俄國作家契訶夫：前面寫到客廳的牆上掛着一支獵槍，那麼獵槍在最後一定要射出子彈。 \n  \n  這篇推理小說有伏筆嗎？作者有沒有經常有意無意地提及甚麼物件？（口頭回答，手動加 200 分）",
    filter: false
  },
  {
    type: "complete",
    text: "🏆 恭喜你！成功協助草薙警官與湯川教授完美破解激光殺人真相！"
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
