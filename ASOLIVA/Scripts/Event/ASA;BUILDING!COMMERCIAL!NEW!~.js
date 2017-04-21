/*
 * Script ID EMSEBZP6: Required Contact Type
 * 
 */

if (AInfo["Proposed Use"] == "Hazardous") {
	var contact = getContactByType("Supervising Engineer", capId);
	if (!contact){
		addStdCondition("Building Permit", "Engineer Report Required");
	}
}