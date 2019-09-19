/*
* @Author: Administrator
* @Date:   2018-06-15 18:04:01
* @Last Modified by:   hp
* @Last Modified time: 2019-09-18 09:20:41
*/
// 鼠标经过头顶的导航栏事件

$('.hander_nav_li').mouseenter(function(event) {
	$(this).css('border-top','3px solid #ffffff' );
	$(this).children('.hander_nav_li_ul').show();
});
$('.hander_nav_li').mouseleave(function(event) {
	$(this).css('border-top','3px solid rgba(0, 0, 0, 0)' );
	$(this).children('.hander_nav_li_ul').hide();

});
$('.hander_nav_li_ul').mouseenter(function(event) {
	$(this).show();
	return false;
});
$('.hander_nav_li_ul').mouseleave(function(event) {
	$(this).hide();
	return false;
});

$('.hander_nav_li_ul li').hover(function() {
	$(this).css('background','#e3fae1');
}, function() {
		$(this).css('background','#ffffff');
});

//图片加阴影
$('.con_1_ul li').hover(function() {
	$(this).addClass('current');
}, function() {
	$(this).removeClass('current');
});
$('.mgs').hover(function() {
	$(this).children('p').css('color', '#28cc7b');
}, function() {
	$(this).children('p').css('color', '#323232');
});

// 商城切换
var i=0;
$('.change-text').click(function() {
	
	i++;
	console.log(i)
	// $(this).css('background', '#fff');
	// $(this).siblings('span').css('background', 'transparent');
	if(i>4){
		i=0;
	}
	$('.con_2_box1 ul').eq(i).css('display', 'block');
	$('.con_2_box1 ul').eq(i).siblings('ul').css('display', 'none');

});
$('.con_2_box1 .box_1_mr').hover(function() {
	$(this).children('a').addClass('current-shadow')
}, function() {
	$(this).children('a').removeClass('current-shadow')
});

// 热门游记与话题
$('.box_3_ctr span').hover(function() {
	var i=$(this).index();
	$(this).css('background', '#1ab05f');
	$(this).siblings('span').css('background', '#d7d7d7');
	$('.con3_box1 ul').eq(i).css('display', 'block');
	$('.con3_box1 ul').eq(i).siblings('ul').css('display', 'none');

});
$('.con_3 .box_3_mr a').hover(function() {
	$(this).addClass('current-shadow')
}, function() {
	$(this).removeClass('current-shadow')
});



// con4
// 头像滑动
var num1=0;
var timer2;
function move(){
timer2=setInterval(function(){
		num1++;
		if(num1>9){
			num1=0;
			$('.right2 .right2_roll ul').css('left', -num1*60);
			num1=1;
		}
		$('.right2 .right2_roll ul').animate({'left':-num1*60});
	},2000)
}
move();
$('.right2').hover(function() {
	clearInterval(timer2);
	$('.right2_roll li img').css('transform','scale(1.1)')
}, function() {
	move();
	$('.right2_roll li img').css('transform','scale(1)')
});
// 右侧鼠标切换图片
var mun=0;
$('.wapper .title li').hover(function() {
	mun=$(this).index();
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('.wapper .w_img li').eq(mun).fadeIn();
	$('.wapper .w_img li').eq(mun).siblings().fadeOut();

});
// 右侧图片自动切换
var timer1;
clearInterval(timer1);
function fade(){
	timer1=setInterval(function(){
		mun++;
		if(mun>2){
			mun=0;
		}
		$('.wapper .w_img li').eq(mun).fadeIn();
		$('.wapper .w_img li').eq(mun).siblings().fadeOut();
		$('.wapper .title li').eq(mun).addClass('current');
		$('.wapper .title li').eq(mun).siblings().removeClass('current');
	},2000)
}
fade();
$('.wapper').hover(function() {
	clearInterval(timer1);
}, function() {
	fade();
});

// footer鼠标移入加阴影
$('.con_m_left .l_left').hover(function() {
	$(this).addClass('current-shadow');
}, function() {
	$(this).removeClass('current-shadow');
});

