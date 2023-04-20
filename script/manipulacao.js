
function abrirconta()
{
    window.document.getElementById("form_saldo").style.display="block"
    window.document.getElementById("tranzacoes").style.display="block";
    window.document.getElementById("tipodeconta").style.display="none";
    window.document.getElementById("saldo").innerHTML = 50;
    
}

function extrato(){
    let a = window.document.getElementById("areaextrato");
    a.style.display="block";
    a.style.background="rgba(158, 9, 9, 0.63)";
}

function modo(){
    document.body.style.backgroundColor = 'aliceblue';
    document.getElementById("conteudo").style.color = 'black';
    document.getElementById("l").style.color = "rgb(0, 119, 20)";

}

function saldo(tipo){

    var valor;
    var s = document.getElementById("saldo");
    var saldo = parseInt(s.value);

    if(tipo == 1)//deposito
    {
        var deposito = window.document.getElementById("deposito");
        var valor = parseInt(deposito.value);
        saldo = saldo + valor;
    }
    if(tipo == 2)//gasto
    {
        var gastar = window.document.getElementById("gastou");
        valor = parseInt(gastar.value);
        saldo = saldo - valor;
    }
    
    window.document.getElementById("saldo").innerHTML = saldo ;
    
}

function saldoNovo(saldo)
{
    var saldoN;
    return saldo;
}