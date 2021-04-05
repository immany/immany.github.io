
$(".wrapper").prepend('<div id="xray-top" class="top" style="z-index:100;position: sticky;top:0;"><ul style="list-style: none;float: left; display: inline; margin: 0; padding: 0;"><li><a class="mcx" href="#" style="color:white"><span id="xraypanel_header_aec_text" style="color:white; padding-left:10px;padding-right:5px;">Adobe Experience Platform</span><span id="xraypanel_header_xray_text" style="color:white">X-Ray</span></a></li></ul></div>');

$('body').append('<div id="x-ray-panel" class="at-element-marker hide"> <div class="accounts" style="display: none;"> <div style="display:inline-block;" id="approval_status-header"> <div class="profile-hdr" style="position:relative;width:100%;"> <div class="image"><img src="data:image/jpeg;base64,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" id="userPhoto" alt=""/></div><div class="name"> <span id="fullName">Anonymous User</span></div><div style="float: right;margin-top: 10px;margin-right: 10px;"> <img id="barcode" src="" alt="" title="" width="50" height="50" style="border: 3px white;border-style: solid;"/></div></div></div></div><script id="xray-template" type="text/x-handlebars-template"> <div id="approval_status-adobe"> <ul class="link_list"> <li id="aam_link" class="aam_link" style="display:none;"> <button class="accordion" style="padding-left: 70px;">Audience Manager</button> <div class="approved"> <h4 class=""><span>Activation</span></h4> <h5>Segments</h5><span id="textaecsegments" class="analytics interest">{{cv}}</span> <h5>Destinations</h5><span id="textaecdestinations" class="analytics">{{c}}</span></div></li><li id="rtcdp_link" class="acp_link" style="display:none;"> <button class="accordion" style="padding-left: 70px;">Real-Time CDP</button> <div class="approved"> <h4 class=""><span>Activation</span></h4> <h5>Segments</h5><span id="textrtcdpsegments" class="analytics interest">{{cv}}</span> <h5>Destinations</h5><span id="textrtcdpdestinations" class="analytics">{{c}}</span></div></li><li id="aa_link" class="aa_link" style="display:none;"> <button class="accordion" style="padding-left: 70px;">Analytics</button> <div class="approved"> <h4 class=""><span>Adobe Analytics</span></h4></div></li><li id="at_link" class="at_link" style="display:none;"> <button class="accordion" style="padding-left: 70px;">Target</button> <div class="approved"> <h4 class=""><span>Adobe Target</span></h4></div></li><li id="acs_link" class="acs_link" style="display:none;"> <button class="accordion" style="padding-left: 70px;">Campaign</button> <div class="approved"> <h4 class=""><span>Adobe Campaign</span></h4></div></li><li id="marketo_link" class="marketo_link" style="display:none;"> <button class="accordion" style="padding-left: 70px;">Marketo</button> <div class="approved"> <h4 class=""><span>Lead Info</span></h4><span id="textmarketoleadid" class="analytics"></span><span id="textmarketocompany" class="analytics"></span><span id="textmarketofirstname" class="analytics"></span><span id="textmarketolastname" class="analytics"></span><span id="textmarketocarcolor" class="analytics"></span><span id="textmarketotestdrivedealer" class="analytics"></span><span id="textmarketotestdrivedate" class="analytics"></span></div></li><li id="platform_ups_link" class="acp_link" style="display:block;"> <button class="accordion" style="padding-left: 70px;">Real-Time Customer Profile</button> <div class="approved"> <br><div class="xray-session-title">Identities</div><span id="textecid" class="analytics"></span> <span id="textuuid" class="analytics"></span> <span id="textcrmid" class="analytics"></span> <span id="textmobilenr" class="analytics"></span> <br><div class="xray-session-title">Segment Memberships</div><span id="segmentMemberships" class="analytics"></span> <br><div class="xray-session-title">Profile Information</div><span id="platformFirstName" class="analytics"></span> <span id="platformLastName" class="analytics"></span><span id="platformEmail" class="analytics"></span> <span id="platformGender" class="analytics"></span><span id="platformAddress" class="analytics"></span> <span id="platformCity" class="analytics"></span><span id="platformShoeSize" class="" style="display:none;font-weight:100;"></span> <span id="platformShirtSize" class="" style="display:none;font-weight:100;"></span> <span id="platformPreferredColor" class="" style="display:none;font-weight:100;"></span> <br/> <span id="platformPicture" class="analytics"></span> </div></li><li id="platform_ee_link" class="acp_link" style="display:block;"> <button class="accordion" style="padding-left: 70px;">Experience Events</button> <div class="approved"> <br><div class="xray-session-title">Browse Activity</div><table id="productViewActivity" style="width: 250px;font-size: 12px;"></table> <br><div class="xray-session-title">Product - Add To Cart</div><table id="addToCartActivity" style="width: 250px;font-size: 12px;"></table> <br><div class="xray-session-title">Product - Purchases</div><table id="purchaseActivity" style="width: 250px;font-size: 12px;"></table> <br><div class="xray-session-title">Other Events</div><table id="otherEventsActivity" style="width: 250px;font-size: 12px;"></table> </div></li><li id="platform_sensei_link" class="aep_sensei_link" style="display:block;"> <button id="sensei_name_button" class="accordion" style="padding-left: 70px;">Sensei Services</button> <div class="approved"> <br/><span id="platformChurnScore" class="analytics"></span><span id="platformMortgageSalesPrediction" class="analytics"></span><span id="platformCarInsuranceSalesPrediction" class="analytics"></span></div></li></ul> </div></div>');
    var xRayData = {};

    var source = $('#xray-template').html();
    template = Handlebars.compile(source);
    context = xRayData;
    html = template(context);
    contextCode = JSON.stringify(xRayData, null, 2);

    $('.accounts').append(html);
    $('.code code').text(contextCode);
    $('#x-ray-panel').prepend($('.accounts'));
    $('body').prepend($('#x-ray-panel'));
  
    $('li .mcx').click(function(){
        $('.accounts').toggle();
        $('.mcx').toggleClass('active');
    });
        
    $('#xray-open').click(function(){
        $('#xray-close').addClass('active').removeClass('hide');
        $('#xray-open').addClass('hide').removeClass('active');
        $('#x-ray-panel').addClass('active').removeClass('hide');
        $("#x-ray-panel").css("height","100%");
        $("#x-ray-panel").css("position","fixed");
        $("#x-ray-panel").css("z-index","99");
        $("#x-ray-panel").css("top","0");
        $("#x-ray-panel").css("left","0");
        $("#x-ray-panel").css("overflow-x","hidden");
        $("#xray-top").css("position","sticky");
        $("#xray-top").css("z-index","100");
        $("#xray-top").css("top","0");
        $("#xray-top").css("left","0");
        $("#xray-top").css("overflow-x","hidden");    
    });
        
    $('#xray-close').click(function(){
        $('#xray-open').addClass('active').removeClass('hide');
        $('#xray-close').addClass('hide').removeClass('active');  
        $('#x-ray-panel').addClass('hide').removeClass('active');  
    });
  
    clipboard = new ClipboardJS('#barcode');
    clipboard.on('success', function(e) {
        alert('Profile Viewer Link has been copied to your clipboard.')
    });

    getAEPSegmentsMetadata();

    var acc = document.getElementsByClassName("accordion");
    var i;

    var browseActivity = document.getElementById("browseActivity");

    getAAMData();
    setTimeout(getEcId, 500);
    
    getAECData();
    setTimeout(getAEPProfileFromPlatform, 600);
    setTimeout(getAEPProfileFromPlatform, 4000);
    setTimeout(getAEPExperienceEventsFromPlatform, 600);
    setTimeout(getAEPExperienceEventsFromPlatform, 4000);

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
            this.classList.toggle("active");

            // Toggle between hiding and showing the active panel
            var approved = this.nextElementSibling;
            if (approved.style.display === "block") {
                approved.style.display = "none";
            } else {
                approved.style.display = "block";
            }
        }
    }

    
