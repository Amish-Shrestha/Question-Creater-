const students = [
  {
    id: Math.floor(Math.random() * 10),
    section: `Section`,
    attempt: 'A. Attempt All Questions',
    total: 'Total:',
  },
];
var section = document.querySelector('header-component');
const addSection = section.shadowRoot.querySelector('.addSectionButton');
addSection.addEventListener('click', function () {
  let previousHtml = document.getElementById('add-section').innerHTML;
  document.getElementById('add-section').innerHTML =
    previousHtml + getData(students);
});
function getData(students) {
  let list = '';
  students.forEach((item) => {
    list += `
    <div class="section-holder removable" id="expand-collapse">
    <div class='collapse-section' style='display: none'>
    <h2 class='collapse-section-title'>${item.section}</h2>
    <div class="section">
    <div class='section-total'>${item.total}</div>
    </div>
    <div class='collapse-buttons'>
    <i class="bi bi-trash3" onclick="removeQuestions(this)"></i>
    <i class="bi bi-pencil-square" onclick='expand(this)'></i>
    </div>
    </div>
    <div class='menu'>
      <div class='row justify-content-center'>
        <div class='section-title col-md-12'>
        <h3 class='section-title-name' onclick='sectionTitle(this)'>${item.section}</h3>
        </div>
        <div class='col col-12 col-md-12 section-button'>
        <i class="bi bi-trash3" onclick="removeQuestions(this)"></i>
        <i class="bi bi-check2 sectioncoll" onclick="collapse(this)"></i>
        </div>
        </div>
        <div class="section">
        <div class='question-attempt'>${item.attempt}</div>
        <div class='section-total'>${item.total}</div>
        </div>
        <div class='mcq' id="sortable"></div>
        <div class='button-container'>
        <button class='btn btn-outlined-primary' onclick="addQuestions(this)">Add Questions <i class="bi bi-caret-right-fill"></i></button>
        <div class='questions-option'></div>
      </div>
      </div>
    </div>`;
  });
  return list;
}
