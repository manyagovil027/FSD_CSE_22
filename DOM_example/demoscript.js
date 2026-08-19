function addParagraph() {
  const para = document.createElement("p");
  para.innerText = "THis is new Paragraph";
  para.style.color = "red";
  const el = document.getElementById("para");
  el.appendChild(para);
}
