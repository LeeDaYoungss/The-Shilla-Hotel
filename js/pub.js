$(function(){ 

  // header footer load
  $('#header').load('header.html', function(){
    
  });
  $('#footer').load('footer.html',function(){

  });

  // header 언어 영역
  $(".lang-drop > button").click(function(){
    
  })

  //sub-breadcrumbs
	$(".breadcrumbs li button").off('click').click(function(){
		// console.log($(this), $(this).closest('li').find('.drop-menu'), '빵 부스러기')
		
		if($(this).closest('li').hasClass('on') === true){
			$(this).closest('li').removeClass("on");
			$(this).closest('li').find('.drop-menu').stop().slideUp(300);
		}else{
			$(".breadcrumbs li").removeClass("on");
			$(this).closest('li').addClass("on");
			$('.drop-menu').stop().slideUp(300);
			$(this).closest('li').find('.drop-menu').stop().slideDown({
				duration: 300
			});
		};
	})

	// 파일 업로드 텍스트 출력
	$('#file').change(function(){
		let fileName = $(this).val().split('\\').pop(); // 파일 경로에서 파일명만 추출
		$('.file-name').text(fileName).addClass('on'); // 파일명 표시	
	});


	// 데이트픽커 공통
	// $( ".date-picker").each((index, item)=>{
	// 	// console.log($(item).data('month'), $(item).data('month') != undefined )
	// 	$(item).datepicker();

	// 	//한글적용을 위해 추가
	// 	$.datepicker.setDefaults({
	// 		dateFormat: 'yy-mm-dd',
	// 		prevText: '이전 달',
	// 		nextText: '다음 달',
	// 		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	// 		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	// 		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	// 		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	// 		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	// 		showMonthAfterYear: true,
	// 		yearSuffix: '년'
	// 		// defaultDate: '+1m'
	// 		// defaultDate: $(item).data('month') != undefined ? +$(item).data('month')+'m' : '+1m'
	// 		// defaultDate: $(item).data('month') != undefined ? '+5m' : '+1m'
			
	// 	});
	// })

	// 현재달
	$("#today-month").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		yearSuffix: '년',
		
	});

	// 다음달
	$("#next-month").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		yearSuffix: '년',
		defaultDate: '+1m'
		
	});


	// FAQ TAB
	$('.tab-list.faq li').eq(0).addClass('on');
	$('.tab-list.faq .tab-pannel').eq(0).addClass('on');
	
	$('.tab-list.faq li').click(function(e){
		e.preventDefault();
		$('.tab-list.faq li').removeClass('on');
		$(this).addClass('on');
		
		$(this).closest('.tab-wrap').find('.tab-content > .tab-pannel').removeClass('on');
		$(this).closest('.tab-wrap').find('.tab-content > .tab-pannel:eq('+$(this).closest('li').index()+')').addClass('on');
	})

	// ACCORDIAN
	$('.acco-item').eq(0).addClass('on');
	
	$('.acco-btn').click(function(e){
		e.preventDefault();
		console.log($(this).closest('.acco-item'))
		if(!$(this).closest('.acco-item').hasClass('on')){
			$(this).closest('.acco-item').addClass('on');
			$(this).closest('.acco-head').siblings('.acco-body').slideDown(400);
		}else{
			$(this).closest('.acco-item').removeClass('on');
			$(this).closest('.acco-head').siblings('.acco-body').slideUp(400);
		}
	})
	
});