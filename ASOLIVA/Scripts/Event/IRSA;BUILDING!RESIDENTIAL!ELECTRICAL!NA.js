//Individual exercise 4
	if (inspType == "Electrical Final" && (inspResult == "Passed") || (inspResult == "Partial")) {
		
		closeTask("Inspection","Final Inspection Complete",inspComment);  
	}

//Individual exercise 5
	if (inspType == "Electrical Final" && inspResult == "Rejected") {

		updateTask("Inspection","Note", inspComment ,"Electrical Final Rejected");
		
		var childCapID = createChild("Enforcement","Incident","Building","Sub-Standard Property","");

			editAppSpecific("Source of Complaint","Staff",childCapID);
			editAppSpecific("Location",inspComment,childCapID);
			scheduleInspect(childCapID,"Initial Investigation",0); 
		
	}	