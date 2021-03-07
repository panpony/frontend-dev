class MobileMenu {
  constructor(){
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');//btnのDOMを呼び出す
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.container = document.querySelector('#global-container');//メニューオープンのクラスをつけるため、global-containerのDOMを呼び出す
    this.eventType = this._getEventType();
    this._addEvent();
  }
  
  _getEventType(){
    return window.ontouchstart ? 'touchstart' : 'click';//ブラウザがontouchstart（スマホ）のときtrueタッチ起動falseクリック起動
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }
  
  _addEvent(){
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));//bindしないとbtnのDOMがthisに帰ってくる。
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));//bindしないとbtnのDOMがthisに帰ってくる。

  }
}
