import { t, lang } from "../js/i18n.js";
import DetailHeader from "./DetailHeader.js";

export default class ProfilContent extends HTMLElement {
  constructor(){
    super();
  }

  render(){
    this.innerHTML = this.getTemplate(lang.contry);
  }

  getTemplate(lang){
    return `
    <detail-header title="profil"></detail-header>
    <div class="detail-content__body">
      <div class="profil-content">
        <div class="profil-content__introduce">
          <div class="profil__img">
            <caption><img src="./images/img1.png" alt="나의 이미지"></caption>
            <ul>
              <li>${t(lang,'name')}</li>
              <li>${t(lang,'birthDate')}</li>
              <li>${t(lang,'career')}</li>
            </ul>
          </div>
          <div class="profil__expr">
            <h2 class="font-white bit">${t(lang,'experience')}</h2>
            <ul>
              <li>2022.01 - 2022.11 ${t(lang,'singha')}</li>
              <li>2020.12 - 2021.06 ${t(lang,'singha')}</li>
              <li>2020.05 - 2020.09 ${t(lang,'yangjeong')}</li>
              <li>2019.09 - 2020.03 ${t(lang,'hana')}</li>
              <li>2014.03 - 2018.02 ${t(lang,'university')}</li>
            </ul>
          </div>
          <div class="profil__motiv">
            <p>${t(lang,'motiv')}</p>
          </div>
        </div>
        <div class="profil-content__personal">
          <div><canvas id="personal-chart"></canvas></div>
        </div>
      </div>
    </div>
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

customElements.get('profil-content')?? customElements.define('profil-content',ProfilContent);