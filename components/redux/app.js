(() =>{
	angular.module("ngApp", ["ngRedux"])
		.config($ngReduxProvider => {
			class EstadoPadrao{
				constructor(){
					this.valor1 = 0;
					this.valor2 = 0;
					this.resultado = 0;
				}
			}

			function somaReducer(state, action){
				if(!state)
					return new EstadoPadrao(); 
				switch(action.type){
				// case "@@redux/INIT":
				// 	document.querySelector("body[unresolved]").removeAttribute("unresolved");
				// 	return new EstadoPadrao();
				case "ADD_VALORES":
					return Object.assign(state, {
						valor1: action.data.valor1,
						valor2: action.data.valor2,
						resultado: action.data.valor1 + action.data.valor2
					});
				case "LIMPAR_VALORES":
					return new EstadoPadrao();
				default:
					return state;
				}
			}

			function subtracaoReducer(state, action){
				if(!state)
					return new EstadoPadrao(); 
				switch(action.type){
				// case "@@redux/INIT":
				// 	document.querySelector("body[unresolved]").removeAttribute("unresolved");
				// 	return new EstadoPadrao();
				case "SUBTRAIR_VALORES":
					return Object.assign(state, {
						valor1: action.data.valor1,
						valor2: action.data.valor2,
						resultado: action.data.valor1 - action.data.valor2
					});
				case "LIMPAR_VALORES":
					return new EstadoPadrao();
				default:
					return state;
				}
			}

			function multiplicacaoReducer(state, action){
				if(!state)
					return new EstadoPadrao(); 
				switch(action.type){
				// case "@@redux/INIT":
				// 	document.querySelector("body[unresolved]").removeAttribute("unresolved");
				// 	return new EstadoPadrao();
				case "MULTIPLICAR_VALORES":
					return Object.assign(state, {
						valor1: action.data.valor1,
						valor2: action.data.valor2,
						resultado: action.data.valor1 * action.data.valor2
					});
				case "LIMPAR_VALORES":
					return new EstadoPadrao();
				default:
					return state;
				}
			}

			function divisaoReducer(state, action){
				if(!state)
					return new EstadoPadrao(); 
				switch(action.type){
				// case "@@redux/INIT":
				// 	document.querySelector("body[unresolved]").removeAttribute("unresolved");
				// 	return new EstadoPadrao();
				case "DIVIDIR_VALORES":
					return Object.assign(state, {
						valor1: action.data.valor1,
						valor2: action.data.valor2,
						resultado: action.data.valor1 / action.data.valor2
				
					});
				case "LIMPAR_VALORES":
					return new EstadoPadrao();
				default:
					return state;
				}

			}
			
			$ngReduxProvider.createStoreWith({somaState: somaReducer, subtracaoState: subtracaoReducer, multiplicacaoState: multiplicacaoReducer, divisaoState: divisaoReducer});

		});
})();

