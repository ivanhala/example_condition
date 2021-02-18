function wbk_on_form_rendered( service ){
    jQuery('#wbk-book_appointment').attr('disabled', true);
    jQuery('.wbk-checkbox-label').click(function(){
       var i = 0;
       jQuery('#custom-field1').find('.wbk-checkbox-custom').each( function(){
            if ( jQuery(this).is(':checked') ){
                i++;
            }
        });
        console.log(i);
        if( i == 2 ){        
            jQuery('#wbk-book_appointment').attr('disabled', false);
        } else {
           jQuery('#wbk-book_appointment').attr('disabled', true);
        }
    });
}


 