$.ajaxSetup({
    async: false
});

function getAAMData() {
$.ajax(
  {
      url: "https://"+ aamPartnerId + ".demdex.net/event?d_ptfm=browser&d_rtbd=json&d_dst=1&d_cb=myCallbackAAM", 
      dataType : "jsonp",
      success: function(response) {
      },
      error: function(code, status, error) {
        //console.log("Error : " + error);
      }
    }
  );
}  

function myCallbackAAM(response) {
        localStorage.setItem("uuid", response.uuid);
        textuuid.innerHTML = "Audience Manager ID: </br>" + localStorage.uuid + "</br></br>";
        var dcs = response.dcs_region;
        var segments = response.stuff[0].cv;
        var destinations = response.dests;
        
        var destinationsstring = "";
        
        if(response.hasOwnProperty('dests')){
            for (index = 0; index < destinations.length; ++index) {
                var str = destinations[index].c;
                destinationsstring += "<div>" + str + "</div>" + "</br>";
                //console.log(destinations[index].c);
            }
        }
        else{
            destinationsstring = "- No Active Destinations";
        }
        
        var array = new Array();
        array = segments.split(',');
        textuuid.innerHTML = "Audience Manager ID: </br>" + localStorage.uuid + "</br></br>";
        var fLen = array.length;
        var segmentstring = "";
        for (i = 0; i < fLen; i++) {
            str = array[i];
            str = str.replace("segments=", "");
            segmentstring += "<div>" + "- " + str + "</div>";
        }
}
  
