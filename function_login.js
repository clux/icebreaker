function init_login(){
	if (document.body.offsetHeight < window.innerHeight) { //short page
		//$('footer').addClassName('push').setStyle({'margin-left': ( window.innerWidth-$('footer').getWidth() ) / 2 + 'px'}); //push footer down + center
		$$('body')[0].setStyle({height: 500+'px'});
	}
	var notlogged = $$('a[href*="/auth/login"]').invoke('observe','click', req_login).size() > 0;
	if (notlogged) 	$$('a[href*="/entries/post"]').invoke('observe','click', req_login);
	observe_logout();
	if ($('login_form')) $('login_form').observe('submit', ajaxlogin);
	$$('#notif_count','#weird').invoke('observe','click', function(){ new Effect.toggle('notif','blind',{duration: 0.6}); });
	if ($('icebreaker')) $('icebreaker').observe('submit',hack);
	var widt = window.innerWidth;
	if ( $$('pre')[0] ) $$('pre').invoke('setStyle',{width:widt-600+'px'});
	var toggle_search_ele = function(e,ele){
		e = (ele) ? ele : e.findElement('a');
		e.up('ul').descendants('a').invoke('removeClassName','act');
		searchtype = e.addClassName('act').readAttribute('id').substr(2);
		$('searchField').remove(); //clears autocompleter by recreating that field
		new Insertion.Before( $$('#mega_form div input')[0] , '<input type="text" name="s" onclick="this.value = \'\';" id="searchField">');
		if (searchtype == 2) new Ajax.Autocompleter('searchField', 'acc', base_url+'user/search/', {parameters: 'type=2',paramName: 'user'});
		$('mega_form').writeAttribute('action',base_url+['entries/browse','events/search','user/search','links/browse'][searchtype]);
	}
	var url = window.location.toString();
	if (url.include('/events/')) toggle_search_ele(false, $('s_1') );
	else if (url.include('/user/')) toggle_search_ele(false, $('s_2') );
	else if (url.include('/links/')) toggle_search_ele(false, $('s_3') );
	$$('#search_nav a').invoke('observe','click',toggle_search_ele);
	if ( $$('.pagin')[0] ) $$('.pagin a').findAll(function(e){return e.empty();}).invoke('hide');
	$('logo_nhov').observe('mouseover',function(){
		if ( !$('logo_hov').visible() ) $('logo_hov').appear({ duration:0.5,queue:'front',scope:'logos',limit:2 });
	});
	$('logo_hov').observe('mouseout',function(){
		if (  $('logo_hov').visible() ) $('logo_hov').fade({ duration:0.5,queue:'end',scope:'logos',limit:2 });
	});
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

function clear_all(uid){ //mark as read
	new Ajax.Request (base_url+'events/ajax_clear', {postBody: 'uid='+uid});
	$$('#notif ul b').invoke('addClassName','jax');
	$('notif_count').removeClassName('new').writeAttribute('title','No new notifications');
}

function login_toggle(d){
	gray(d);
	if (!d) $('login_link').value = '';
	new Effect.toggle('loginbox','appear',{duration:0.3});
	var fn = function() { $('dxusr').select(); }
	if (d) fn.delay(0.3);
}
function ajaxlogin(ev){
	ev.stop();
	new Ajax.Request(base_url+'auth/ajaxlogin', {
		postBody: $('login_form').serialize(),
		onCreate: function() {$('dxerror').update('Verifying...').appear({duration:0.5});}, 
		onSuccess: function(r) {
			if (r.responseText) {
				$('dxerror').update('Success');
				if ( $F('login_link') ) window.location = $F('login_link');
				else window.location = window.location;
			} else $('dxerror').update('Unauthorized access denied.');
		}
	});
}
function observe_logout(){
	$$('a[href*="auth/logout"]').invoke('observe','click', function(e) {
		e.stop();
		new Ajax.Request(base_url+'auth/logout', {
			onSuccess: function() { 
				window.location = window.location;
				$('dxerror').update('');				
			}
		});
	});
}
function gray(show) {
	dark = $('gray');
	if (!dark) {
		var docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
		$$('body')[0].insert('<div id="gray"></div>');
		dark = $('gray').setStyle({height: docHeight+'px'}).setOpacity(0.5);	//could do this with morph
	} 
	if (show) {
        dark.show();
        $$('iframe').invoke('hide');
    }
	else {
        dark.hide();
        $$('iframe').invoke('show');
    }
}