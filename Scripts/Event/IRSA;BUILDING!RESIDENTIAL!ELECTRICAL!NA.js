try {

//Begin Individual Exercise 4

	if (inspType == "Electrical Final" && (inspResult == "Passed") || (inspResult == "Partial")) {
		closeTask("Inspection","Final Inspection Complete",inspComment,"Closed Via IRSA Script Electrical Final");  
		//"Closed Via...." is a best practice when closing via script
		//make sure the Inspection task is open, (you may want to add that to your if statement)
	}

//End Individual Exercise 4

//Begin Individual Exercise 5

	if (inspType == "Electrical Final" && inspResult == "Rejected") {

		updateTask("Inspection","Note","" + inspType + " - " + inspStatus + " - " + inspComment + ".","Updated Via IRSA Script Electrical Final");
		var enfChild = createChild("Enforcement","Incident","Building","Sub-Standard Property","Building Referral - Electrical Code Violation");
	
		if (enfChild != null) {  //good practice to make sure that it created properly

			editAppSpecific("Source of Complaint","Staff",enfChild);
			//logDebug("The value of Source of Complaint is: " + getAppSpecific("Source of Complaint", enfchild));  
			//do not leave this in prod deploy
			editAppSpecific("Location",inspComment,enfChild);
			//logDebug("The value of Location is: " + getAppSpecific("Location", enfchild));  
			//do not leave this in prod deploy
			scheduleInspect(enfChild,"Initial Investigation",0);  //This is not in the script guide but is found in the INCLUDES_ACCELA_FUNCTIONS 3.1.28
		}
	}	

//End Individual Exercise 5

} catch (err){
	logDebug("A JavaScript Error occured in IRSA:BUILDING/RESIDENTIAL/ELECTRICAL/NA: " + err.message + " In Line " + err.lineNumber);
}