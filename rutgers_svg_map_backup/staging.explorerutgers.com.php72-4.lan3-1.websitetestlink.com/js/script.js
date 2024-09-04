	//Call custom requests function

		if (typeof loadCustomScripts === 'function') {
			loadCustomScripts();
		}

		$(window).on("load", function() {
			//console.log('test');
			$('.load_hide').css('opacity', '1');

			$('#loading_screen').delay(500).fadeOut('slow');
		});

$(document).ready(function(){

	

	//$('#loading_wrap').hide();

	

	/*

	GTM

	*/

		$("[data-event='GAEvent']").click(function() {
			var evCat = $(this).attr('data-category') ? $(this).attr('data-category') : '',
				evAct = $(this).attr('data-action') ? $(this).attr('data-action') : '',
				evLab = $(this).attr('data-label') ? $(this).attr('data-label') : '',
				evVal = $(this).attr('data-value') ? $(this).attr('data-value') : '';

				try {

					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
						'event': 'GAEvent',
						'eventCategory': evCat,
						'eventAction': evAct,
						'eventLabel': evLab,
						'eventValue': evVal,
					});
					//console.log(evCat);


				} catch (e) {
					//console.log(e);
				}
		});


	/*

	Blog

	*/
		//Listing
		if($('#blog_form_search')) {
			var page = 1;
			$('.blog_get_results').click(function(e) {
				e.preventDefault();
				$('.blog_loading').show();

				$.ajax({
					type: "GET",
					url: "/blog/"+(page_blog_results_category!=''?page_blog_results_category+"/":"")+"?page="+page+"&ajax=1&search="+page_blog_results_search
				})
				.done(function(data) {
					$('.blog_loading').hide();
					$(data).appendTo($('#results'));
					page=page+1;
					if($('.blog_no_more_results').length) {
						$('.blog_get_results').hide();
					}
				});
			});
		}

		//Search
		if($('#blog_form_search')) {
			$('#blog_form_search').submit(function(e) {
				e.preventDefault();
				location.href='/blog/?search='+$(this).find('input[type="text"]').val();
			});
		}

	/*

	General

	*/

		//Validate Form
		//code.....

		//Check click of button
		//code...

	/*

	Modals

	*/

		//General

	    //Triggers
			$('body').on('click','.form_modal_button',function(e) {
	            e.preventDefault();
	            //console.log('form');
	            
	            $('.modal.form').show();
			});
			
			$('body').on('click','.register_today_btn',function(e) {
	            e.preventDefault();
	            //console.log('form');
	            
	            $('.modal.register_today').show();
	        });

	        $('body').on('click','.video_modal_button',function(e) {
	            e.preventDefault();
	            //console.log('form');

	            var yt_id = $(this).attr('data-youtube-id');
	            
	            $('.modal.video').show();

	            var video_code = '<iframe src="https://www.youtube.com/embed/' + yt_id + '?rel=0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Rutgers Student Tour Video"></iframe>';
	            $('.modal.video .modal_content').append(video_code);
	            
	        });

			$('body').on('click','.modal_overlay',function(e) {
	            e.preventDefault();
	            $('.modal').hide();
	            $('.modal.video iframe').remove();
	            $('.modal.video .container').remove();
	        });
	        $('body').on('click','.modal_close',function(e) {
	            e.preventDefault();
	            $('.modal').hide();
	            $('.modal.video iframe').remove();
	            $('.modal.video .container').remove();
	        });


			//mouseLeave trigger	        	
        		/*$('body').mouseleave(function(e){
    				e.preventDefault();
    				$('.modal.short_form').fadeIn();
    				$( this ).off(e);
        		});*/
	        	
	        	
	       

	        //Form Modal custom action

	        	$('.modal.form [data-progressive-sec]').hide();

	        	//Gender
		        	$('.modal.form [data-progressive-main="gender"]').change(function(){
		        		//console.log("form_test");
		        		//console.log($(this).val());
		        		if ($(this).val() == 'another') {
		        			$('.modal.form [data-progressive-sec="gender"]').show();
		        			//console.log("form_test 1");
		        		} else {
		        			$('.modal.form [data-progressive-sec="gender"]').hide();
		        			//console.log("form_test 2");
		        		}
		        	});

		        	$('.modal.short_form #gender_2').hide();
		        	$('.modal.short_form #gender_1').change(function(){
		        		//console.log("form_test");
		        		//console.log($(this).val());
		        		if ($(this).val() == 'another') {
		        			$('.modal.short_form #gender_2').show();
		        			//console.log("form_test 1");
		        		} else {
		        			$('.modal.short_form #gender_2').hide();
		        			//console.log("form_test 2");
		        		}
		        	});

	        	//Student Type
	        	$('.modal.form [data-progressive-main="student_type"]').change(function(){
	        			console.log("form_test");
	        			console.log($(this).val());
	        			if ($(this).val() == 'not in high school yet') {
	        				$('.modal.form [data-progressive-sec] select').attr("required", false);
	        				$('.modal.form [data-progressive-sec="student_type_1"]').show();
	        				$('.modal.form [data-progressive-sec="student_type_1"] select').attr("required", true);

	        				$('.modal.form [data-progressive-sec="student_type_2"]').hide();
	        				$('.modal.form [data-progressive-sec="student_type_3"]').hide();
	        				console.log("form_test 1");
	        			} else if ($(this).val() == 'a current high school student'){
	        				$('.modal.form [data-progressive-sec] select').attr("required", false);
	        				$('.modal.form [data-progressive-sec="student_type_2"]').show();
	        				$('.modal.form [data-progressive-sec="student_type_2"] select').attr("required", true);

	        				$('.modal.form [data-progressive-sec="student_type_1"]').hide();
	        				$('.modal.form [data-progressive-sec="student_type_3"]').hide();
	        				console.log("form_test 2");
	        			} else if ($(this).val() == 'a high school graduate or GED holder with no college credits'){
	        				$('.modal.form [data-progressive-sec] select').attr("required", false);
	        				$('.modal.form [data-progressive-sec="student_type_3"]').show();
	        				$('.modal.form [data-progressive-sec="student_type_3"] select').attr("required", true);

	        				$('.modal.form [data-progressive-sec="student_type_2"]').hide();
	        				$('.modal.form [data-progressive-sec="student_type_1"]').hide();
	        				console.log("form_test 3");
	        			} else if ($(this).val() == 'a transfer student'){
	        				$('.modal.form [data-progressive-sec] select').attr("required", false);
	        				$('.modal.form [data-progressive-sec="student_type_3"]').show();
	        				$('.modal.form [data-progressive-sec="student_type_3"] select').attr("required", true);

	        				$('.modal.form [data-progressive-sec="student_type_2"]').hide();
	        				$('.modal.form [data-progressive-sec="student_type_1"]').hide();
	        				console.log("form_test 4");
	        			} else {
	        				$('.modal.form [data-progressive-sec] select').attr("required", false);
	        				$('.modal.form [data-progressive-sec="student_type_1"]').hide();
	        				$('.modal.form [data-progressive-sec="student_type_2"]').hide();
	        				$('.modal.form [data-progressive-sec="student_type_3"]').hide();
	        				console.log("form_test x");
	        			}
	        		});

	        	





		//VIDEO SIDEBAR - OPEN AND PLACE DATA

			$('body').on('click','.video_play',function(e) {
				$('.map_swiper .video_play').removeClass('active');
				$(this).addClass('active');
	            e.preventDefault();
	            //console.log('video');
	            var number = $(this).data('number');
	            var total = $(this).data('total');
	            var yt_id = $(this).data('youtube-id');
	            var text_content = $(this).data('text-content');
	            console.log(text_content);
	            var img_content = $(this).data('img-content');
	            //PIN CONTENT - FORMATTER
	            	if(text_content != ''){
	            		console.log('success');
	            		var text_code = '<img class="img_content" src="' + img_content + '"/> <br/> <p class="text_content">' + text_content + '</p>';
	            		$('.submap_1 #video_sidebar .sidebar_content').html(text_code);
	            	}else if(img_content != ''){
	            		var img_code = '<img class="img_content" src="' + img_content + '"/>';
	            		$('.submap_1 #video_sidebar .sidebar_content').html(img_code);
	            	}else if (yt_id != '') {
	            		var video_code = '<iframe src="https://www.youtube.com/embed/' + yt_id + '?rel=0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Rutgers Student Tour Video"></iframe>';
	            		$('.submap_1 #video_sidebar .sidebar_content').html(video_code);
	            	}
	            //END PIN CONTENT - FORMATTER
	            var headline = $(this).data('headline');
	            var subhead = $(this).data('subhead');
	            var name = $(this).data('name');
	            var major = $(this).data('major');
	            var current = $(this).attr('id');
	            var prev = $(this).data('prev');
	            var next = $(this).data('next');
	            //console.log(prev);
	          	// console.log(next);
	            //console.log($(this).data('youtube-id'));
	            //console.log(yt_id);
	            //$('.modal.video').show();
	            if ($('.submap_1 .map_swiper').hasClass('active')) {
	            	//$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');

	            	


	            	//$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');
	            	$('.submap_1 #video_sidebar .headline').text(headline);
	            	$('.submap_1 #video_sidebar .subhead').text(subhead);
	            	$('.submap_1 #video_sidebar .name').text(name);
	            	$('.submap_1 #video_sidebar .major').text(major);
	            	$('.submap_1 #video_sidebar .current').text(number);
	            	$('.submap_1 #video_sidebar .total').text(total);

	            	$('.submap_1 #video_sidebar .prev').removeClass('null');
	            	$('.submap_1 #video_sidebar .next').removeClass('null');
	            	$('.submap_1 #video_sidebar .prev').data("pin", prev);
	            	if (prev == 'NULL') {
	            		$('.submap_1 #video_sidebar .prev').addClass('null');
	            	}
	            	$('.submap_1 #video_sidebar .next').data("pin", next);
	            	if (next == 'NULL') {
	            		$('.submap_1 #video_sidebar .next').addClass('null');
	            	}

	            	target=$('#video_sidebar');
	            	$('html,body').animate({
	            		scrollTop: target.offset().top
	            	}, 1000);
	            } else {
	            	$('.submap_1 .map_swiper').addClass('active');
	            	$('.submap_1 #video_sidebar').addClass('active');
	            	
	            	//$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');
	            	$('.submap_1 #video_sidebar .headline').text(headline);
	            	$('.submap_1 #video_sidebar .subhead').text(subhead);
	            	$('.submap_1 #video_sidebar .name').text(name);
	            	$('.submap_1 #video_sidebar .major').text(major);
	            	$('.submap_1 #video_sidebar .current').text(number);
	            	$('.submap_1 #video_sidebar .total').text(total);

	            	$('.submap_1 #video_sidebar .prev').removeClass('null');
	            	$('.submap_1 #video_sidebar .next').removeClass('null');
	            	$('.submap_1 #video_sidebar .prev').data("pin", prev);
	            	if (prev == 'NULL') {
	            		$('.submap_1 #video_sidebar .prev').addClass('null');
	            	}
	            	$('.submap_1 #video_sidebar .next').data("pin", next);
	            	if (next == 'NULL') {
	            		$('.submap_1 #video_sidebar .next').addClass('null');
	            	}

	            	target=$('#video_sidebar');
	            	$('html,body').animate({
	            		scrollTop: target.offset().top
	            	}, 1000);
	            }
	            
	            
	        });


		//VIDEO SIDEBAR PREV/NEXT
	        $('body').on('click','#video_sidebar .prev',function(e) {
	        	var pin_id = '#' + $(this).data('pin');
	        	$('.map_swiper .video_play').removeClass('active');
	        	$(pin_id).addClass('active');
	        	//GRAB DATA
	        	e.preventDefault();
	        	//console.log('video');
	        	var number = $(pin_id).data('number');
	        	var total = $(pin_id).data('total');
	        	var yt_id = $(pin_id).data('youtube-id');
	        	var text_content = $(pin_id).data('text-content');
	        	console.log(text_content);
	        	var img_content = $(pin_id).data('img-content');
	        	//PIN CONTENT - FORMATTER
	        		if(text_content != ''){
	        			console.log('success');
	        			var text_code = '<img class="img_content" src="' + img_content + '"/> <br/> <p class="text_content">' + text_content + '</p>';
	        			$('.submap_1 #video_sidebar .sidebar_content').html(text_code);
	        		}else if(img_content != ''){
	        			var img_code = '<img class="img_content" src="' + img_content + '"/>';
	        			$('.submap_1 #video_sidebar .sidebar_content').html(img_code);
	        		}else if (yt_id != '') {
	        			var video_code = '<iframe src="https://www.youtube.com/embed/' + yt_id + '?rel=0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Rutgers Student Tour Video"></iframe>';
	        			$('.submap_1 #video_sidebar .sidebar_content').html(video_code);
	        		}
	        	//END PIN CONTENT - FORMATTER
	        	var headline = $(pin_id).data('headline');
	        	var subhead = $(pin_id).data('subhead');
	        	var name = $(pin_id).data('name');
	        	var major = $(pin_id).data('major');
	        	var current = $(pin_id).attr('id');
	        	var prev = $(pin_id).data('prev');
	        	var next = $(pin_id).data('next');
	        	//console.log(prev);
	        	//console.log(next);

	        	//Programatic GA Event
		        	evCat = "Detailed-Map";
		        	evAct = "Click";
		        	evLab = 'Prev--' + $(this).data('pin') + '--' + name + '--' + yt_id;
		        	//console.log(evLab);

		        	window.dataLayer = window.dataLayer || [];
		        	dataLayer.push({
		        		'event': 'GAEvent',
		        		'eventCategory': evCat,
		        		'eventAction': evAct,
		        		'eventLabel': evLab,
		        		'eventValue': '',
		        	});

	        	//SET DATA
	        	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');

	        	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');
	        	$('.submap_1 #video_sidebar .headline').text(headline);
	        	$('.submap_1 #video_sidebar .subhead').text(subhead);
	        	$('.submap_1 #video_sidebar .name').text(name);
	        	$('.submap_1 #video_sidebar .major').text(major);
	        	$('.submap_1 #video_sidebar .current').text(number);
	        	$('.submap_1 #video_sidebar .total').text(total);

	        	$('.submap_1 #video_sidebar .prev').removeClass('null');
            	$('.submap_1 #video_sidebar .next').removeClass('null');
            	$('.submap_1 #video_sidebar .prev').data("pin", prev);
            	if (prev == 'NULL') {
            		$('.submap_1 #video_sidebar .prev').addClass('null');
            	}
            	$('.submap_1 #video_sidebar .next').data("pin", next);
            	if (next == 'NULL') {
            		$('.submap_1 #video_sidebar .next').addClass('null');
            	}

	        });

	        $('body').on('click','#video_sidebar .next',function(e) {
	        	var pin_id = '#' + $(this).data('pin');
	        	$('.map_swiper .video_play').removeClass('active');
	        	$(pin_id).addClass('active');
	        	//console.log(pin_id);
	        	//GRAB DATA
	        	e.preventDefault();
	        	console.log('video');
	        	var number = $(pin_id).data('number');
	        	var total = $(pin_id).data('total');
	        	var yt_id = $(pin_id).data('youtube-id');
	        	var text_content = $(pin_id).data('text-content');
	        	console.log(text_content);
	        	var img_content = $(pin_id).data('img-content');
	        	//PIN CONTENT - FORMATTER
	        		if(text_content != ''){
	        			console.log('success');
	        			var text_code = '<img class="img_content" src="' + img_content + '"/> <br/> <p class="text_content">' + text_content + '</p>';
	        			$('.submap_1 #video_sidebar .sidebar_content').html(text_code);
	        		}else if(img_content != ''){
	        			var img_code = '<img class="img_content" src="' + img_content + '"/>';
	        			$('.submap_1 #video_sidebar .sidebar_content').html(img_code);
	        		}else if (yt_id != '') {
	        			var video_code = '<iframe src="https://www.youtube.com/embed/' + yt_id + '?rel=0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Rutgers Student Tour Video"></iframe>';
	        			$('.submap_1 #video_sidebar .sidebar_content').html(video_code);
	        		}
	        	//END PIN CONTENT - FORMATTER
	        	var headline = $(pin_id).data('headline');
	        	var subhead = $(pin_id).data('subhead');
	        	var name = $(pin_id).data('name');
	        	var major = $(pin_id).data('major');
	        	var current = $(pin_id).attr('id');
	        	var prev = $(pin_id).data('prev');
	        	var next = $(pin_id).data('next');
	        	//console.log(prev);
	        	//console.log(next);

	        	//Programatic GA Event
		        	evCat = "Detailed-Map";
		        	evAct = "Click";
		        	evLab = 'Next--' + $(this).data('pin') + '--' + name + '--' + yt_id;
		        	//console.log(evLab);

		        	window.dataLayer = window.dataLayer || [];
		        	dataLayer.push({
		        		'event': 'GAEvent',
		        		'eventCategory': evCat,
		        		'eventAction': evAct,
		        		'eventLabel': evLab,
		        		'eventValue': '',
		        	});

	        	//SET DATA
	        	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');

	        	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');
	        	$('.submap_1 #video_sidebar .headline').text(headline);
	        	$('.submap_1 #video_sidebar .subhead').text(subhead);
	        	$('.submap_1 #video_sidebar .name').text(name);
	        	$('.submap_1 #video_sidebar .major').text(major);
	        	$('.submap_1 #video_sidebar .current').text(number);
	        	$('.submap_1 #video_sidebar .total').text(total);


	        	$('.submap_1 #video_sidebar .prev').removeClass('null');
            	$('.submap_1 #video_sidebar .next').removeClass('null');
            	$('.submap_1 #video_sidebar .prev').data("pin", prev);
            	if (prev == 'NULL') {
            		$('.submap_1 #video_sidebar .prev').addClass('null');
            	}
            	$('.submap_1 #video_sidebar .next').data("pin", next);
            	if (next == 'NULL') {
            		$('.submap_1 #video_sidebar .next').addClass('null');
            	}
	        });


    	//VIDEO SIDEBAR - LAUNCH FROM SLIDER
            $('body').on('click','.video_swiper .grab_pin',function(e) {
            	$('.submap_1 #video_sidebar').addClass('active');
            	$('.submap_1 .map_swiper').addClass('active');

            	var pin_id = '#' + $(this).data('pin');
            	$('.map_swiper .video_play').removeClass('active');
            	$(pin_id).addClass('active');
            	//GRAB DATA
            	e.preventDefault();
            	//console.log('video');
            	var number = $(pin_id).data('number');
            	var total = $(pin_id).data('total');
            	var yt_id = $(pin_id).data('youtube-id');
            	var text_content = $(pin_id).data('text-content');
            	console.log(text_content);
            	var img_content = $(pin_id).data('img-content');
            	//PIN CONTENT - FORMATTER
            		if(text_content != ''){
            			console.log('success');
            			var text_code = '<img class="img_content" src="' + img_content + '"/> <br/> <p class="text_content">' + text_content + '</p>';
            			$('.submap_1 #video_sidebar .sidebar_content').html(text_code);
            		}else if(img_content != ''){
            			var img_code = '<img class="img_content" src="' + img_content + '"/>';
            			$('.submap_1 #video_sidebar .sidebar_content').html(img_code);
            		}else if (yt_id != '') {
            			var video_code = '<iframe src="https://www.youtube.com/embed/' + yt_id + '?rel=0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Rutgers Student Tour Video"></iframe>';
            			$('.submap_1 #video_sidebar .sidebar_content').html(video_code);
            		}
            	//END PIN CONTENT - FORMATTER
            	var headline = $(pin_id).data('headline');
            	var subhead = $(pin_id).data('subhead');
            	var name = $(pin_id).data('name');
            	var major = $(pin_id).data('major');
            	var current = $(pin_id).attr('id');
            	var prev = $(pin_id).data('prev');
            	var next = $(pin_id).data('next');
            	//console.log(prev);
            	//console.log(next);

            	//Programatic GA Event
		        	evCat = "Detailed-Map";
		        	evAct = "Click";
		        	evLab = 'Slider--' + $(this).data('pin') + '--' + name + '--' + yt_id;
		        	//console.log(evLab);

		        	window.dataLayer = window.dataLayer || [];
		        	dataLayer.push({
		        		'event': 'GAEvent',
		        		'eventCategory': evCat,
		        		'eventAction': evAct,
		        		'eventLabel': evLab,
		        		'eventValue': '',
		        	});

            	//SET DATA
            	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');

            	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');
            	$('.submap_1 #video_sidebar .headline').text(headline);
            	$('.submap_1 #video_sidebar .subhead').text(subhead);
            	$('.submap_1 #video_sidebar .name').text(name);
            	$('.submap_1 #video_sidebar .major').text(major);
            	$('.submap_1 #video_sidebar .current').text(number);
            	$('.submap_1 #video_sidebar .total').text(total);

            	$('.submap_1 #video_sidebar .prev').removeClass('null');
            	$('.submap_1 #video_sidebar .next').removeClass('null');
            	$('.submap_1 #video_sidebar .prev').data("pin", prev);
            	if (prev == 'NULL') {
            		$('.submap_1 #video_sidebar .prev').addClass('null');
            	}
            	$('.submap_1 #video_sidebar .next').data("pin", next);
            	if (next == 'NULL') {
            		$('.submap_1 #video_sidebar .next').addClass('null');
            	}

            	target=$('#video_sidebar');
            	$('html,body').animate({
            		scrollTop: target.offset().top
            	}, 1000);

            });


    	//VIDEO SIDEBAR - LAUNCH FROM HOMEPAGE

            if(typeof home_pin != 'undefined') {
            	setTimeout(function(){
            	    //console.log(home_pin);
                	//$(home_pin).trigger('click');
                	$('.submap_1 #video_sidebar').addClass('active');
                	$('.submap_1 .map_swiper').addClass('active');

                	//var pin_id = '#' + $(this).data('pin');
                	//$('.map_swiper .video_play').removeClass('active');
                	$(home_pin).addClass('active');
                	//GRAB DATA
                	
                	//console.log('home video');
                	var number = $(home_pin).data('number');
                	var total = $(home_pin).data('total');
                	var yt_id = $(home_pin).data('youtube-id');
                	var text_content = $(home_pin).data('text-content');
                	console.log(text_content);
                	var img_content = $(home_pin).data('img-content');
                	//PIN CONTENT - FORMATTER
                		if(text_content != ''){
                			console.log('success');
                			var text_code = '<img class="img_content" src="' + img_content + '"/> <br/> <p class="text_content">' + text_content + '</p>';
                			$('.submap_1 #video_sidebar .sidebar_content').html(text_code);
                		}else if(img_content != ''){
                			var img_code = '<img class="img_content" src="' + img_content + '"/>';
                			$('.submap_1 #video_sidebar .sidebar_content').html(img_code);
                		}else if (yt_id != '') {
                			var video_code = '<iframe src="https://www.youtube.com/embed/' + yt_id + '?rel=0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Rutgers Student Tour Video"></iframe>';
                			$('.submap_1 #video_sidebar .sidebar_content').html(video_code);
                		}
                	//END PIN CONTENT - FORMATTER
                	var headline = $(home_pin).data('headline');
                	var subhead = $(home_pin).data('subhead');
                	var name = $(home_pin).data('name');
                	var major = $(home_pin).data('major');
                	var current = $(home_pin).attr('id');
                	var prev = $(home_pin).data('prev');
                	var next = $(home_pin).data('next');
                	//console.log(number);


                	//Programatic GA Event
		        	evCat = "Detailed-Map";
		        	evAct = "Click";
		        	evLab = 'Homepage--' + current + '--' + name + '--' + yt_id;
		        	//console.log(evLab);

		        	window.dataLayer = window.dataLayer || [];
		        	dataLayer.push({
		        		'event': 'GAEvent',
		        		'eventCategory': evCat,
		        		'eventAction': evAct,
		        		'eventLabel': evLab,
		        		'eventValue': '',
		        	});


                	//SET DATA
                	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');

                	$('.submap_1 #video_sidebar iframe').attr('src', 'https://www.youtube.com/embed/' + yt_id + '?rel=0');
                	$('.submap_1 #video_sidebar .headline').text(headline);
                	$('.submap_1 #video_sidebar .subhead').text(subhead);
                	$('.submap_1 #video_sidebar .name').text(name);
                	$('.submap_1 #video_sidebar .major').text(major);
                	$('.submap_1 #video_sidebar .current').text(number);
                	$('.submap_1 #video_sidebar .total').text(total);

                	$('.submap_1 #video_sidebar .prev').removeClass('null');
                	$('.submap_1 #video_sidebar .next').removeClass('null');
                	$('.submap_1 #video_sidebar .prev').data("pin", prev);
                	if (prev == 'NULL') {
                		$('.submap_1 #video_sidebar .prev').addClass('null');
                	}
                	$('.submap_1 #video_sidebar .next').data("pin", next);
                	if (next == 'NULL') {
                		$('.submap_1 #video_sidebar .next').addClass('null');
                	}

                	target=$('#video_sidebar');
                	$('html,body').animate({
                		scrollTop: target.offset().top
                	}, 1000);


                	//console.log(home_pin);
				}, 1500);
            	
            };

	    //VIDEO SIDEBAR CLOSE
	        $('body').on('click','#video_sidebar .close',function(e) {
	        	$('.submap_1 .map_swiper').removeClass('active');
	        	$('.map_swiper .video_play').removeClass('active');
	        	
	        	$('.submap_1 #video_sidebar').removeClass('active');
	        	$('.submap_1 #video_sidebar iframe').attr('src', '');

	        	//console.log('sidebar close');
	        });

	   



	    

	/*

	Home

	*/
		//Nav code
			$('#nav_bar .menu_button').click(function(){
				
				if($('#nav_menu').hasClass('active')){
					$('#nav_menu').removeClass('active');
					$('#body_wrapper').removeClass('active');
					$('#nav_bar>.container>.menu_button').removeClass('active');
					$('#nav_menu_bg').removeClass('active');
					//$('.menu_button>.fa-bars').show();
					//$('.menu_button>span').show();
					//$('.menu_button>.fa-times').hide();
				} else{
					$('#nav_menu').addClass('active');
					$('#body_wrapper').addClass('active');
					$('#nav_bar>.container>.menu_button').addClass('active');
					$('#nav_menu_bg').addClass('active');
					//$('.menu_button>.fa-times').show();
					//$('.menu_button>.fa-bars').hide();
					//$('.menu_button>span').hide();
				}
			});

			$('#nav_menu .close').click(function(){
				$('#nav_menu').removeClass('active');
				$('#body_wrapper').removeClass('active');
				$('#nav_bar>.container>.menu_button').removeClass('active');
				$('#nav_menu_bg').removeClass('active');
				$('.menu_button>.fa-bars').show();
				$('.menu_button>span').show();
				$('.menu_button>.fa-times').hide();
			});

			$('#nav_menu_bg').click(function(){
				$('#nav_menu').removeClass('active');
				$('#body_wrapper').removeClass('active');
				$('#nav_bar>.container>.menu_button').removeClass('active');
				$('#nav_menu_bg').removeClass('active');
				$('.menu_button>.fa-bars').show();
				$('.menu_button>span').show();
				$('.menu_button>.fa-times').hide();
			});

		//Dropdown Menu code
			$('.dropdown_menu .menu_button').click(function(){
				
				if($('.dropdown_menu').hasClass('active')){
					$('.dropdown_menu').removeClass('active');
					$('.dropdown_menu .hide').slideUp();
					$('.dropdown_menu .menu_button .fa-plus').show();
					$('.dropdown_menu .menu_button .fa-minus').hide();

					$('.dropdown_menu .graphic').addClass('inactive');
				} else{
					$('.dropdown_menu').addClass('active');
					$('.dropdown_menu .hide').slideDown();
					$('.dropdown_menu .hide.arrow').css('display','flex');
					$('.dropdown_menu .menu_button .fa-plus').hide();
					$('.dropdown_menu .menu_button .fa-minus').show();		

					$('.dropdown_menu .graphic').removeClass('inactive');			
				}
			});

			if ($('.dropdown_menu').hasClass('home') || $('.dropdown_menu').hasClass('submap')) {
				$('.dropdown_menu').addClass('active');
				$('.dropdown_menu .hide').show();
				$('.dropdown_menu .hide.arrow').css('display','flex');
				$('.dropdown_menu .menu_button .fa-plus').hide();
				$('.dropdown_menu .menu_button .fa-minus').show();
			}


		//Video Modal Code

		//Map pin twitch code
			

			

		//Map hover code

			//Livingston
				$('#livingston_inner').mouseover(function(){
					$('#livingston_border').addClass('active');
					$('#Livingston').addClass('active');
					$('#Livingston-2').addClass('active');
				});
				$('#livingston_inner').mouseleave(function(){
					$('#livingston_border').removeClass('active');
					$('#Livingston').removeClass('active');
					$('#Livingston-2').removeClass('active');
				});

			//Busch
				$('#busch_inner').mouseover(function(){
					$('#busch_border').addClass('active');
					$('#Busch').addClass('active');
					$('#Busch-2').addClass('active');
				});
				$('#busch_inner').mouseleave(function(){
					$('#busch_border').removeClass('active');
					$('#Busch').removeClass('active');
					$('#Busch-2').removeClass('active');
				});

			//College Ave
				$('#college_ave_inner').mouseover(function(){
					$('#college_ave_border').addClass('active');
					$('#CollegeAve').addClass('active');
					$('#CollegeAve-2').addClass('active');
				});
				$('#college_ave_inner').mouseleave(function(){
					$('#college_ave_border').removeClass('active');
					$('#CollegeAve').removeClass('active');
					$('#CollegeAve-2').removeClass('active');
				});

			//Downtown
				$('#downtown_inner').mouseover(function(){
					$('#downtown_border').addClass('active');
					$('#Downtown').addClass('active');
					$('#Downtown-2').addClass('active');
				});
				$('#downtown_inner').mouseleave(function(){
					$('#downtown_border').removeClass('active');
					$('#Downtown').removeClass('active');
					$('#Downtown-2').removeClass('active');
				});

			//Douglass
				$('#douglass_inner').mouseover(function(){
					$('#douglass_border').addClass('active');
					$('#Douglass').addClass('active');
					$('#Douglass-2').addClass('active');
				});
				$('#douglass_inner').mouseleave(function(){
					$('#douglass_border').removeClass('active');
					$('#Douglass').removeClass('active');
					$('#Douglass-2').removeClass('active');
				});

			//Cook
				$('#cook_inner').mouseover(function(){
					$('#cook_border').addClass('active');
					$('#Cook').addClass('active');
					$('#Cook-2').addClass('active');
				});
				$('#cook_inner').mouseleave(function(){
					$('#cook_border').removeClass('active');
					$('#Cook').removeClass('active');
					$('#Cook-2').removeClass('active');
				});

		

		//Swiper Code

			//Home
				var thumbnail_swiper = new Swiper('.thumbnail_swiper', {
					init: true,
					speed: 500,
					observer: true,
					observeParents: true,
					spaceBetween: 200,
					pagination: {
			        	el: '.swiper-pagination-thumbnail',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.thumbnail',
		      	        prevEl: '.swiper-button-prev.thumbnail',
		      	    },
		      	    
			    });

			    var student_swiper = new Swiper('.student_swiper', {
					init: true,
					speed: 500,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 4,
					pagination: {
			        	el: '.swiper-pagination-student',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.student',
		      	        prevEl: '.swiper-button-prev.student',
		      	    },
		      	    breakpoints: {

		      	    	1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });

			//Detailed maps

				var map_animation_array = [];
				var map_tree_array = [];
				var i = 0;
			    $('.map_swiper .map_container').each(function(){
			    	map_animation_array[i] = $(this).children('.animations').attr('src');
			    	map_tree_array[i] = $(this).children('.trees').attr('src');
			    	$(this).children('.animations').remove;
			    	$(this).children('.trees').remove;
			    	//console.log(map_animation_array[i]);
			    	i++;
			    });


				var map_swiper = new Swiper('.map_swiper', {
					init: false,
					speed: 500,
					threshold: 25,
			      	navigation: {
		      	        nextEl: '.swiper-button-next.map',
		      	        prevEl: '.swiper-button-prev.map',
		      	    },
			      	on: {
			      		//loads animations on initial slide
			      		init: function () {
			      		    //$('.swiper-slide-active').children().append('<img class="animations" src="'+ map_animation_array[map_swiper.activeIndex] +'" />');
			      		    $('.swiper-slide-active').children().append('<img class="trees" src="'+ map_tree_array[map_swiper.activeIndex] +'" />');
			      			var video_slider = $('.map_swiper .swiper-slide-active').data('map-id');
			      			var map_copy = $('.map_swiper .swiper-slide-active').data('map-copy');
			      			var pins_total = $('.map_swiper .swiper-slide-active').data('pins-total');

			      			

      			        	

			      			//console.log(video_slider);
			      			$('.video_swiper').hide();
			      			$('.video_swiper.' + video_slider).show();
			      			//$('.dropdown_menu h1').text(video_slider.replace(/_/g, " "));
			      			if (video_slider == 'downtown') {
			      				$('.dropdown_menu h1').text('Downtown-New Brunswick');
			      			} else{
			      				$('.dropdown_menu h1').text(video_slider.replace(/_/g, " "));
			      			}
			      			$('.dropdown_menu p').text(map_copy);
			      			$('#video_sidebar .total').text(pins_total);

			      			
			      			var yt_id = $('.map_swiper .swiper-slide-active').attr('data-yt-id');
			      			var yt_thumb = $('.map_swiper .swiper-slide-active').attr('data-yt-thumb');
			      			console.log(yt_id);
			      			$('.dropdown_menu .video_card .video_modal_button').attr('data-youtube-id',yt_id);
			      			$('.dropdown_menu .video_card img').attr('src',yt_thumb);
			      			$('.register_tour_mobile .video_card .video_modal_button').attr('data-youtube-id',yt_id);
			      			$('.register_tour_mobile .video_card img').attr('src',yt_thumb);
		      		    },
		      		    //removes inactive animations and loads active one
			      		slideChangeTransitionStart: function(){
			      			$('.map_swiper .map_container').children('.animations').remove();
			      			$('.map_swiper .map_container').children('.trees').remove();
			      			$('.map_swiper .swiper-slide-active').children().append('<img class="animations" src="'+ map_animation_array[map_swiper.activeIndex] +'" />');
			      			$('.map_swiper .swiper-slide-active').children().append('<img class="trees" src="'+ map_tree_array[map_swiper.activeIndex] +'" />');
			      			map_swiper.update();



			      			var video_slider = $('.map_swiper .swiper-slide-active').data('map-id');
			      			var map_copy = $('.map_swiper .swiper-slide-active').data('map-copy');
			      			var pins_total = $('.map_swiper .swiper-slide-active').data('pins-total');
			      			//console.log(video_slider);
			      			$('.video_swiper').hide();
			      			$('.video_swiper.' + video_slider).show();
			      			//$('.dropdown_menu h1').text(video_slider.replace(/_/g, " "));
			      			if (video_slider == 'downtown') {
			      				$('.dropdown_menu h1').text('Downtown-New Brunswick');
			      			} else{
			      				$('.dropdown_menu h1').text(video_slider.replace(/_/g, " "));
			      			}
			      			$('.dropdown_menu p').text(map_copy);
			      			$('#video_sidebar .total').text(pins_total);

			      			console.log('test1');
			      			var yt_id = $('.map_swiper .swiper-slide-active').attr('data-yt-id');
			      			var yt_thumb = $('.map_swiper .swiper-slide-active').attr('data-yt-thumb');
			      			console.log(yt_id);
			      			$('.dropdown_menu .video_card .video_modal_button').attr('data-youtube-id',yt_id);
			      			$('.dropdown_menu .video_card img').attr('src',yt_thumb);
			      			$('.register_tour_mobile .video_card .video_modal_button').attr('data-youtube-id',yt_id);
			      			$('.register_tour_mobile .video_card img').attr('src',yt_thumb);

			      			//Close video sidebar and return to inactive state
			      			$('.submap_1 .map_swiper').removeClass('active');
			      			$('.map_swiper .video_play').removeClass('active');
			      			
			      			$('.submap_1 #video_sidebar').removeClass('active');
			      			$('.submap_1 #video_sidebar iframe').attr('src', '');

			      			//reset all sliders to 0 slide
			      				video_swiper_busch.slideTo(0,0);
			      				video_swiper_college_ave.slideTo(0,0);
			      				video_swiper_cook.slideTo(0,0);
			      				video_swiper_douglass.slideTo(0,0);
			      				video_swiper_downtown.slideTo(0,0);
			      				video_swiper_livingston.slideTo(0,0);
			      		}
			      	}
			      	
			    });
			    map_swiper.init();

			    var video_swiper_busch = new Swiper('.video_swiper.busch', {
					init: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 4,
					centerInsufficientSlides: true,
					pagination: {
			        	el: '.swiper-pagination-video.busch',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.video',
		      	        prevEl: '.swiper-button-prev.video',
		      	    },
		      	    breakpoints: {
		      	       
		      	        1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });

			    var video_swiper_college_ave = new Swiper('.video_swiper.college_ave', {
					init: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 4,
					centerInsufficientSlides: true,
					pagination: {
			        	el: '.swiper-pagination-video.college_ave',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.video',
		      	        prevEl: '.swiper-button-prev.video',
		      	    },
		      	    breakpoints: {
		      	       
		      	        1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });

			    var video_swiper_cook = new Swiper('.video_swiper.cook', {
					init: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 3,
					centerInsufficientSlides: true,
					pagination: {
			        	el: '.swiper-pagination-video.cook',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.video',
		      	        prevEl: '.swiper-button-prev.video',
		      	    },
		      	    breakpoints: {
		      	       
		      	        1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });

			    var video_swiper_douglass = new Swiper('.video_swiper.douglass', {
					init: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 4,
					centerInsufficientSlides: true,
					pagination: {
			        	el: '.swiper-pagination-video.douglass',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.video',
		      	        prevEl: '.swiper-button-prev.video',
		      	    },
			      	breakpoints: {
		      	       
		      	        1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });

			    var video_swiper_downtown = new Swiper('.video_swiper.downtown', {
					init: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 4,
					centerInsufficientSlides: true,
					pagination: {
			        	el: '.swiper-pagination-video.downtown',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.video',
		      	        prevEl: '.swiper-button-prev.video',
		      	    },
			      	breakpoints: {
		      	       
		      	        1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });

			    var video_swiper_livingston = new Swiper('.video_swiper.livingston', {
					init: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					slidesPerView: 4,
					centerInsufficientSlides: true,
					pagination: {
			        	el: '.swiper-pagination-video.livingston',
			        	clickable: true,
			        	
			      	},
			      	navigation: {
		      	        nextEl: '.swiper-button-next.video',
		      	        prevEl: '.swiper-button-prev.video',
		      	    },
			      	breakpoints: {
		      	       
		      	        1200: {
		      	    	  slidesPerView: 3,
		      	    	  spaceBetween: 0
		      	    	},		      	       
		      	        900: {
		      	          slidesPerView: 1,
		      	          spaceBetween: 0
		      	        }
	      	      	},
			    });



			    if(typeof map_slide != 'undefined') {
					//console.log('gothere');
					map_swiper.slideTo(map_slide);
					map_swiper.autoplay.stop();

					//Programatic GA Event
			        	evCat = "Home";
			        	evAct = "Click";
			        	evLab = 'Homepage Map--' + map_slide;
			        	//console.log(evLab);

			        	window.dataLayer = window.dataLayer || [];
			        	dataLayer.push({
			        		'event': 'GAEvent',
			        		'eventCategory': evCat,
			        		'eventAction': evAct,
			        		'eventLabel': evLab,
			        		'eventValue': '',
			        	});
				} else {
					map_swiper.slideTo(0);
					map_swiper.autoplay.stop();
				}

		

	    
	//GTM - Programmatic GAEvents

		//Map Pin Clicks
			$('.video_play').click(function(){
				evCat = "Detailed-Map";
				evAct = "Click";
				evLab = 'Pin--' + $(this).attr('id') + '--' + $(this).data('name') + '--' + $(this).data('youtube-id');
				//console.log(evLab);

				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': evCat,
					'eventAction': evAct,
					'eventLabel': evLab,
					'eventValue': '',
				});
			});


		



});




$(document).ready(function(){
	$(".footer_banner").headroom();

	$(".footer_banner .close").click(function(){
		$(".footer_banner").hide();
	});

	var register_tour_mobile  = new Swiper('.register_tour_mobile .swiper-container', {
	      pagination: {
	        el: '.register_tour_mobile .swiper-pagination',
	      },
	    });

});