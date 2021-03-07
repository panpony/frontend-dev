class ScrollObserver { //scrollのプロパティ:els
  constructor(els, cb, options) {//constructorに渡ってきた引数を定義する。
      this.els = document.querySelectorAll(els); //1から代入 'animate-title'→els
      const defaultOptions = { //３へから代入
          root: null,
          rootMargin: "0px",
          threshold: 0,
          once: true,
      };
      this.cb = cb //3行目で定義されているcbはScrollObserverのcbと同じとしている。
      this.options = Object.assign(defaultOptions, options);//defaultOptionsとoptionsをマージ（融合）する。
      this.once = this.options.once; //39行目がfalseのときイベントが解除されなくなる
      this._init();//直接cbの関数指定もできるが、constructor内にはthisの定義内容のみを呼ぶのがベスト。
  }
  
  _init() {
      const callback = function (entries, observer) {//2から代入 cb→callbackへ変更
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  this.cb(entry.target, true);//cb内でも交差判定ができるようにするため、true,falseを渡している。3行目を参照している。
                  if(this.once){
                      observer.unobserve(entry.target);                    
                  }
              } else {
                  this.cb(entry.target, false);
              }
          });
      };
      this.io = new IntersectionObserver(callback.bind(this), this.options);//4から代入 IntersectionObserver内では、thisはwindowになるためbind処理を行う。 destoryに格納のためconst io →this.ioに変更
      this.io.POLL_INTERVAL = 100; //intersectionObserverが使えないときにスクロールに対して監視を行う //100msのこと
      this.els.forEach(el => this.io.observe(el)); //this.elsにすることでScrollObserver内で定義したelsにforEachを掛けられる。
  }
  destory(){//不要になったタイミングで処理を止めることができる処理。
      this.io.disconnect();//disconnectでioの監視が止まる。

  }

}