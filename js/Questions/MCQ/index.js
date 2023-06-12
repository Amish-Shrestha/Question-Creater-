function mcqQuestion(instance) {
  let mcqInstance = $(instance).closest('.section-holder').find('.mcq');
  let mcq = `
 <div class="mcq-container removable">
 <div class='collapse-question' onclick='expandQuestions(this)' style="display: none">
 <span class="question-numbers"></span>
 <h6 class='question-display'></h6>
 <div>
 <img class="question-image"></img>
 </div>
 <div>
 <h6 class='question-option'></h6><br/>
 </div>
  </div>
  <div class='sub-menu'>
   <div class="context-contain">
   <span></span>
   <div class="row">
     <div class="col col-11">
         <input
         class="input-text count-questions"
         type="text"
         placeholder="Question"
       />
     </div>
     <div class="col col-1 px-0 upload-image">
     <input type="file" class="imgupload" style="display:none" onchange="displayImage(this)"/>
     <i class="bi bi-image " onclick='openImgUpload(this)'></i>
     </div>
   </div>
   <hr style="margin: 0" />
   <div class='image-file'>
   <img class="file" />
   <div class="image-icons">
    <i class="bi bi-zoom-in"></i><br>
    <i class="bi bi-trash3" style="color: red"></i>
    </div>
   </div>
  </div>
 <div class="options-contain">
   <div class="form-check  removable">
     <input
       class="form-check-input options-radio"
       type="radio"
       name="flexRadioDefault"
     />
     <label class="form-check-label option-label" onclick='changeTheOption(this)'>
       Option 
     </label>
     <i class="bi bi-chat-square-text"></i>
     <i class="bi bi-trash3" onclick="removeQuestions(this)" style="color: red"></i>
    </div>
  </div>
   <div class="add-options">
     <button class="btn btn-outline-primary button-trigger-mcqoptions" onclick="addMcqOption(this)"><span><i class="bi bi-plus-lg"></i></span> Add Options</button>
   </div>
   <hr>
   <div class="button-context">
     <button class="btn btn-outline-primary button-submit" onclick="collapseQuestions(this)">Submit</button>
   <div class="form-context">
   <div class='frm'>
   <input class= 'points' type='number' placeholder='Points'/>
   <hr style="margin: 0"/>
   </div>
     <div class="form-check form-switch frm">
       <input class="form-check-input multipleQuestion" type="checkbox" id="flexSwitchCheckDefault">
       <label class="form-check-label" for="flexSwitchCheckDefault">Multiple Answers</label>
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
  $(mcq).clone().appendTo(mcqInstance);
}
