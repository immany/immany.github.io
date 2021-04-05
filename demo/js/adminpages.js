$(document).ready(function() {
    console.log(">>> Adding Admin Menu");
	$("#adminmenu").append("<a href='./admin.html' class='w3-bar-item w3-button'>Home</a>");
	$("#adminmenu").append("<br/>");
	$("#adminmenu").append("<a href='./admin_selectldap.html' class='w3-bar-item w3-button'>Select LDAP</a>");
	$("#adminmenu").append("<a href='./admin_selectbrand.html' class='w3-bar-item w3-button'>Select Brand</a>");
	$("#adminmenu").append("<a href='./admin_createbrand_step1.html' class='w3-bar-item w3-button'>Create Brand</a>");
	$("#adminmenu").append("<a href='./admin_update.html' class='w3-bar-item w3-button'>Update Brand</a>");
	$("#adminmenu").append("<a href='./admin_deactivate.html' class='w3-bar-item w3-button'>Reactivate Brand</a>");
	$("#adminmenu").append("<br/>");
	$("#adminmenu").append("<a href='./admin_storelocation.html' class='w3-bar-item w3-button'>Set Store Location</a>");
	$("#adminmenu").append("<a href='./admin_sendgeofence.html' class='w3-bar-item w3-button'>Send Geofence Event</a>");
	$("#adminmenu").append("<a href='./admin_sendemail.html' class='w3-bar-item w3-button'>Trigger Journey</a>");
	$("#adminmenu").append("<a href='./admin_pv.html' class='w3-bar-item w3-button'>Profile Viewer</a>");
	$("#adminmenu").append("<br/>");
	$("#adminmenu").append("<a href='./admin_queryservice.html' class='w3-bar-item w3-button'>Query Service</a>");
	if(localStorage.getItem("adobeUserInfoM13Complete") === "true"){
		console.log(">>> Adding Offers Menu");
		$("#adminmenu").append("<a href='./admin_submittechemail.html' class='w3-bar-item w3-button'>Tech Account Email</a>");
		$("#adminmenu").append("<a href='./admin_ode.html' class='w3-bar-item w3-button'>Experience Decisioning</a>");
	}
	if(localStorage.getItem("brandindustry") === "mediaent"){
		console.log(">>> Adding Real-time Dashboard Menu");
		$("#adminmenu").append("<a href='./admin_rtdb.html' class='w3-bar-item w3-button'>News Dashboard</a>");
	}
});


$(document).ready(function() {
	var url = window.location.hostname;
    if(url.includes("platformdemo.corp.adobe.com")){
		console.log(">>> Adding Admin Menu on Internal Domain");
		$("#adminmenu").append("<br/>");
		$("#adminmenu").append("<a href='./admin_register.html' class='w3-bar-item w3-button'>Register</a>");
		$("#adminmenu").append("<a href='./admin_viewparticipants.html' class='w3-bar-item w3-button'>View Participants</a>");
		$("#adminmenu").append("<a href='./admin_completemodule.html' class='w3-bar-item w3-button'>Complete Module</a>");
		$("#adminmenu").append("<a href='./admin_moduleoverview.html' class='w3-bar-item w3-button'>Module Overview</a>");
		$("#adminmenu").append("<br/>");
		$("#adminmenu").append("<a href='./admin_reports.html' class='w3-bar-item w3-button' style='display:none;'>Reports</a>");
	}
});
				
