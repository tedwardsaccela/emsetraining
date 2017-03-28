try{
	
// Begin individual exercise 1

	if (wfTask == "Application Submittal" && wfStatus == "Accepted - Plan Review Req"){
		updateFee("BLD_030","BLD_GENERAL","FINAL",1,"Y");
		//addFee would also be acceptable given the specification.  May warrant additional questions for the client.
	}

//End individual exercise 1

// Begin individual exercise 3

	if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
		editAppSpecific("Permit Expiration Date", dateAdd(null,180));  //ICC building code is 180 calendar days, this is a US standard
		var inspDate = dateAdd(null,15,"Y");
		scheduleInspectDate("Electrical Final",inspDate,"ADMIN");  //You could also do this in a single line instead of pre-declaring
		//the variable
	}

//End individual exercise 3

} catch (err){
	logDebug("A JavaScript Error occured in WTUA:BUILDING/RESIDENTIAL/ELECTRICAL/NA: " + err.message + " In Line " + err.lineNumber);
}