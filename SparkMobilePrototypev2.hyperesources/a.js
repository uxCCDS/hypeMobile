(function(){
	var LOCK_ANIMATION = false;

	var ISOPEN_SPACEBALL = false;
	var ISOPEN_RECENT_MASK =false;


	var MA ={

	};

	MA.switchRecentsFilter = function(){
		if(!LOCK_ANIMATION){
			LOCK_ANIMATION = true;
			if(ISOPEN_RECENT_MASK){
				Ash.play([{
					dom:document.getElementById('recent_filter_mask'),
					css:[{opacity:1},{opacity:0,display:'none'}],
					time:10
				},{
					dom:document.getElementById('recent_dropdown_icon'),
					css:[{transform:'translateX(225px) translateY(46px) rotate(0deg)'},{transform:'translateX(225px) translateY(46px) rotate(180deg)'}],
					time:10
				}],1,function(){
					ISOPEN_RECENT_MASK = false;
					LOCK_ANIMATION = false;
				});
			}else{
				Ash.play([{
					dom:document.getElementById('recent_filter_mask'),
					css:[{opacity:0,display:''},{opacity:1}],
					time:10
				},{
					dom:document.getElementById('recent_dropdown_icon'),
					css:[{transform:'translateX(225px) translateY(46px) rotate(180deg)'},{transform:'translateX(225px) translateY(46px) rotate(0deg)'}],
					time:10
				}],1,function(){
					ISOPEN_RECENT_MASK = true;
					LOCK_ANIMATION = false;
				});			
			}
		}
	};

	MA.SpaceBallGoTo = function(hypeDocument,color,x,y,sceneId){
		if(!LOCK_ANIMATION){
			LOCK_ANIMATION = true;
			var x1=x+41-500,
				y1=y+41-500,
				dot = document.getElementById('dotOut1');
			Ash.play([{
				dom:dot,
				css:[{opacity:0,display:''},{opacity:1}],
				time:5
			},{
				dom:dot,
				css:[{width:'82px',height:'82px',transform:'translateX('+x+'px) translateY('+y+'px) rotateY(0deg)','border-radius':'50%','background-color':color},{width:'1000px',height:'1000px',transform:'translateX('+x1+'px) translateY('+y1+'px) rotateY(0deg)','background-color':'rgb(255,255,255)'}],
				tween:'easeInInt',
				time:20
			}],1,function(){
				hypeDocument.showSceneNamed(sceneId,hypeDocument.kSceneTransitionCrossfade,0.4);
				ISOPEN_SPACEBALL = false;
				LOCK_ANIMATION = false;
			});
		}
	};

	MA.spaceballInRoom = function(hypeDocument,color,x,y,sceneId){
		if(!LOCK_ANIMATION){
			LOCK_ANIMATION = true;
			var x1=x+41-500,
				y1=y+41-500,
				dot = document.getElementById('radarInRoom');
			Ash.play([{
				dom:dot,
				css:[{opacity:0,display:''},{opacity:1}],
				time:5
			},{
				dom:dot,
				css:[{width:'82px',height:'82px',transform:'translateX('+x+'px) translateY('+y+'px) rotateY(0deg)','border-radius':'50%','background-color':color},{width:'1000px',height:'1000px',transform:'translateX('+x1+'px) translateY('+y1+'px) rotateY(0deg)','background-color':'rgb(255,255,255)'}],
				tween:'easeInInt',
				time:20
			}],1,function(){
				hypeDocument.showSceneNamed(sceneId,hypeDocument.kSceneTransitionCrossfade,0.4);
				LOCK_ANIMATION = false;
			});
		}
	};

	MA.switchActivityBoard = function(){
		if(!LOCK_ANIMATION){
			LOCK_ANIMATION = true;
			if(ISOPEN_SPACEBALL){
				Ash.play([{
					dom:document.getElementById('recents_active_btn'),
					css:[{'transform':'translateX(319px) translateY(27px) rotate(45deg)'},{'transform':'translateX(319px) translateY(27px) rotate(0deg)'}],
					time:10
				},{
					dom:document.getElementById('recents_ac_mask1'),
					css:[{opacity:1},{display:'none',opacity:0}],
					delay:18,
					time:4		
				},{
					dom:document.getElementById('recents_ac_mask2'),
					css:[{opacity:1},{display:'none',opacity:0}],
					delay:18,
					time:4		
				},{
					dom:document.getElementById('recents_acIcon_1'),
					css:[{'transform':'scale(1)',opacity:1},{'transform':'scale(0.4)',opacity:0.4,display:'none'} ],
					time:10						
				},{
					dom:document.getElementById('recents_acIcon_2'),
					css:[{'transform':'scale(1)',opacity:1},{'transform':'scale(0.4)',opacity:0.4,display:'none'} ],
					delay:2,
					time:10						
				},{
					dom:document.getElementById('recents_acIcon_3'),
					css:[{'transform':'scale(1)',opacity:1},{'transform':'scale(0.4)',opacity:0.4,display:'none'} ],
					delay:4,
					time:10						
				},{
					dom:document.getElementById('recents_acIcon_4'),
					css:[{'transform':'scale(1)',opacity:1},{'transform':'scale(0.4)',opacity:0.4,display:'none'} ],
					delay:6,
					time:10						
				},{
					dom:document.getElementById('recents_acIcon_5'),
					css:[{'transform':'scale(1)',opacity:1},{'transform':'scale(0.4)',opacity:0.4,display:'none'} ],
					delay:8,
					time:10						
				},{
					dom:document.getElementById('recents_acTxt_1'),
					css:[{opacity:1},{opacity:0,display:'none'}],
					time:10						
				},{
					dom:document.getElementById('recents_acTxt_2'),
					css:[{opacity:1},{opacity:0,display:'none'}],
					delay:2,
					time:10						
				},{
					dom:document.getElementById('recents_acTxt_3'),
					css:[{opacity:1},{opacity:0,display:'none'}],
					delay:4,
					time:10						
				},{
					dom:document.getElementById('recents_acTxt_4'),
					css:[{opacity:1},{opacity:0,display:'none'}],
					delay:6,
					time:10						
				},{
					dom:document.getElementById('recents_acTxt_5'),
					css:[{opacity:1},{opacity:0,display:'none'}],
					delay:8,
					time:10						
				}],1,function(){
					ISOPEN_SPACEBALL = false;
					LOCK_ANIMATION = false;
				});
			}else{
				Ash.play([{
					dom:document.getElementById('recents_active_btn'),
					css:[{'transform':'translateX(319px) translateY(27px) rotate(0deg)'},{'transform':'translateX(319px) translateY(27px) rotate(45deg)'}],
					time:10
				},{
					dom:document.getElementById('recents_ac_mask1'),
					css:[{display:'',opacity:0},{opacity:1}],
					time:4		
				},{
					dom:document.getElementById('recents_ac_mask2'),
					css:[{display:'',opacity:0},{opacity:1}],
					time:4		
				},{
					dom:document.getElementById('recents_acIcon_1'),
					css:[{'transform':'scale(0.4)',top:'246px',left:'30px',opacity:0.6,display:''},{'transform':'scale(1)',opacity:1} ],
					time:10,
					delay:4					
				},{
					dom:document.getElementById('recents_acIcon_2'),
					css:[{'transform':'scale(0.4)',top:'246px',left:'146px',opacity:0.6,display:''},{'transform':'scale(1)',opacity:1} ],
					time:10,
					delay:6					
				},{
					dom:document.getElementById('recents_acIcon_3'),
					css:[{'transform':'scale(0.4)',top:'246px',left:'262px',opacity:0.6,display:''},{'transform':'scale(1)',opacity:1} ],
					time:10,
					delay:8						
				},{
					dom:document.getElementById('recents_acIcon_4'),
					css:[{'transform':'scale(0.4)',top:'382px',left:'30px',opacity:0.6,display:''},{'transform':'scale(1)',opacity:1} ],
					time:10,
					delay:10						
				},{
					dom:document.getElementById('recents_acIcon_5'),
					css:[{'transform':'scale(0.4)',top:'382px',left:'146px',opacity:0.6,display:''},{'transform':'scale(1)',opacity:1} ],
					time:10,
					delay:12						
				},{
					dom:document.getElementById('recents_acTxt_1'),
					css:[{opacity:0,display:''},{opacity:1}],
					time:10,
					delay:4					
				},{
					dom:document.getElementById('recents_acTxt_2'),
					css:[{opacity:0,display:''},{opacity:1}],
					time:10,
					delay:6					
				},{
					dom:document.getElementById('recents_acTxt_3'),
					css:[{opacity:0,display:''},{opacity:1}],
					time:10,
					delay:8						
				},{
					dom:document.getElementById('recents_acTxt_4'),
					css:[{opacity:0,display:''},{opacity:1}],
					time:10,
					delay:10						
				},{
					dom:document.getElementById('recents_acTxt_5'),
					css:[{opacity:0,display:''},{opacity:1}],
					time:10,
					delay:12						
				}],1,function(){
					ISOPEN_SPACEBALL = true;
					LOCK_ANIMATION = false;					
				});
			}
		}
	};

	window.MA = MA;
})();