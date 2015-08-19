function (data,account){
	var flag = false;
	if('entities' in data){
		if('user_mentions' in data.entities){
			for(var i=0;i<data.entities.user_mentions.length;i++){
				if(data.entities.user_mentions[i].screen_name == account.screen_name) flag = true;
			}
		}
	}
	if(flag){
		new Notification(data.text);
	}
	return {'trash':data};
}