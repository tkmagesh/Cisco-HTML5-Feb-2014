function doWork(){
	self.postMessage( "Hi from the worker script!");
}

self.addEventListener("message",onMsgReceived);

function onMsgReceived(msgEvt){
	if (msgEvt.data === "doWork")
		doWork();
}