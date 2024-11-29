const input = document.getElementById("txt");
const submit = document.getElementById("check");
const list = document.getElementById("list");

submit.addEventListener('click', ()=>{
  let ulitem = document.createElement("li");
  ulitem.innerHTML = input.value;
  list.append(ulitem);
});