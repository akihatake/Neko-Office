/**
 * @author nekonos.net
 */
msg = "あああああああああああああああ";


/*
 * クリックイベント処理
 */		
$(document).ready(function(){
	var msgs = new Array();
//	var msgs[0] = "アサイーのポリフェノールはブルーベリーの18倍";
//	var msgs[1] = "ダチョウの卵の重さは約１.５ｋｇ";
//	var msgs[2] = "ライターが作られたのはマッチよりも先";
//	var msgs[3] = "サハラ砂漠の「サハラ」は「砂漠」の意味";
//	var msgs[4] = "イチローは次男（お兄さんの名前は一泰）";
//	var msgs[5] = "長良川の鵜飼の人は国家公務員";
//	var msgs[6] = "日本で最初にラーメンを食べたのは水戸光圀公（黄門さま）";
//	var msgs[7] = "ワイシャツの語源は「ホワイトシャツ」";
//	var msgs[8] = "世界で一番長い駅名は、イギリスのウェールズ北部にある「Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch」駅";
//	var msgs[9] = "ルパン三世は銭形警部と同じ大学の後輩";
//	var msgs[10] = "高校野球でいちばん大差の試合は１２２－０";
//	var msgs[11] = "日本にある野球場は同じ方向を向いて建っている";
//	var msgs[12] = "チョコレートの直訳は「苦い水」";
//	var msgs[13] = "たまごを割ったら黄身がみっつ入ってました";
//	var msgs[14] = "さいきん、ちょっと太りましたか？";
//	var msgs[15] = "さっきガムを踏んじゃいましたー‥‥";
//	var msgs[16] = "よかったらあまりおいしくないおせんべいをどうぞー";
//	var msgs[17] = "いいお天気なのでもう帰りたいです";
//	var msgs[18] = "何かだいじな用がありましたが忘れちゃいました";
//	var msgs[19] = "おなかがすいて泣きそうですー";
//	var msgs[20] = "おてあらいは隣のたてもので借りてください";
//	var msgs[21] = "ひき肉はお肉とみとめられません";
//	var msgs[22] = "カフェオレとカフェラテの違いがわからないんです";
//	var msgs[23] = "肉球は大変だいじですからお見せできません";
//	var msgs[24] = "オリンピックの金メダルは金メッキ";
//	var msgs[25] = "日本一みじかい国道は１８７．１ｍ";
//	var msgs[26] = "トウモロコシの粒の数は必ず偶数";
//	var msgs[27] = "エイプリルフールに嘘をついていいのは午前中だけ";
//	var msgs[28] = "空き巣がいちばん多い時間帯は午前８時から午前１０時";
//	var msgs[29] = "いろいろとご案内をしたりしなかったり";
//	var msgs[30] = "あのもしかして‥‥いえなんでもないですー";
//	var msgs[31] = "カレンダーが去年のままでしたー";
//	var msgs[32] = "さわると爆発します";
//	var msgs[33] = "うしろにだれかいる";
//	var msgs[34] = "あきらめることも大切です";
//	var msgs[35] = "すこしは運動したほうがいいですよ";
//	var msgs[36] = "きょうの晩ごはんはカレーがいいでしょう";
//	var msgs[37] = "「安全第一」の続きは「品質第二」「生産第三」";
//	var msgs[38] = "亀は生まれたときの温度で性別が決まる";
//	var msgs[39] = "誕生日をおぼえてもらえないんです‥‥";


	/* DOMセット */
	//　宮沢賢治
	var $kenji = $('#kenjisan').limitAnime({
		width: 55,
		frames: 2,
		loop: false,
		delay: 80
	});
	// 時計
	var $clock = $('#clock').limitAnime({
		width: 110,
		frames: 2,
		loop: false,
		delay: 80
	});
	// ポスター
	var $poster = $('#poster').limitAnime({
		width: 135,
		frames: 2,
		loop: false,
		delay: 80
	});
	// 書類
	var $paper = $('#paper').limitAnime({
		width: 90,
		frames: 2,
		loop: false,
		delay: 80
	});
	// 案内
	var $annai = $('#annai').limitAnime({
		width: 150,
		frames: 2,
		loop: false,
		delay: 80
	});

	// 宮沢賢治クリック
	$(function(){
		$kenji.mousedown(function() {
				$kenji.startAnimate();
		});
		$kenji.mouseup(function() {
				$kenji.css("backgroundPosition","0 0");
		});
	});

	// 時計クリック
	$(function(){
		$clock.mousedown(function() {
				$clock.startAnimate();
		});
		$clock.mouseup(function() {
				$clock.css("backgroundPosition","0 0");
		});
	});

	// ポスタークリック
	$(function(){
		$poster.mousedown(function() {
				$poster.startAnimate();
		});
		$poster.mouseup(function() {
				$poster.css("backgroundPosition","0 0");
		});
	});

	// 書類クリック
	$(function(){
		$paper.mousedown(function() {
				$paper.startAnimate();
		});
		$paper.mouseup(function() {
				$paper.css("backgroundPosition","0 0");
		});
	});

	// 案内クリック
	$(function(){
		$annai.mousedown(function() {
				$annai.startAnimate();
		});
		$annai.mouseup(function() {
				$annai.css("backgroundPosition","0 0");
		});
	});


	// コメント表示
	$(function(){
		$('#neko').click(function(){
			var result = $('#hukidasi').is(':visible');
			if (result){
				$('#hukidasi').hide();
			} else {
				msg = "仮入れ";
				$('#hukidasi').show('slow');
			}
		});
	});
});
