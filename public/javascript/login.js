$(document).ready(function() {
	console.log("ready");
});

do_register = function(){
	//this part for user registration
	//$("form[name='newAccountForm']").submit(function() {
	    // get all the inputs into an array.
			//alert("boop");

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
				alert('register successful');
			},
    	error: function(xhr, textStatus, errorThrown){
       alert('register failed');
    }
		});
	}

			//this part for user login
do_login = function(){
			//alert("boop boop");
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
				alert('login successful');
				document.location.href = 'https://nwen304groupseven.herokuapp.com';
			},
			error: function(xhr, textStatus, errorThrown){
       alert('login failed');
    }
		});

	}
