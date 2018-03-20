$(document).ready(function() {    

  // calling datetimepicker function to show the calender

  //jQuery function to hide dropdown if user selected
    $("input[name='hoa']").click(function(){
        if($("#hoano").is(":checked")){
            $("#dropdown").slideUp();
        }
        else{
            $("#dropdown").slideDown();     
        }
    });

   //jQuery function to hide calender if user selected no
    $("input[name='death']").click(function(){
    if($("#deathNo").is(":checked")){      
            $("#calender").slideUp();
        }
        else{
            $("#calender").slideDown();     
        }
    });


 //code to add/delete columns in assigned_parking section
        var max_fields         = 10; //maximum new-_input boxes allowed
      
        var assignedplus       = $(".assignedplus"); 

        var wrapper1           = $("#assigned");
   //code to add columns
        var x = 1; 
        $(assignedplus).click(function(){
            if(x < max_fields){ 
                x++; 
                $('<div class="col-sm-12 assigned_optional_fields"> <label class="label1 col-sm-6 col-md-6"><select class="form-control"><option>HOAs</option><option>option2</option><option>option3</option> </select></label><div class="col-md-6 col-sm-6 input-group input-group-unstyled Loc"><input type="text" class="form-control" placeholder="User Defined"/><span><i class="glyphicon glyphicon-minus assigned_minusicon minusicon_styles remove_field"></i></span></div></div>').prependTo("#assigned_new_fields");
            }
        });
  
    //code to remove optional columns individually
        $(wrapper1).on("click",".assigned_minusicon", function(){
             $(this).parents('.assigned_optional_fields').remove(); x--;
        });


    //code to remove default input fields
           $(wrapper1).on("click",".assigned_minusicon", function(){ 
                $(this).parents('.assigned_default_fields').remove(); 
        });

    //code to remove all optional fields
           $(wrapper1).on("click",".remove_all_optional_fields", function(){ 
                $(".assigned_optional_fields").remove(); 
        });


        
    //code to add/delete columns in codes section
        var codes_plus = $(".codes_plus");
        
        var max_fields_codes  = 10; //maximum input boxes allowed

        var y = 1; //initlal text box count
        $(codes_plus).click(function(){ 
            if(y < max_fields_codes){ 
                 y++; 
                 $('<div class="col-sm-12 codes_optional_fields clear_padding_right"> <label class="label1 col-sm-6 col-md-6 clear_padding_left"><select class="form-control"><option>HOAs</option><option>option2</option><option>option3</option> </select></label><div class="col-md-6 col-sm-6 input-group input-group-unstyled Loc"><input type="text" class="form-control" placeholder="User Defined"/><span><i class="glyphicon glyphicon-minus codes_minusicon minusicon_styles remove_field"></i></span></div></div>').prependTo("#codes_new_fields");
             }
             });

     //code to remove optional columns individually
        $(wrapper1).on("click",".codes_minusicon", function(){ //user click on remove text
              $(this).parents('.codes_optional_fields').remove(); x--;
        });

    //code to remove default input fields
           $(wrapper1).on("click",".code_minusicon_default", function(){ //user click on remove text  
                $(this).parents('.codes_default_fields').remove(); 
        });

    //code to remove all optional fields
        $(wrapper1).on("click",".remove_codes_optional_fields", function(){ //user click on remove text  
                $(".codes_optional_fields").remove(); 
        });


        //code to add/delete columns in key&section area
        var keyremote = $(".key_remote");
        var key_plus  = $(".key_plus"); 
        var key_area =$("#key_area");
        var max_fields_keys  = 10; //maximum input boxes allowed

        var z = 1; //initlal text box count
        $(key_plus).click(function(){ //on add input button click
            if(z < max_fields_keys){ 
                 z++; 
                 $('<div class="col-sm-12 key_optional_fileds"><div class="col-sm-4 col-md-4 label1 "><select class="form-control"> <option>HOAs</option><option>option2</option><option>option3</option> </select></div> <div class="col-sm-4 col-md-4 label1 dropdown_margin"><select class="form-control">  <option>HOAs</option><option>option2</option><option>option3</option></select></div> <div class="col-sm-4 col-md-4 input-group input-group-unstyled Loc">  <input type="text" class="form-control" placeholder="Note"/><span><i class="glyphicon glyphicon-minus minusicon_styles key_remove_new_field key_minus"></i></span</div></div>').prependTo("#key_new_fields");
             }
             });

  //code to remove optional columns individually
        $(key_area).on("click",".key_remove_new_field", function(){ //user click on remove text
         $(this).parents('.key_optional_fileds').remove(); x--;
        });
      
  //code to remove default input fields
        $(key_area).on("click",".key_minus", function(){ //user click on remove text
           
         $(this).parents('#key_default_fields').remove();
        });
      

    //code to remove all optional fields
        $(key_area).on("click",".remove_key_optional_fields", function(){ //user click on remove text
           
         $('.key_optional_fileds').remove();
        });



     // code for navigate to next and previous steps by clicking navbar icons
    // list of pages
    var tabs=["step1.html","index.html","step3.html","step4.html","step5.html"];
    var n=tabs.length;

    var tab= $(".next-tab");
    // code to move next page by clicking on navbar icon
    $(tab).click(function() { 
   
        var current= $(".next-tab").attr("href"); //collecting current page reference
      if(current=="step5.html")
            {
                alert("Done!!!  you have reached to last step"); //if user is in step-5 and clicks on next icon it gives alert because there are no more steps 
            }
            
        for(i=0;i<=n;i++)
        { 
            if(current==tabs[i])
            {
                $(".next-tab").attr("href",tabs[i+1]); //moves to the next page from the current page
            }
        }
     });


    //code to move previous page by clicking on navbar icon
    $('.prev-tab').click(function() { 
        var current= $(".prev-tab").attr("href"); //collecting current page reference
        if(current=="step1.html")
                {
                    alert("you are in first step please goto next step");
                }
            for(i=0;i<=n;i++)
            {
                if(current==tabs[i])
                {
                    $(".prev-tab").attr("href",tabs[i-1]); //move to the previous page from the current page
                }
            }
     });
       $('#datetimepicker1').datetimepicker();
});