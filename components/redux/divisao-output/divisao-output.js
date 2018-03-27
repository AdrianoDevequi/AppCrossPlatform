(() => {
	class divisaoOutput {
		constructor() {
			this.templateUrl = "/components/redux/divisao-output/divisao-output.html";
			this.bidings = {};
		}
		controller($scope, $ngRedux){
			const reduxConnection = $ngRedux.connect(state => {
				return{
					valor1: state.divisaoState.valor1,
					valor2: state.divisaoState.valor2,
					resultado: state.divisaoState.resultado
				};
			})(this);
			$scope.$on("$destroy", () => reduxConnection);

			this.limparDados = () => $ngRedux.dispatch({
				type: "LIMPAR_VALORES"
			});
		}
	}
	angular.module("ngApp").component("divisaoOutput", new divisaoOutput());
})();