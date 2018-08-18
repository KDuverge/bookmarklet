(function() {
  let input = document.querySelector(".input--select"),
    body = document.querySelector("body"),
    button = document.querySelector(".input--submit"),
    remove = document.querySelector(".input--delete"),
    queue = [document.body][0].childNodes,
    word;

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
    constructor(nodeName, id, className) {
      this.nodeName = nodeName;
      this.id = id;
      this.className = className;
    }
  }

  /* ============================================================ */
  /* Scrape Body for specific keywords */
  let scrape = () => {
    word === undefined ? (word = "home") : word;
    queue.forEach((el, i) => {
      if (el.className === word || el.id === word) {
        let { nodeName, id, className } = el;
        el = new scrapedValues(nodeName, id, className);
        if (el.className !== "input--bookmark") {
          elements[word].push(el);
        }
      }
    });

    localStorage.setItem(word, JSON.stringify(elements[word]));
    let storedItem = JSON.parse(localStorage.getItem(word));

    console.log(storedItem);
  };

  /* ============================================================ */
  /* Clear Local Storage */
  let clearStorage = () => {
    localStorage.clear();
    console.log("Local Storage has been cleared...");
  };

  /* ============================================================ */
  /* Listen for Keyword dropdown change */
  input.addEventListener("change", function(e) {
    word = e.target.value;
  });

  /* ============================================================ */
  /* Listen for Button Click to Scrape DOM */
  button.addEventListener("click", scrape);

  /* ============================================================ */
  /* Listen for Button Click to clear local storage */
  remove.addEventListener("click", clearStorage);
})();

// var bookStyles = {
//   color: "red",
//   backgroundColor: "blue",
//   height: "300px",
//   width: "200px"
// };

// let div = document.createElement("div");

// for (let style in bookStyles) {
//   div.style[style] = bookStyles[style];
// }
// body.appendChild(div);
