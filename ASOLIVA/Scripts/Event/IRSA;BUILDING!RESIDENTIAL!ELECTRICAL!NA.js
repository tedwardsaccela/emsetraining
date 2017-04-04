//Individual exercise 4
	if (inspType == "Electrical Final" && (inspResult == "Passed") || (inspResult == "Partial")) {
		
		closeTask("Inspection","Final Inspection Complete",inspComment);  
	}

//Individual exercise 5
	if (inspType == "Electrical Final" && inspResult == "Rejected") {

		updateTask("Inspection","Note", inspComment ,"Electrical Final Rejected");
		
		var enfChild = createChild("Enforcement","Incident","Building","Sub-Standard Property","");
	
		if (enfChild != null) {  

			editAppSpecific("Source of Complaint","Staff",enfChild);
			editAppSpecific("Location",inspComment,enfChild);
			scheduleInspect(enfChild,"Initial Investigation",0); 
		}
	}	