(() => {
	class MultiplicacaoInput {
		constructor(){
			this.templateUrl = "/components/redux/multiplicacao-input/multiplicacao-input.html";
			this.bindings = {};
		}

		controller($scope, $ngRedux){
			const stateConnection = $ngRedux.connect(state =>{
				return {
					valor1: state.multiplicacaoState.valor1,
					valor2: state.multiplicacaoState.valor2
				};
			})(this);

			$scope.$on("$destroy", () => stateConnection);

			this.executarMultiplicacao = () => $ngRedux.dispatch({
				type: "MULTIPLICAR_VALORES",
				data: {
					valor1: this.valor1,
					valor2: this.valor2
				}
			});
		}
	}

	angular.module("ngApp").component("multiplicacaoInput", new MultiplicacaoInput());
})();