// get AEC data into X-ray Panel
function getAECData() {
    $.ajax(
        {
            url: "https://"+aaTenantId+".sc.omtrdc.net/b/ss/+" + aaRsId + "/10/JS-1.7.0-D6ZS/s16526409497834?AQB=1&ndh=1&pf=1&callback=s_c_il[1].doPostbacks&cid.&cusid.&id="+localStorage.crmid+"&as=1&.cusid&.cid&d.&nsid=0&jsonv=1&.d&mid="+ localStorage.ecid +"&aamlh=6&ce=UTF-8&ns=aamdemo&app", 
            dataType : "jsonp",
            success: function(response) {
                myCallbackAEC(response);
            },
            error: function(code, status, error) {
                //console.log("Error : " + error);
            }
        }
    );
}     
  
function myCallbackAEC(response) {
    if (response !== undefined && response !== null){
        if (response.stuff !== undefined && response.stuff !== null){
            var segments = response.stuff[0].cv;
            var destinations = response.dests;
            
            var destinationsstring = "";
            
            if(response.hasOwnProperty('dests')){
                for (index = 0; index < destinations.length; ++index) {
                    var str = destinations[index].c;
                    destinationsstring += "<div>" + str + "</div>" + "</br>";
                    //console.log(destinations[index].c);
                }
            }
            else{
                destinationsstring = "- No Active Destinations";
            }
            
            var array = new Array();
            array = segments.split(',');
            var fLen = array.length;
            var segmentstring = "";
            for (i = 0; i < fLen; i++) {
                str = array[i];
                str = str.replace("segments=", "");
                segmentstring += "<div>" + "- " + str + "</div>";
            }
            
            textaecsegments.innerHTML = segmentstring;
            textaecdestinations.innerHTML = destinationsstring;
        }
    }
}
    
function getEcId() {
    var ecid = _satellite.getVar("customerECID");
    localStorage.setItem("ecid", ecid);
    textecid.innerHTML = "Experience Cloud ID: </br>" + localStorage.ecid + "</br></br>";
}  
  
function getCrmId() {
    var crmid = localStorage.getItem("email");
    if (crmid === undefined || crmid === null){
        textcrmid.innerHTML = "EMAIL ID: </br>" + "Not Available" + "</br></br>";
    }else{
        textcrmid.innerHTML = "EMAIL ID: </br>" + crmid + "</br></br>";
    }
    
}
function getMobileNr() {
    var mobilenr = localStorage.getItem("mobilenr");
    if (mobilenr === undefined || mobilenr === null){
        textmobilenr.innerHTML = "Mobile Number ID: </br>" + "Not Available" + "</br></br>";
    }else{
        textmobilenr.innerHTML = "Mobile Number ID: </br>" + mobilenr + "</br></br>";
    }
}

function getAEPSegmentsMetadata(){
  
    $.ajax(
            {
                url: ioRuntimeSegmentURL, 
                type: "GET",
                dataType : "json",
                contentType: "application/json",
                data: {},
                success: function(response) {
                  var segmentData = response.segmentData;
                  displaySegmentData(segmentData);
                },
                error: function(code, status, error) {
                    //console.log("Error : " + error);
                }
            }
        );
}
  
function getAEPProfileFromPlatform(){
  
    $.ajax(
            {
                url: ioRuntimeProfileURL, 
                type: "GET",
                dataType : "json",
                contentType: "application/json",
                data: {"eventId": _satellite.getVar("customerECID"), "eventNS":"ecid"},
                success: function(response) {
                  var profileData = response.profileData;
                  displayProfilePull(profileData);
                },
                error: function(code, status, error) {
                    //console.log("Error : " + error);
                }
            }
        );
}

function getAEPExperienceEventsFromPlatform(){
  
    $.ajax(
            {
                url: ioRuntimeExperienceEventURL, 
                type: "GET",
                dataType : "json",
                contentType: "application/json",
                data: {"eventId": _satellite.getVar("customerECID"), "eventNS":"ecid"},
                success: function(response) {
                  var experienceEventData = response.experienceEventData;
                  displayEEPull(experienceEventData);
                },
                error: function(code, status, error) {
                    //console.log("Error : " + error);
                }
            }
        );
}

