 $(document).ready(function(){
 	console.log('im alive');
 	$.ajax('/api/resumes/51c207d4236ea4a370000001',{
 		complete : function(response){
 			var object = response.responseJSON;
 			console.log(response.responseJSON);
 			var first =  object.name_first;
 			var last = response.responseJSON.name_last;
			var fullName = first + " " + last;
			$('#name').html(fullName);
			
			var street_number = object.contact_info.street_address.street;
			$('#street_number').html(street_number);

			var city = object.contact_info.street_address.city;
			$('#city').html(city);

			var state = object.contact_info.street_address.state;
			$('#state').html(state);

			var zip = object.contact_info.street_address.zip_code;
			$('#zip').html(zip);

			var phone_number = object.contact_info.phone;
			$('#phone_number').html(phone_number);

			var email_address = object.contact_info.email;
			$('#email_address').html(email_address);

	}

 	});
}); 
$(document).ready(function() {
	console.log('here');

	var education_block_link = $('.education_block_add');
	console.log(education_block_link);

	education_block_link.click(function(){
	 		var html=$('.education_block').first().clone();
			html.css('display', 'none');
			$(this).before(html);
			html.slideDown(600);
			html.find('input').val('');

			return false;
	
	});

var experience_block_link = $('.experience_block_add');
	console.log(experience_block_link);

	experience_block_link.click(function(){
	 		var html=$('.experience_block').first().clone();
			html.css('display', 'none');
			$(this).before(html);
			html.slideDown(600);
			html.find('input').val('');
			return false;
	});
 
 

 });

 $('#userDataForm').submit(function(){
 	var userData = {};
 	userData.name = $('#name').val();

 	userData.schools =[];
 	var education_blocks= $('.education_block');
 	console.log(education_blocks);


 	console.log(userData);
 	return false;
/* for (i =0); i< education_blocks.length; i++ {
  can also do this: education_blocks.each(function(index, item){
	userData.schools.push({
	name:item.find('.name').val(),
	degree: item.find
	})
  })
 		school ={};
 		school.name = education_blocks[i].find('input.name').val();
 		school.degree = education_blocks[i].find('input.degree').val();
 		userData.schools.push(school); */
 });




				