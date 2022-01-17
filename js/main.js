$(document).ready(function(){
  // 첫번째 스크롤 효과
  var page_trigger = 1,
  nextPage = $("#page_2").offset().top;;
  $(window).scroll(function(){
    if($(window).width() > 1024){
      if($(this).scrollTop() < 200&&page_trigger==1){
        $("html:not(:animated),body:not(:animated)").animate({
          scrollTop: nextPage + 'px'
        }, {
          duration: 800, complete: function(){
            page_trigger = 0;
          }
        });
      }
    }
  });

  // 스크롤에 따른 메뉴 효과적용
  $(window).scroll(function(){
    if($(this).scrollTop() > 1){
			$(".menubar").addClass("active");
		}else{
			$(".menubar").removeClass("active");
      page_trigger = 1;
		}
	});

  // 메뉴 링크 클릭효과
  $(".menu_list2, .more_btn").click(function(){
    var clicklink = $(this).attr("data-link"),
    movelink = $("#" + clicklink).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: movelink + 'px'
    }, {
      duration: 800, complete: function () {
      }
    });
  });

  // 메뉴 더보기
  var menuList = document.querySelector('.menu_list_m'),
  menuMore = document.querySelector('.menu_more'),
  // menuBkd = document.querySelector('.menu_background'),
  menuOpen = false;
  menuList.addEventListener('click', () => {
    if(!menuOpen){
      menuList.classList.add('active');
      menuMore.classList.add('active');
      menuOpen = true;
    }else{
      menuList.classList.remove('active');
      menuMore.classList.remove('active');
      menuOpen = false;
    }
  });

  // 페이지3 카운팅
  var check_trigger = false,
  p3_total,
  p3_point1,
  p3_point2,
  p3_point3;
  $(window).on('scroll',function() {
    if(checkVisible($('#page_3'))&&!check_trigger){
      p3_point1 = 71;
      $({ val : 0 }).delay(50).animate({ val : p3_point1 }, {
        duration: 1200,
        step: function(){
          p3_total = p3_pointWithCommas(Math.floor(this.val));
          $(".skills_point1").text(p3_total);
        }
      });
      p3_point2 = 51;
      $({ val : 0 }).delay(50).animate({ val : p3_point2 }, {
        duration: 1200,
        step: function(){
          p3_total = p3_pointWithCommas(Math.floor(this.val));
          $(".skills_point2").text(p3_total);
        }
      });
      p3_point3 = 71;
      $({ val : 0 }).delay(50).animate({ val : p3_point3 }, {
        duration: 1200,
        step: function(){
          p3_total = p3_pointWithCommas(Math.floor(this.val));
          $(".skills_point3").text(p3_total);
        },
        complete: function(){
          check_trigger = true;
        }
      });
      $(".skills_graph").addClass("active");
    }
    function p3_pointWithCommas(x) { // 페이지 3 카운팅 효과
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g);
    }
    if(checkVisible($('#page_1, #page_5'))&&check_trigger==true){
      check_trigger = false;
      $(".skills_graph").removeClass("active");
    }
  });

  // 오브젝트 발견 감지
	function checkVisible( elm, eval ) {
		eval = eval || "object visible";
		var viewportHeight = $(window).height(), // Viewport Height
			scrolltop = $(window).scrollTop(), // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();

		if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		if (eval == "above") return ((y < (viewportHeight + scrolltop)));
	}

}); // DOM 끝
