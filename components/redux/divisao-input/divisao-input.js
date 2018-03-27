(() => {
	class DivisaoInput {
		constructor(){
			this.templateUrl = "/components/redux/divisao-input/divisao-input.html";
			this.bindings = {};
		}

		controller($scope, $ngRedux){
			const stateConnection = $ngRedux.connect(state =>{
				return {
					valor1: state.divisaoState.valor1,
					valor2: state.divisaoState.valor2
				};
			})(this);

			$scope.$on("$destroy", () => stateConnection);
			
			this.executarDivisao = () => $ngRedux.dispatch({
				type: "DIVIDIR_VALORES",
				data: {
					valor1: this.valor1,
					valor2: this.valor2
				}
			});
		}
		
	}

	angular.module("ngApp").component("divisaoInput", new DivisaoInput());
})();