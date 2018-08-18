(function() {
  let input = document.querySelector(".input--select"),
    button = document.querySelector(".input--submit");
  let keyWord;

  let word = "home";
  let queue = [document.body][0].childNodes;
  let curr;

  let elements = ["home", "product", "category", "search"];

  elements.forEach((el, i) => {
    localStorage.setItem(el, i);
  });

  class scrapedValues {
    constructor(el, word, id, className) {
      this.el = el;
      this.word = word;
      this.id = id;
      this.className = className;
    }
  }

  let foundWord = [];
  console.log(queue);
  queue.forEach((el, i) => {
    if (el.textContent.toLowerCase().includes(word) || el.className === word) {
      console.log(el);
      foundWord.push(el.className);
      foundWord.push(el.textContent);
    }
  });
  let home = localStorage.getItem(word);

  console.log(home);
  // console.log(foundWord);
  input.addEventListener("change", function(e) {
    keyWord = e.target.value;
  });
  button.addEventListener("click", function() {});
})();
