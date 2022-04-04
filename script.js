let x = "2,50"

function escolhaComida(elemento){
const comidaescolhida = document.querySelector(".opcao-comida")

if (comidaescolhida !== null){
comidaescolhida.classList.remove("opcao-comida")

}
elemento.classList.add("opcao-comida")

fecharPedido()
}

function escolhaBebida(elemento){
    const comidaescolhida = document.querySelector(".opcao-bebida")
    
    if (comidaescolhida !== null){
    comidaescolhida.classList.remove("opcao-bebida")
    
    }
    elemento.classList.add("opcao-bebida")
    
    fecharPedido()
    }

    function escolhaSobremesa(elemento){
        const comidaescolhida = document.querySelector(".opcao-sobremesa")
        
        if (comidaescolhida !== null){
        comidaescolhida.classList.remove("opcao-sobremesa")
        
        }
        elemento.classList.add("opcao-sobremesa")
        
        fecharPedido()
    }


    function fecharPedido(){
    if (document.querySelector(".opcao-comida") !==null && 
    document.querySelector(".opcao-bebida")!== null && 
    document.querySelector(".opcao-sobremesa") !==null)
    {
    
    document.querySelector(".fazer-pedido").classList.add("pedido-pronto")
    document.querySelector(".pedido-pronto").innerHTML="Fechar pedido";
    document.querySelector(".pedido-realizado").classList.add("clicar-whats")

   




    }
    }

function dadosdopedido(){
    let nomedacomida = document.querySelector(".opcao-comida").querySelector(".texto-prato").querySelector("h4").innerHTML
    let nomedabebida = document.querySelector(".opcao-bebida").querySelector(".texto-prato").querySelector("h4").innerHTML
    let nomedasobremesa = document.querySelector(".opcao-sobremesa").querySelector(".texto-prato").querySelector("h4").innerHTML
    
    let precocomida = document.querySelector(".opcao-comida").querySelector(".texto-prato").querySelector(".preco").querySelector("h6").innerHTML.replace(",",".")
    let precobebida = document.querySelector(".opcao-bebida").querySelector(".texto-prato").querySelector(".preco").querySelector("h6").innerHTML.replace(",",".")
    let precosobremesa = document.querySelector(".opcao-sobremesa").querySelector(".texto-prato").querySelector(".preco").querySelector("h6").innerHTML.replace(",",".")

    precocomida = Number(precocomida)
    precocomida = Number(precobebida)
    precosobremesa = Number(precosobremesa)

    let valorfinal = (Number(precocomida)+Number(precobebida)+Number(precosobremesa)).toFixed(2)

   let nome = prompt("Qual é o seu nome?")
   let rua = prompt("Qual o seu endereço?")

const textofinal= encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomedacomida}
- Bebida: ${nomedabebida}
- Sobremesa: ${nomedasobremesa}
Total: R$ ${valorfinal}

Nome: ${nome}
Endereço: ${rua}`)

const url = `https://wa.me/5543996527979?text=${textofinal}`

window.open(`https://wa.me/5543996527979?text=${textofinal}`)

}