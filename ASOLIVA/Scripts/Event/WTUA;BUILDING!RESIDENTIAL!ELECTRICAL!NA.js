//Individual exercise 1
if (wfTask == "Application Submittal" && wfStatus == "Accepted - Plan Review Req"){
		updateFee("BLD_030","BLD_GENERAL","FINAL",1,"Y");
		
	}
//Individual exercise 3
if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
	//Update ASI field Permit Expiration Date to 180 days out
		editAppSpecific("Permit Expiration Date", dateAdd(null,180));  
	//Schedule Electrical Final 15 work days from today
		scheduleInspectDate("Electrical Final",dateAdd(null,15,"Y"),"ADMIN");  
}

