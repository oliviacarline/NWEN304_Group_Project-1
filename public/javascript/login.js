$(document).ready(function() {
		console.log("ready");
});

do_register = function(){
	//this part for user registration
	    // get all the inputs into an array.
	    var data = $("form[name='newAccountForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
			url:'https://nwen304groupseven.herokuapp.com/register',
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
	}

			//this part for user login
do_login = function(){
	    // get all the inputs into an array.
	    var data = $("form[name='loginForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
			url:'https://nwen304groupseven.herokuapp.com/login',
			contentType:'application/json',
			dataType:'json',
			data: JSON.stringify({
				username:data['username'],
				password:data['password']
			}),
			success: function(data){
				alert(data);
				document.location.href = 'https://nwen304groupseven.herokuapp.com';
			}
		});

	}
