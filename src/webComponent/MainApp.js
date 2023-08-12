export default class MainApp extends HTMLElement {
    constructor(){
      super();
      this.render();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
            <head-intro class="intro"></head-intro>
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

customElements.get('main-app')?? customElements.define('main-app',MainApp);

