new WOW().init();
//toggle事件
$.fn.toggle = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggle = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
    toggle.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }
    return this.click( toggle );
};
//导航切换城市
$('.logo .change-city').click(function(){
	$('.city').show();
})
$('.city i').click(function(){
	$('.city').hide();
})
//首页切换新闻滚动
var news=0;
var newLi=$('.index-news .news-content li').eq(0).clone();
$('.index-news .news-content ul').append(newLi);
var newsLength=$('.index-news .news-content li').length-1;
$('.index-news .fa-angle-left').click(function(){
	news--;
	if(news<0){
		news=newsLength-1;
		$('.index-news .news-content ul').css('top',-newsLength*70+'px');
	}
	$('.index-news .news-content ul').stop().animate({'top':-news*70+'px'},500);
})
$('.index-news .fa-angle-right').click(function(){
	news++;
	if(news>newsLength){
		news=1;
		$('.index-news .news-content ul').css('top','0px');
	}
	$('.index-news .news-content ul').stop().animate({'top':-news*70+'px'},500);
})
//活动页面分类
$('.activity .title .operate button').toggle(function(){
	$(this).find('i').removeClass('fa-sort-up').addClass('fa-sort-down');
	$(this).find('span').html('展开');
	$(this).parent().prev().height('46');
},function(){
	$(this).find('i').removeClass('fa-sort-down').addClass('fa-sort-up');
	$(this).find('span').html('收起');
	$(this).parent().prev().height('auto');
})
$('.activity .title .content a').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})
