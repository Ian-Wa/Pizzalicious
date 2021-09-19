
$(document).ready(function(){
    $("select.crust").change(function(){
        var selectedValue = $(this).children("option:selected").val();
        console.log(selectedValue);

    })
  
})
