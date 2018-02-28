onmessege = evt =>{
	const result = evt.data[0] + evt.data[1];
	postMessage(result);
}