function (data,account){
	if(data.event === 'favorite'){
		if(data.target.screen_name == account.screen_name){
			new Notification(data.source.screen_name + ' favorited your tweet ' + data.target_object.text);
		}
	}
	return {'trash':data};
}