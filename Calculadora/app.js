let num;
let res;


function digitar(digito){
    document.getElementById('visor').value += digito;
}

function resultado(){
    num = document.getElementById('visor').value;
    res = eval(num);
    if(Number.isInteger(res)){
        document.getElementById('visor').value = res;
        document.getElementById('historico').innerHTML += `${num} = ${res}`+'<br>';
    }else{
        document.getElementById('visor').value = res.toFixed(2);
        document.getElementById('historico').innerHTML += `${num} = ${res.toFixed(2)}`+'<br>';
    }
}

function limpar(){
    document.getElementById('visor').value = '';
}

function inverter(){
    document.getElementById('visor').value *= -1;
}