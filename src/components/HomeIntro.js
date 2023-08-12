
import { t, lang } from "../js/i18n.js";

export default class HomeIntro extends HTMLElement {
  constructor(){
    super();
    this.render();
  }

  render(){
    this.innerHTML = this.getTemplate(lang.contry);
  }

  getTemplate(lang){
    return `
    <div class="home__title"><h1 class="bit" data-i18n="title">${t(lang,'title')}</h1></div>
    `;
  }

  connectedCallback(){

  }

  disconnectedCallback(){

  }

  static get observedAttributes(){
      return [];
  }

  attributeChangedCallback(name, oldValue, newValue){
  }
};

customElements.get('home-intro')?? customElements.define('home-intro',HomeIntro);
