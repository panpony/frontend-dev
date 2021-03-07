class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical', //縦のスライドにする記述
      loop: true,
      grabCursor: true, //hover時のポインター設定
      effect: 'coverflow',//スライドのエフェクト
      centeredSlides: true,//中央揃えになる
      slidesPerView: 1,//表示枚数
      speed: 1000,//スライドの感覚
      breakpoints: {
        1024: {//windowサイズが1024pxのときどうするかを設定する
          slidesPerView: 2,
        }
      },
      // autoplay: {
      //   delay: 4000, //オートプレイの感覚
      // disableOnInteraction: false, //マウスで操作してもオートプレイが切れないようにする。
      // }    
    });
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000, //オートプレイの感覚
      disableOnInteraction: false, //マウスで操作してもオートプレイが切れないようにする。
    }, options)
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}