import {PolymerElement, html} from '@polymer/polymer';

class ZenProgressElement extends PolymerElement {

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
      <span class="title">This is the Zen Progress Component.</br></span>
      <span class="tooltip">Click for XP:</span><br />
      <span class="xp" on-click="click">[[xp]]</span>
    `;
  }

  ready() {
    super.ready();
  }

  click() {
    this.xp=this.xp+100;
  }
}

customElements.define('zen-progress', ZenProgressElement);