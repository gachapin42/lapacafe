$(function () {
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 1500,//次のスライドに切り替わる待ち時間
    speed:3000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows:false,
    });

    // hamburger menu

  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".header-nav a").on("click", function () {
    $("header").toggleClass("open");
  });

  // ヘッダーをスクロールしたら背景色が変わる
  $(window).on('scroll', function () {
    if ($('header').height()  < $(this).scrollTop()) {
        $('.js-header').addClass('change-color');
    } else {
        $('.js-header').removeClass('change-color');
    }
  });


  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadeout").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 300) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });
  });

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".faderight").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 300) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });
  });


});