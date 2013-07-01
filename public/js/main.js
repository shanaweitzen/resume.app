$(document).ready(function(){
	console.log('im alive');
	$.ajax('/api/resumes',{
		complete: function(response){
			var object = response.responseJSON[0];

			$('#name').attr('data-id', object.id);

			console.log(response.responseJSON);
			var first = object.name_first;
			var last = object.name_last;
			var fullName = first + " " + last;
			$('#name').html(fullName);

			var street_number = object.contact_info.street_address.street;
			$('#street_number').html(street_number);

			var city= object.contact_info.street_address.city;
			$('#city').html(city);

			var state = object.contact_info.street_address.state;
			$('#state').html(state);

			var zip = object.contact_info.street_address.zip_code;
			$('#zip').html(zip);

			var phone_number = object.contact_info.phone;
			$('#phone_number').html(phone_number);

			var email_address = object.contact_info.email;
			$('#email_address').html(email_address);


			function generateSchoolBlock(currentSchool,schoolData){
				var item = "<div><span>"+schoolData.name+" </span>[]<br><span> "+ schoolData.degree+" "+schoolData.gpa+"</span></div>";
				$('#education_holder').append(item);
				/*console.log(currentSchool, schoolData) */
			}

				console.log('education');
				$.each(object.schools, generateSchoolBlock);

				//completed the function for generateSchoolBlock

			function generateExperienceBlock(currentExperience, experienceData){
				var item ="<div><span>"+experienceData.organization+"</span><br><span>"+experienceData.project+"</span><br><span>"+experienceData.responsibilities+"</span></div>";
 				$('#experience_holder').append(item);
			}

			 	console.log('experience');
			 	$.each(object.experience, generateExperienceBlock);

			 	//complete the generateExperienceBlock

			 function generateSkillsBlock(currentSkill, skillData){
			 	var item ="<div><span>"+skillData.category+"</span>[]<br><span>"+skillData.title+"</span><br><br></span></div>";
           		$('#skills_holder').append(item);
			 }

			 	console.log('skill');
			 	$.each(object.skill, generateSkillsBlock);

			 	//completed the generateSkillsBlock

			 function generateAccomplishmentsBlock(currentAccomplishment, accomplishmentData){
			 	var item="<div><span>"+accomplishmentData.title+"</span>:<br><span>"+accomplishmentData.description+"</span>[*]<br><br><span>"+accomplishmentData.month_year+"</span></div>";
           		$('#accomplishment_holder').append(item);
			 }

			 	console.log('accomplishments');
			 	$.each(object.accomplishments, generateAccomplishmentsBlock);

			 	//completed generateAccomplishmentsBlock

			 	var education_block_link = $('.education_block_add');
			 	    education_block_link.click(function(){
			 		var html=$('.education_block').first().clone();
			 		html.css('display', 'none');
			 		html.find('input').val('');
			 		$(this).before(html);
			 		html.slideDown(600);
			 		return false;
			 	});

			 	var experience_block_link = $('.experience_block_add');
			 		console.log(experience_block_link);
			 		experience_block_link.click(function(){
			 			var html=$('.experience_block').first().clone();
			 			html.css('display','none');
			 			html.find('input').val('');
			 			$(this).before(html);
			 			html.slideDown(600);
			 			return false;

			 	});

			 	var skills_block_link = $('.skills_block_add');
			 		console.log(skills_block_link);
			 	    skills_block_link.click(function(){
			 		var html=$('.skills_block').first().clone();
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
			 }
		});
			 	
			 	




			 	$('#userDataForm').submit(function(){
			 		var userData = {};

			 		userData.name_first			= $('.name_first').val();
			 		userData.name_last			= $('.name_last').val();

			 		userData.email_address 		= $('.email_address').val();
			 		userData.phone_number		= $('.email_address').val();
			 		userData.street_number		= $('.street_number').val();
			 		userData.zip 				= $('.zip').val();
			 		userData.city				= $('.city').val();
			 		userData.state				= $('.state').val();


			 		userData.schools =[];
			 		var education_block = $('.education_block');
			 			console.log(education_block);
			 			education_block.each(function(index, item){
			 			userData.schools.push({
			 				name 	: $(item).find('.school_name').val(),
			 				major	: $(item).find('.degree_name').val()

			 			});	
			 			});

			 		userData.experiences =[];
			 		var experience_block =$('.experience_block');
			 		console.log(experience_block);
			 		experience_block.each(function(index, item){
			 			userData.experiences.push({
			 				Organization       : $(item).find('.organization_name').val(),
			 				Role 			   : $(item).find('.role_name').val(),
			 				responsibilities   : $(item).find('.responsibilities').val()
			 			});
			 		});

			 		userData.accomplishments=[];
			 		var accomplishment_block = $('.accomplishment_block');
			 		console.log(accomplishment_block);
			 		accomplishment_block.each(function(index, item){
			 			userData.accomplishments.push({
			 				description			: $(item).find('.description').val(),
			 				title				: $(item).find('.title_name').val(),
			 				month_year			: $(item).find('.month_year').val()
			 			});
			 		});

			 			console.log(userData);

					var postData = JSON.stringify ({'resume': userData});

						console.log(postData);
						$.ajax({
							type: 'POST',
							url: '/api/resumes',
							data: postData
						}).done(function(){alert("Data saved");});
						return false;
				});


				 $('#delete_button').click(function() {
						// read the 'data-id' attribute of the id1
						var id = $('#name').data('id');
						console.log(id); // log the id just to make sure
						// send an ajax request to delete the resume
						$.ajax({
							url : '/api/resumes/'+id,
							type : 'DELETE',
							complete: function(){
								window.location = window.location;

							}
						});
						 // this will refresh the page
					});

}); /* end document ready */


				