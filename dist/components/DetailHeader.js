import{t,lang}from"../js/i18n.js";export default class DetailHeader extends HTMLElement{constructor(){super()}render(){this.innerHTML=this.getTemplate(lang.contry)}getTemplate(e){return`\n    <div class="detail-content__header">\n      <h1 class="font-white bit detail-title">${t(e,this._title)}</h1>\n      <button class="detail-close font-white bit">➜</button>\n    </div>\n    `}connectedCallback(){this.render()}disconnectedCallback(){}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,n){return this._title=n}}customElements.get("detail-header")??customElements.define("detail-header",DetailHeader);