
$(".hmsx").click(function(){
	$(".zhezhao").toggle()
	var src = $(".hmsx>img").attr("src")
	if(src.match("down")){
		$(".hmsx>img").attr('src', 'images/up.png')
	}else{
		$(".hmsx>img").attr('src', 'images/down.png')
	}
})

$(".s-type button").click(function(){
	$(this).addClass('act').parent().siblings('.col-20').find('button').removeClass('act')
	return false
})

$.ajax({
  type: 'post',
  url: 'http://www.jdd966.com/CoBrandedCard/appUser/myCouponList',
  // data to be added to query string:
  data: { CARDCUST_ID: '6d7a2d8f64a44c0681c9cd277c68a324' },
  // type of data we are expecting in return:
  dataType: 'json',
  timeout: 300,
  context: $('body'),
  success: function(data){
    console.log(data.data)
	$.each(data.data, function(index, item){
		$(".list-group ul").append('<li><span>' + item.CUST_TEL + '</span><span class="pull-right money">￥' + item.ISPROCESS + '</span><span class="pull-right">服务费：</span></li>')
})
  },
  error: function(xhr, type){
    alert('Ajax error!')
  }
})