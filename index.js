(function() {
  let input = document.querySelector(".input--select"),
    button = document.querySelector(".input--submit");
  let keyWord;

  let word = "home";
  let queue = [document.body][0].childNodes;
  let curr;

  let foundWord = [];
  console.log(queue);
  queue.forEach((el, i) => {
    if (el.textContent.toLowerCase().includes(word) || el.className === word) {
      console.log(el.textContent);
      foundWord.push(el.className);
      foundWord.push(el.textContent);
    }
  });

  console.log(foundWord);
  input.addEventListener("change", function(e) {
    keyWord = e.target.value;
  });
  button.addEventListener("click", function() {
    console.log(keyWord);
  });
})();
