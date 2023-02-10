document.getElementById("green").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
  });
  document.getElementById("red").addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
  });
  document.getElementById("rgb").addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
  });
  document.getElementById("rgb").addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "yellow";
  });

  alert("Buna zia!")
  const name = prompt("Cum te numesti?");
  alert(`Salut ${name} !`);
  