$(function(){ 
	var swiper = new Swiper(".swiper", {
		loop:true,
		autoplay: {
			delay: 3000,			
			pauseOnMouseEnter:true
		},	
		
		
		slidesPerView: 1,
 		 spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},		
		pagination: {  
			el: ".swiper-pagination", 
			clickable: true, 		
		},
		direction:"horizontal",
		breakpoints: {
		  480: {
			slidesPerView: 1,
			spaceBetween: 20,
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 40,
		  },
		  1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		  },
		},
		
		

		
		
	});
	// $('.swiper-slide').hover(function() {swiper.autoplay.stop();}, function(){swiper.autoplay.start();});
	// 자동 재생 시작, 정지 버튼 만들기 스크립트
	console.log(swiper);

	$('.swiper-pause').click(function(){
		let targetId = $(this).closest('.tabn').attr('data-ind');
		console.log('멈춤');
		swiper[targetId].autoplay.stop()
	})
	$('.swiper-play').click(function(){
		let targetId = $(this).closest('.tabn').attr('data-ind');
		console.log('시작');
		swiper[targetId].autoplay.start()
	})
	
		console.log(swiper);
	$('.swiper .prevar').click(function(){
	let id= $(this).closest('.swiper').attr('data-id');
	swiper[id].slidePrev()
	});
	$('.swiper .nextar').click(function(){
	let id= $(this).closest('.swiper').attr('data-id');
	swiper[id].slideNext()
	});


	let tabmenu = $('.tab-menu a');
	let tabcontent = $('.tab-content > div');

	tabmenu.click(function(e){
		e.preventDefault();
		tabmenu.removeClass('active');
		$(this).addClass('active');
		let targetIdx = $(this).parent().index();  // 윗부모
		console.log(targetIdx);
		tabcontent.hide(); // 모든 컨텐츠가 안보이게
		tabcontent.eq(targetIdx).show(); // 인덱스 번호로 요소를 선택하는 메서드 eq
	})
	tabmenu.eq(0).trigger('click');

	let tabmenu2 = $('.tab-menu2 a');
	let tabcontent2 = $('.tab-content2 > div');

	tabmenu2.click(function(e){
		e.preventDefault();
		tabmenu2.removeClass('active');
		$(this).addClass('active');
		let targetIdx2 = $(this).parent().index();  // 윗부모
		console.log(targetIdx2);
		tabcontent2.hide(); // 모든 컨텐츠가 안보이게
		tabcontent2.eq(targetIdx2).show(); // 인덱스 번호로 요소를 선택하는 메서드 eq
	})
	tabmenu2.eq(0).trigger('click');




/* membership */
let slideWrapper = $('.membership-card'),
    slides = slideWrapper.find('.members'),
    currentIdx = 0,
    pager = slideWrapper.find('.membership-pager');
    

//페이저 클릭
let pagerBtn = pager.find('a');

pagerBtn.click(function(e){
  e.preventDefault();
  moveSlide($(this).index());
});

//슬라이드 이동 함수
function moveSlide(num){
  let currentSlide = slides.eq(currentIdx);
  let nextSlide = slides.eq(num);

  currentSlide.css({left:0}).animate({left:'-100%'});
  nextSlide.css({left:'100%'}).animate({left:'0'});
  currentIdx = num;

  //페이저 활성화
  // pagerBtn.removeClass('active');
  pagerBtn.eq(currentIdx).addClass('active');
  pagerBtn.eq(currentIdx).siblings().removeClass('active');

}
pagerBtn.eq(0).addClass('active');


/* 시설소개 */

const swipers = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  centeredSlides: true,
  navigation: {
    nextEl: '.intro-next',
    prevEl: '.intro-prev',
  }
});




  //변수지정
let menu = $('.slidemenu li');
let content = $('.panel');

//메뉴 클릭 이동

menu.click(function(e){
  e.preventDefault();
  // menu.removeClass('on');
  // $(this).addClass('on');
  let targetSectionOst = content.eq($(this).index()).offset().top;
  $('html,body').stop().animate({scrollTop:targetSectionOst},500,'easeOutCubic');
});
/*
변수명 targetSectionOst에 클릭한 그요소의 순번에 해당하는 content가 화면 상단에서 떨어진 거리를 저장
그 거리 만큼 html,body에 스크롤양을 생성한다.
jquery_base/b/04_back_to_top 참조
*/

//스크롤 이동 반영하기  
$(window).scroll(()=>{
let sct = $(window).scrollTop();
/*
content들 마다 할일
 만약 각 content가 화면에서 떨어진 거리보다 스크롤이 많다면
 모든 메뉴에서 on을 제거하고
 그 content의 인덱스 번호에 해당하는 menu에 on추가
*/
$(window).scroll(()=>{
let sct = $(window).scrollTop();
content.each(function(idx){
  if($(this).offset().top - 450 <=sct){
	menu.removeClass('on');
	menu.eq(idx).addClass('on');
  }
})
});
});










});