const tabuada = document.getElementById("tab")
const div = document.getElementById("res")
 
function clicar() {
    if (tabuada.value.length == 0) {
        alert("escrevar a tabuada")
    } else {
        let n = Number(tabuada.value)
        let i = 0
        while (i <= 10) {
            let item = document.createElement("p")
            item.textContent = `${n} mais ${i} valor ${n*i}`
            div.appendChild(item)
            i++
        }
         
    }  
}