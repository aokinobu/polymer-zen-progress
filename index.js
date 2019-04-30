import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {

  static get properties() { return { time: Number } }

  static get template() {
    return html`
      <style> .time { color: green; } </style>

      Current Time: <span class="time">[[time]]</span>!
    `;
  }

  ready() {
    super.ready();
    this.time=1000;
  }
}

customElements.define('zen-progress', MyElement);