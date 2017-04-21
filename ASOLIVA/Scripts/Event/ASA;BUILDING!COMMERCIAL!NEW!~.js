/*
 * Script ID EMSEBZP6: Required Contact Type
 * 
 */

var proposedUse = getAppSpecific("Proposed Use");
var contact = getContactByType("Supervising Engineer", capId);
	if (proposedUse == "Hazardous" && !contact) {
		addStdCondition("Building Permit", "Engineer Report Required");
	}
