(function(){
	var txtTask, btnAdd, btnRemoveCompleted, divMessages, ulTaskList;
	window.addEventListener("DOMContentLoaded",init);
	function init(){
		txtTask = document.getElementById("txtTask");
		btnAdd = document.getElementById("btnAdd");
		btnRemoveCompleted = document.getElementById("btnRemoveCompleted");
		divMessages = document.getElementById("divMessages");
		ulTaskList = document.getElementById("ulTaskList");

		btnAdd.addEventListener("click",onBtnAddClick);
		btnRemoveCompleted.addEventListener("click",onBtnRemoveCompletedClick);

	}
	function onBtnAddClick(){
		var taskName = txtTask.value;
		var newTaskItem = document.createElement("li");
		newTaskItem.innerText = taskName;
		newTaskItem.addEventListener("click",onTaskItemClick);
		ulTaskList.appendChild(newTaskItem);
	}
	function onBtnRemoveCompletedClick(){
		var taskItems = ulTaskList.children;
		for(var i=taskItems.length-1;i>=0;i--){
			if (taskItems[i].classList.contains("completed")){
				taskItems[i].remove();
			}
		}
	}
	function onTaskItemClick(){
		this.classList.toggle("completed");
	}

})();