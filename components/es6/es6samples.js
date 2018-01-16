// MAP 
const mapToMaisUm = arr => arr.map( 
	(ele, index, arr) => ele + 1
);
/*
var somaMais1 = function (ele, index, arr){
    return ele + 1;
}
var mapToMaisUm = function = (arr){
    arr.map(somaMaisUm);
};


var mapToMaisUm = function (arr){
    return arr.map(
    function (ele, index, arr){
        return ele + 1;
    })
}

*/

//Filter
// {nome: null, idade: null} 
const findMaior18 = arr => arr.filter(
	(ele, index, arr) => ele.idade >= 18 ? ele : null);

/*
var verificaMaior18 = function (ele, index , arr){
	if(ele.idade >= 18 )
	return ele;
};

var filterMaior18 = function (arr){
	return arr.filter(
		function (ele, index, arr){
			return ele.idade >=18 ? ele : null;
		})
	);
}

*/

// Reduce
// ["Mario","Maria","Joao"]
// {Mario: 0, Maria: 1, Joao: 2}
const reduceArrToObj = arr => arr.reduce(
	(acc, ele, index, arr) => {
		acc[ele] = index;
		return acc;
	},{}
);

/* 
var criaObjeto = function (acc, ele, index, arr){
	return acc[ele] = index;
}
var reduceArrToObj = function (arr){
	return arr.reduce(criaObjeto);
}

var reduceArrToObj = function (arr){
	return arr.reduce(
		(function (acc, ele, index, arr){
			return acc[ele] = index;
		}), {}
	)
}
*/

// Class
class PessoaEs6 {
	constructor(nome,idade){
		this.nome = nome;
		this.idade = idade;
	}
	
	digaOi (){
		return "Olá pessoas";
	}
}
class PessoaComGato extends PessoaEs6{
	constructor (nome, idade, possuiGato){
		super(nome, idade);
		this.possuiGato = possuiGato;
	}
	
	digaSuaIdade(){
		return "Minha Idade: " + this.idade;
	}
}
/*
function Pessoa (nome, idade){
	this.nome = nome;
	this.idade = idade;
	this.digaOi = function(){
		return "Olá pessoas";
	}
}
var lala = new Pessoa('Adriano', '21.9');


*/

let arr = [1,2,3,4,5,6,7,8,9,10];

let arrMaisUm = arr.map((ele, index, arr) => ele + 1)

let arrImpares = arrMaisUm.filter((ele, index, arr) => ele %2 == 1)

let somaDosImpares = arrImpares.reduce((acc, ele, index, arr) => acc += ele, 0 ) 
undefined
arrMaisUm
(10) [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arrImpares
(5) [3, 5, 7, 9, 11]
somaDosImpares
35