$(document).ready(function(e) {
	$("form[name='newAccountForm']").submit(function() {
	    // get all the inputs into an array.
	    var data = $("form[name='newAccountForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    //alert(data['username']);

	    $.ajax({
			method:'POST',
			url:'http://nwen304groupseven.herokuapp.com/newUser',
			contentType:'application/json',
			dataType:'json',
			data: JSON.stringify({
				username:data['username'],
				password:data['password']
			}),
			success: function(data){
				alert('ajax success');
			}
		});


	});

	$("form[name='loginForm']").submit(function() {
	    // get all the inputs into an array.
	    var data = $("form[name='loginForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
			url:'http://nwen304groupseven.herokuapp.com/login',
			contentType:'application/json',
			dataType:'json',
			data: JSON.stringify({
				username:data['username'],
				password:data['password']
			}),
			success: function(data){
				alert(data);
			}
		});

	});

});
