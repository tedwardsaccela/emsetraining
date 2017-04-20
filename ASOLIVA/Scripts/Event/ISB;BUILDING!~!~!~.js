/*
 *Script ID EMSEBZP4: Prevent Scheduling When Balance Owed
 *
 */
if (balanceDue > 0) {
	editAppSpecific("Permit Expiration Date", dateAdd(null, 180));
	showMessage = true;
	comment("The inspection cannot be scheduled because there is a balance owed of $"+ balanceDue);
	cancel = true;
}