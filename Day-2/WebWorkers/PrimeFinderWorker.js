function findPrimes(start,end){
		var primeCount = 0;
		for(var i=start;i<=end;i++){
			if (isPrime(i)) primeCount++;
			var percentCompleted = ((i - start)/(end - start)) * 100;
			updateProgress(percentCompleted,primeCount);
		}
	
	}

function updateProgress(percentCompleted,primeCount){
	msgData = {
		percentCompleted : percentCompleted,
		primeCount : primeCount
	};
	self.postMessage(msgData)
}
function isPrime(n){
	if (n <= 3) return true;
	for(var i=2;i<= n/2;i++)
		if (n%i == 0) return false;
	return true;
}
self.addEventListener("message",onMsgReceivedFromMainWorker);
function onMsgReceivedFromMainWorker(msgArg){
	var msgData = msgArg.data;
	findPrimes(msgData.start,msgData.end);
}