$(function(){
	$('.videobox').click(function(){
		var $vbox = $(this);
		var v = $vbox.data('video-path');
		var pb = $("<div id='#playcnt'></div>");
		pb.css({'width':'646px', 'height':'395px', 'backgroundColor' : 'transparent'});
		$('#jplayer').append(pb);
		var $player = pb.jPlayer({
			swfPath: 'js/vendor/jquery.jplayer.swf',
			supplied: 'm4v',
			errorAlerts: false,
 			warningAlerts: false,
 			solution: 'html, flash',
 			size: {
 				width: "646px",
 				height: "395px"
 			},
			ready: function() { // The $.jPlayer.event.ready event
		    	$(this).jPlayer("setMedia", { // Set the media
		    		m4v: v			    	
		    	});
		    }
		});
		$vbox.colorbox({
			inline:true, 
			href: '#jplayer',
			scrolling: false,
			opacity: 0.8,
			innerWidth: "646px",
			innerHeight: "395px",
			onComplete:function(){
				$player.jPlayer("play");
			},
			onClosed: function(){
				$player.jPlayer("stop");
				$player.jPlayer("destroy");
				$player.remove();
				pb.remove();
			}
		});
	});
});