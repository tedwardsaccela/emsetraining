/*
 * Script ID EMSEBZP1: Plan Check Fee Assessment
 * Name: WTUA:BUILDING/RESIDENTIAL/NEW/*.js
 */

if (wfTask == "Application Acceptance" && wfStatus == "Accepted - Plan Review Req") {
	addFee("BLD_030", "BLD_GENERAL", "FINAL", 1, "Y");
}
