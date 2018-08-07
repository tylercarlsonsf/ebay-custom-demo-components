({
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
    },
    setStubHub: function(component, event, helper) {
        component.set("v.fields.Ebay_Journey__c", 'StubHub');
        component.set("v.fields.Cust360_ChurnRisk__c", 75);
        component.set("v.fields.Cust360_Loyalty__c", 'Gold');
        component.set("v.fields.Cust360_LTV__c", 15640);
		console.log('set Seller');        
        helper.saveRecord(component);
    },
    
 	setSeller: function(component, event, helper) {
        component.set("v.fields.Ebay_Journey__c", 'Seller');
		component.set("v.fields.Cust360_ChurnRisk__c", 0);
        component.set("v.fields.Cust360_Loyalty__c", 'Platinum');
        component.set("v.fields.Cust360_LTV__c", 22490);
		console.log('set SuperSeller');        
        helper.saveRecord(component);
    },
    setBuyer: function(component, event, helper) {
        component.set("v.fields.Ebay_Journey__c", 'Buyer');
        component.set("v.fields.Cust360_ChurnRisk__c", 45);
        component.set("v.fields.Cust360_Loyalty__c", 'Silver');
        component.set("v.fields.Cust360_LTV__c", 5698);
		console.log('set Buyer');        
        helper.saveRecord(component);
    }
})