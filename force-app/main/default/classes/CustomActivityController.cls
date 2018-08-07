public class CustomActivityController {
	
    @AuraEnabled
    public static List <Custom_Activity__c> getActivities(Id recordId) {
        
                
        List<Custom_Activity__c> a = [
            SELECT Id,Name,message__c,icon__c,days_ago__c,time__c,order__c,Color__c,Activity_Stage__c
            FROM Custom_Activity__c
            WHERE contact__c = :recordId
            AND Activity_Stage__c = 'Buyer'
            ORDER BY days_ago__c,order__c DESC
            
        ];
        
       
        
        

        // Perform isAccessible() check here 
        return a;
    }  
    
    @AuraEnabled
    public static List <Custom_Activity__c> getStubHubActivities(Id recordId) {
        
                
        List<Custom_Activity__c> a = [
            SELECT Id,Name,message__c,icon__c,days_ago__c,time__c,order__c,Color__c,Activity_Stage__c
            FROM Custom_Activity__c
            WHERE contact__c = :recordId
            AND Activity_Stage__c = 'StubHub'
            ORDER BY days_ago__c,order__c DESC
            
        ];
        
       
        
        

        // Perform isAccessible() check here 
        return a;
    }  
    
    @AuraEnabled
    public static List <Custom_Activity__c> getSellerActivities(Id recordId) {
        
                
        List<Custom_Activity__c> a = [
            SELECT Id,Name,message__c,icon__c,days_ago__c,time__c,order__c,Color__c,Activity_Stage__c
            FROM Custom_Activity__c
            WHERE contact__c = :recordId
            AND Activity_Stage__c = 'Seller'
            ORDER BY days_ago__c,order__c DESC
            
        ];
        
       
        
        

        // Perform isAccessible() check here 
        return a;
    } 
}