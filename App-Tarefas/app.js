class BD{
	constructor(){

	}

	addTask(valor){
		let indice = parseInt(localStorage.getItem('id')) + 1;
		localStorage.setItem(indice,valor);
		localStorage.setItem('id', indice);
	}

	localizar(){
		let tarefas = Array();	
		let id = localStorage.getItem('id');
		for (let i = 1;i <= id; i++){

			if(localStorage.getItem(i) != null){
				let tarefa = {valor : localStorage.getItem(i)};

				tarefa.id = i;
				tarefas.push(tarefa)
			}
			
		}

		return tarefas;
	}

	excluir(id){
		localStorage.removeItem(id)
	}
}

let bd = new BD();


function criarTabela(){
	if(localStorage.getItem('id') == null){
		localStorage.setItem("id",'0');
	}

	document.getElementById('lista').innerHTML = ''
	let tasks = bd.localizar();
	tasks.forEach(function(t){
		let lista = document.getElementById('lista');
		let item = document.createElement('li');
		let span = document.createElement('span');
		let bot = document.createElement('button');
		bot.className = 'btn btn-danger del'
		bot.innerHTML = '<i class="fas fa-minus"></i>'
		bot.id = t.id;
		bot.onclick = function(){
			bd.excluir(this.id)
			window.location.reload();
		}

		span.innerHTML = t.valor;
		item.appendChild(span);
		item.append(bot);
		lista.append(item);
		console.log()
	})

	
}

function cadastrar(){
	let task = document.getElementById('task').value;
	bd.addTask(task);
	window.location.reload();
}

