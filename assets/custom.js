$(document).ready(function(){
     var length = $('.thumbnail-list__item ').length;
          if(length > 1){
            $('.grid__item.product__media-wrapper button.left').show();
             $('.grid__item.product__media-wrapper button.right').show();
          }
          else{
             $('.grid__item.product__media-wrapper button.left').hide();
             $('.grid__item.product__media-wrapper button.right').hide();
          }
           $(".grid__item.product__media-wrapper button.right").click(function() {
        console.log(4564);
            
         var btnn = $('.thumbnail-list .thumbnail-list__item button.thumbnail[aria-current="true"]')
        btnn.closest('li.thumbnail-list__item').next().find('button.thumbnail').click();
      });
      
         $(".grid__item.product__media-wrapper button.left").click(function() {
        console.log(4564);
         var btnn = $('.thumbnail-list .thumbnail-list__item button.thumbnail[aria-current="true"]')
        btnn.closest('li.thumbnail-list__item').prev().find('button.thumbnail').click();
      });
  
$('.accordion_title').on('click',function(){
    // console.log(45);
    if($(this).hasClass("active")){
$(this).removeClass('active');        $(this).siblings('.accordion_content').slideUp(500);
    }
       else{ 
           $(this).addClass('active'); $(this).siblings('.accordion_content').slideDown(500);
           }
});
});
