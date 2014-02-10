var storage = window.localStorage;
function addTaskToStorage(taskName){
	var newId = new Date().getTime().toString();
	storage.setItem(newId,taskName);
	return {
		id : newId,
		name : taskName
	};
}

function removeTaskFromStorage(id){
	storage.removeItem(id);
}

/*function toggleTaskCompletionInStorage(id){

}*/

function getAllTasksFromStorage(){
	var tasks = [];
	for(var i=0;i<storage.length;i++){
		var id = storage.key(i);
		var name = storage.getItem(id);
		var task = {
			id : id,
			name : name
		};
		tasks.push(task);
	}
	return tasks;
}