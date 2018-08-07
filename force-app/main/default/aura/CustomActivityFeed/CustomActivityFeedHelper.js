({
	getActivities : function(component, stage, attribute) {
		                
        var contactId = component.get('v.recordId'); 
                      
        if (stage == 'Buyer') {
            var action = component.get('c.getActivities');
            action.setParams( {recordId : contactId} ); 
            console.log(action);
        }else if (stage =='StubHub') {
            var action = component.get('c.getStubHubActivities');
            action.setParams( {recordId : contactId} ); 
        }else if (stage =='Seller') {
            var action = component.get('c.getSellerActivities');
            action.setParams( {recordId : contactId} ); 
        };
        
        action.setParams( {recordId : contactId} ); 
                
        action.setCallback(this, function(response){
            	var state = response.getState();
                if (component.isValid() && state === "SUCCESS"){
                    
                  component.set(attribute, response.getReturnValue());
                  console.log(response.getReturnValue());
                  
                  
                }
                else {
                  console.log("Failed with state" + state);
                }
          })
          $A.enqueueAction(action);
	}
})