function (data,account){
	if(data.event === 'unfavorite'){
		if(data.target.screen_name == account.screen_name){
			new Notification(data.source.screen_name + ' unfavorited your tweet ' + data.target_object.text);
		}
	}
	return {'trash':data};
}