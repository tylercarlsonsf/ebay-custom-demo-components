public class CaseHighlightController {
    

	
    @AuraEnabled
    public static Contact getContact (Id caseId) {
        
        Contact c = [
            Select Name,Cust360_CSAT__c,Cust360_Loyalty__c,Cust360_LTV__c,Cust360_ChurnRisk__c,Contact_Picture_URL__c,MailingCity,MailingState from Contact 
            where Id in (Select ContactId from Case where Id = :caseId)
        ];
        return c;
    }
}