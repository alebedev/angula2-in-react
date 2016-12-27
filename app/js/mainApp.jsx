import React from "react";
import TodoModel from "./todoModel";
import TodoApp from "./todoApp";

(function () {
	'use strict';

	var model = new TodoModel('react-todos');

	function render() {
		React.render(
			<TodoApp model={model}/>,
			document.getElementsByClassName('todoapp')[0]
		);
	}

	model.subscribe(render);
	render();
})();
