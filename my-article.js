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
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-article',
      },
    };
  }
}

window.customElements.define('my-article', MyArticle);
