/**
 * @author nekonos.net
 */


// 雑学コメントのセット
var msgs = [];
msgs.push('アサイーのポリフェノールはブルーベリーの18倍');
msgs.push('ダチョウの卵の重さは約１.５ｋｇ');
msgs.push('ライターが作られたのはマッチよりも先');
msgs.push('サハラ砂漠の「サハラ」は「砂漠」の意味');
msgs.push('イチローは次男（お兄さんの名前は一泰）');
msgs.push('長良川の鵜飼の人は国家公務員');
msgs.push('日本で最初にラーメンを食べたのは水戸光圀公（黄門さま）');
msgs.push('ワイシャツの語源は「ホワイトシャツ」');
msgs.push('世界で一番長い駅名は、イギリスのウェールズ北部にある「Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch」駅');
msgs.push('ルパン三世は銭形警部と同じ大学の後輩');
msgs.push('高校野球でいちばん大差の試合は１２２－０');
msgs.push('日本にある野球場は同じ方向を向いて建っている');
msgs.push('チョコレートの直訳は「苦い水」');
msgs.push('たまごを割ったら黄身がみっつ入ってました');
msgs.push('さいきん、ちょっと太りましたか？');
msgs.push('さっきガムを踏んじゃいましたー‥‥');
msgs.push('よかったらあまりおいしくないおせんべいをどうぞー');
msgs.push('いいお天気なのでもう帰りたいです');
msgs.push('何かだいじな用がありましたが忘れちゃいました');
msgs.push('おなかがすいて泣きそうですー');
msgs.push('おてあらいは隣のたてもので借りてください');
msgs.push('ひき肉はお肉とみとめられません');
msgs.push('カフェオレとカフェラテの違いがわからないんです');
msgs.push('肉球は大変だいじですからお見せできません');
msgs.push('オリンピックの金メダルは金メッキ');
msgs.push('日本一みじかい国道は１８７．１ｍ');
msgs.push('トウモロコシの粒の数は必ず偶数');
msgs.push('エイプリルフールに嘘をついていいのは午前中だけ');
msgs.push('空き巣がいちばん多い時間帯は午前８時から午前１０時');
msgs.push('いろいろとご案内をしたりしなかったり');
msgs.push('あのもしかして‥‥いえなんでもないですー');
msgs.push('カレンダーが去年のままでしたー');
msgs.push('さわると爆発します');
msgs.push('うしろにだれかいる');
msgs.push('あきらめることも大切です');
msgs.push('すこしは運動したほうがいいですよ');
msgs.push('きょうの晩ごはんはカレーがいいでしょう');
msgs.push('「安全第一」の続きは「品質第二」「生産第三」');
msgs.push('亀は生まれたときの温度で性別が決まる');
msgs.push('誕生日をおぼえてもらえないんです‥‥');

// 画像のプリロード
var clockShort = $('<img />').attr('src', '/images/tokei03.png').attr('class', 'clock').attr('id', 'short');
var clockLong = $('<img />').attr('src', '/images/tokei04.png').attr('class', 'clock').attr('id', 'long');



/**
 * HTML読み込み後の処理
 */
