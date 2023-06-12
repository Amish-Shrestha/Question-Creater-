const BodyTemplate = document.createElement('template');
class Body extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div id="add-section"></div>
    `;
  }
}
customElements.define('body-component', Body);
