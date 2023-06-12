const studentBodyTemplete = document.createElement('template');
class StudentBody extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  <div class='student-body'>
    <div class='container student-body-main'>
      <div class='body-content'>
        <div class='questions-paper'>
          <student-section></student-section>
        </div>
        <div class='row'>
          <div class='col col-6'>
            <div class='btn-prev'>
              <button class='btn btn-outline-primary '>Previous</button>
            </div>
          </div>
          <div class='col col-6'>
            <div class='btn-next'>
              <button class='btn btn-outline-primary btn-next'>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}
customElements.define('student-body', StudentBody);
