(function(){
	var txtTask
		, btnAdd
		, btnRemoveCompleted
		, divMessages
		, ulTaskList;
		

	window.addEventListener("DOMContentLoaded",init);
	function init(){
		txtTask = document.getElementById("txtTask");
		btnAdd = document.getElementById("btnAdd");
		btnRemoveCompleted = document.getElementById("btnRemoveCompleted");
		divMessages = document.getElementById("divMessages");
		ulTaskList = document.getElementById("ulTaskList");

		btnAdd.addEventListener("click",onBtnAddClick);
		btnRemoveCompleted.addEventListener("click",onBtnRemoveCompletedClick);
		loadTasksFromStorage();
	}
	function loadTasksFromStorage(){
		var tasks = getAllTasksFromStorage();
		for(var i=0;i<tasks.length;i++)
			addTaskToUi(tasks[i]);
	}

	function onBtnAddClick(){
		var taskName = txtTask.value;
		var newTask = addTaskToStorage(taskName);
		addTaskToUi(newTask);
	}

	function addTaskToUi(newTask){
		var newTaskItem = document.createElement("li");
		newTaskItem.setAttribute("task-id",newTask.id);
		newTaskItem.innerText = newTask.name;
		newTaskItem.addEventListener("click",onTaskItemClick);
		ulTaskList.appendChild(newTaskItem);
	}
	function onBtnRemoveCompletedClick(){
		var taskItems = ulTaskList.children;
		for(var i=taskItems.length-1;i>=0;i--){
			if (taskItems[i].classList.contains("completed")){
				var id = taskItems[i].getAttribute("task-id");
				removeTaskFromStorage(id);
				taskItems[i].remove();
			}
		}
	}
	function onTaskItemClick(){
		this.classList.toggle("completed");
	}

})();