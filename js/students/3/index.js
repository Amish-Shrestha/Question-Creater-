const studentSectionTemplet = document.createElement('template');
class StudentSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class='student-section'>
      <div class='student-section-main'>
        <div class='student-section-header'>
          <h3>Section A</h3>
        </div>
        <div class='student-section-body'>
          <div class='secton-top-content'>
            <div class='row'>
              <div class='col col-6'>
                <div class='student-section-title'>
                  <span>A.</span> Attempt all questions. 
                </div>
              </div>
              <div class='col col-6'>
                <div class='student-section-point'>
                  <span>Point:</span>20
                </div>
              </div>
            </div>
          </div>  
            <div class='student-section-A'>
              <div class='question'>
                <h6><span>1:</span>What is your fb id?</h6>
              </div>
              <div class='section-A-question-image'>
                <img src='#'/>
              </div>
              <div class='section-A-mcq'>
                <div class='question-mcq'>
                  <input type='radio'/>
                  <label>Option</label>
                </div>
              </div>
            </div>
          <div class='student-section-A'>
            <div class='question'>
              <h6><span>2:</span>What is your fb id?</h6>
            </div>
            <div class='section-A-question-image'>
              <img src='#'/>
            </div>
            <div class='section-A-mcq'>
              <div class='question-mcq'>
                <input type='checkbox'/>
                <label>Option</label>
              </div>
            </div>
            <div class='section-A-mcq'>
              <div class='question-mcq'>
                <input type='checkbox'/>
                <label>Option</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define('student-section', StudentSection);
