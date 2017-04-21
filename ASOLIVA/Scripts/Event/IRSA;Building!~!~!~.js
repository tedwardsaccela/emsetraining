/*
 * Script ID EMSEBZP5: Inspection Closes Work flow
 * 
 */

	if (isTaskActive("Inspection") && inspType == "Building Final" && inspResult == "Passed") {
			closeTask("Inspection", "Final Inspection Complete", "Closed Via Script", "");
	}