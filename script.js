const txtEntrada = document.getElementById('entrada');
const txtResultado = document.getElementById('resultado');
const conteudoSaida = document.getElementById('conteudo');
const btnCopiar = document.getElementById('btn_copiar');

txtEntrada.addEventListener('input', function (event) {

        let texto = event.target.value;
        texto = texto.replace(/[^a-z\s]/g, '');
        texto = texto.toLowerCase();
        event.target.value = texto;
        txtResultado.value = texto;

        if(texto){
                conteudoSaida.classList.add('sem__imagem');
                txtResultado.style.display="block";
                btnCopiar.style.display="block"
        }else{
                conteudoSaida.classList.remove('sem__imagem');  
                txtResultado.style.display="none";
                btnCopiar.style.display="none";
        }
        });

function criptografar(){
        txtResultado.value = txtEntrada.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");
}

function descriptografar(){
        txtResultado.value = txtEntrada.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
        .replace(/ober/g, "o").replace(/ufat/g, "u");
}

function copiar() {
        let copyText = document.querySelector("#resultado");
        copyText.select();
        document.execCommand("copy");
      }
      
document.querySelector("#btn_copiar").addEventListener("click", copiar);

