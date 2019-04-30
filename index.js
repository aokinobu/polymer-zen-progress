import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {

  static get properties() { return { mood: Number } }

  static get template() {
    return html`
      <style> .mood { color: green; } </style>

      Web Components are <span class="mood">[[mood]]</span>!
    `;
  }

  ready() {
    super.ready();
    this.mood="Great!";
  }
}

customElements.define('zen-progress', MyElement);