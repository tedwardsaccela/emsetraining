/*
 * Script ID EMSEBZP5: Inspection Closes Workflow
 * 
 */
if (isTaskActive("Inspection") && inspType == "Building Final" && inspResult == "Passed") {
	closeTask("Inspection", "Final Inspection Complete", "This task is closed via script", "");
}