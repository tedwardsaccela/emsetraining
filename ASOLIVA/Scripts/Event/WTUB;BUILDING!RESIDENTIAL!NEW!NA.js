/*
 * Script ID EMSEBZP2: Balance Check at Issuance
 * Name: WTUB:BUILDING/RESIDENTIAL/NEW/NA.js
 */
if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
	if (balanceDue > 0 && estValue > 1000) {
		showMessage = true;
		comment("Permit issuance is cancelled. There is balance due and the estimated job is more than $1000. The balance is $" + balanceDue + ".");
		cancel = true;
	}
}