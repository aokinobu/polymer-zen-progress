import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {

  static get properties() { 
    return {
      xp: {
        notify: true,
        type: Number,
        value: 0
      }
    }
  }

  static get template() {
    return html`
      <style> .xp { color: blue; } </style>
      <span class="title">This is the Zen Menu Component.</br></span>
      
      <span class="xp" on-click="click">Click for XP: [[xp]]</span>
    `;
  }

  ready() {
    super.ready();
  }

  click() {
    this.xp=this.xp+100;
  }
}

customElements.define('zen-progress', MyElement);