function displaySegmentData(segmentData) {
    console.log(">>>>> Segment Information Metadata from AEP API: ", segmentData);

    var segmentArray = segmentData.segments;

    var segmentIdArray = {};
    var segmentNameArray = {};

    var segmentLength = segmentArray.length;
    var finalSegmentLength = 0;

    for (i = 0; i < segmentLength; i++) {
        //console.log("segmentArray " + i + ": ", segmentArray[i].id + " " + segmentArray[i].name);
        var segmentId = segmentArray[i].id;
        var segmentName = segmentArray[i].name;
        if(segmentName.includes("all") || segmentName.includes(localStorage.getItem("admin_ldap"))){
            segmentIdArray[finalSegmentLength] = segmentId;
            if(segmentName.includes("all")){
                var finalSegmentName = segmentName.replace("all - ", "");
            }
            if(segmentName.includes(localStorage.getItem("admin_ldap"))){
                var finalSegmentName = segmentName.replace(localStorage.getItem("admin_ldap") + " - ", "");
            }
            segmentNameArray[finalSegmentLength] = finalSegmentName;
            finalSegmentLength ++;
        }
    }

    localStorage.setItem("segmentIdArray", JSON.stringify(segmentIdArray));
    localStorage.setItem("segmentNameArray", JSON.stringify(segmentNameArray));
    localStorage.setItem("segmentLength", finalSegmentLength);
}
 
