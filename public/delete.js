$(document).ready(function() {
	// send an ajax request to fetch all the resumes
	// $.ajax('/api/resumes', {
	// 	complete : function(response) { // this function will run when the request is complete
	// 		var resume = response.responseJSON[0]; // get the first resume
	// 		console.log(resume.id); // log the id for testing purposes
	// 		// set the data from the resume object into the page's html
	// 		$('#name').attr('userData', resume.id).html(resume.name_first + ' ' + resume.name_last);



	// 		$('id2').append('<div>'+resume.contact_info.street_address+'</div>'+);
	// 		$('id2').append('<div>')+resume.contact_info.street_address.city+'</div> '+'<div>'+resume.contact_info.street_address+'</div> '+'<div>'+resume.contact_info.street_address.zip_code+'</div>');			
	// 		$('id3').append('<div>'+resume.contact_info.email+'</div>'+resume.contact_info.phone+'</div>'); 
	// 		$('education').append('<div>'+resume.schools.+'</div>'+ '<div>'+ resume.schools.name +'</div>'+'<div>'+ resume.schools.major +'</div>'+'<div>'+ resume.schools.start_month_year+'</div>');
	// 		$('accomplishments').append('<div>'+resume.accomplishments+' </div> '+'<div>'+ resume.accomplishments.description + '</div>'+'<div>'+ resume.accomplishments.title+
	// 			'</div>'+'<div>'+ resume.accomplishments.month_year +'</div>');
	// });





	// this will execute the function below when the '.delete' link is submitted
	$('#delete_button').click(function() {
		// read the 'data-id' attribute of the id1
		var id = $('#name').data('id');
		console.log(id); // log the id just to make sure
		// send an ajax request to delete the resume
		$.ajax({
			url : '/api/resumes/'+id,
			type : 'DELETE'
		});
		window.location = window.location; // this will refresh the page
	});
});