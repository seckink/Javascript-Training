//Creating new element

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>   

const newLink=document.createElement("a");
const cardBody=document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";
//newLink.textContent="Farklı Sayfaya Git";
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardBody.appendChild(newLink);
//cardBody.textContent="sssss";
//console.log(cardBody);
console.log(newLink);

