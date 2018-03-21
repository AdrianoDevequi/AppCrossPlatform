(() => {
	class todoList {
		constructor() {
			this.templateUrl = "/components/redux/todo-list.html";
			this.bindings = {};
			this.controler = function ($scope, $ngRedux){
				this.todoList = [];

				this.lala = () => "lala";

				const unsubscribe = $ngRedux.connect(state => {
					return { todoList: state.list };

				})(this);

				$scope.$on("$destroy", unsubscribe);
			};
		}
	}
	angular.module("ngApp").component("todoList", new todoList());
})();