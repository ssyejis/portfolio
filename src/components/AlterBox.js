
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
    <div class="alter-box display--none">
      <p>${t(lang,this._comment)}</p>
    </div>
    `;
  }

  connectedCallback(){
    this.render();
  }

  disconnectedCallback(){

  }

  static get observedAttributes(){
      return ['comment'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    return this._comment = newValue;
  }
};

customElements.get('alter-box')?? customElements.define('alter-box',DetailHeader);