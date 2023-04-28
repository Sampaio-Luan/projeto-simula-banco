var saldo;
var extrato = "";

function abrirconta()
{
    let checar = document.querySelector('input[name = "tipo"]:checked'); // recebendo o checked do radio
    
    if (checar == null) 
    {
        alert ("Escolha uma opção para abrir a conta");
    }
    else
    {
        window.document.getElementById("areaSaldo").style.display="block"
        window.document.getElementById("transacoes").style.display="block";
        window.document.getElementById("abrirConta").style.display="none";

    
            if (checar.value == 1) {
                saldo = 30;
                alert ("Parabéns !!! \n\nVocê abriu uma conta Poupança, e foi contemplado com: \n\nR$ 30,00 reais");
                extrato += "Abriu conta Poupança \n";
            }   
            else
            {
                saldo = 50;
                alert ("Parabéns !!! \n\nVocê abriu uma conta Corrrente, e foi contemplado com: \n\nR$ 50,00 reais");
                extrato += "Abriu conta Corrrente \n";
            }
    
        window.document.getElementById("saldo").innerHTML = saldo;
        
    }


}

function operacoes(tipo){

    
    let valor;
    

    if(tipo === 1)//deposito
    {
        let deposito = window.document.getElementById("deposito");
        valor = parseInt(deposito.value);
        saldo = saldo + valor;

        extrato += '\nDepositou        ################      R$ '+ valor + ',00';
    }
    else if(tipo === 2)//gasto
    {
        let gastar = window.document.getElementById("gastou");
        valor = parseInt(gastar.value);
        let l = window.document.getElementById("listaOndeGastou");
        let lugar = l.value;
        
        if(valor > saldo)
        {
            alert("Saldo atual não permite esse gasto \n Seu saldo é de R$" + saldo + ",00 reais");
        }
        else
        {
            saldo = saldo - valor;

            extrato += '\n' + lugar + '  ################    --R$ ' + valor + ',00';
        }
    }
    else if(tipo === 3)//extrato
    {
        

        window.document.getElementById("areaExtrato").style.display="block";
        let caixa = document.getElementById("extrato");

        extrato += "\nSaldo            ################      R$" + saldo + ",00";
        caixa.textContent = extrato;

    }
    
    window.document.getElementById("saldo").innerHTML = saldo;
    
}


