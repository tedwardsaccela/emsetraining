try{
	
//Begin individual exercise 2

	if (wfTask == "Permit Issuance" && wfStatus == "Issued" && balanceDue > 0 && AInfo["Job Cost"] > 1000) {
		showMessage = true;
		comment("There is a balance due on the record of: " + balanceDue);  //You could also have fun here with precision to get the $#.## format
		cancel = true;
	}

//End individual exercise 2

} catch (err){
	logDebug("A JavaScript Error occured in WTUB:BUILDING/RESIDENTIAL/ELECTRICAL/NA: " + err.message + " In Line " + err.lineNumber);
}