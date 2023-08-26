function clickBtn() {
  const button = document.getElementById("btn");
  const parent = document.getElementById("parent");
  button.onclick = function() {
    console.log("Botón pulsado.")
  };
  parent.onclick = function() {
    console.log("parentがPulsado.")
  };
}
window.onload = clickBtn;