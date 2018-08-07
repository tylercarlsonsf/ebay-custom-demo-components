({
     checkJquery : function(component, event, helper) {
      
          console.log('*************** Inside do Init1 Method *****************')
            
          jQuery("document").ready(function(){
              
             console.log('Inside jquery'); 
              
              
              
          });
            
     },
    
    doInit : function(component, event, helper) {
               
        var date = new Date();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        //hours = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var minPlus = date.getMinutes() < 10 ? "0" + (date.getMinutes() + 1) : date.getMinutes() + 1;
        var minMinus = date.getMinutes() < 10 ? "0" + (date.getMinutes() - 2) : date.getMinutes() - 2;
       
        var currentTime = hours + ":" + minutes + " " + am_pm;
        var timePlus = hours + ":" + minPlus + " " + am_pm;
        var timeMinus = hours + ":" + minMinus + " " + am_pm;
        var height = window.innerHeight;
        height = height - 452;
        
       
        
        component.set('v.time', currentTime);
        component.set('v.timePlusOne', timePlus);
        component.set('v.timeMinusOne', timeMinus);
        component.set('v.height', height);
        console.log(currentTime);
        console.log(timePlus);
        console.log(timeMinus);
        console.log(height);
        
        window.setTimeout(
            $A.getCallback(function() {
                $('#chatHistory').animate({
                    scrollTop: $("#chatHistory").offset().top + 400
                }, 250);
            }), 1500
        );
        
        
    },
    
   /*  resizeContent : function(component, event, helper) {
        window.setTimeout(
            $A.getCallback(function() {
                resizeContent();
                $(window).resize(function() {
                    resizeContent();
                });
                function resizeContent() {
                    var height = $(window).height()-354;
                    $('#chatHistory').height(height); 
                }
            }), 1
		);
		console.log($('#chatHistory').height(height));
        
        
    } 
    
    resizeContent : function(component, event, helper) {
        var height = window.innerHeight;
        console.log(height);
    }, */
    
        
    sendAndScroll : function(component, event, helper){
         
        	var message = document.getElementById('message-to-send').value;
        	console.log(message);
        
        	component.set('v.message', message);
        	console.log("message sent");
        	document.getElementById('message-to-send').value = "";
        	
        	$('#chatHistory').animate({
                scrollTop: $("#chatHistory").offset().top + 400
            }, 250);
            
        
        
    },
    
    recommendResponse : function(component, event, helper) {
        var response = component.get("v.recommendedResponse");
        document.getElementById('message-to-send').value = response;
        console.log("recommended response clicked");
    },
    
    clearResponse : function(component, event, helper) {
        
        component.set('v.message', undefined);
        document.getElementById('message-to-send').value = '';
        
    },
    
    
    
})