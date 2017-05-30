$(document).ready(function(e) {
	$("form[name='newAccountForm']").submit(function() {
	    // get all the inputs into an array.
	    var data = $("form[name='newAccountForm']").serializeArray().reduce(function(obj, item) {
		    obj[item.name] = item.value;
		    return obj;
		}, {});

	    alert(data['username']);

	});

});
