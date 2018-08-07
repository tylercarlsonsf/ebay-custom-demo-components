({
	doInit : function(component, event, helper) {
		var stage1 = 'Buyer';
        var stage2 = 'StubHub';
        var stage3 = 'Seller';
        
        var attribute1 ='v.activities';
        var attribute2 = 'v.activities2';
        var attribute3 = 'v.activities3';
        
        helper.getActivities(component, stage1, attribute1);
        helper.getActivities(component, stage2, attribute2);
        helper.getActivities(component, stage3, attribute3);

        
        
        	
        
        
	},
    newActivity : function(component, event, helper){
        var actionAPI = component.find("quickActionAPI");
        var args = { actionName :"Contact.New_Activity" };
        actionAPI.selectAction(args).then(function(result) {
            // Action selected; show data and set field values
        }).catch(function(e) {
            if (e.errors) {
                // If the specified action isn't found on the page, 
                // show an error message in the my component 
            }
        });
    },
    
    
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that changed for this record
            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            // record is changed, so refresh the component (or other component logic)
            // var resultsToast = $A.get("e.force:showToast");
            // resultsToast.setParams({
            //    "title": "Saved",
            //    "message": "The record was updated."
            // });
            // resultsToast.fire();
            component.find("recordHandler").reloadRecord();

        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted and removed from the cache
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving or deleting the record
        }
    }
})