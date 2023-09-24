import { t, lang } from "../js/i18n.js";
import DetailHeader from "./DetailHeader.js";

export default class ContactContent extends HTMLElement {
  constructor(){
    super();
  }

  render(){
    this.innerHTML = this.getTemplate(lang.contry);
  }

  getTemplate(lang){
    return `
    <detail-header title="contact"></detail-header>
    <form
      class="contact-form gform"
      id="contact-form"
      action="https://script.google.com/macros/s/AKfycbx8hy8W5Bzh5uareHiGsyLToaHhB58lP90EIVkwn43bibfnC4NTTD1PHkX8cVBF0yLt/exec"
      target="frAttachFiles"
      onsubmit="sendForm()">
      <div class="contact-form__col">
        <label for="name" class="bit font-white">${t(lang,'inputName')}</label>
        <input type="text" name="name" id="name" class="contact-form__input" onkeyup="checkForm('name')">
        <p class="display--none bit">※ ${t(lang,'nameVali')}</p>
      </div>
      <div class="contact-form__col">
        <label for="email" class="bit font-white">${t(lang,'inputEmail')}</label>
        <input type="email" name="email" id="email" class="contact-form__input" onkeyup="checkForm('email')">
        <p class="display--none bit">※ ${t(lang,'emailVali')}</p>
        <p class="display--none bit">※ ${t(lang,'emailRegVali')}</p>
      </div>
      <div class="contact-form__col">
        <label for="message" class="bit font-white">${t(lang,'inputMessage')}</label>
        <textarea name="message" id="message" class="contact-form__input" rows="6" style="resize: none;" onkeyup="checkForm('message')"></textarea>
        <p class="display--none bit">※ ${t(lang,'messageVali')}</p>
      </div>
      <div class="contact-form__social contact-social">
      <!--<a target="_blank" href="http://qr.kakao.com/talk/TisHJujFcDVTgVWHOPAK5sgR3KQ-" class="contact-social__item"><img src="./images/kakao-icon.png" alt="kakao icon img"></a> -->
        <a target="_blank" href="https://github.com/ssyejis" class="contact-social__item"><img src="./images/github-icon.png" alt="github icon img"></a>
        <a href="mailto:antpuella@gmail.com" class="contact-social__item"><img src="./images/email-icon.png" alt="email icon img"></a>
        <button id="submit-btn" class="contact-form__btn bit">${t(lang,'send')}</button>
      </div>
    </form>
    <iframe name="frAttachFiles" style="display: none;"></iframe>
    `;
  }

  connectedCallback(){
    this.render();
  }

  disconnectedCallback(){

  }

  static get observedAttributes(){
      return [];
  }

  attributeChangedCallback(name, oldValue, newValue){
  }
};

customElements.get('contact-content')?? customElements.define('contact-content',ContactContent);