const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
<style>
header{
  background: #2876BD;
  padding: 10px 0;
  z-index: 99;
}
.fix{
  position: fixed;
  width: 100%;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav .logo-container{
  position: relative;
}
nav .logo-container .logo{
  height: 35px;
  width: 120px;
  margin-left: 20px;
  position: absolute;
  transform: translate(0, 50%);
  bottom: 50%;
}
nav .contain-container > ul {
  margin: 0;
  padding:0;
}
nav > .contain-container > ul > li {
  display: inline-block;
  text-decoration: none;
}
nav > .contain-container > ul > li > .btn {
  text-decoration: none;
  color: white;
  border: none;
  background: none;
  box-shadow: none;
}
nav .contain-container > ul > li:not(:last-child) {
  margin-right: 10px;
}
</style>
  <header>
    <nav class='container header'>
    <div class="logo-container">
    </div>
    <div class='contain-container'>
    <ul>
        <li><button class="btn btn-outline-primary addSectionButton" >Add Section</button></li>
        <li><button class='btn btn-outline-primary preview-result'>Preview</button></li>
        <li><button class='btn btn-outline-primary'>Download</button></li>
      </ul>
    </div>
   </nav>
  </header>
`;
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}
customElements.define('header-component', Header);

//Navbar fixed
const headerComponent = document.querySelector('header-component');
const header = headerComponent.shadowRoot.querySelector('header');
// console.log(header);
$(document).ready(function () {
  var stickyNavTop = $(header).offset().top;
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $(header).addClass('fix');
    } else {
      $(header).removeClass('fix');
    }
  };
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });
});
