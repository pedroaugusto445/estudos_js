var lista = document.getElementsByTagName("ul")[0]
var items = lista.children

var nt = document.createElement("li")
nt.textContent = "olaaaa"

lista.insertBefore(nt,items[0]) 

var lista2 = document.getElementsByTagName("ul")[1]
var itens = lista2.children
var nvt = document.createElement("li")
nvt.textContent = "ollalaaaalalallala2"

lista2.replaceChild(nvt,itens[2])