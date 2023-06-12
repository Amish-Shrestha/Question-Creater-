//Adding question to the mcq
function addMcqOption(instance) {
  let addOptionMcq = $(instance)
    .closest(".mcq-container")
    .find(".options-contain");
  let options = $(instance)
    .closest(".sub-menu")
    .find(".form-check.removable")
    .last();
  // console.log(options);
  $(options).clone().appendTo(addOptionMcq);
}

//Add the questions to each sections
function addQuestions(instance) {
  let divInstance = $(instance)
    .closest(".button-container")
    .find(".questions-option");
  if (
    (!divInstance.hasClass("show") && !divInstance.hasClass("hide")) ||
    divInstance.hasClass("hide")
  ) {
    let options = `
    <div class='sub-button'>
    <button class='btn btn-outlined-primary btn-trigger counter' onclick='mcqQuestion(this)'>MCQ Questions</button>
    <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Long Questions</button>
    <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Short Questions</button>
    <button class='btn btn-outlined-primary btn-trigger counter'>Fill in the blank</button>
    </div>`;
    divInstance.removeClass("hide").addClass("show").show().html(options);
  } else divInstance.removeClass("show").addClass("hide").hide();
}
//Remove the questions/section/options
function removeQuestions(instance) {
  var remove = confirm(`Are you sure you want to remove this?`);
  if (remove) {
    $(instance).closest(".removable").remove();
    reArrangeSN();
    calculateTotalPoints($("input[type=number]"));
  }
}

//Doted button function
function dotOption(instance) {
  // console.log(instance);
  let dotOptionInstance = $(instance)
    .closest(".removable")
    .find(".dot-option-function");
  if (
    (!dotOptionInstance.hasClass("show") &&
      !dotOptionInstance.hasClass("hide")) ||
    dotOptionInstance.hasClass("hide")
  ) {
    let dot_option = `
      <div class='dot_option_button'>
      <button class='btn btn-outline-primary btn-remove' onclick='removeQuestions(this)'>Remove</button>
      </div>
      `;
    dotOptionInstance
      .removeClass("hide")
      .addClass("show")
      .show()
      .html(dot_option);
  } else dotOptionInstance.removeClass("show").addClass("hide").hide();
  //while click outside the box
  $(document).mouseup(function (e) {
    let dotOptionInstance = $(instance)
      .closest(".removable")
      .find(".dot-option-function");
    if (
      !dotOptionInstance.is(e.target) &&
      dotOptionInstance.has(e.target).length === 0
    ) {
      dotOptionInstance.hide();
    }
  });
}

// imageUploader func
function openImgUpload(instance) {
  let imageUploader = $(instance).closest(".upload-image").find(".imgupload");
  $(imageUploader).trigger("click");
}
function displayImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(input)
        .closest(".removable")
        .find(".file")
        .attr("src", e.target.result)
        .width(400)
        .height(250)
        .next()
        .attr("style", "display:inline-block")
        .show();
    };
    reader.readAsDataURL(input.files[0]);
  }
}

//Expand $ collapse the section
function collapse(instance) {
  //section title in collaspe
  let sectionCollapseTitle = $(instance)
    .closest(".removable")
    .find(".section-title-name")
    .text();
  $(instance)
    .closest(".removable")
    .find(".collapse-section-title")
    .html(sectionCollapseTitle);

  //collasping the form
  let sectionCollapse = $(instance)
    .closest(".section-holder")
    .find(".collapse-section");
  let collapseInstance = $(instance).closest(".section-holder").find(".menu");
  if ($(collapseInstance).css("display") === "block") {
    $(collapseInstance).hide("fast");
    $(sectionCollapse).show("");
  }
}
function expand(instance) {
  let sectionCollapse = $(instance)
    .closest(".section-holder")
    .find(".collapse-section");
  let collapseInstance = $(instance).closest(".section-holder").find(".menu");
  if ($(collapseInstance).css("display") === "none") {
    $(collapseInstance).show("fast");
    $(sectionCollapse).hide("");
  }
}

//Looping button for mcq-options and required field
$(document).on("click", "button.btn-trigger", function () {
  $("#add-section input[type=checkbox]").each(function (index, item) {
    // console.log(item);
    $(item).attr("id", `check_${index}`);
    $(item).next("label").attr("for", `check_${index}`);
  });
});
//checking if checked or not
$(document).on("change", 'input[type="checkbox"]', function () {
  // required
  // console.log('hi');
  if ($(this).hasClass("required")) {
    let isChecked = $(this).is(":checked");
    let v = $(this).closest(".removable");
    if (isChecked) {
      $(v).css("border", "1px solid red");
    } else {
      $(v).removeAttr("style");
    }
  }
  //Mutliple
  else if ($(this).hasClass("multipleQuestion")) {
    let isChecked = $(this).is(":checked");
    let v = $(this).closest(".sub-menu").find(".options-radio ");
    if (isChecked) {
      $(v).attr("type", "checkbox");
    } else {
      let b = $(this).closest(".sub-menu").find(".options-radio");
      $(b).attr("type", "radio");
    }
  } else if ($(this).hasClass("enablePDF")) {
    let isChecked = $(this).is(":checked");
    let v = $(this).closest;
  }
});

