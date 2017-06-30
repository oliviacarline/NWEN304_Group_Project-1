$(document).ready(function() {
	alert("ready");
});

do_register = function(){
	//this part for user registration
	//$("form[name='newAccountForm']").submit(function() {
	    // get all the inputs into an array.
			alert("boop");

	    var data = $("form[name='newAccountForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
<<<<<<< HEAD
			url:'https://nwen304groupseven.herokuapp.com',
=======
			url:'https://nwen304groupseven.herokuapp.com/register',
>>>>>>> 3230bd10dae630920b8b81ca88cc3b903afe8365
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
	}

			//this part for user login
do_login = function(){
			alert("boop boop");
	    // get all the inputs into an array.
	    var data = $("form[name='loginForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    $.ajax({
			method:'POST',
<<<<<<< HEAD
			url:'https://nwen304groupseven.herokuapp.com',
=======
			url:'https://nwen304groupseven.herokuapp.com/login',
>>>>>>> 3230bd10dae630920b8b81ca88cc3b903afe8365
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

	}
