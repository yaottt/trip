/*
* @Author: admin
* @Date:   2018-06-12 15:27:55
* @Last Modified by:   hp
* @Last Modified time: 2019-09-18 18:33:56
*/
$('.tour_fixed ul li:nth-of-type(2)').hover(function() {
	$('.tour_app').css('display', 'block');
}, function() {
	$('.tour_app').css('display', 'none');
});
$(window).scroll(function(event) {
	if($(window).scrollTop()>=500){
		$('.tour_fixed').css('display', 'block');
	}else{
		$('.tour_fixed').css('display', 'none');
	}
});
$('.tour_fixed ul li:nth-of-type(1)').click(function(event) {
	$('html,body').animate({'scrollTop':'0'}, 500)
});
$('.tour_fixed li').hover(function() {
	$(this).css({'background': '#95d195','color':'#fff'});
}, function() {
	$(this).css({'background': '#fff','color':'#b2b2b2'});
});


$('.nav>li span').mouseenter(function(event) {
	$(this).css('color', '#10b041');
	$(this).parent().parent().children('div').show();
	$(this).parent().parent().siblings().children('div').hide();
});
$('.nav>li span').mouseleave(function(event) {
	$(this).css('color', 'silver');
	// $('.nav>li span').eq(3).css('color', '#10b041');
});
$('.nav>li').mouseleave(function(event) {
	$(this).children('div').hide();
});

$('.cmt_center ol li').eq(0).hover(function(){
	$(this).css('background','#46baff');

})
$('.cmt_center ol li').eq(0).mouseleave(function(){
	$(this).css('background','#1c95dd');
})
$('.cmt_center ol li').eq(1).hover(function(){
	$(this).css({'background':'#3f9f5f','color':'white'});
	$('.list-symbol').css('border-top-color','#fff')
})
$('.cmt_center ol li').eq(1).mouseleave(function(){
	$(this).css({'background':'white','color':'#71b688'});
	$('.list-symbol').css('border-top-color','#10b041')
})

// ----------img_box的动画---------------
var timer;
var num=0;
function move(){
	timer=setInterval(function(){
		num++;
		if(num>4){num=0;}
		// var src=$('.img img').eq(num).attr("src");
		// $('.img_box').css('background','url('+src+')');
		// $('.img_box').css('background','url('../images/community_bg+num+.jpg')');
		$('.img img').eq(num).fadeIn();
		$('.img img').eq(num).siblings().fadeOut();
		$('.box_right p').eq(num).fadeIn();
		$('.box_right p').eq(num).siblings('p').fadeOut();
		$('.box_center .imghead .head').eq(num).fadeIn();
		$('.box_center .imghead .head').eq(num).siblings().fadeOut();
		$('.box_right ul li').eq(num).css('border','2px solid white');
		$('.box_right ul li').eq(num).siblings('li').css('border','2px solid rgba(0, 0, 0, 0)');
		$('.point').css('left',num*58+22+'px')
		var url='url(../images/community_bg'+(num+1)+'.jpg)'
		$('.img_box').css('background-image', url);
		$('.box-name p').eq(num).css('display', 'block').siblings().css('display','none');
		// $('.img_box').css('background-repeat', 'no-repeat');
		// $('.img_box').css('background-position','100% 100% ');
		// console.log(num)
	},2000)
}

$('.box_right ul li').hover(function(){
	var i=$(this).index()
	// console.log(i);
	// if(i>4){i=0}
	$(this).css('border','2px solid white').siblings('li').css('border','2px solid rgba(0, 0, 0, 0)');;
	$('.img img').eq(i-1).fadeIn().siblings().fadeOut();
		$('.box_right p').eq(i).fadeIn();
		$('.box_right p').eq(i).siblings('p').fadeOut();
		$('.box_center .imghead .head').eq(i).fadeIn();
		$('.box_center .imghead .head').eq(i).siblings().fadeOut();
		$('.point').css('left',(i-1)*58+22+'px');
		var url='url(../images/community_bg'+(i)+'.jpg)'
		$('.img_box').css('background-image', url);
		$('.box-name p').eq(i).css('display', 'block').siblings().css('display','none');
		num=i-1;
		// console.log('num:'+num)
});

move();
$('.box_center').hover(function(){
		clearInterval(timer);
	});
$('.box_right ul li').hover(function(){
		clearInterval(timer);
	});
$('.box_center').mouseleave(function(){
	move()
});

// $('.box_right ul li').hover(function(){
// 	$(this).eq(num).css('border','2px solid white');
// 	$(this).eq(num).siblings('li').css('border','2px solid rgba(0, 0, 0, 0)');
// 	num=$(this).index();
// 	$('.img img').eq(num).show();
// 	$('.img img').eq(num).siblings('li').hide();
// });

$('#nav li').click(function(){
	num=$(this).index();
	$(this).addClass('border');
	$(this).siblings().removeClass('border');
	$('.center_left>div').eq(num).show();
	$('.center_left>div').eq(num).siblings('div').hide();
	$('.center_left>div').eq(3).show();
})

$('.small div').click(function(){
	$(this);
	var small=$(this).parent();
	small.remove();
});

$('.small span').hover(function(){
	$(this).css('color','#10b041');
})
$('.small span').mouseleave(function(){
	$(this).css('color','black');
})

$('.bottom').hover(function(){
	$(this).addClass('bottomchange');
})
$('.bottom').mouseleave(function() {
	$(this).removeClass('bottomchange');
});

$('.two p').hover(function(){
	$(this).css('color','#10b041');
});
$('.two p').mouseleave(function(){
	$(this).css('color','black');
})

$('.right_top span').hover(function(){
	$('.right_top span').addClass('hover')
})
$('.right_top span').mouseleave(function(){
	$('.right_top span').removeClass('hover')
})









