if (!($ = window.jQuery)) {
  script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.3.1.slim.js';
  script.onload = loadBookMarklet;
  document.body.appendChild(script);
}
else {
  loadBookMarklet();
}

function loadBookMarklet() {
  let body = document.querySelector("body"),
    queue = [...[document.body][0].childNodes],
    bookClass = 'input--bookmark',
    word;

  /* ============================================================ */
  /* Add DIV to DOM */

  let bookMarkletElements = `
      <div class="bx--bookmark">
        <div class="bx--container">
          <select class="bx--select">
            <option value="home">Home</option>
            <option value="category">Category</option>
            <option value="product">Product</option>
            <option value="search">Search</option>
            <option value="cart">Cart</option>
            <option value="checkout">Checkout</option>
          </select>
          <button class="bx--submit">Run</button>
          <button class="bx--delete">Clear</button>
        </div>
      </div>
  `;

  $(body).append(bookMarkletElements);

  let bxBookmark = document.querySelector('.bx--bookmark'),
    bxSubmit = document.querySelector(".bx--submit"),
    bxClear = document.querySelector(".bx--delete"),
    input = document.querySelector(".bx--select"),
    bxContainer = document.querySelector('.bx--container');

  let bookMarkletStyle = {
    bxBookmarkk: {
      height: '120px',
      width: '250px',
      border: '1px solid #000',
      boxShadow: '0 2px 2px 2px rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'white',
      zIndex: '999999999'
    },
    bxContainerr: {
      width: '100%',
      height: '100px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    bxSubmitt: {
      padding: '5px 15px',
      cursor: 'pointer',
      transition: 'transform 300ms ease, box-shadow 300ms ease',
      borderRadius: '10px',
      background: 'green',
      color: 'white',
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      outline: 'none'
    },
    bxClearr: {
      padding: '5px 15px',
      cursor: 'pointer',
      transition: 'transform 300ms ease, box-shadow 300ms ease',
      borderRadius: '10px',
      background: 'red',
      color: 'white',
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      outline: 'none'
    },
    bxHoverr: {
      transform: 'translate(2px, 2px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0.5)'
    },
    bxNonHover: {
      transform: 'translate(0, 0)',
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    }
  };

  let { bxBookmarkk, bxContainerr, bxSubmitt, bxClearr, bxHoverr, bxNonHover } = bookMarkletStyle;

  const setStyles = (elementStyle, element) => {
    for (let style in elementStyle) {
      element.style[style] = elementStyle[style]
    }
  };

  const buttonHover = (button) => {
    button.addEventListener('mouseenter', function () {
      setStyles(bxHoverr, this);
    });
    button.addEventListener('mouseleave', function () {
      setStyles(bxNonHover, this);
    });
  };

  setStyles(bxBookmarkk, bxBookmark);
  setStyles(bxContainerr, bxContainer);
  setStyles(bxSubmitt, bxSubmit);
  setStyles(bxClearr, bxClear);

  buttonHover(bxSubmit);
  buttonHover(bxClear);

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
  };


  /* ============================================================ */
  /* Scrape Body for specific keywords */
  let scrape = () => {
    word === undefined ? (word = "home") : word;
    queue.map((el, i, arr) => {
      let { nodeName, id, className, outerHTML } = el;
      if ((className.includes(word) || id.includes(word)) && className !== bookClass) {
        let item = new scrapedValues(nodeName, id, className, outerHTML);
        elements[word].push(item);
      }
    });

    localStorage.setItem(word, JSON.stringify(elements[word]));
    let storedItem = JSON.parse(localStorage.getItem(word));
    console.log(elements);
  };

  /* ============================================================ */
  /* Check for multiple elements of the same kind */
  let checkForMultiple = () => {
    return;
  }

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
  input.addEventListener("change", function (e) {
    word = e.target.value;
  });

  /* ============================================================ */
  /* Listen for Button Click to Scrape DOM */
  bxSubmit.addEventListener("click", () => {
    scrape();
    checkForMultiple();
  });

  /* ============================================================ */
  /* Listen for Button Click to clear local storage */
  bxClear.addEventListener("click", clearStorage);
};

