 $(document).ready(function(){
 	console.log('im alive');
 	$.ajax('/api/resumes/51c207d4236ea4a370000001',{
 		complete : function(response){
 			console.log(response.responseJSON);
 			var first =  response.responseJSON.name_first;
 			var last = response.responseJSON.name_last;
		var fullName = first + " " + last;
			$('#name').html(fullName);
		
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




				