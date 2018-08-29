if (!($ = window.jQuery)) {
  script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.3.1.slim.js";
  script.onload = loadBookMarklet;
  document.body.appendChild(script);
} else {
  loadBookMarklet();
}

function loadBookMarklet() {
  let body = document.querySelector("body"),
    queue = [...[document.body][0].childNodes],
    bookClass = "input--bookmark",
    word;

  /* ============================================================ */
  /* Add DIV to DOM */

  let bookMarkletElements = `
        <div class="bx--container">
          <div class="page-module_content page-module_content__styled">
          <div class="fields">
          <div class="fields_row ">
              <input class="text-input_input" id="bx-input">
          </div>
          <div class="fields_row ">
            <div class="fields_col fields_col__fill">
              <button class="btn btn__small "id="run_btn">
                Run
              </button>
            </div>
            <div class="fields_col fields_col__fill">
              <button class="btn btn__small btn__secondary" id="clear_btn">Clear</button>
            </div>
          </div>
        </div>
          </div>
        </div>
  `;

  $(body).append(bookMarkletElements);

  let PageModule = document.querySelector(".page-module_content"),
    PageModuleStyled = document.querySelector(".page-module_content__styled"),
    TextInput = document.querySelector(".text-input_input"),
    Fields = document.querySelector(".fields"),
    FieldsRow = document.querySelector(".fields_row"),
    FieldsCol = document.querySelector(".fields_col"),
    FieldsColFill = document.querySelector(".fields_col__fill"),
    Btn = document.querySelector(".btn"),
    BtnSmall = document.querySelector(".btn__small"),
    BtnSecondary = document.querySelector(".btn__secondary"),
    BxContainer = document.querySelector(".bx--container"),
    bxInput = document.querySelector("#bx-input"),
    runBtn = document.querySelector("#run_btn"),
    clearBtn = document.querySelector("#clear_btn");

  let bookMarkletStyle = {
    bxContainer: {
      position: "absolute",
      top: "10px",
      right: "10px"
    },
    textInput: {
      padding: "1.2rem 0 0",
      borderWidth: 0,
      "border-bottom-width": "1px",
      "background-color": "transparent",
      "font-size": "1rem",
      border: "1px solid #D9E9F3",
      "margin-bottom": "10px"
    },
    pageModuleContent: {
      display: "-ms-grid",
      display: "grid",
      "grid-gap": "5px",
      "-ms-grid-rows": "max-content 1fr",
      "grid-template-rows": "-webkit-max-content 1fr",
      "grid-template-rows": "max-content 1fr"
    },
    pageModuleContentStyled: {
      padding: "2rem",
      border: "1px solid #D9E9F3",
      backgroundColor: "#FFFFFF"
    },
    fields: {
      display: "grid",
      display: "-ms-grid",
      "grid-row-gap": "2rem"
    },
    fieldsRow: {
      display: "-webkit-box",
      display: "-ms-flexbox",
      display: "flex",
      "-webkit-box-align": "start",
      "-ms-flex-align": "start",
      "align-items": "start",
      width: "100%"
    },
    fieldsCol: {
      display: "-ms-grid",
      display: "grid",
      gridAutoFlow: "column",
      gridColumnGap: "1.2rem"
    },
    fieldsColFill: {
      "webkit-box-flex": 1,
      "-ms-flex": 1,
      flex: 1
    },
    btn: {
      cursor: "pointer",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      display: "-webkit-inline-box",
      display: "-ms-inline-flexbox",
      display: "inline-flex",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "-webkit-box-pack": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "min-width": "11.333rem",
      height: "2.667rem",
      padding: "0 1.2rem",
      border: "1px solid #3686FB",
      "border-radius": 0,
      "background-color": "#3686FB",
      fill: "#FFFFFF",
      color: "#FFFFFF",
      "font-family":
        "Gotham SSm A, Gotham SSm B, Helvetica Neue, Helvetica, Arial",
      "font-size": "1rem",
      "font-weight": 500,
      "text-align": "center",
      "text-decoration": "none",
      "white-space": "nowrap",
      transition: "transform 300ms ease-in-out",
      "margin-bottom": "10px"
    },
    btnSmall: {
      "min-width": "6.667rem",
      height: "2.4rem",
      padding: "0 0.8rem",
      "font-size": "0.8rem"
    },
    btnSecondary: {
      "min-width": "7.467rem",
      "border-color": "#3686FB",
      "background-color": "transparent",
      fill: "#3686FB",
      color: "#3686FB",
      cursor: "pointer",
      width: "100%"
    },
    bxHoverr: {
      transform: "translate(2px, 2px)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0.5)"
    },
    bxNonHover: {
      transform: "translate(0, 0)",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
    }
  };

  let {
    pageModuleContent,
    pageModuleContentStyled,
    fields,
    fieldsCol,
    fieldsRow,
    fieldsColFill,
    btn,
    btnSecondary,
    btnSmall,
    bxHoverr,
    bxNonHover,
    bxContainer,
    textInput
  } = bookMarkletStyle;

  const setStyles = (elementStyle, element) => {
    for (let style in elementStyle) {
      element.style[style] = elementStyle[style];
    }
  };

  const buttonHover = button => {
    button.addEventListener("mouseenter", function() {
      setStyles(bxHoverr, this);
    });
    button.addEventListener("mouseleave", function() {
      setStyles(bxNonHover, this);
    });
  };

  setStyles(pageModuleContent, PageModule);
  setStyles(pageModuleContentStyled, PageModuleStyled);
  setStyles(fields, Fields);
  setStyles(fieldsCol, FieldsCol);
  setStyles(fieldsRow, FieldsRow);
  setStyles(fieldsColFill, FieldsColFill);
  setStyles(btn, Btn);
  setStyles(btnSecondary, BtnSecondary);
  setStyles(btnSmall, BtnSmall);
  setStyles(bxContainer, BxContainer);
  setStyles(textInput, TextInput);

  buttonHover(runBtn);
  buttonHover(clearBtn);

  /* ============================================================ */
  /* Setting Initial Object with keyword Arrays */
  let elements = {
    home: [],
    search: [],
    product: [],
    category: [],
    cart: [],
    checkout: []
  };

  /* ============================================================ */
  /* KeyWord Constructor to be saved in Local Storage */
  class scrapedValues {
    constructor(nodeName, id, className, outerHTML) {
      this.nodeName = nodeName;
      this.id = id;
      this.className = className;
      this.outerHTML = outerHTML;
      /* this.amount = 0; */
    }
  }

  /* ============================================================ */
  /* Scrape Body for specific keywords */
  let scrape = () => {
    if (word === undefined) {
      console.log("Please enter a value");
      return;
    }
    queue.map((el, i, arr) => {
      let { nodeName, id, className, outerHTML } = el;
      if (!nodeName.includes("text")) {
        if (
          (className.includes(word) || id.includes(word)) &&
          className !== bookClass
        ) {
          let item = new scrapedValues(nodeName, id, className, outerHTML);
          elements[word].push(item);
        }
      }
    });

    localStorage.setItem(word, JSON.stringify(elements[word]));
    JSON.parse(localStorage.getItem(word));
    console.log(elements);
  };

  /* ============================================================ */
  /* Check for multiple elements of the same kind */
  let checkForMultiple = () => {
    return;
  };

  /* ============================================================ */
  /* Clear Local Storage */
  let clearStorage = () => {
    localStorage.clear();
    console.clear();
    for (let el in elements) {
      elements[el] = [];
    }
    console.log("Local Storage has been cleared...");
  };

  /* ============================================================ */
  /* Listen for Keyword dropdown change */
  bxInput.addEventListener("input", function(e) {
    word = e.target.value;
  });

  /* ============================================================ */
  /* Listen for Button Click to Scrape DOM */
  runBtn.addEventListener("click", () => {
    scrape();
    checkForMultiple();
  });

  /* ============================================================ */
  /* Listen for Button Click to clear local storage */
  clearBtn.addEventListener("click", clearStorage);
}
