/*
* @Author: Administrator
* @Date:   2018-06-20 19:23:26
* @Last Modified by:   hp
* @Last Modified time: 2019-09-17 12:15:10
*/
$('#nav li').click(function(){
	$(this).addClass('change');
	$(this).siblings().removeClass('change');
	var num=$(this).index();
	console.log(num)
	$('.loginbox div').eq(num).show();
	$('.loginbox div').eq(num).siblings('.loginbox div').hide();
	if(num==1){
		$('.right').css('height', '497px');
	}else{
		$('.right').css('height', '435px');
	}
})

$('button').hover(function(){
	$(this).css('background','#4dc575');
})
$('button').mouseleave(function(){
	$(this).css('background','#3f9f5f');
})

$('#way1 li:nth-of-type(2)').hover(function(){
	$(this).css('background','#12b6f5');
})
$('#way1 li:nth-of-type(4)').hover(function(){
	$(this).css('background','#de5145');
})
$('#way1 li:nth-of-type(1)').hover(function(){
	$(this).css('background','#ff7a09');
})
$('#way1 li:nth-of-type(3)').hover(function(){
	$(this).css('background','#279f4f');
})
$('#way1 li').mouseleave(function(){
	$(this).css('background','#d7d7d7');
})


$('#way2 li:nth-of-type(2)').hover(function(){
	$(this).css('background','#12b6f5');
})
$('#way2 li:nth-of-type(4)').hover(function(){
	$(this).css('background','#de5145');
})
$('#way2 li:nth-of-type(1)').hover(function(){
	$(this).css('background','#ff7a09');
})
$('#way2 li:nth-of-type(3)').hover(function(){
	$(this).css('background','#279f4f');
})
$('#way2 li').mouseleave(function(){
	$(this).css('background','#d7d7d7');
})