//Collapses questions inside sections
function collapseQuestions(instance) {
  //Displaying questions in the collapse
  let question = $(instance).closest(".sub-menu").find("input").val();
  let options = $(instance).closest(".sub-menu").find(".option-label").text();
  console.log(options);
  // console.log(question);
  $(instance).closest(".removable").find(".question-display").html(question);
  $(instance).closest(".removable").find(".question-option").html(options);
  //Displaying questions images in the collapse
  let image = $(instance).closest(".sub-menu").find('input[type="file"]')[0]
    .files[0];
  // console.log(image);
  let file = new FileReader();
  file.onload = function (e) {
    $(instance)
      .closest(".removable")
      .find(".question-image")
      .attr("src", e.target.result)
      .width(300)
      .height(250);
  };
  //if image then read the file or without
  if (image) file.readAsDataURL(image);
  //collapse the question
  let questionCollapse = $(instance)
    .closest(".removable")
    .find(".collapse-question");
  // console.log(questionCollapse);
  let collapseInstance = $(instance).closest(".removable").find(".sub-menu");
  if ($(collapseInstance).css("display") === "block") {
    $(collapseInstance).hide("fast");
    $(questionCollapse).show("");
  }
}
//expand the question
function expandQuestions(instance) {
  let questionCollapse = $(instance)
    .closest(".removable")
    .find(".collapse-question");
  let collapseInstance = $(instance).closest(".removable").find(".sub-menu");
  if ($(collapseInstance).css("display") === "none") {
    $(collapseInstance).show("fast");
    $(questionCollapse).hide("");
  }
}
//Changing section title
function sectionTitle(instance) {
  let value = $(instance).text();
  $(instance)
    .closest(".section-title")
    .html(
      `
      <div class='section-input'>
      <input type="text" class="sectionInput" autofocus value=${value} placeholder='Section'>
      <hr class='sectionInputLine'/>
      </div>
     `
    );
}
//changing the value of the input
$(document).on("change", ".sectionInput", function () {
  let value = $(this).val();
  $(this)
    .closest(".section-title")
    .html(
      `<h3 class='section-title-name' onclick='sectionTitle(this)'>${
        value ? value : "Section"
      }</h3>`
    );
});
//Creating different id in the checkbox in mcq options
$(document).on("click", "button.button-trigger-mcqoptions", function () {
  $(".options-contain input[type=checkbox]").each(function (index, item) {
    // console.log(item);
    $(item).attr("id", `chec_${index}`);
    $(item).next("label").attr("for", `chec_${index}`);
  });
});
//Form Collaspe and expand
function formCollaspe(instance) {
  //data submitting
  // console.log($('#input-form-submit'));
  let formData = $("#input-form-submit").serializeArray();
  // console.log(formData);
  formData.forEach((element) => {
    // console.log(element.value);
  });
  //collasping the form
  let formCollapse = $(instance)
    .closest("#input-form-submit")
    .find(".heading-context");
  // console.log(formCollapse);
  let collapseForm = $(instance)
    .closest("#input-form-submit")
    .find(".form-content");
  if ($(collapseForm).css("display") === "block") {
    $(collapseForm).hide("fast"); //Adding question to the mcq
    function addMcqOption(instance) {
      let addOptionMcq = $(instance)
        .closest(".mcq-container")
        .find(".options-contain");
      let options = $(instance)
        .closest(".sub-menu")
        .find(".form-check.removable")
        .last();
      // console.log(options);
      $(options).clone().appendTo(addOptionMcq);
    }
    //Add the questions to each sections
    function addQuestions(instance) {
      let divInstance = $(instance)
        .closest(".button-container")
        .find(".questions-option");
      if (
        (!divInstance.hasClass("show") && !divInstance.hasClass("hide")) ||
        divInstance.hasClass("hide")
      ) {
        let options = `
        <div class='sub-button'>
        <button class='btn btn-outlined-primary btn-trigger counter' onclick='mcqQuestion(this)'>MCQ Questions</button>
        <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Long Questions</button>
        <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Short Questions</button>
        <button class='btn btn-outlined-primary btn-trigger counter'>Fill in the blank</button>
        </div>`;
        divInstance.removeClass("hide").addClass("show").show().html(options);
      } else divInstance.removeClass("show").addClass("hide").hide();
    }
    //Remove the questions/section/options
    function removeQuestions(instance) {
      var remove = confirm(`Are you sure you want to remove this?`);
      if (remove) {
        $(instance).closest(".removable").remove();
        reArrangeSN();
        calculateTotalPoints($("input[type=number]"));
      }
    }
    //Doted button function
    function dotOption(instance) {
      // console.log(instance);
      let dotOptionInstance = $(instance)
        .closest(".removable")
        .find(".dot-option-function");
      if (
        (!dotOptionInstance.hasClass("show") &&
          !dotOptionInstance.hasClass("hide")) ||
        dotOptionInstance.hasClass("hide")
      ) {
        let dot_option = `
          <div class='dot_option_button'>
          <button class='btn btn-outline-primary btn-remove' onclick='removeQuestions(this)'>Remove</button>
          </div>
          `;
        dotOptionInstance
          .removeClass("hide")
          .addClass("show")
          .show()
          .html(dot_option);
      } else dotOptionInstance.removeClass("show").addClass("hide").hide();
      //while click outside the box
      $(document).mouseup(function (e) {
        let dotOptionInstance = $(instance)
          .closest(".removable")
          .find(".dot-option-function");
        if (
          !dotOptionInstance.is(e.target) &&
          dotOptionInstance.has(e.target).length === 0
        ) {
          dotOptionInstance.hide();
        }
      });
    }
    // imageUploader func
    function openImgUpload(instance) {
      let imageUploader = $(instance)
        .closest(".upload-image")
        .find(".imgupload");
      $(imageUploader).trigger("click");
    }
    function displayImage(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $(input)
            .closest(".removable")
            .find(".file")
            .attr("src", e.target.result)
            .width(400)
            .height(250)
            .next()
            .attr("style", "display:inline-block")
            .show();
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    //Expand $ collapse the section
    function collapse(instance) {
      //section title in collaspe
      let sectionCollapseTitle = $(instance)
        .closest(".removable")
        .find(".section-title-name")
        .text();
      $(instance)
        .closest(".removable")
        .find(".collapse-section-title")
        .html(sectionCollapseTitle);

      //collasping the form
      let sectionCollapse = $(instance)
        .closest(".section-holder")
        .find(".collapse-section");
      let collapseInstance = $(instance)
        .closest(".section-holder")
        .find(".menu");
      if ($(collapseInstance).css("display") === "block") {
        $(collapseInstance).hide("fast");
        $(sectionCollapse).show("");
      }
    }
    function expand(instance) {
      let sectionCollapse = $(instance)
        .closest(".section-holder")
        .find(".collapse-section");
      let collapseInstance = $(instance)
        .closest(".section-holder")
        .find(".menu");
      if ($(collapseInstance).css("display") === "none") {
        $(collapseInstance).show("fast");
        $(sectionCollapse).hide("");
      }
    }
    //Looping button for mcq-options and required field
    $(document).on("click", "button.btn-trigger", function () {
      $("#add-section input[type=checkbox]").each(function (index, item) {
        // console.log(item);
        $(item).attr("id", `check_${index}`);
        $(item).next("label").attr("for", `check_${index}`);
      });
    });
    //checking if checked or not
    $(document).on("change", 'input[type="checkbox"]', function () {
      // required
      // console.log('hi');
      if ($(this).hasClass("required")) {
        let isChecked = $(this).is(":checked");
        let v = $(this).closest(".removable");
        if (isChecked) {
          $(v).css("border", "1px solid red");
        } else {
          $(v).removeAttr("style");
        }
      }
      //Mutliple
      else if ($(this).hasClass("multipleQuestion")) {
        let isChecked = $(this).is(":checked");
        let v = $(this).closest(".sub-menu").find(".options-radio ");
        if (isChecked) {
          $(v).attr("type", "checkbox");
        } else {
          let b = $(this).closest(".sub-menu").find(".options-radio");
          $(b).attr("type", "radio");
        }
      } else if ($(this).hasClass("enablePDF")) {
        let isChecked = $(this).is(":checked");
        let v = $(this).closest;
      }
    });
    //Collapses questions inside sections
    function collapseQuestions(instance) {
      //Displaying questions in the collapse
      let question = $(instance).closest(".sub-menu").find("input").val();
      let options = $(instance)
        .closest(".sub-menu")
        .find(".option-label")
        .text();
      console.log(options);
      // console.log(question);
      $(instance)
        .closest(".removable")
        .find(".question-display")
        .html(question);
      $(instance).closest(".removable").find(".question-option").html(options);
      //Displaying questions images in the collapse
      let image = $(instance).closest(".sub-menu").find('input[type="file"]')[0]
        .files[0];
      // console.log(image);
      let file = new FileReader();
      file.onload = function (e) {
        $(instance)
          .closest(".removable")
          .find(".question-image")
          .attr("src", e.target.result)
          .width(300)
          .height(250);
      };
      //if image then read the file or without
      if (image) file.readAsDataURL(image);

      //collapse the question
      let questionCollapse = $(instance)
        .closest(".removable")
        .find(".collapse-question");
      // console.log(questionCollapse);
      let collapseInstance = $(instance)
        .closest(".removable")
        .find(".sub-menu");
      if ($(collapseInstance).css("display") === "block") {
        $(collapseInstance).hide("fast");
        $(questionCollapse).show("");
      }
    }
    //expand the question
    function expandQuestions(instance) {
      let questionCollapse = $(instance)
        .closest(".removable")
        .find(".collapse-question");
      let collapseInstance = $(instance)
        .closest(".removable")
        .find(".sub-menu");
      if ($(collapseInstance).css("display") === "none") {
        $(collapseInstance).show("fast");
        $(questionCollapse).hide("");
      }
    }
    //Changing section title
    function sectionTitle(instance) {
      let value = $(instance).text();
      $(instance)
        .closest(".section-title")
        .html(
          `
          <div class='section-input'>
          <input type="text" class="sectionInput" autofocus value=${value} placeholder='Section'>
          <hr class='sectionInputLine'/>
          </div>
         `
        );
    }
    //changing the value of the input
    $(document).on("change", ".sectionInput", function () {
      let value = $(this).val();
      $(this)
        .closest(".section-title")
        .html(
          `<h3 class='section-title-name' onclick='sectionTitle(this)'>${
            value ? value : "Section"
          }</h3>`
        );
    });
    //Creating different id in the checkbox in mcq options
    $(document).on("click", "button.button-trigger-mcqoptions", function () {
      $(".options-contain input[type=checkbox]").each(function (index, item) {
        // console.log(item);
        $(item).attr("id", `chec_${index}`);
        $(item).next("label").attr("for", `chec_${index}`);
      });
    });
    //Form Collaspe and expand
    function formCollaspe(instance) {
      //data submitting
      // console.log($('#input-form-submit'));
      let formData = $("#input-form-submit").serializeArray();
      // console.log(formData);
      formData.forEach((element) => {
        // console.log(element.value);
      });

      //collasping the form
      let formCollapse = $(instance)
        .closest("#input-form-submit")
        .find(".heading-context");
      // console.log(formCollapse);
      let collapseForm = $(instance)
        .closest("#input-form-submit")
        .find(".form-content");
      if ($(collapseForm).css("display") === "block") {
        $(collapseForm).hide("fast");
        $(formCollapse).show("");
      }
    }
    function formExpand(instance) {
      //expanding the form
      let formCollapse = $(instance)
        .closest("#input-form-submit")
        .find(".heading-context");
      console.log(formCollapse);
      let collapseForm = $(instance)
        .closest("#input-form-submit")
        .find(".form-content");
      if ($(collapseForm).css("display") === "none") {
        $(collapseForm).show("fast");
        $(formCollapse).hide("");
      }
    }
    //Change the option
    function changeTheOption(instance) {
      let changeOption = $(instance).closest(".form-check");
      console.log($(instance));
      $(instance).html(
        `<input type="text" autofocus value='amish' onchange='changeType(this)' placeholder='Section'/>`
      );
    }
    function changeType(instance) {
      let value = instance.value;
      $(instance).closest("label").html(value);
    }
    //counter for the questions
    $(document).on("click", ".counter", function () {
      reArrangeSN();
    });
    // reArrangeSN function for counter for the questions
    function reArrangeSN() {
      $(".count-questions").each(function (index, item) {
        // console.log('here: ', index + 1);
        $(this)
          .closest(".context-contain")
          .find("span")
          .text(`${index + 1}.`)
          .closest(".removable")
          .find(".question-numbers")
          .text(`${index + 1}.`);
      });
    }
    //changing the points in the sections
    $(document).on("change", "input[type=number]", function () {
      calculateTotalPoints($(this));
    });
    function calculateTotalPoints(instance) {
      // console.log('hi');
      let totalPoints = 0;
      // iterate while filling points input
      $(".points").each(function (index, item) {
        if (Number($(item).val())) totalPoints += Number($(item).val());
      });
      $(instance)
        .closest(".menu")
        .find(".section-total")
        .text(`Total: ${totalPoints > 0 ? totalPoints : 0}`); //Adding question to the mcq
      function addMcqOption(instance) {
        let addOptionMcq = $(instance)
          .closest(".mcq-container")
          .find(".options-contain");
        let options = $(instance)
          .closest(".sub-menu")
          .find(".form-check.removable")
          .last();
        // console.log(options);
        $(options).clone().appendTo(addOptionMcq);
      }
      //Add the questions to each sections
      function addQuestions(instance) {
        let divInstance = $(instance)
          .closest(".button-container")
          .find(".questions-option");
        if (
          (!divInstance.hasClass("show") && !divInstance.hasClass("hide")) ||
          divInstance.hasClass("hide")
        ) {
          let options = `
            <div class='sub-button'>
            <button class='btn btn-outlined-primary btn-trigger counter' onclick='mcqQuestion(this)'>MCQ Questions</button>
            <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Long Questions</button>
            <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Short Questions</button>
            <button class='btn btn-outlined-primary btn-trigger counter'>Fill in the blank</button>
            </div>`;
          divInstance.removeClass("hide").addClass("show").show().html(options);
        } else divInstance.removeClass("show").addClass("hide").hide();
      }
      //Remove the questions/section/options
      function removeQuestions(instance) {
        var remove = confirm(`Are you sure you want to remove this?`);
        if (remove) {
          $(instance).closest(".removable").remove();
          reArrangeSN();
          calculateTotalPoints($("input[type=number]"));
        }
      }
      //Doted button function
      function dotOption(instance) {
        // console.log(instance);
        let dotOptionInstance = $(instance)
          .closest(".removable")
          .find(".dot-option-function");
        if (
          (!dotOptionInstance.hasClass("show") &&
            !dotOptionInstance.hasClass("hide")) ||
          dotOptionInstance.hasClass("hide")
        ) {
          let dot_option = `
              <div class='dot_option_button'>
              <button class='btn btn-outline-primary btn-remove' onclick='removeQuestions(this)'>Remove</button>
              </div>
              `;
          dotOptionInstance
            .removeClass("hide")
            .addClass("show")
            .show()
            .html(dot_option);
        } else dotOptionInstance.removeClass("show").addClass("hide").hide();
        //while click outside the box
        $(document).mouseup(function (e) {
          let dotOptionInstance = $(instance)
            .closest(".removable")
            .find(".dot-option-function");
          if (
            !dotOptionInstance.is(e.target) &&
            dotOptionInstance.has(e.target).length === 0
          ) {
            dotOptionInstance.hide();
          }
        });
      }
      // imageUploader func
      function openImgUpload(instance) {
        let imageUploader = $(instance)
          .closest(".upload-image")
          .find(".imgupload");
        $(imageUploader).trigger("click");
      }
      function displayImage(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $(input)
              .closest(".removable")
              .find(".file")
              .attr("src", e.target.result)
              .width(400)
              .height(250)
              .next()
              .attr("style", "display:inline-block")
              .show();
          };
          reader.readAsDataURL(input.files[0]);
        }
      }

      //Expand $ collapse the section
      function collapse(instance) {
        //section title in collaspe
        let sectionCollapseTitle = $(instance)
          .closest(".removable")
          .find(".section-title-name")
          .text();
        $(instance)
          .closest(".removable")
          .find(".collapse-section-title")
          .html(sectionCollapseTitle);

        //collasping the form
        let sectionCollapse = $(instance)
          .closest(".section-holder")
          .find(".collapse-section");
        let collapseInstance = $(instance)
          .closest(".section-holder")
          .find(".menu");
        if ($(collapseInstance).css("display") === "block") {
          $(collapseInstance).hide("fast");
          $(sectionCollapse).show("");
        }
      }
      function expand(instance) {
        let sectionCollapse = $(instance)
          .closest(".section-holder")
          .find(".collapse-section");
        let collapseInstance = $(instance)
          .closest(".section-holder")
          .find(".menu");
        if ($(collapseInstance).css("display") === "none") {
          $(collapseInstance).show("fast");
          $(sectionCollapse).hide("");
        }
      }
      //Looping button for mcq-options and required field
      $(document).on("click", "button.btn-trigger", function () {
        $("#add-section input[type=checkbox]").each(function (index, item) {
          // console.log(item);
          $(item).attr("id", `check_${index}`);
          $(item).next("label").attr("for", `check_${index}`);
        });
      });
      //checking if checked or not
      $(document).on("change", 'input[type="checkbox"]', function () {
        // required
        // console.log('hi');
        if ($(this).hasClass("required")) {
          let isChecked = $(this).is(":checked");
          let v = $(this).closest(".removable");
          if (isChecked) {
            $(v).css("border", "1px solid red");
          } else {
            $(v).removeAttr("style");
          }
        }
        //Mutliple
        else if ($(this).hasClass("multipleQuestion")) {
          let isChecked = $(this).is(":checked");
          let v = $(this).closest(".sub-menu").find(".options-radio ");
          if (isChecked) {
            $(v).attr("type", "checkbox");
          } else {
            let b = $(this).closest(".sub-menu").find(".options-radio");
            $(b).attr("type", "radio");
          }
        } else if ($(this).hasClass("enablePDF")) {
          let isChecked = $(this).is(":checked");
          let v = $(this).closest;
        }
      });
      //Collapses questions inside sections
      function collapseQuestions(instance) {
        //Displaying questions in the collapse
        let question = $(instance).closest(".sub-menu").find("input").val();
        let options = $(instance)
          .closest(".sub-menu")
          .find(".option-label")
          .text();
        console.log(options);
        // console.log(question);
        $(instance)
          .closest(".removable")
          .find(".question-display")
          .html(question);
        $(instance)
          .closest(".removable")
          .find(".question-option")
          .html(options);
        //Displaying questions images in the collapse
        let image = $(instance)
          .closest(".sub-menu")
          .find('input[type="file"]')[0].files[0];
        // console.log(image);
        let file = new FileReader();
        file.onload = function (e) {
          $(instance)
            .closest(".removable")
            .find(".question-image")
            .attr("src", e.target.result)
            .width(300)
            .height(250);
        };
        //if image then read the file or without
        if (image) file.readAsDataURL(image);

        //collapse the question
        let questionCollapse = $(instance)
          .closest(".removable")
          .find(".collapse-question");
        // console.log(questionCollapse);
        let collapseInstance = $(instance)
          .closest(".removable")
          .find(".sub-menu");
        if ($(collapseInstance).css("display") === "block") {
          $(collapseInstance).hide("fast");
          $(questionCollapse).show("");
        }
      }
      //expand the question
      function expandQuestions(instance) {
        let questionCollapse = $(instance)
          .closest(".removable")
          .find(".collapse-question");
        let collapseInstance = $(instance)
          .closest(".removable")
          .find(".sub-menu");
        if ($(collapseInstance).css("display") === "none") {
          $(collapseInstance).show("fast");
          $(questionCollapse).hide("");
        }
      }
      //Changing section title
      function sectionTitle(instance) {
        let value = $(instance).text();
        $(instance)
          .closest(".section-title")
          .html(
            `
              <div class='section-input'>
              <input type="text" class="sectionInput" autofocus value=${value} placeholder='Section'>
              <hr class='sectionInputLine'/>
              </div>
             `
          );
      }
      //changing the value of the input
      $(document).on("change", ".sectionInput", function () {
        let value = $(this).val();
        $(this)
          .closest(".section-title")
          .html(
            `<h3 class='section-title-name' onclick='sectionTitle(this)'>${
              value ? value : "Section"
            }</h3>`
          );
      });
      //Creating different id in the checkbox in mcq options
      $(document).on("click", "button.button-trigger-mcqoptions", function () {
        $(".options-contain input[type=checkbox]").each(function (index, item) {
          // console.log(item);
          $(item).attr("id", `chec_${index}`);
          $(item).next("label").attr("for", `chec_${index}`);
        });
      });
      //Form Collaspe and expand
      function formCollaspe(instance) {
        //data submitting
        // console.log($('#input-form-submit'));
        let formData = $("#input-form-submit").serializeArray();
        // console.log(formData);
        formData.forEach((element) => {
          // console.log(element.value);
        });

        //collasping the form
        let formCollapse = $(instance)
          .closest("#input-form-submit")
          .find(".heading-context");
        // console.log(formCollapse);
        let collapseForm = $(instance)
          .closest("#input-form-submit")
          .find(".form-content");
        if ($(collapseForm).css("display") === "block") {
          $(collapseForm).hide("fast");
          $(formCollapse).show("");
        }
      }
      function formExpand(instance) {
        //expanding the form
        let formCollapse = $(instance)
          .closest("#input-form-submit")
          .find(".heading-context");
        console.log(formCollapse);
        let collapseForm = $(instance)
          .closest("#input-form-submit")
          .find(".form-content");
        if ($(collapseForm).css("display") === "none") {
          $(collapseForm).show("fast");
          $(formCollapse).hide("");
        }
      }
      //Change the option
      function changeTheOption(instance) {
        let changeOption = $(instance).closest(".form-check");
        console.log($(instance));
        $(instance).html(
          `<input type="text" autofocus value='amish' onchange='changeType(this)' placeholder='Section'/>`
        );
      }
      function changeType(instance) {
        let value = instance.value;
        $(instance).closest("label").html(value);
      }
      //counter for the questions
      $(document).on("click", ".counter", function () {
        reArrangeSN();
      });
      // reArrangeSN function for counter for the questions
      function reArrangeSN() {
        $(".count-questions").each(function (index, item) {
          // console.log('here: ', index + 1);
          $(this)
            .closest(".context-contain")
            .find("span")
            .text(`${index + 1}.`)
            .closest(".removable")
            .find(".question-numbers")
            .text(`${index + 1}.`);
        });
      }
      //changing the points in the sections
      $(document).on("change", "input[type=number]", function () {
        calculateTotalPoints($(this));
      });
      function calculateTotalPoints(instance) {
        // console.log('hi');
        let totalPoints = 0;
        // iterate while filling points input
        $(".points").each(function (index, item) {
          if (Number($(item).val())) totalPoints += Number($(item).val());
        });
        $(instance)
          .closest(".menu")
          .find(".section-total")
          .text(`Total: ${totalPoints > 0 ? totalPoints : 0}`);
      } //Adding question to the mcq
      function addMcqOption(instance) {
        let addOptionMcq = $(instance)
          .closest(".mcq-container")
          .find(".options-contain");
        let options = $(instance)
          .closest(".sub-menu")
          .find(".form-check.removable")
          .last();
        // console.log(options);
        $(options).clone().appendTo(addOptionMcq);
      }
      //Add the questions to each sections
      function addQuestions(instance) {
        let divInstance = $(instance)
          .closest(".button-container")
          .find(".questions-option");
        if (
          (!divInstance.hasClass("show") && !divInstance.hasClass("hide")) ||
          divInstance.hasClass("hide")
        ) {
          let options = `
    <div class='sub-button'>
    <button class='btn btn-outlined-primary btn-trigger counter' onclick='mcqQuestion(this)'>MCQ Questions</button>
    <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Long Questions</button>
    <button class='btn btn-outlined-primary btn-trigger counter' onclick='longQuestion(this)'>Short Questions</button>
    <button class='btn btn-outlined-primary btn-trigger counter'>Fill in the blank</button>
    </div>`;
          divInstance.removeClass("hide").addClass("show").show().html(options);
        } else divInstance.removeClass("show").addClass("hide").hide();
      }
      //Remove the questions/section/options
      function removeQuestions(instance) {
        var remove = confirm(`Are you sure you want to remove this?`);
        if (remove) {
          $(instance).closest(".removable").remove();
          reArrangeSN();
          calculateTotalPoints($("input[type=number]"));
        }
      }
      //Doted button function
      function dotOption(instance) {
        // console.log(instance);
        let dotOptionInstance = $(instance)
          .closest(".removable")
          .find(".dot-option-function");
        if (
          (!dotOptionInstance.hasClass("show") &&
            !dotOptionInstance.hasClass("hide")) ||
          dotOptionInstance.hasClass("hide")
        ) {
          let dot_option = `
      <div class='dot_option_button'>
      <button class='btn btn-outline-primary btn-remove' onclick='removeQuestions(this)'>Remove</button>
      </div>
      `;
          dotOptionInstance
            .removeClass("hide")
            .addClass("show")
            .show()
            .html(dot_option);
        } else dotOptionInstance.removeClass("show").addClass("hide").hide();
        //while click outside the box
        $(document).mouseup(function (e) {
          let dotOptionInstance = $(instance)
            .closest(".removable")
            .find(".dot-option-function");
          if (
            !dotOptionInstance.is(e.target) &&
            dotOptionInstance.has(e.target).length === 0
          ) {
            dotOptionInstance.hide();
          }
        });
      }
      // imageUploader func
      function openImgUpload(instance) {
        let imageUploader = $(instance)
          .closest(".upload-image")
          .find(".imgupload");
        $(imageUploader).trigger("click");
      }
      function displayImage(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $(input)
              .closest(".removable")
              .find(".file")
              .attr("src", e.target.result)
              .width(400)
              .height(250)
              .next()
              .attr("style", "display:inline-block")
              .show();
          };
          reader.readAsDataURL(input.files[0]);
        }
      }

      //Expand $ collapse the section
      function collapse(instance) {
        //section title in collaspe
        let sectionCollapseTitle = $(instance)
          .closest(".removable")
          .find(".section-title-name")
          .text();
        $(instance)
          .closest(".removable")
          .find(".collapse-section-title")
          .html(sectionCollapseTitle);

        //collasping the form
        let sectionCollapse = $(instance)
          .closest(".section-holder")
          .find(".collapse-section");
        let collapseInstance = $(instance)
          .closest(".section-holder")
          .find(".menu");
        if ($(collapseInstance).css("display") === "block") {
          $(collapseInstance).hide("fast");
          $(sectionCollapse).show("");
        }
      }
      function expand(instance) {
        let sectionCollapse = $(instance)
          .closest(".section-holder")
          .find(".collapse-section");
        let collapseInstance = $(instance)
          .closest(".section-holder")
          .find(".menu");
        if ($(collapseInstance).css("display") === "none") {
          $(collapseInstance).show("fast");
          $(sectionCollapse).hide("");
        }
      }
      //Looping button for mcq-options and required field
      $(document).on("click", "button.btn-trigger", function () {
        $("#add-section input[type=checkbox]").each(function (index, item) {
          // console.log(item);
          $(item).attr("id", `check_${index}`);
          $(item).next("label").attr("for", `check_${index}`);
        });
      });
      //checking if checked or not
      $(document).on("change", 'input[type="checkbox"]', function () {
        // required
        // console.log('hi');
        if ($(this).hasClass("required")) {
          let isChecked = $(this).is(":checked");
          let v = $(this).closest(".removable");
          if (isChecked) {
            $(v).css("border", "1px solid red");
          } else {
            $(v).removeAttr("style");
          }
        }
        //Mutliple
        else if ($(this).hasClass("multipleQuestion")) {
          let isChecked = $(this).is(":checked");
          let v = $(this).closest(".sub-menu").find(".options-radio ");
          if (isChecked) {
            $(v).attr("type", "checkbox");
          } else {
            let b = $(this).closest(".sub-menu").find(".options-radio");
            $(b).attr("type", "radio");
          }
        } else if ($(this).hasClass("enablePDF")) {
          let isChecked = $(this).is(":checked");
          let v = $(this).closest;
        }
      });
      //Collapses questions inside sections
      function collapseQuestions(instance) {
        //Displaying questions in the collapse
        let question = $(instance).closest(".sub-menu").find("input").val();
        let options = $(instance)
          .closest(".sub-menu")
          .find(".option-label")
          .text();
        console.log(options);
        // console.log(question);
        $(instance)
          .closest(".removable")
          .find(".question-display")
          .html(question);
        $(instance)
          .closest(".removable")
          .find(".question-option")
          .html(options);
        //Displaying questions images in the collapse
        let image = $(instance)
          .closest(".sub-menu")
          .find('input[type="file"]')[0].files[0];
        // console.log(image);
        let file = new FileReader();
        file.onload = function (e) {
          $(instance)
            .closest(".removable")
            .find(".question-image")
            .attr("src", e.target.result)
            .width(300)
            .height(250);
        };
        //if image then read the file or without
        if (image) file.readAsDataURL(image);

        //collapse the question
        let questionCollapse = $(instance)
          .closest(".removable")
          .find(".collapse-question");
        // console.log(questionCollapse);
        let collapseInstance = $(instance)
          .closest(".removable")
          .find(".sub-menu");
        if ($(collapseInstance).css("display") === "block") {
          $(collapseInstance).hide("fast");
          $(questionCollapse).show("");
        }
      }
      //expand the question
      function expandQuestions(instance) {
        let questionCollapse = $(instance)
          .closest(".removable")
          .find(".collapse-question");
        let collapseInstance = $(instance)
          .closest(".removable")
          .find(".sub-menu");
        if ($(collapseInstance).css("display") === "none") {
          $(collapseInstance).show("fast");
          $(questionCollapse).hide("");
        }
      }
      //Changing section title
      function sectionTitle(instance) {
        let value = $(instance).text();
        $(instance)
          .closest(".section-title")
          .html(
            `
      <div class='section-input'>
      <input type="text" class="sectionInput" autofocus value=${value} placeholder='Section'>
      <hr class='sectionInputLine'/>
      </div>
     `
          );
      }
      //changing the value of the input
      $(document).on("change", ".sectionInput", function () {
        let value = $(this).val();
        $(this)
          .closest(".section-title")
          .html(
            `<h3 class='section-title-name' onclick='sectionTitle(this)'>${
              value ? value : "Section"
            }</h3>`
          );
      });
      //Creating different id in the checkbox in mcq options
      $(document).on("click", "button.button-trigger-mcqoptions", function () {
        $(".options-contain input[type=checkbox]").each(function (index, item) {
          // console.log(item);
          $(item).attr("id", `chec_${index}`);
          $(item).next("label").attr("for", `chec_${index}`);
        });
      });
      //Form Collaspe and expand
      function formCollaspe(instance) {
        //data submitting
        // console.log($('#input-form-submit'));
        let formData = $("#input-form-submit").serializeArray();
        // console.log(formData);
        formData.forEach((element) => {
          // console.log(element.value);
        });

        //collasping the form
        let formCollapse = $(instance)
          .closest("#input-form-submit")
          .find(".heading-context");
        // console.log(formCollapse);
        let collapseForm = $(instance)
          .closest("#input-form-submit")
          .find(".form-content");
        if ($(collapseForm).css("display") === "block") {
          $(collapseForm).hide("fast");
          $(formCollapse).show("");
        }
      }
      function formExpand(instance) {
        //expanding the form
        let formCollapse = $(instance)
          .closest("#input-form-submit")
          .find(".heading-context");
        console.log(formCollapse);
        let collapseForm = $(instance)
          .closest("#input-form-submit")
          .find(".form-content");
        if ($(collapseForm).css("display") === "none") {
          $(collapseForm).show("fast");
          $(formCollapse).hide("");
        }
      }
      //Change the option
      function changeTheOption(instance) {
        let changeOption = $(instance).closest(".form-check");
        console.log($(instance));
        $(instance).html(
          `<input type="text" autofocus value='amish' onchange='changeType(this)' placeholder='Section'/>`
        );
      }
      function changeType(instance) {
        let value = instance.value;
        $(instance).closest("label").html(value);
      }
      //counter for the questions
      $(document).on("click", ".counter", function () {
        reArrangeSN();
      });
      // reArrangeSN function for counter for the questions
      function reArrangeSN() {
        $(".count-questions").each(function (index, item) {
          // console.log('here: ', index + 1);
          $(this)
            .closest(".context-contain")
            .find("span")
            .text(`${index + 1}.`)
            .closest(".removable")
            .find(".question-numbers")
            .text(`${index + 1}.`);
        });
      }
      //changing the points in the sections
      $(document).on("change", "input[type=number]", function () {
        calculateTotalPoints($(this));
      });
      function calculateTotalPoints(instance) {
        // console.log('hi');
        let totalPoints = 0;
        // iterate while filling points input
        $(".points").each(function (index, item) {
          if (Number($(item).val())) totalPoints += Number($(item).val());
        });
        $(instance)
          .closest(".menu")
          .find(".section-total")
          .text(`Total: ${totalPoints > 0 ? totalPoints : 0}`);
      }
    }
    $(formCollapse).show("");
  }
}
function formExpand(instance) {
  //expanding the form
  let formCollapse = $(instance)
    .closest("#input-form-submit")
    .find(".heading-context");
  console.log(formCollapse);
  let collapseForm = $(instance)
    .closest("#input-form-submit")
    .find(".form-content");
  if ($(collapseForm).css("display") === "none") {
    $(collapseForm).show("fast");
    $(formCollapse).hide("");
  }
}

