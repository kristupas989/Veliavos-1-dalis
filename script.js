const app = document.querySelector(".app");
// console.log(app);
fetch("https://restcountries.eu/rest/v2/")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      // console.log(el);
      const textNode = document.createElement("p");
      textNode.textContent = el.name;
      const liElement = document.createElement("li");
      const flag = document.createElement("IMG");
      liElement.appendChild(flag);
      app.appendChild(textNode);
      app.appendChild(liElement);
      flag.src = el.flag;
    });
  });