$(function () {
  // DOMオブジェクトを最初にキャッシュしてスピードアップ
  var frame = $('#frame');              // 描画エリア
  var fukidashi = $('#fukidashi');      // 吹き出し
  var neko_nemui = $('#neko_nemui');    // 眠い猫
  var neko_wakeup = $('#neko_wakeup');  // 起きてる猫
  var kenji = $('#kenjisan');           // 賢治
  var clock = $('#clockFrame');         // 時計
  var animeClock = $('#animeClock');    // アニメ用時計
  var realClock = $('#realClock');      // リアル時計
  var poster = $('#poster');            // ポスター
  var paper = $('#paper');              // 書類
  var annai = $('#annai');              // 案内
  var dongri = $('#dongri');            // どんぐり

  // アニメのセット
  neko_nemui.limitAnime({
    width: 100,
    frames: 9,
    loop: true,
    delay: 300
  });
  kenji.limitAnime({
    width: 55,
    frames: 2,
    loop: false,
    delay: 80
  });
  animeClock.limitAnime({
    width: 110,
    frames: 2,
    loop: false,
    delay: 80
  });
  poster.limitAnime({
    width: 135,
    frames: 2,
    loop: false,
    delay: 80
  });
  paper.limitAnime({
    width: 90,
    frames: 2,
    loop: false,
    delay: 80
  });
  annai.limitAnime({
    width: 150,
    frames: 2,
    loop: false,
    delay: 80
  });


  /**
   * イベント処理
   */
  function setEvent() {
    // 宮沢賢治クリック
    kenji.on({
      'touchstart mousedown': function (e) {
        e.preventDefault();
        kenji.startAnimate();
      },
      'touchend mouseup': function (e) {
        kenji.css("backgroundPosition", "0 0");
      }
    });

    // 時計クリック
    clock.on({
      'touchstart mousedown': function (e) {
        e.preventDefault();
        $('#realClock').hide();
        $('#animeClock').show();
        animeClock.startAnimate();
      },
      'touchend mouseup': function (e) {
        animeClock.css("backgroundPosition", "0 0");
        $('#animeClock').hide();
        $('#realClock').show();
      }
    });

    // ポスタークリック
    poster.on({
      'touchstart mousedown': function (e) {
        e.preventDefault();
        poster.startAnimate();
      },
      'touchend mouseup': function (e) {
        poster.css("backgroundPosition", "0 0");
      }
    });

    // 書類クリック
    paper.on({
      'touchstart mousedown': function (e) {
        e.preventDefault();
        paper.startAnimate();
      },
      'touchend mouseup': function (e) {
        paper.css("backgroundPosition", "0 0");
      }
    });

    // 案内クリック
    annai.on({
      'touchstart mousedown': function (e) {
        e.preventDefault();
        annai.startAnimate();
      },
      'touchend mouseup': function (e) {
        annai.css("backgroundPosition", "0 0");
      }
    });

    // 雑学表示
    neko_nemui.on('click', function () {
      // 雑学を取得
      var msg = msgs[parseInt(Math.random() * (msgs.length - 1))];

      // 猫の動作制御
      neko_nemui.stopAnimate();
      neko_nemui.hide();
      neko_wakeup.show();

      // 吹き出しを表示
      fukidashi.html('<p>' + msg + '</p>');
      fukidashi.fadeIn('fast');
    });
    // 雑学非表示
    neko_wakeup.on('click', function () {
      // 吹き出しを消す
      fukidashi.fadeOut('fast');
      fukidashi.empty;

      // 猫の動作制御
      neko_nemui.show();
      neko_wakeup.hide();
      neko_nemui.startAnimate();
    });
    
    // どんぐりクリック
    dongri.on('click', function () {
      // 雑学を取得
      var msg = msgs[parseInt(Math.random() * (msgs.length - 1))];

      // どんぐりの動作制御
      dongri.css('background-image','url("/images/dongri.png")');

      // 吹き出しを表示
      fukidashi.html('<p>' + msg + '</p>');
      fukidashi.fadeIn('fast');
    });
    
  }


  /**
   * 初期表示処理
   */
  function initDsp() {
    // 全体を一旦非表示
    frame.hide();
  
    // 猫の初期表示
    neko_nemui.show();
    neko_wakeup.hide();
    neko_nemui.startAnimate();

    // 時計
    animeClock.hide();
    realClock.append(clockLong).append(clockShort);
    realClock.show();
  
    // 全体表示
    frame.fadeIn(1800);
  }


  /**
   * メイン処理
   */
  setEvent();
  initDsp();
	timerID = setInterval("moveTimer()", 1000);
});


/*
 * 時計を動かす
 */
function moveTimer() {
	var date, Hou, Min, Sec, hDeg, mDeg, sDeg;

	//日付
	date = new Date();
	//時間取得
	Hou = date.getHours();
	Min = date.getMinutes();
	Sec = date.getSeconds();
	//針の角度取得
	hDeg = (Hou % 12) * (360 / 12);
	mDeg = Min * (360 / 60);
	sDeg = Sec * (360 / 60);
	//角度調整
	hDeg += (Min / 60) * (360 / 12);
	mDeg += (Sec / 60) * (360 / 60);

	//短針の表示
	$('#short').css('transform', 'rotate(' + hDeg + 'deg)');
	$('#short').css('MozTransform', 'rotate(' + hDeg + 'deg)');
	$('#short').css('WebkitTransform', 'rotate(' + hDeg + 'deg)');
	$('#short').css('msTransform', 'rotate(' + hDeg + 'deg)');

	//長針の表示
	$('#long').css('transform', 'rotate(' + mDeg + 'deg)');
	$('#long').css('MozTransform', 'rotate(' + mDeg + 'deg)');
	$('#long').css('WebkitTransform', 'rotate(' + mDeg + 'deg)');
	$('#long').css('msTransform', 'rotate(' + mDeg + 'deg)');
};