function displayProfilePull(platformResponse) {

    getCrmId();
    getMobileNr();

    var key = Object.keys(platformResponse)[0];
    console.log(">>>>> Identification - Profile XID Key: " + key);
    console.log(">>>>> Profile Data - Response from AEP API:", platformResponse);

    if(key == "message" || key == "error_code" || key == "statusCode" || key == "message" || key == "cause"){
        platformFirstName.innerHTML = "No Information Available";
        platformLastName.innerHTML = "";
        platformGender.innerHTML = "";
        platformEmail.innerHTML = "";
        platformAddress.innerHTML = "";
        platformCity.innerHTML = "";
        platformPicture.innerHTML = ""; 
        segmentMemberships.innerHTML = "No Segments Available";
        console.log(">>>>> Profile Data - Profile Info Request: No Data Returned from Adobe I/O Runtime.");
    }
    else if(key == "retryAfterMs"){
      console.log(">>>>> Profile Data - Profile Info Request: Adobe Experience Platform is receiving too many requests at this moment and couldn't respond to your request immediately.");
    }
    else{
        var entityObject = JSON.stringify(platformResponse[key].entity);
      
        if(entityObject !== '{}'){
            thisPerson = JSON.stringify(platformResponse[key].entity.person);
            
            if(typeof thisPerson !== 'undefined'){
              thisName = JSON.stringify(platformResponse[key].entity.person.name);
              if(typeof thisName !== 'undefined'){
                thisFirstName = JSON.stringify(platformResponse[key].entity.person.name.firstName);
                platformFirstName.innerHTML = "First Name: " + String(platformResponse[key].entity.person.name.firstName);
                thisLastName = JSON.stringify(platformResponse[key].entity.person.name.lastName);
                platformLastName.innerHTML = "Last Name: " + String(platformResponse[key].entity.person.name.lastName);
                fullName.innerHTML = String(platformResponse[key].entity.person.name.firstName) + " " + String(platformResponse[key].entity.person.name.lastName);
              }
              thisGender = JSON.stringify(platformResponse[key].entity.person.gender);
              if(typeof thisGender !== 'undefined'){
                platformGender.innerHTML = "Gender: " + String(platformResponse[key].entity.person.gender);
              }
            }else{
              platformFirstName.innerHTML = "No Information Available";
            }

            thisCustomerExtension = JSON.stringify(platformResponse[key].entity[aepTenantId]);
            if(typeof thisCustomerExtension !== 'undefined'){
                thisRetailSizesExtension = JSON.stringify(platformResponse[key].entity[aepTenantId].retailSizes);
                if(typeof thisRetailSizesExtension !== 'undefined'){
                  if(String(platformResponse[key].entity[aepTenantId].retailSizes.shoeSize) !== ""){
                    platformShoeSize.innerHTML = "Shoe Size: " + String(platformResponse[key].entity[aepTenantId].retailSizes.shoeSize);
                  }
                  if(String(platformResponse[key].entity[aepTenantId].retailSizes.shirtSize) !== ""){
                    platformShirtSize.innerHTML = "Shirt Size: " + String(platformResponse[key].entity[aepTenantId].retailSizes.shirtSize);
                  }
                  if(String(platformResponse[key].entity[aepTenantId].retailSizes.preferredColor) !== ""){
                    platformPreferredColor.innerHTML = "Preferred Color: " + String(platformResponse[key].entity[aepTenantId].retailSizes.preferredColor);
                  }
                }

                thisCarInsuranceSalesPredictionExtension = JSON.stringify(platformResponse[key].entity[aepTenantId].salesPrediction);
                    if(typeof thisCarInsuranceSalesPredictionExtension !== 'undefined'){
                      thisCarInsuranceSalesPredictionExtensionObject = JSON.stringify(platformResponse[key].entity[aepTenantId].salesPrediction.carInsuranceSalesPrediction);
                      if(typeof thisCarInsuranceSalesPredictionExtensionObject !== 'undefined'){
                        if(String(platformResponse[key].entity[aepTenantId].salesPrediction.carInsuranceSalesPrediction) !== ""){
                          platformCarInsuranceSalesPrediction.innerHTML = "Car Insurance Sales Prediction: " + String(platformResponse[key].entity[aepTenantId].salesPrediction.carInsuranceSalesPrediction);
                        }
                      }
                    }

                thisChurnPredictionExtension = JSON.stringify(platformResponse[key].entity[aepTenantId].churnInformation);
                    if(typeof thisChurnPredictionExtension !== 'undefined'){
                      thisChurnPredictionExtensionObject = JSON.stringify(platformResponse[key].entity[aepTenantId].churnInformation.churnScore);
                      if(typeof thisChurnPredictionExtensionObject !== 'undefined'){
                        if(String(platformResponse[key].entity[aepTenantId].churnInformation.churnScore) !== ""){
                          platformChurnScore.innerHTML = "Churn Prediction: " + String(platformResponse[key].entity[aepTenantId].churnInformation.churnScore);
                        }
                      }
                    }

                thisPictureUrl = JSON.stringify(platformResponse[key].entity.profilePictureLink);
                if(typeof thisPictureUrl !== 'undefined'){
                    platformPicture.innerHTML = "<img src='" + String(platformResponse[key].entity.profilePictureLink) + "' style='width:100px'>"; 
                    userPhoto.setAttribute('src', String(platformResponse[key].entity.profilePictureLink));
                }
              
                thisHomeAddress = JSON.stringify(platformResponse[key].entity.homeAddress);
                if(typeof thisHomeAddress !== 'undefined'){
                  platformAddress.innerHTML = "Address: " + String(platformResponse[key].entity.homeAddress.street1);
                  platformCity.innerHTML = "City: " + String(String(platformResponse[key].entity.homeAddress.city));
                }
                thisEmail = JSON.stringify(platformResponse[key].entity.personalEmail);
                if(typeof thisEmail !== 'undefined'){
                  profileEmail = String(platformResponse[key].entity.personalEmail.address);
                  console.log(">>>>> Identification - EMAIL from Profile: " + profileEmail);
                  localStorage.setItem("email", profileEmail);
                }else{
                  localStorage.setItem("email", "Not Available");
                }
                thisMobileNr = JSON.stringify(platformResponse[key].entity.mobilePhone);
                if(typeof thisMobileNr !== 'undefined'){
                  profileMobileNr = String(platformResponse[key].entity.mobilePhone.number);
                  thisMobileNr = profileMobileNr.replace(/"/g, "");
                  console.log(">>>>> Identification - MOBILENR from Profile: " + thisMobileNr);
                  localStorage.setItem("mobilenr", thisMobileNr);
                }else{
                  localStorage.setItem("mobilenr", "Not Available");
                }

            
                thisMortgageSalesPredictionExtension = JSON.stringify(platformResponse[key].entity[aepTenantId].salesPrediction);
                    if(typeof thisMortgageSalesPredictionExtension !== 'undefined'){
                      thisMortgageSalesPredictionExtensionObject = JSON.stringify(platformResponse[key].entity[aepTenantId].salesPrediction.mortgageLoanSalesPrediction);
                      if(typeof thisMortgageSalesPredictionExtensionObject !== 'undefined'){
                        if(String(platformResponse[key].entity[aepTenantId].salesPrediction.mortgageLoanSalesPrediction) !== ""){
                          platformMortgageSalesPrediction.innerHTML = "Mortgage Loan Sales Prediction: " + String(platformResponse[key].entity[aepTenantId].salesPrediction.mortgageLoanSalesPrediction);
                        }
                      }
                    }
            }

            thisSegmentExtension = JSON.stringify(platformResponse[key].entity.segmentMembership);
            if(typeof thisSegmentExtension !== 'undefined'){
                var segments = Object.keys(platformResponse[key].entity.segmentMembership.ups);
                console.log(">>>>> Segmentation: " + segments.length + " Segment Memberships Found:", segments);

                const values = Object.values(segments);
                var qualifiedSegmentArray = {};
                for (i = 0; i < values.length; i++) {
                    var segmentname = values[i];
                    var status = platformResponse[key].entity.segmentMembership.ups[segmentname].status;
                    if(status === "realized" || status === "existing"){
                        //console.log(">>>>> Segment Status: " + platformResponse[key].entity.segmentMembership.ups[segmentname].status);
                        qualifiedSegmentArray[i] = segmentname;
                    }
                }

                const qualifiedSegmentsLength = Object.keys(qualifiedSegmentArray).length;
                const qualifiedSegments = Object.values(qualifiedSegmentArray);

                //console.log(">>>>> " + qualifiedSegmentsLength + " Qualified Segments:", qualifiedSegmentArray);

                var aepSegmentString = "";

                var segmentIdArray = {};
                var segmentNameArray = {};
                segmentIdArray = JSON.parse(localStorage.getItem("segmentIdArray"));
                segmentNameArray = JSON.parse(localStorage.getItem("segmentNameArray"));
                
                var segmentLength = Number(localStorage.getItem("segmentLength"));

                for (i = 0; i < qualifiedSegmentsLength; i++) {
                    console.log(">>>>> Adding Segment to Xray...");
                    for (x = 0; x < segmentLength; x++) {
                        //console.log(">>>>> Verifying Segment IDs: " + qualifiedSegments[i] + " - " + segmentIdArray[x]);
                        //console.log(">>>>> Verifying Segment Name: " + segmentNameArray[x]);
                        if(qualifiedSegments[i] === segmentIdArray[x]){
                            //console.log(">>>>> Match Found! - Add Segment to Xray:" + qualifiedSegmentArray[x] + " - " + segmentNameArray[x]);
                            aepSegmentString += "- " + segmentNameArray[x] + "</br>";
                        }
                    }
                }

                segmentMemberships.innerHTML = aepSegmentString;

            }else{
                console.log(">>>>> Segmentation: No Segment Memberships Found.");
                segmentMemberships.innerHTML = "No Segments Available";
            }
        }
      
    }
}

function displayEEPull(platformEEResponse) {
    var EEresponse = {};
    var productViewSKUarray = {};
    var productViewSKUcounter = 0;
    var otherEventsArray = {};
    var otherEventsCounter = 0;
    var productAddToCartSKUarray = {};
    var productAddToCartSKUcounter = 0;
    var productPurchaseSKUarray = {};
    var productPurchaseSKUcounter = 0;
    var key = Object.keys(platformEEResponse)[0];
    console.log(">>>>> Experience Events - Response Type: " + key);

    if(key == "message" || key == "error_code" || key == "statusCode" || key == "message" || key == "cause"){
        productViewActivity.innerHTML = "No Information Available";
        addToCartActivity.innerHTML = "No Information Available";
        purchaseActivity.innerHTML = "No Information Available";
        otherEventsActivity.innerHTML = "No Information Available";
        console.log("ExperienceEvent Info Request: No Data Returned from Adobe I/O Runtime, try again later.");
    }
    else if(key == "retryAfterMs"){
        productViewActivity.innerHTML = "No Information Available";
        addToCartActivity.innerHTML = "No Information Available";
        purchaseActivity.innerHTML = "No Information Available";
        otherEventsActivity.innerHTML = "No Information Available";
        console.log("ExperienceEvent Info Request: Our testing instance of Platform is receiving too many requests at this moment and couldn't respond to your request immediately.");
    }
    else{
        console.log(">>>>> Experience Events - Response from AEP API:", platformEEResponse);
        EEresponse = platformEEResponse;

        var EElength = EEresponse.children.length;
        productViewSKUcounter = 0;
        productAddToCartSKUcounter = 0;
        productPurchaseSKUcounter = 0;
        
        for (i = 0; i < EElength; i++) { 
            var prodArray = {};
            var prodName = "";
            var prodImg = "";
            var prodQty = "";
            var prodChannel = "";
          
            try{
                var SKUlength = EEresponse.children[i].entity.productListItems.length;
                //console.log("SKUlength: " + SKUlength);
                for (sku = 0; sku < SKUlength; sku++){
                    var interactionType = EEresponse.children[i].entity[aepTenantId].productData.productInteraction;
                    //console.log("Interaction Type: " + interactionType + " Product: " + EEresponse.children[i].entity.productListItems[sku].name);
                    if(interactionType === "productView" || interactionType === "articleView"){
                      var tms = EEresponse.children[i].entity[aepTenantId].brand.tms;
                      //console.log("TMS: " + tms);
                        if(tms !== "GTM"){
                            prodName = EEresponse.children[i].entity.productListItems[sku].name;
                            prodImg = EEresponse.children[i].entity.productListItems[sku].product;
                            prodQty = EEresponse.children[i].entity.productListItems[sku].quantity;
                            prodChannel = EEresponse.children[i].entity.productListItems[sku].productAddMethod;
                            
                            console.log(">>>>> X-ray - Product Viewed Info: " + prodName + " - " + prodImg);
                            prodArray.prodName = prodName;
                            prodArray.prodImg = prodImg;
                            prodArray.prodQty = prodQty;
                            prodArray.prodChannel = prodChannel;
                            productViewSKUarray[productViewSKUcounter] = prodArray;
                            productViewSKUcounter ++;
                        }else{
                            //console.log(">>>>> X-ray - GTM Experience Event found.");
                        }
                    }
                    if(interactionType == "productAddToCart"){
                        
                        prodName = EEresponse.children[i].entity.productListItems[sku].name;
                        prodImg = EEresponse.children[i].entity.productListItems[sku].product;
                        prodQty = EEresponse.children[i].entity.productListItems[sku].quantity;
                        prodChannel = EEresponse.children[i].entity.productListItems[sku].productAddMethod;
                        
                        //console.log(">>>>> X-ray - Product Add To Cart Info: " + prodName + " - " + prodImg);
                        prodArray.prodName = prodName;
                        prodArray.prodImg = prodImg;
                        prodArray.prodQty = prodQty;
                        prodArray.prodChannel = prodChannel;
                        productAddToCartSKUarray[productAddToCartSKUcounter] = prodArray;
                        productAddToCartSKUcounter ++;
                    }
                    if(interactionType == "productPurchase"){
                        
                        prodName = EEresponse.children[i].entity.productListItems[sku].name;
                        prodImg = EEresponse.children[i].entity.productListItems[sku].product;
                        prodQty = EEresponse.children[i].entity.productListItems[sku].quantity;
                        prodChannel = EEresponse.children[i].entity.productListItems[sku].productAddMethod;
                        
                        //console.log(">>>>> X-ray - Product Purchase Info: " + prodName + " - " + prodImg + " - (Qty: " + prodQty + " - Channel: " + prodChannel + ")");
                        prodArray.prodName = prodName;
                        prodArray.prodImg = prodImg;
                        prodArray.prodQty = prodQty;
                        prodArray.prodChannel = prodChannel;
                        productPurchaseSKUarray[productPurchaseSKUcounter] = prodArray;
                        productPurchaseSKUcounter ++;
                    }
                }
            }catch(err) {
                //console.log(err.message);
            }

            try{
              var eventArray = {};
              var eventType = EEresponse.children[i].entity.eventType;
              var eventName = "";
              var eventImg = "";
              var eventChannel = "";

              switch(eventType) {
                case "flightBooked":
                  eventName = "Flight Booking";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/f17aff4d1a334dd075231cd6ea5ce1a2_ee_icon_flight.png";
                  break;
                case "flightSearch":
                  eventName = "Flight Search";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/f17aff4d1a334dd075231cd6ea5ce1a2_ee_icon_flight.png";
                  break;
                case "flightCheckedIn":
                  eventName = "Flight Checkin";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/f17aff4d1a334dd075231cd6ea5ce1a2_ee_icon_flight.png";
                  break;
                case "callCenterInteraction":
                  eventName = "Call Center Interaction";
                  eventChannel = "Call Center";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/efa1e5acf1b730389d992f477916af9b_ee_icon_callcenter.jpg";
                  break;
                case "storeEntry":
                  eventName = "Store Entry";
                  eventChannel = "Store";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/6fa5d97ffb328249b93fe5a3c4b3ed2f_ee_icon_house.png";
                  break;
                case "storeExit":
                  eventName = "Store Exit";
                  eventChannel = "Store";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/6fa5d97ffb328249b93fe5a3c4b3ed2f_ee_icon_house.png";
                  break;
                case "testDrive":
                  eventName = "Test Drive Booking";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/80a6b878ddece188b81463a5db3592ea_ee_icon_car.png";
                  break;
                case "chatbotInteraction":
                  eventName = "Chatbot Interaction";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/c048249b93a94499704a572de47d2867_chat.png";
                  break;
                case "mortgageSimulationStep1":
                  eventName = "Mortgage Loan Simulation Step 1";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/7a7b5ee0a47cd07215cb74f368265f37_ee_bank_icon.png";
                  break;
                case "mortgageSimulationStep2":
                  eventName = "Mortgage Loan Simulation Step 2";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/7a7b5ee0a47cd07215cb74f368265f37_ee_bank_icon.png";
                  break;
                case "insuranceSimulation":
                  eventName = "Insurance Simulation";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/7a7b5ee0a47cd07215cb74f368265f37_ee_bank_icon.png";
                  break;
                case "carInsurancePurchase":
                  eventName = "Car Insurance - Purchase";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/80a6b878ddece188b81463a5db3592ea_ee_icon_car.png";
                  break;
                case "carInsuranceGetQuote":
                  eventName = "Car Insurance - Get Quote";
                  eventChannel = "Website";
                  eventImg = "https://parsefiles.back4app.com/hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9/80a6b878ddece188b81463a5db3592ea_ee_icon_car.png";
                  break;
                default:
                  eventName = "Experience Event";
                  eventChannel = "Default";
                  eventImg = "https://s7e4a.scene7.com/is/image/OmniPS/experience_platform_RGB?fmt=png-alpha"
                  break;
                }
                
                //console.log(">>>>> X-ray - Other Event Info: " + eventName + " - " + eventImg + " - Channel: " + eventChannel + ")");
                if(eventChannel !== "Default"){
                  eventArray.eventName = eventName;
                  eventArray.eventImg = eventImg;
                  eventArray.eventChannel = eventChannel;
                  otherEventsArray[otherEventsCounter] = eventArray;
                  otherEventsCounter ++;
                }
            }catch(err) {
                //console.log(err.message);
            }
        }

    var productViewSKUs = productViewSKUcounter;
    var productAddToCartSKUs = productAddToCartSKUcounter;
    var productPurchaseSKUs = productPurchaseSKUcounter;
    var otherEventsCount = otherEventsCounter;
    var productViewActivityString = "";
    var addToCartActivityString = "";
    var purchaseActivityString = "";
    var otherEventsString = "";
    var productName = "";
    var productImg = "";
    var productQty = "";
    var productChannel = "";

    
    if(productViewSKUs > 0){
      for (i = 0; i < productViewSKUs; i++){
          productName = productViewSKUarray[i].prodName;
          productImg = productViewSKUarray[i].prodImg;
          productQty = productViewSKUarray[i].prodQty;
          productChannel = productViewSKUarray[i].prodChannel;
          str = "<tr>" + "<td align='left' style='padding-bottom: 1em;'><img src='" + productImg + "' style='width:75px;max-height: 100px;list-style-type: none;font-size: 15px;'/>" + "</td><td align='left' style='padding-bottom: 1em;padding-left:10px;'>" + productName + "<br/>Quantity: " + productQty + " <br/>Channel: " + productChannel + "</td></tr>";
          productViewActivityString += str;
      }
    }else{
      productViewActivityString = "Not Available";
    }

    if(productAddToCartSKUs > 0){
      for (i = 0; i < productAddToCartSKUs; i++){
          productName = productAddToCartSKUarray[i].prodName;
          productImg = productAddToCartSKUarray[i].prodImg;
          productQty = productAddToCartSKUarray[i].prodQty;
          productChannel = productAddToCartSKUarray[i].prodChannel;
          str = "<tr>" + "<td align='left' style='padding-bottom: 1em;'><img src='" + productImg + "' style='width:75px;max-height: 100px;list-style-type: none;font-size: 15px;'/>" + "</td><td align='left' style='padding-bottom: 1em;padding-left:10px;'>" + productName + "<br/>Quantity: " + productQty + " <br/>Channel: " + productChannel + "</td></tr>";
          addToCartActivityString += str;
      }
    }else{
      addToCartActivityString = "Not Available";
    }
    if(productPurchaseSKUs > 0){
      for (i = 0; i < productPurchaseSKUs; i++){
          productName = productPurchaseSKUarray[i].prodName;
          productImg = productPurchaseSKUarray[i].prodImg;
          productQty = productPurchaseSKUarray[i].prodQty;
          productChannel = productPurchaseSKUarray[i].prodChannel;
          str = "<tr>" + "<td align='left' style='padding-bottom: 1em;'><img src='" + productImg + "' style='width:75px;max-height: 100px;list-style-type: none;font-size: 15px;'/>" + "</td><td align='left' style='padding-bottom: 1em;padding-left:10px;'>" + productName + "<br/>Quantity: " + productQty + " <br/>Channel: " + productChannel + "</td></tr>";
          purchaseActivityString += str;
        }
      }else{
        purchaseActivityString = "Not Available";
      }

    if(otherEventsCount > 0){
      for (i = 0; i < otherEventsCount; i++){
          var evName = otherEventsArray[i].eventName;
          var evImg = otherEventsArray[i].eventImg;
          var evChannel = otherEventsArray[i].eventChannel;
          str = "<tr>" + "<td align='left' style='padding-bottom: 1em;'><img src='" + evImg + "' style='width:75px;max-height: 100px;list-style-type: none;font-size: 15px;'/>" + "</td><td align='left' style='padding-bottom: 1em;padding-left:10px;'>" + evName + "<br/>Channel: " + evChannel + "</td></tr>";
          otherEventsString += str;
        }
      }else{
        otherEventsString = "Not Available";
      }

    productViewActivity.innerHTML = productViewActivityString;
    addToCartActivity.innerHTML = addToCartActivityString;
    purchaseActivity.innerHTML = purchaseActivityString;
    otherEventsActivity.innerHTML = otherEventsString;
}}