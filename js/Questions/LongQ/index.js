function longQuestion(instance) {
  let longQuestionInstace = $(instance).closest('.section-holder').find('.mcq');
  let longQ = `
    <div class="longQ-container removable ">
    <div class='collapse-question' onclick='expandQuestions(this)' style="display: none">
    <span class="question-numbers"></span>
    <h6 class='question-display'></h6>
    <div>
    <img class="question-image"></img>
    </div>
    </div>
  <div class= 'sub-menu'>
  <div class="context-contain">
  <span></span>
    <div class="row">
      <div class="col col-11">
      <input class="input-text count-questions" type="text" placeholder="Question" />
      </div>
      <div class="col col-1 px-0 upload-image">
      <input type="file" class="imgupload" style="display:none" onchange="displayImage(this)"/>
        <i class="bi bi-image " onclick='openImgUpload(this)'></i>
      </div>
    </div>
    <hr style="margin:0"/>
    <div class='image-file'>
    <img class="file">
    <div class="image-icons">
    <i class="bi bi-zoom-in"></i><br>
    <i class="bi bi-trash3" style="color: red" ></i>
    </div>
    </div>
  </div>
  <div class="button-context">
    <button class="btn btn-outline-primary button-submit" onclick='collapseQuestions(this)'>Submit</button>
    <div class="form-context">
    <div class='frm'>
    <input class= 'points' type='number' placeholder='Points'/>
    <hr style="margin: 0"/>
    </div>
      <div class="form-check form-switch frm">
        <input class="form-check-input enablePDF" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Enable PDF</label>
      </div>
      <div class="form-check form-switch frm">
        <input class="form-check-input required" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Required</label>
      </div>
      <div class='frm'>
        <div class='dot-option-function'></div>
        <span><i class="bi bi-three-dots-vertical" onclick="dotOption(this)"></i></span>
      </div>
    </div>
  </div>
</div>
  </div>
  
  `;
  $(longQ).clone().appendTo(longQuestionInstace);
}
