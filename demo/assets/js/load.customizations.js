var version = "&copy; 2020 - Wouter Van Geluwe - SYTYCD v9.1 - 01/04/2020 &middot; All Rights Reserved.";

$(document).ready(function(){

    // Set Credits
    document.getElementById("footerCredits").innerHTML = version;

    // Set Branding
    let brandname = localStorage.getItem('brandname');
    $('#brandLogo').attr("src", localStorage.getItem('brandlogo')).attr("alt", brandname)
    $("#faviconlink").attr("href", localStorage.getItem('faviconlink'));

    updatePageTitle(brandname);

    // Add Pages to Header & Footer Menu
    for(var i=1; i<=8; i++){
        var menustatus = localStorage.getItem('page'+i+'active')
        var menulabel = localStorage.getItem('page'+i+'title')
        var menulink = localStorage.getItem('page'+i+'url')

        if(menustatus == "true"){
            $('#main-menu').append('<li class="nav-item"><a class="nav-link" href="'+menulink+'">'+menulabel+'</a></li>')
            $('.list-group').first().append('<a class="list-group-item" href="'+menulink+'">'+menulabel+'</a>')
        }
    }

    var qrCodeUrl = localStorage.getItem("qrCodeUrl");
    if(qrCodeUrl !== null){
        console.log(">>>>> QR Code: " + qrCodeUrl);
        $("#barcode").attr("style", "display:block;border: 3px white;border-style: solid;");
        setTimeout(function(){
            $('#barcode').attr('src', 'https://api.qrserver.com/v1/create-qr-code/?data=' + localStorage.getItem("qrCodeUrl") + '&amp;size=50x50');
            $("#barcode").attr('data-clipboard-text',localStorage.getItem("qrCodeUrl"));
        }, 1000);
    }else{
        setTimeout(function(){
            var evNS = "ecid";
            var evID = Visitor.getInstance('907075E95BF479EC0A495C73@AdobeOrg')._fields['MCMID'];
            var ldap = localStorage.getItem('admin_ldap');
            var evBrand = localStorage.getItem('brandName');
            var autoPlay = true;

            var longURL = 'https://profileviewer.aepdemo.eu/?eventNS='+encodeURI(evNS)+'&eventID='+encodeURI(evID)+'&ldap='+encodeURI(ldap)+'&ap='+autoPlay+'&brand='+encodeURI(evBrand);
            var formattedBody = {}
            formattedBody.data = []
            formattedBody.data.push({"longURL": longURL})

            $.ajax(
                {
                    url: "https://adobeioruntime.net/api/v1/web/mlopes/default/urlARD", 
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(formattedBody),
                    success: function(response) {
                        localStorage.setItem("qrCodeUrl", response.data[0].shortLink);
                        $("#pvUrl").val(localStorage.getItem("qrCodeUrl"));
                        $('#barcode').attr('src', 'https://api.qrserver.com/v1/create-qr-code/?data=' + localStorage.getItem("qrCodeUrl") + '&amp;size=50x50');
                    },
                    error: function(code, status, error) {
                        console.log("Error : " + error);
                    }
                }
            );
            console.log(">>>>> QR Code wasn't availabe, has been set now.");
        }, 1000);
    }

    if(localStorage.getItem('pageDMPactive') == "true"){
        $("#pageDMP").attr({"src": localStorage.getItem('pageDMPurl'), "target": "_blank"}).show(); 
    }
    if(localStorage.getItem('brandusecallcenter') == "true"){
        $("#pageCallCenter").show(); 
    }
    if(localStorage.getItem('brandusepersonalshopper') == "true"){
        $("#pagePersonalShopper").show();
    }
    if(localStorage.getItem('brandusepos') == "true"){
        $("#pagePOS").show();
    }
    if(localStorage.getItem('branduseinstoredisplay') == "true"){
        $("#pageInStoreDisplay").show();
    }

    if(digitalData.page.single) {
        loadArticlePersonalizations();
    }

    if(digitalData.page.register === true){
        console.log(">>>>> Registration page detected.");
        if(localStorage.getItem("brandusecustomprofileattributes") === "yes"){
            if(localStorage.getItem("brandindustry") === "retail"){
                $("#shoeSizeAttribute").attr("style", "display:block;");
                $("#shirtSizeAttribute").attr("style", "display:block;");
                $("#preferredColorAttribute").attr("style", "display:block;");
            }else{
                $("#shoeSizeAttribute").attr("style", "display:none;");
                $("#shirtSizeAttribute").attr("style", "display:none;");
                $("#preferredColorAttribute").attr("style", "display:none;");
            }
            if(localStorage.getItem("brandindustry") === "fmcg"){
                $("#allergyInformation").attr("style", "display:block;");
            }else{
                $("#allergyInformation").attr("style", "display:none;");
            }
        }
        if(localStorage.getItem('profilePictureTaken') !== "Y"){
            localStorage.setItem('profileImageAttributes', "");
            localStorage.setItem('profileImage', "");
            localStorage.setItem('profileEstimatedAge', "");
            localStorage.setItem('profileEstimatedGender', "unknown");
            localStorage.setItem('profileEstimatedGlasses', "");
            localStorage.setItem('profileEstimatedEmotion', "");
            localStorage.setItem('profileEstimatedEyeMakeup', "");
            localStorage.setItem('profileEstimatedLipMakeup', "");
        }
    }



})



function customPage(id){
    document.title = localStorage.getItem('page'+id+'title');
    digitalData.product.imageUrl = localStorage.getItem('page'+id+'heroimage');
    digitalData.product.price = "0";
    digitalData.product.category = "Custom";
    digitalData.product.interaction = "productView";
    digitalData.product.quantity = 1;
    digitalData.product.sku = "undefined";
    digitalData.product.name = localStorage.getItem('page'+id+'title');
    digitalData.page.pageName =  localStorage.getItem('brandname') + ' - ' + localStorage.getItem('page'+id+'title');

    $("#custom-title").html(localStorage.getItem('page'+id+'title'))
    $("#custom-content").append("<img src='"+localStorage.getItem('page'+id+'heroimage')+"' style='width:100%'>");

}



function updatePageTitle(brandname){

    if(digitalData.page.home){
        let title = 'Home';

        document.title = title
        digitalData.page.pageName = brandname + ' - '+title;
    }

    else if(digitalData.page.category){
        let category = getUrlParameter('cat')
        let title = catTitle[category];

        document.title = title
        digitalData.page.pageName = brandname + ' - '+title;
    }

    else if(digitalData.page.register){
        let title = 'Login/Registration';

        document.title = title
        digitalData.page.pageName = brandname + ' - '+title;
    }

    else if(digitalData.page.privacy){
        let title = 'Privacy';

        document.title = title
        digitalData.page.pageName = brandname + ' - '+title;
    }
    
}

function updatePictureUrl() {
    var imgUrl = document.getElementById("pictureurl").value;
    console.log(imgUrl);
    document.getElementById("imgPictureUrl").src = imgUrl;
    return false;
}