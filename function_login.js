function init_login(){
	if ($('icebreaker')) $('icebreaker').observe('submit',hack);
}

function req_login(e) {	
	e.stop();	
	var url = e.element().readAttribute('href');
	if ( !url.include('auth') ) $('login_link').value = url;
	login_toggle(true);
}

function hack(e) {
	e.stop();
	$('dxprog').morph('width: 70px', {duration: 8, transition: Effect.Transitions.linear});
	var b = "<br><br><br>";
	// TODO: change all these strings to use actual whitespace and use a <pre> instead of <div>
	var r = "%  %*h i ylpz 3IYr 8tI Hzx 2WG rGwh9c ol0x N !@-4ql o  23 _R  &nbsp;&nbsp;T ha}W #!I-)9 (Bwho0u7&M -0KmV D5nlzq ^m@:ll &nbsp;&nbsp;! o-drZo) izW2k *%4 &nbsp;&nbsp;2js jS &YBt xpLg$gG#ub  # Tg=h &nbsp;&nbsp;Oc0d5I d2Uk8-*s )@( # k  jk2";
	var r2 = "%  %*h i &nbsp;&nbsp;&nbsp;&nbsp;ylz 3IYr&nbsp;&nbsp;&nbsp; 8tI Hzx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2WG &nbsp;&nbsp;rh9c &nbsp;&nbsp;ol0x N &nbsp;&nbsp;!@-4ql o  23 _R  &nbsp;&nbsp;T ha}W #!I-)9 &nbsp;&nbsp;(Bwh&M &nbsp;&nbsp;-0KmV D5&nbsp;&nbsp;nlzq ^m@:&nbsp;&nbsp;&nbsp;ll &nbsp;&nbsp;! o-dr&nbsp;&nbsp;&nbsp;Zo) izW2k *%4 &nbsp;&nbsp;2js jS &YBt xpLg$g&nbsp;&nbsp;&nbsp;G#ub  # Tg=h &nbsp;&nbsp;Oc0d5I d2Uk8-*&nbsp;&nbsp;s )@&nbsp;( # k  jk2";
	var r3 = "&nbsp;&nbsp;%<br>&nbsp;&nbsp;&nbsp;&nbsp;%*h&nbsp;&nbsp; i &nbsp;&nbsp;&nbsp;&nbsp;ylz 3I&nbsp;&nbsp;&nbsp;&nbsp;Yr &nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;tI H&nbsp;&nbsp;&nbsp;&nbsp;zx 2W&nbsp;&nbsp;&nbsp;&nbsp;G &nbsp;&nbsp;rh9c &nbsp;&nbsp;ol0x N &nbsp;&nbsp;!@-4ql o  &nbsp;&nbsp;&nbsp;&nbsp;23 _R  &nbsp;&nbsp;T ha}W #!I-)9 &nbsp;&nbsp;(Bwh&M &nbsp;&nbsp;-0KmV D5&nbsp;&nbsp;nlzq ^m&nbsp;&nbsp;&nbsp;&nbsp;@:&nbsp;&nbsp;&nbsp;ll &nbsp;&nbsp;! o-dr&nbsp;&nbsp;&nbsp;Zo) izW&nbsp;&nbsp;&nbsp;&nbsp;2k &nbsp;&nbsp;*%4 &nbsp;&nbsp;2js jS &YBt xpLg$g&nbsp;&nbsp;&nbsp;G#ub  &nbsp;&nbsp;&nbsp;&nbsp;# Tg=h&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Oc0d5I d2Uk8-*&nbsp;&nbsp;s )@&nbsp;( # k  &nbsp;&nbsp;&nbsp;&nbsp;jk2";
	var r4 = "&nbsp;&nbsp;%<br>&nbsp;&nbsp;&nbsp;&nbsp;%*<br>h&nbsp;&nbsp; i &nbsp;&nbsp;&nbsp;&nbsp;ylz 3I&nbsp;&nbsp;&nbsp;&nbsp;Yr &nbsp;&nbsp;8&nbsp;<br>&nbsp;&nbsp;&nbsp;tI H&nbsp;&nbsp;&nbsp;&nbsp;zx 2W&nbsp;&nbsp;<br>&nbsp;&nbsp;G &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rh9c &nbsp;&nbsp;ol0x N &nbsp;&nbsp;!@-4ql o  &nbsp;&nbsp;&nbsp;&nbsp;23 _R  &nbsp;&nbsp;T ha}W <br>#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!I-)9 <br>&nbsp;&nbsp;(Bwh&M &nbsp;&nbsp;&nbsp;Zo) izW<br>&nbsp;&nbsp;&nbsp;&nbsp;2k &nbsp;&nbsp;*%4 &nbsp;&nbsp;2js jS &YBt xpLg$g&nbsp;&nbsp;&nbsp; Tg=h&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Oc0d5I d2Uk8-*&nbsp;&nbsp;s )@&nbsp;( # k  &nbsp;&nbsp;&nbsp;&nbsp;jk2";
	var r5 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;!@ &nbsp;&nbsp;&nbsp;&nbsp; *<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;&nbsp;((&nbsp;&nbsp;&nbsp;&nbsp;j<br>8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	$('dxoverlap').update('ICE Breaker Initializing...').pulsate({pulses: 6, duration: 8.3});
	$('dxcrypt').update('<div id="scroller">'+b+b+r+r+r+r2+r2+r3+r3+r3+r4+r4+r4+r5+r5+'</div>');
	new Effect.Move('scroller',{x: 0, y: -2100, duration: 8,transition: Effect.Transitions.linear, mode:'relative'});
	new Ajax.Request (base_url+'auth/hack',{postBody: 'key=abcedfg'});	//only avaible via icebreaker
	var fn = function() {
		$('dxoverlap').update('ICE Breaker Hack Successful');
		//$('icebreaker').fade({duration: 2, delay:1, transition: Effect.Transitions.linear});
		var fn2 = function() { window.location = window.location; }
		fn2.delay(2);
	}
	fn.delay(7.6);
}
