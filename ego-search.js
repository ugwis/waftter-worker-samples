function (data,account){
	var list = ["keyword 1","keyword 2"];
	var flag = false;
	if('text' in data){
		for(var i=0;i.list.length;i++){
			if(data.text.match(new RegExp(list[i],"i"))){
				flag = true;
			}
		}
		if(flag) new Notification(data.user.screen_name + ":" + data.text);
	}
	return {'trash':data};
}