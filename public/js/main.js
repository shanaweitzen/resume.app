
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

			
			 function generateSchoolBlock( currentSchool,schoolData ){
			 	var item = "<div> <span> "+schoolData.name+" </span> []<br> <span> "+ schoolData.degree+" "+schoolData.gpa+"</span> </div>";
			 	$('#education_holder').append(item);
			 	/*console.log(currentSchool, schoolData);*/

			 }
			 console.log('education');
 			$.each(object.schools, generateSchoolBlock);

 			function generateExperienceBlock(currentExperience, experienceData){
 				var item ="<div><span>"+experienceData.organization+"</span><br><span>"+experienceData.project+"</span><br><span>"+experienceData.responsibilities+"</span></div>";
 				$('#experience_holder').append(item);
 			}
           /*console.log('experience');*/
           $.each(object.experience, generateExperienceBlock);

           function generateSkillsBlock(currentSkill, skillData){
           	var item ="<div><span>"+skillData.category+"</span>[]<br><span>"+skillData.title+"</span><br><br></span></div>";
           	$('#skills_holder').append(item);
           }
          /* console.log('skills');*/
           $.each(object.skill, generateSkillsBlock);

           function generateAccomplishmentsBlock(currentAccomplishment, accomplishmentData){
           	var item="<div><span>"+accomplishmentData.title+"</span>:<br><span>"+accomplishmentData.description+"</span>[*]<br><br><span>"+accomplishmentData.month_year+"</span></div>";
           	$('#accomplishment_holder').append(item);

           }
            /*console.log('accomplishments')*/
            $.each(object.accomplishments, generateAccomplishmentsBlock);




	var education_block_link = $('.education_block_add');
		/*console.log(education_block_link);
*/
		education_block_link.click(function(){
	 		var html=$('.education_block').first().clone();
			html.css('display', 'none');
			html.find('input').val('');
			$(this).before(html);
			html.slideDown(600);
			return false;
	
		});
	

		var experience_block_link = $('.experience_block_add');
			/*console.log(experience_block_link);*/
			experience_block_link.click(function(){
	 			var html=$('.experience_block').first().clone();
				html.css('display', 'none');
				html.find('input').val('');
				$(this).before(html);
				html.slideDown(600);
				
				return false;
		});

		
		var skills_block_link = $('.skills_block_add');
			/*console.log(skills_block_link);*/
			skills_block_link.click(function(){
					var html=$('.skills_block').first().clone();
					$(this).before(html);
					html.css('display','none');
					$(this).before(html);
					html.slideDown(600);
					html.find('input').val('');
					return false;
		});

		var accomplishment_block_link = $('.accomplishment_block_add');
				console.log(accomplishment_block_link);
				accomplishment_block_link.click(function(){
					var html=$('.accomplishment_block').first().clone();
					html.css('display','none');
					$(this).before(html);
					html.slideDown(600);
					html.find('input').val('');
					return false;
		}); 


 
 			 $('#userDataForm').submit(function(){
 				var userData = {};
 
 				/*console.log();*/
 				userData.name_first             = $('.name_first').val();
 				userData.name_last				= $('.name_last').val();

 				userData.email_address			= $('.email_address').val();
 				userData.phone_number			= $('.phone_number').val();
 				userData.street_number			= $('.street_number').val();
 				userData.zip                    = $('.zip').val();
 				userData.city     				= $('.city').val();
 				userData.state            		= $('.state').val();




 				userData.schools =[];
 				var education_block = $('.education_block');
 				console.log(education_block);
 				education_block.each(function(index, item){
 					userData.schools.push({
 						name 				: $(item).find('.schools_id').val(),
 						major				: $(item).find('.schools_degree').val(),
 					});
 				});
 				

 				userData.experiences= [];
 				var experience_block = $('.experience_block');
 				console.log(experience_block);
 				experience_block.each(function(index, item){
 					userData.experiences.push({
 						Organization 		: $(item).find('.Organization').val(),
 						Role				: $(item).find('.Role').val(),
 						Responsibilities    : $(item).find('.Responsibilities').val(),
 					});
 				});
 console.log(userData);
 				/*

 					userData.skills = [];

 					var skills_block = $('.skills_block');

 			//		skills_block.each(funtion(index, item){
 			//			userData.skills.push({

 						Skill               : $(item).find('.Skill').val(),
 						Category            : $(item).find('.Category').val(),

//
 	//					});
 //					


*/ return false;
 	});



		}
	});
});

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
// });




				