//头顶图片切换
var timer;
var num=0;
function go(){
	timer=setInterval(function(){
		var w=$('.hander_img_ul li img').width();
		num++;
		if(num>4){
			num=0;
			$('.hander_img_ul').css('left', -num*w);
			num=1;
		}
		$('.hander_img_ul').animate({'left':-num*w});
		if(num==4){
			// $('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut(2000);
		}
		// $('.txt').attr("placeholder",arr[num]);
		$('.text_paint').eq(num).fadeIn();
		$('.text_paint').eq(num).siblings('.text_paint').fadeOut(2000);
	},3000)
}
go();
$('.hander_img').hover(function() {
	clearInterval(timer);
}, function() {
	go();
});

// 点击左右切换图片
$('.left').click(function(event) {
	var w=$('.hander_img_ul li img').width();
	num--;
	if(num<0){
        num=4;
        $('.hander_img_ul').css('left', -num*w); 
        num=3;
    }
    if(num==4){
			$('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut(2000);
		}
	$('.hander_img_ul').animate({'left':-num*w});
	// $('.txt').attr("placeholder",arr[num]);
	$('.text_paint').eq(num).fadeIn();
	$('.text_paint').eq(num).siblings('.text_paint').fadeOut(2000);
});
$('.right').click(function(event) {
	var w=$('.hander_img_ul li img').width();
	num++;
	if(num>4){
        num=0;
        $('.hander_img_ul').css('left', -num*w); 
        num=1;
    }
    if(num==4){
			// $('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut(1000);
		}
	$('.hander_img_ul').animate({'left':-num*w});
	$('.text_paint').eq(num).fadeIn();
	$('.text_paint').eq(num).siblings('.text_paint').fadeOut(1000);
});
	// 轮播中间内容
	$('.img_search .one').click(function(event) {
		$(this).addClass('addcolor').siblings('.img_search ul li').css('background-color', '');

		$('.search_input').eq(0).addClass('addcolor')
		$('.search_input').eq(0).css('display','block').siblings('.search_input').css('display', 'none');
	});
	$('.img_search .two').click(function(event) {
		$('.search_input').eq(1).css('background-color', 'rgba(40,213,164,.8)');
		$('.search_input').eq(1).css('display','block').siblings('.search_input').css('display', 'none');
		$('.img_search ul li').removeClass('addcolor')
		$('.img_search ul li').eq(1).css('background-color', 'rgba(40,213,164,.8)')
		.siblings('.img_search ul li').css('background-color', '');

	});
	$('.img_search .three').click(function(event) {
		$('.search_input').eq(2).css('background-color', 'rgba(40,213,164,.8)');
		$('.search_input').eq(2).css('display','block').siblings('.search_input').css('display', 'none');
		$('.img_search ul li').removeClass('addcolor')
		$('.img_search ul li').eq(2).css('background-color', 'rgba(40,213,164,.8)')
		.siblings('.img_search ul li').css('background-color', '');
	});










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


// 固定顶部
var i=0;
$('.home-search .selector-hotel').click(function(event) {
	i++;
	if(i>1){
		$('.selector-opstions').css('display', 'none');
		$('.light').removeClass('change')
		i=0;
	}else{
		$('.selector-opstions').css('display', 'block');
		$('.light').addClass('change')
	}
	
});
// 热门城市
$('.hander_img .search_input .txt1').click(function(event) {
	// $('.bg-flag').css('display','block')
	// $('.bg-tips').css('top','0px')
	// $('.hot-city').css('top','400px')
});
$('.bg-tips').click(function(event) {
	$('.bg-flag').css('display','none')
});
$('.home-search .search_input .txt1').click(function(event) {
	$('.bg-flag').css('display','block')
});
$('.bg-tips').click(function(event) {
	$('.bg-flag').css('display','none')
});

$(window).scroll(function(){
	var h=$('.center .title').offset().top;
	if($(document).scrollTop()>h+400){
		$('.home-search').css('display','block')
	}else{
		$('.home-search').css('display','none')
	}
})


$('.search-city .txt1').click(function(event) {
	$('.hander .bg-tips1').css('display', 'block');
	$('.hander .bg-flag1').css('display','block')
});
$('.search-problem .txt').click(function(event) {
	$('.hander .bg-tips1').css('display', 'block');
	$('.hander .bg-flag1').css('display','block')
});
$('.hander  .bg-tips1').click(function(event) {
	$('.hander .bg-tips1').css('display', 'none');
	$('.hander .bg-flag1').css('display','none')
});