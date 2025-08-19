<script>
        const element = document.getElementById("exemplo-get");
    
        element.style.color = 'blue';

        const novaH1 = document.createElement('h1')
        novaH1.textContent = "NOVO ELEMENTO H1 NA TELA"
        console.log("novaH1******>",novaH1)
        element.appendChild(novaH1);
    
/*const header = document.getElementById("header")
header.style.backgroundColor = 'red';
console.log(header)*/

const footer = document.getElementById("footer")
footer.style.backgroundColor = 'pink';
footer.style.fontSize = '50px';
console.log(footer)


const buttonExemploJS = document.getElementById('buttonExemploJS');
buttonExemploJS.addEventListener('click', () => {
    alert("Digite um número")
  // Coloque aqui o que deve acontecer quando o botão for clicado
});
/*
const form = document.querySelector("form");
form.addEventListener('subimit',(event) =>{    
    console.log('batata')
});
*/
console.log("batata")
const header = document.getElementById("header")
header.addEventListener('mouseover', () =>{
    alert("NÃO PODE")
})


document.addEventListener('keydown', (event) => {
    console.log(`Tecla clicada: ${event.key}`);
});

     </script>