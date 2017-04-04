	//Individual exercise 2
if (wfTask == "Permit Issuance" && wfStatus == "Issued" && balanceDue > 0 && AInfo["Job Cost"] > 1000) {
		showMessage = true;
		comment("There is a balance due on the record of: " + balanceDue);  
		cancel = true;
	}