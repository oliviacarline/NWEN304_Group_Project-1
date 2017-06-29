$(document).ready(function(e) {

	//this part for user registration
	$("form[name='newAccountForm']").submit(function() {
	    // get all the inputs into an array.
	    var data = $("form[name='newAccountForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
			url:'https://nwen304groupseven.herokuapp.com',
			contentType:'application/json',
			dataType:'json',
			data: JSON.stringify({
				username:data['username'],
				password:data['password']
			}),
			success: function(data){
				console.log(data);
			}
		});


	});

	//this part for user login
	$("form[name='loginForm']").submit(function() {
	    // get all the inputs into an array.
	    var data = $("form[name='loginForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
			url:'https://nwen304groupseven.herokuapp.com',
			contentType:'application/json',
			dataType:'json',
			data: JSON.stringify({
				username:data['username'],
				password:data['password']
			}),
			success: function(data){
				console.log(data);
			}
		});

	});

});
