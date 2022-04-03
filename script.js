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
    document.querySelector("a").classList.add("clicar-whats")
    }


}








// function selecionarJogadores (qtdJogadores){
// 
//   }


//para testar  
// function xx (xx) {
// console.log (x)
//

// function escolha(elemento){
//    const escolha = document.querySelector(".opcao").querySelector(".CLASSE DE NOVO")


