var lista = document.querySelector(' #app ul');
var input = document.querySelector('#app input');
var botao = document.querySelector('#app button');
var nome = document.getElementById('nome');
var nomeid = document.getElementById('nomeid');




var todos = [

]//JSON.parse(localStorage.getItem('lista'));



function rendertodos(){
   
    lista.innerHTML = '';
    for(todo of todos){
        var todoelement= document.createElement('li');//elemento criado direto do js 
        var todotext = document.createTextNode(todo );// 

        var linkelemt = document.createElement('a');
        linkelemt.setAttribute('href', '#');//atribuindo os href ao elemento criando

        var pos = todos.indexOf(todo);
        linkelemt.setAttribute('onclick','deletetodo('+ pos +')');// 
        
        var linktext = document.createTextNode(' Concluido');

        linkelemt.appendChild(linktext);

        todoelement.appendChild(todotext);
        todoelement.appendChild(linkelemt);
        lista.appendChild(todoelement);
    }
}

rendertodos();

function addtodo(){
    
    var todotext = input.value;
    nomeid.innerHTML=`Olá ${nome.value} suas metas são:`
    todos.push(todotext);
    input.value ='';
  
    rendertodos();
    save();
}

botao.onclick = addtodo;

function deletetodo(pos){
    todos.splice(pos, 1);//o splice remove do arrow uma certa quantidade 
    rendertodos();
    save();
}
// esse funçao esta sendo criada para salvar no localstorage a lista de todos.
function save() {
   localStorage.setItem('lista',JSON.stringify(todos)); 
   // localStorage.setItem('liste',JSON.stringify(todos));

}
