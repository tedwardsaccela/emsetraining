/*
 *Script ID EMSEBZP3: Auto Issue Upon Payment
 *Name: PRA:BUILDING!RESIDENTIAL!NEW!NA.js
 */
if (isTaskActive("Permit Issuance") && balanceDue <= 0) {
		closeTask("Permit Issuance", "Issued", "Permit Issued", ""); 
		editAppSpecific("Permit Expiration Date", dateAdd(null, 180));
		scheduleInspectDate("Set Backs", dateAdd(null, 15), "ADMIN");
}