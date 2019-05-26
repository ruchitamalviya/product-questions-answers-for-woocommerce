jQuery(document).ready(function(){	 
 	
 	jQuery('#ets-submit').click(function(e){
    e.preventDefault();  
    let submit = jQuery ("#ets-qus-form").serialize();  
    jQuery('#ets-submit').prop('disabled', true);
        jQuery.ajax({ 
			url: etsWooQaParams.admin_ajax,
			type: 'POST', 
			dataType: "JSON",
			data: 'action=ets_post_qusetion_answer&' + submit,
			success: function(res) {   
				jQuery('#ets-submit').prop('disabled', false);
				var messageResponse = res.message;
				jQuery("#myInput").val(""); 
				if(messageResponse == "Question submit successfully"){  
					jQuery(".ets-display-message").append(messageResponse); 
				} else  if(messageResponse == "Question not submit.") {  
					jQuery(".ets-dis-message-error").append(messageResponse);
				};
				jQuery("#myInput").on("click", function(){ 
				  jQuery(".ets-display-message").text(""); 
				  jQuery(".ets-dis-message-error").text("");
				});
				jQuery("#ets-submit").on("click", function(){ 
				  jQuery(".ets-display-message").text("");
				  jQuery(".ets-dis-message-error").text("");
				});    
            }
        }); 
	}); 

	jQuery('#ets-load-more').click(function(e){
		e.preventDefault();  
		let submit = jQuery ("#ets-qus-form").serialize(); 
		let qalength = jQuery('.ets_pro_qa_length p').text();  
		let offset = jQuery('#ets_product_qa_length p').text(); 
		if ( typeof offset == 'undefined' ) 
			offset = 0 ; 
		jQuery.ajax({ 
			url: etsWooQaParams.admin_ajax,
			type: 'GET',  
			dataType: "JSON",
			data: 'action=ets_product_qa_load_more&' + submit + '&offset=' + offset,
			success: function(res) {  
				offset = res.offset;  
				jQuery('.table1').append(res.htmlData);  
				 jQuery('.ets-accordion-response-add').append(res.htmlData);
				jQuery('#ets_product_qa_length p').html(offset).hide(); 
				if(offset >= qalength ){
					jQuery("#ets-load-more").hide();
				} 
            }
        }); 
	}); 
}); 

jQuery(document).on('click','.ets-accordion',function(){
	jQuery(this).next().slideToggle();
	 
});	
