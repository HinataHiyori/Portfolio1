    // 文字表示エフェクト
    $(function(){
      $(window).on('scroll', function () {
        $(".fadeIn").each(function() {
          var scroll = $(window).scrollTop(); 
          var elementPosition = $(this).offset().top; 
          var windowHeihgt = $(window).height();
          if (scroll > elementPosition - windowHeihgt + 200) {
            $(this).addClass("isShow");
          }
        })
      });
    });

    // 星評価:about
    $(function() {
          $('.raty-html').raty({
            readOnly: true,
            score: 4.5,
          });
          $('.raty-sass').raty({
            readOnly: true,
            score: 3.5,
          });
          $('.raty-wp').raty({
            readOnly: true,
            score: 1.5,
          });
          $('.raty-gitlub').raty({
            readOnly: true,
            score: 3,
          });
          $('.raty-js').raty({
            readOnly: true,
            score: 3,
          });
          $('.raty-figma').raty({
            readOnly: true,
            score: 1,
          });
      });

    // タブメニュー:contact
    $(function() {
      $('.select_li').find('li').click(function() {
        var index = $(this).index();
        var contentsLi = $('.form_work').find('li');
        contentsLi.addClass('is-hidden');
        contentsLi.eq(index).removeClass('is-hidden');
      });
    });