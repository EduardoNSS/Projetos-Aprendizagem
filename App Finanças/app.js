class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDespesa(){

        for(var i in this){
            if(this[i] === '' || this[i] === null || this[i] === undefined){
                return false;
            }                       
        }  
        
        return true;
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id');

        if(id == null){
            localStorage.setItem('id', '0');
        }
    }

    getNextId(){
        let proximoId = parseInt(localStorage.getItem('id'));
        return proximoId + 1;

    }

    gravarDespesa(d){
        let indice = this.getNextId();
        localStorage.setItem(indice, JSON.stringify(d))
        localStorage.setItem('id', indice);
    }

    localizarRegistros(){
        let despesas = Array();
        let id = localStorage.getItem('id');
        for(var i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i));

            if(despesa === null){
                continue
            }

            despesa.id = i;
            despesas.push(despesa);
            
        }

        return despesas;
    }

    pesquisar(despesa){
        let despesasFiltradas = Array();
        despesasFiltradas = this.localizarRegistros();

        //ano
        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano);
        }        
        //mes
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes);
        }  
        //dia
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia);
        }  
        //tipo
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo);
        }  
        //descricao
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao);
        }  
        //valor
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor);
        }
        
        return despesasFiltradas;
        
    }

    remover(id){
        localStorage.removeItem(id);
    }

}

let bd = new Bd();


function cadastrarDespesa(){
    var ano = document.getElementById('ano').value
    var mes = document.getElementById('mes').value
    var dia = document.getElementById('dia').value
    var tipo = document.getElementById('tipo').value
    var descricao = document.getElementById('descricao').value
    var valor = document.getElementById('valor').value    
    
    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    

    if(despesa.validarDespesa()){
        bd.gravarDespesa(despesa);

        document.getElementById('modalTitulo').className = 'text-success';
        document.getElementById('modalBotao').className = 'btn btn-success';

        document.getElementById('modalTitulo').innerHTML = 'Tudo certo';
        document.getElementById('modalInfo').innerHTML = 'Informações registradas com sucesso';
        document.getElementById('modalBotao').innerHTML = 'Continuar';
        $('#registrarDespesa').modal('show');

        limparTela();
    }else{
        document.getElementById('modalTitulo').className = 'text-danger';
        document.getElementById('modalBotao').className = 'btn btn-danger';

        document.getElementById('modalTitulo').innerHTML = 'Erro ao registrar informações';
        document.getElementById('modalInfo').innerHTML = 'Favor preencher todos os campos do formulário';
        document.getElementById('modalBotao').innerHTML = 'Voltar e corrigir';
        $('#registrarDespesa').modal('show');
    }
    
}

function limparTela(){
    document.getElementById('ano').value = '';
    document.getElementById('mes').value = '';
    document.getElementById('dia').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}

function carregarRegistros(despesas = Array(), filtrado = false){

    if(despesas.length == 0 && filtrado == false){
        var despesas = bd.localizarRegistros();
    }
    
    
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = '';

    despesas.forEach(function(d){
        let linha = tabela.insertRow();
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;
        

        switch(d.tipo){
            case '1':
                d.tipo = 'Alimentação'
                break
            case '2':
                d.tipo = 'Educação'
                break
            case '3':
                d.tipo = 'Lazer'
                break
            case '4':
                d.tipo = 'Saúde'
                break
            case '5':
                d.tipo = 'Transporte'
                break
        }

        linha.insertCell(1).innerHTML = d.tipo;
        linha.insertCell(2).innerHTML = d.descricao;
        linha.insertCell(3).innerHTML = d.valor;

        let btn = document.createElement("button");
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            bd.remover(d.id)
            window.location.reload();
        }

        linha.insertCell(4).append(btn);
    })
}

function filtrarDados(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor);

    let despesas = bd.pesquisar(despesa);

    carregarRegistros(despesas, true);


}

