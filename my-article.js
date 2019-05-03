import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-article`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyArticle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[name]]!</h2>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'World',
      }
    };
  }
}

window.customElements.define('my-article', MyArticle);
