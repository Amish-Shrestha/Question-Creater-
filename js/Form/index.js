const grades = [
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade I',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade II',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade III',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade IV',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade V',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade VI',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade VII',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade VIII',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade IX',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade X',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade XI',
  },
  {
    id: Math.floor(Math.random() * 10),
    select: 'Grade XII',
  },
];
const types = [
  { id: Math.floor(Math.random() * 10), type: 'Model Questions' },
  { id: Math.floor(Math.random() * 10), type: 'Old Questions' },
  { id: Math.floor(Math.random() * 10), type: 'New Questions' },
];
const subjects = [
  { id: Math.floor(Math.random() * 10), subject: 'Math' },
  { id: Math.floor(Math.random() * 10), subject: 'Science' },
  { id: Math.floor(Math.random() * 10), subject: 'English' },
  { id: Math.floor(Math.random() * 10), subject: 'Nepali' },
  { id: Math.floor(Math.random() * 10), subject: 'Biology' },
  { id: Math.floor(Math.random() * 10), subject: 'Computer' },
  { id: Math.floor(Math.random() * 10), subject: 'Social' },
];
const BodyTemplate2 = document.createElement('template');
class Heading extends HTMLElement {
  constructor() {
    super();
    let html =
      `
    <form id='input-form-submit'>
    <div class="heading-context" style='display:none'>
        <div class="content-context">
        <div class='heading-header'>
        <h3>Digital Nepal School</h3>
        </div>
          <div class="headingED">
             <i class="bi bi-pencil-square" onclick='formExpand(this)'></i>
          </div>
          <div class="logo-content margin">
            <img
              class="logo"
              alt="img"
              src="component/assests/img/MicrosoftTeams-image.png"
            />
          </div>
          <div class="heading-content">
            <div class="heading-content-grade margin">
              <span>Grade:</span> XII
            </div>
            <div class="heading-content-question-type margin">
              Model Question
            </div>
            <div class="heading-content-notice margin">
              <span>Notice:</span> Candidates are required to give their
              answers in their own words as far as practicable. The figures
              in the margin indicate full marks.
            </div>
            <div class="time-mark-contents">
              <div class="time-mark-content margin">
                <div class="heading-content-subject margin">
                  <span>Subject:</span> Computer Science
                </div>
                <div class="heading-content-subjectCode margin">
                  <span>Subject Code:</span>CSIT 404
                </div>
                <div class="time margin"><span>Time:</span>2Hr</div>
              </div>
              <div class="marks">
              <div class="full-mark margin">
                  <span>Full Mark:</span> 100
                </div>
                <div class="pass-mark margin">
                  <span>Pass Mark:</span> 32
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      ` +
      `
      <div class= 'form-content'>
        ` +
      `
      <div class='input-content'>
    ` +
      `
      <div class='Name-of-institue input-content-margin'>
      <div class='row align-items-center'>
      <div class='col col-12 col-md-5 lable-con'>
      <label class='scname'>School / College Name:</label>
      </div>
      <div class='col col-12 col-md-7'>
      <input class='input-text' type='text' name='scName'/>
      </div>
      </div>
      </div>
    ` +
      `
    <div class='grade-type input-content-margin'>
    <div class='row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Grade:</label>
    </div>
    <div class='col col-12 col-md-7'>
    <select class="form-control form-control-sm select-size" name="grade">`;
    grades.forEach(function (items) {
      html += `<option value='${items.select}'>${items.select}</option>`;
    });
    html +=
      ` 
      </select>
      </div>
      </div>
      </div>
      ` +
      `
       <div class="question-type input-content-margin">
       <div class='row align-items-center'>
       <div class='col col-12 col-md-5 lable-con'>
       <lable class=''>Question Type:</lable>
       </div>
       <div class='col col-12 col-md-7'>
       <select class="form-control form-control-sm select-size" name="question-type">`;
    types.forEach(function (items) {
      html += `
      <option value="${items.type}">${items.type}</option>
    `;
    });
    html +=
      `
    </select>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='notice input-content-margin'>
    <div class='row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Notice:</label>
    </div>
    <div class='col col-12 col-md-7'>
    <input class='input-text' type='text' value='Candidates are required to give their answers in their own words as far as practicable. The figures in the margin indicate full marks.'/>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='subjects input-content-margin'>
    <div class='row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Subjects:</label>
    </div>
    <div class='col col-12 col-md-7'>
    <select class="form-control form-control-sm select-size" name='subjects'>
    `;
    subjects.forEach(function (items) {
      html += `<option value=${items.subject}>${items.subject}</option>`;
    });
    html +=
      `
    </select>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='subject-code input-content-margin'>
    <div class= 'row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Subject Code:</label>
    </div>
    <div class='col col-12 col-md-7'>
    <input class='input-text' type='text' name='subject-code'/>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='questionPaper-time input-content-margin'>
    <div class='row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Time:</label>
    </div>
    <div class='col col-12 col-md-7'>
    <input class='input-text' type='number' name='time'/>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='questionPaper-passmark input-content-margin'>
    <div class= 'row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Pass Mark:</label>
    </div>
    <div class= 'col col-12 col-md-7'>
    <input class='input-text' type='text' name='passmark'/>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='questionPaper-fullmark input-content-margin'>
    <div class='row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <label class=''>Full Mark:</label>
    </div>
    <div class='col col-12 col-md-7'>
    <input class='input-text' type='text' name='fullmark'/>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='upload-image input-content-margin'>
    <div class='row align-items-center'>
    <div class='col col-12 col-md-5 lable-con'>
    <lable>Upload Image:</lable>
    </div>
    <div class='col col-12 col-md-7'>
    <input class='input-text'  type='file' style='display: none'/>
    <button  type="button" class='btn btn-outline-primary btn-sm'>Upload Image <span><i class="bi bi-upload"></i></span></button>
    </div>
    </div>
    </div>
    </div>
    ` +
      `
    <div class='submit-form-button input-content-margin'>
    <button type="button" class='btn btn-outline-primary' onclick='formCollaspe(this)'>Submit</button>
    </div>
    </div>
     </form>
    `;
    this.innerHTML = html;
  }
}
customElements.define('heading-component', Heading);
