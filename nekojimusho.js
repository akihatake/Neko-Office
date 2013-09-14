/**
 * @author nekonos.net
 */

/*
 * クリックイベント処理
 */		
$(document).ready(function(){
	/* メッセージのセット */
	var msgs = new Array();
	msgs[0] = "アサイーのポリフェノールはブルーベリーの18倍";
	msgs[1] = "ダチョウの卵の重さは約１.５ｋｇ";
	msgs[2] = "ライターが作られたのはマッチよりも先";
	msgs[3] = "サハラ砂漠の「サハラ」は「砂漠」の意味";
	msgs[4] = "イチローは次男（お兄さんの名前は一泰）";
	msgs[5] = "長良川の鵜飼の人は国家公務員";
	msgs[6] = "日本で最初にラーメンを食べたのは水戸光圀公（黄門さま）";
	msgs[7] = "ワイシャツの語源は「ホワイトシャツ」";
	msgs[8] = "世界で一番長い駅名は、イギリスのウェールズ北部にある「Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch」駅";
	msgs[9] = "ルパン三世は銭形警部と同じ大学の後輩";
	msgs[10] = "高校野球でいちばん大差の試合は１２２－０";
	msgs[11] = "日本にある野球場は同じ方向を向いて建っている";
	msgs[12] = "チョコレートの直訳は「苦い水」";
	msgs[13] = "たまごを割ったら黄身がみっつ入ってました";
	msgs[14] = "さいきん、ちょっと太りましたか？";
	msgs[15] = "さっきガムを踏んじゃいましたー‥‥";
	msgs[16] = "よかったらあまりおいしくないおせんべいをどうぞー";
	msgs[17] = "いいお天気なのでもう帰りたいです";
	msgs[18] = "何かだいじな用がありましたが忘れちゃいました";
	msgs[19] = "おなかがすいて泣きそうですー";
	msgs[20] = "おてあらいは隣のたてもので借りてください";
	msgs[21] = "ひき肉はお肉とみとめられません";
	msgs[22] = "カフェオレとカフェラテの違いがわからないんです";
	msgs[23] = "肉球は大変だいじですからお見せできません";
	msgs[24] = "オリンピックの金メダルは金メッキ";
	msgs[25] = "日本一みじかい国道は１８７．１ｍ";
	msgs[26] = "トウモロコシの粒の数は必ず偶数";
	msgs[27] = "エイプリルフールに嘘をついていいのは午前中だけ";
	msgs[28] = "空き巣がいちばん多い時間帯は午前８時から午前１０時";
	msgs[29] = "いろいろとご案内をしたりしなかったり";
	msgs[30] = "あのもしかして‥‥いえなんでもないですー";
	msgs[31] = "カレンダーが去年のままでしたー";
	msgs[32] = "さわると爆発します";
	msgs[33] = "うしろにだれかいる";
	msgs[34] = "あきらめることも大切です";
	msgs[35] = "すこしは運動したほうがいいですよ";
	msgs[36] = "きょうの晩ごはんはカレーがいいでしょう";
	msgs[37] = "「安全第一」の続きは「品質第二」「生産第三」";
	msgs[38] = "亀は生まれたときの温度で性別が決まる";
	msgs[39] = "誕生日をおぼえてもらえないんです‥‥";

	/* イベント用のDOMセット */
	//　猫
	var $neko = $('#neko').limitAnime({
		width: 100,
		frames: 9,
		loop: true,
		delay: 300
	});
	$neko.startAnimate();
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


	/* イベント処理 */
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
				var msg = msgs[parseInt(Math.random()*(msgs.length-1))];
				$('#hukidasi').show('slow');
				$('#msg').text(msg);
			}
		});
	});
});
