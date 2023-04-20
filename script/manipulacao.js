function modo(){
    document.body.style.backgroundColor = 'aliceblue';
    document.getElementById("conteudo").style.color = 'black';
    document.getElementById("l").style.color = "rgb(0, 119, 20)";

}

function abrirconta()
{
    window.document.getElementById("form_saldo").style.display="block"
    window.document.getElementById("tranzacoes").style.display="block";
    window.document.getElementById("tipodeconta").style.display="none";
    
}

var saldo = 50;

function novoSaldo(tipo){

    let valor;

    if(tipo == 1)//deposito
    {
        let deposito = window.document.getElementById("deposito");
        valor = parseInt(deposito.value);
        saldo = saldo + valor;
    }
    if(tipo == 2)//gasto
    {
        let gastar = window.document.getElementById("gastou");
        valor = parseInt(gastar.value);
        
        if(valor > saldo)
        {
            alert("Saldo atual não permite esse gasto \n Seu saldo é de R$" + saldo + ",00");
        }
        else
        {
            saldo = saldo - valor;
        }
    }
    
    window.document.getElementById("saldo").innerHTML = saldo;
    
}

function extrato(){
    let a = window.document.getElementById("areaextrato");
    let b = document.getElementById("extrato");
    let ondegastou = document.getElementById("ondegastou");
    let onde = ondegastou.value;
    let gasto = document.getElementById("gastou");
    a.style.display = "block";
    a.style.background = "rgba(158, 9, 9, 0.63)";
    b.innerHTML = "Saldo      ********   R$" + saldo + ",00\n" + onde + "  ******** - R$ " + gasto.value + ",00";
}

