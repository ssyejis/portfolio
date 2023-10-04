import { t, lang } from "../js/i18n.js";
import DetailHeader from "./DetailHeader.js";

export default class SkillContent extends HTMLElement {
  constructor(){
    super();
  }

  render(){
    this.innerHTML = this.getTemplate(lang.contry);
  }

  getTemplate(lang){
    return `
    <detail-header title="skill"></detail-header>
    <div class="detail-content__body">
        <div class="skill-content">
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">HTML</span>
            <div class="skill-lang__bar">
              <div style="width: 80%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">CSS</span>
            <div class="skill-lang__bar">
              <div style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">SCSS</span>
            <div class="skill-lang__bar">
              <div style="width: 80%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">JS</span>
            <div class="skill-lang__bar">
              <div style="width: 75%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">TS</span>
            <div class="skill-lang__bar">
              <div style="width: 45%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">VUE</span>
            <div class="skill-lang__bar">
              <div style="width: 65%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">PHOTOSHOP</span>
            <div class="skill-lang__bar">
              <div style="width: 50%"></div>
            </div>
          </div>
          <div class="skill-content__lang skill-lang">
            <span class="skill-lang__name bit">gitLab</span>
            <div class="skill-lang__bar">
              <div style="width: 60%"></div>
            </div>
          </div>
          <div class="skill-study">
            <h2 class="bit font-white">studying</h2>
            <div class="skill-study__list">
              <caption><img src="./images/lang-api.png" alt="node-img"></caption>
              <caption><img src="./images/lang-webpack.png" alt="node-img"></caption>
            </div>
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

customElements.get('skill-content')?? customElements.define('skill-content',SkillContent);