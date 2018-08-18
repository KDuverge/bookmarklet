(function() {
  let input = document.querySelector(".input--select"),
    button = document.querySelector(".input--submit");

  let word;
  let queue = [document.body][0].childNodes;

  let elements = {
    home: [],
    search: [],
    product: [],
    category: []
  };

  /* KeyWord Constructor to be saved in Local Storage */

  class scrapedValues {
    constructor(nodeName, id, className) {
      this.nodeName = nodeName;
      this.id = id;
      this.className = className;
    }
  }

  /* Scrape Body for specific keywords */

  let scrape = () => {
    word === undefined ? (word = "home") : word;
    queue.forEach((el, i) => {
      if (
        el.textContent.toLowerCase().includes(word) ||
        el.className === word ||
        el.id === word
      ) {
        el = new scrapedValues(el.nodeName, el.id, el.className);
        if (el.className !== "input--bookmark") {
          elements[word].push(el);
        }
      }
    });

    localStorage.setItem(word, JSON.stringify(elements[word]));
    let storedItem = JSON.parse(localStorage.getItem(word));

    console.log(storedItem);
  };

  /* Listen for Keyword dropdown change*/
  input.addEventListener("change", function(e) {
    word = e.target.value;
  });

  /* Listen for Button Click to Scrape DOM */
  button.addEventListener("click", scrape);
})();
