
import { t, lang } from "../js/i18n.js";

export default class DetailHeader extends HTMLElement {
  constructor(){
    super();
  }

  render(){
    this.innerHTML = this.getTemplate(lang.contry);
  }

  getTemplate(lang){
    return `
    <div class="detail-content__header">
      <h1 class="font-white bit detail-title">${t(lang,this._title)}</h1>
      <button class="detail-close font-white bit">➜</button>
    </div>
    `;
  }

  connectedCallback(){
    this.render();
  }

  disconnectedCallback(){

  }

  static get observedAttributes(){
      return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    return this._title = newValue;
  }
};

customElements.get('detail-header')?? customElements.define('detail-header',DetailHeader);