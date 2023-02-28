/*-------------------1----------------*/
document.body.style.backgroundColor = "red";

/*-------------------2----------------*/
setTimeout(function() {
    document.body.style.backgroundColor = "green";
  }, 3000);
  
/*-------------------3----------------*/
const orangeButton = document.getElementById("orange");
  orangeButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "orange";
  });

/*-------------------4----------------*/
let i = 1;
  const myList = document.getElementById("my-list");
  function addListItem() {
    if (i <= 20) {
      const listItem = document.createElement("li");
      listItem.textContent = `element ${i}`;
      if (i % 2 === 0) {
        listItem.style.backgroundColor = "green";
      } else {
        listItem.style.backgroundColor = "purple";
      }
      myList.appendChild(listItem);
      i++;
      setTimeout(addListItem, 2000);
    }
  }
  addListItem();