//Change the option
function changeTheOption(instance) {
  let changeOption = $(instance).closest(".form-check");
  console.log($(instance));
  $(instance).html(
    `<input type="text" autofocus value='amish' onchange='changeType(this)' placeholder='Section'/>`
  );
}
function changeType(instance) {
  let value = instance.value;
  $(instance).closest("label").html(value);
}

//counter for the questions
$(document).on("click", ".counter", function () {
  reArrangeSN();
});
// reArrangeSN function for counter for the questions
function reArrangeSN() {
  $(".count-questions").each(function (index, item) {
    // console.log('here: ', index + 1);
    $(this)
      .closest(".context-contain")
      .find("span")
      .text(`${index + 1}.`)
      .closest(".removable")
      .find(".question-numbers")
      .text(`${index + 1}.`);
  });
}

//changing the points in the sections
$(document).on("change", "input[type=number]", function () {
  calculateTotalPoints($(this));
});
function calculateTotalPoints(instance) {
  let totalPoints = 0;
  // iterate while filling points input
  $(".points").each(function (index, item) {
    if (Number($(item).val())) totalPoints += Number($(item).val());
  });
  $(instance)
    .closest(".menu")
    .find(".section-total")
    .text(`Total: ${totalPoints > 0 ? totalPoints : 0}`);

  $(instance)
    .closest(".removable")
    .find(".section.section-total")
    .text(`Total: ${totalPoints > 0 ? totalPoints : 0}`);
}

$(function () {
  $("#add-section").sortable();
  console.log("hel");
});
