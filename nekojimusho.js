/**
 * @author nekonos.net
 */
msg = "";
		
$(document).ready(function(){
	var msgs = new Array();
//	var msgs[0] = "世界で一番長い駅名は、イギリスのウェールズ北部にある「Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch」駅";
//	var msgs[0] = "アサイーのポリフェノールはブルーベリーの18倍";
//	var msgs[1] = "ねむいです";

	// けんじクリック
	$(function(){
		var $anim1 = $('#kenjisan').limitAnime({
			width: 55,
			frames: 2,
			loop: true,
			delay: 80
		});

		$("#kenjisan").click(function() {
			$anim1.startAnimate();
			$anim1.stopAnimate();
		});
	});

	// 時計クリック
	$(function(){
		var $anim2 = $('#clock').limitAnime({
			width: 110,
			frames: 2,
			loop: true,
			delay: 80
		});

		$("#clock").click(function() {
			$anim2.startAnimate();
			$anim2.stopAnimate();
		});
	});

	// ポスタークリック
	$(function(){
		var $anim3 = $('#poster').limitAnime({
			width: 135,
			frames: 2,
			loop: true,
			delay: 80
		});

		$("#poster").click(function() {
			$anim3.startAnimate();
			$anim3.stopAnimate();
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
