let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    
    let nota = document.getElementById("nota").value;

    nota = parseFloat(nota)

    console.log    

    let resultado = document.getElementById("resultado");

    
    if(nota > 5 || nota < 0){
        resultado.textContent = "Nota invalida"
        resultado.style.color ="red"
    }else if(nota >= 3){
        resultado.textContent = "Aprobo"
        resultado.style.color ="green"
       }else{
        resultado.textContent = "No aprobo"
        resultado.style.color ="orange"      
        }      
})
