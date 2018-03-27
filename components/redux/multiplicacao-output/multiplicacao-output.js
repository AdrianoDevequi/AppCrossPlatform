(() => {
	class multiplicacaoOutput {
		constructor() {
			this.templateUrl = "/components/redux/multiplicacao-output/multiplicacao-output.html";
			this.bidings = {};
		}
		controller($scope, $ngRedux){
			const reduxConnection = $ngRedux.connect(state => {
				return{
					valor1: state.multiplicacaoState.valor1,
					valor2: state.multiplicacaoState.valor2,
					resultado: state.multiplicacaoState.resultado
				};
			})(this);
			$scope.$on("$destroy", () => reduxConnection);

			this.limparDados = () => $ngRedux.dispatch({
				type: "LIMPAR_VALORES"
			});
		}
	}
	angular.module("ngApp").component("multiplicacaoOutput", new multiplicacaoOutput());
})();