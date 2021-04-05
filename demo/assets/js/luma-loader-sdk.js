
let brandlogo = localStorage.getItem('brandlogo');
let faviconlink = localStorage.getItem('faviconlink')
let name = localStorage.getItem('name')
let name = localStorage.getItem('name')
let name = localStorage.getItem('name')
let name = localStorage.getItem('name')


 $("#faviconlink").attr("href", localStorage.getItem('faviconlink'));
 $("#gohome").attr("href", "index.html");
 if(localStorage.getItem('demosetuptype') === "quickandnotsodirty"){
     $("#carticon").attr("style", "display:none;");
 }else if(localStorage.getItem('demosetuptype') === "fullecommerceready"){
     $("#carticon").attr("style", "display:block;");

     if(localStorage.getItem("cart") !== null){
         cart = JSON.parse(localStorage.getItem("cart"));
         var count = 0;

         for (var i in cart) {
             count += cart[i].productQty; 
         }

         console.log("Cart exists - " + count + " items in cart.");
         if(count > 0){
             $("#carticonqty").text(count);
             $("#carticonqty").attr("style", "display:block;");
         }
     }


















loadFromLocalStorage();
var version = "&copy; 2020 - Wouter Van Geluwe - SYTYCD v9.1 - 01/04/2020 &middot; All Rights Reserved.";
document.getElementById("footerCredits").innerHTML = version;

function loadFromLocalStorage() {
    
    if (localStorage.getItem("loadconfigfromjsonstatus") === "success") {
                console.log(">>>>> Started Loading Brand Profile from Local Storage!");
                
                //******************************************
                //Displaying Brand Profile values on website
                //******************************************
                $("#brandlogo").attr("src", localStorage.getItem('brandlogo'));
                $("#faviconlink").attr("href", localStorage.getItem('faviconlink'));
                $("#gohome").attr("href", "index.html");
                if(localStorage.getItem('demosetuptype') === "quickandnotsodirty"){
                    $("#carticon").attr("style", "display:none;");
                }else if(localStorage.getItem('demosetuptype') === "fullecommerceready"){
                    $("#carticon").attr("style", "display:block;");

                    if(localStorage.getItem("cart") !== null){
                        cart = JSON.parse(localStorage.getItem("cart"));
                        var count = 0;

                        for (var i in cart) {
                            count += cart[i].productQty; 
                        }

                        console.log("Cart exists - " + count + " items in cart.");
                        if(count > 0){
                            $("#carticonqty").text(count);
                            $("#carticonqty").attr("style", "display:block;");
                        }
                    }
                }

                var qrCodeUrl = localStorage.getItem("qrCodeUrl");
                if(qrCodeUrl !== null){
                    console.log(">>>>> QR Code: " + qrCodeUrl);
                    $("#barcode").attr("style", "display:block;");
                    setTimeout(function(){
                        $('#barcode').attr('src', 'https://api.qrserver.com/v1/create-qr-code/?data=' + localStorage.getItem("qrCodeUrl") + '&amp;size=50x50');
                        $("#barcode").attr('data-clipboard-text',localStorage.getItem("qrCodeUrl"));
                    }, 1000);
                }else{
                    setTimeout(function(){
                        var evNS = "ecid";
                        var evID = Visitor.getInstance('907075E95BF479EC0A495C73@AdobeOrg')._fields['MCMID'];
                        var ldap = localStorage.getItem('admin_ldap');
                        var autoPlay = true;

                        var longURL = 'https://profileviewer.aepdemo.eu/?eventNS='+encodeURI(evNS)+'&eventID='+encodeURI(evID)+'&ldap='+encodeURI(ldap)+'&ap='+autoPlay;
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

                if(localStorage.getItem("brandindustry") == "mediaent"){
                    localStorage.setItem('page0url', 'index_media.html');
                }

                //******************************************
                //Displaying Custom Color on website
                //******************************************
                var selectedBackgroundColor = localStorage.getItem('brandcolor');
                
                if(selectedBackgroundColor != "#FFFFFF"){
                    $("#logobar").attr("style", "background-color:" + selectedBackgroundColor);
                    $("#footerbar").attr("style", "background-color:" + selectedBackgroundColor);
                    $("#brandcalltoaction").attr("style", "background-color:" + selectedBackgroundColor);
                    //$("#ctatext").attr("style", "background-color:" + selectedBackgroundColor);
                    $("#productbox").attr("style", "background-color:" + selectedBackgroundColor);
                    $("#allproductboxes").attr("style", "border-bottom: 5px solid " + selectedBackgroundColor);
                    $("#addtocartbutton").attr("style", "background-color:" + selectedBackgroundColor);
                    $("ccheader1").attr("style", "background-color:" + selectedBackgroundColor);
                    $("ccheader2").attr("style", "background-color:" + selectedBackgroundColor);
                }

                var selectedTextColor = localStorage.getItem('textcolor');
                if(selectedTextColor == "light"){
                    $("#accountsection").attr("style", "color:#FFFFFF"); 
                    $("#newslettersection").attr("style", "color:#FFFFFF");
                    $("#callcentername").attr("style", "color:#FFFFFF");
                    $("#carticon").attr("class", "mini-cart-light");
                }
                //******************************************
                //Displaying Solutions on X-Ray panel
                //******************************************

                if(digitalData.page.dashboardpage !== true){

                    if(localStorage.getItem('brandUseAAM') === "true"){
                        setTimeout(function(){$("#aam_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUseAA') === "true"){
                        setTimeout(function(){$("#aa_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUseAT') === "true"){
                        setTimeout(function(){$("#at_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUseAC') === "true"){
                        setTimeout(function(){$("#ac_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUseMKT') === "true"){
                        setTimeout(function(){$("#marketo_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUsePlatform') === "true"){
                        setTimeout(function(){$("#platform_ups_link").attr("style", "display:block;")}, 1000);
                        setTimeout(function(){$("#platform_ee_link").attr("style", "display:block;")}, 1000);
                        setTimeout(function(){$("#platform_sensei_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUseRTCDP') === "true"){
                        setTimeout(function(){$("#rtcdp_link").attr("style", "display:block;")}, 1000);
                    }
                    if(localStorage.getItem('brandUsePega') === "true"){
                        setTimeout(function(){$("#platform_sensei_link").addClass("pega")}, 1000);
                        setTimeout(function(){$("#sensei_name_button").text("Pega Systems")}, 1000);
                    }

                    //******************************************
                    //Displaying Menu Options on website
                    //******************************************
                    if(localStorage.getItem('page0active') == "true"){
                        document.getElementById("page0").innerHTML = "<a href='" + localStorage.getItem('page0url') + "'>" + localStorage.getItem('page0title') + "</a>";
                    }
                    if(localStorage.getItem('page1active') == "true"){
                        document.getElementById("page1").innerHTML = "<a href='" + localStorage.getItem('page1url') + "'>" + localStorage.getItem('page1title') + "</a>";
                    }
                    if(localStorage.getItem('page2active') == "true"){
                        document.getElementById("page2").innerHTML = "<a href='" + localStorage.getItem('page2url') + "'>" + localStorage.getItem('page2title') + "</a>";
                    }
                    if(localStorage.getItem('page3active') == "true"){
                        document.getElementById("page3").innerHTML = "<a href='" + localStorage.getItem('page3url') + "'>" + localStorage.getItem('page3title') + "</a>";
                    }
                    if(localStorage.getItem('page4active') == "true"){
                        document.getElementById("page4").innerHTML = "<a href='" + localStorage.getItem('page4url') + "'>" + localStorage.getItem('page4title') + "</a>";
                    }
                    if(localStorage.getItem('page5active') == "true"){
                        document.getElementById("page5").innerHTML = "<a href='" + localStorage.getItem('page5url') + "'>" + localStorage.getItem('page5title') + "</a>";
                    }
                    if(localStorage.getItem('page6active') == "true"){
                        document.getElementById("page6").innerHTML = "<a href='" + localStorage.getItem('page6url') + "'>" + localStorage.getItem('page6title') + "</a>";
                    }
                    if(localStorage.getItem('page7active') == "true"){
                        document.getElementById("page7").innerHTML = "<a href='" + localStorage.getItem('page7url') + "'>" + localStorage.getItem('page7title') + "</a>";
                    }
                    if(localStorage.getItem('page8active') == "true"){
                        document.getElementById("page8").innerHTML = "<a href='" + localStorage.getItem('page8url') + "'>" + localStorage.getItem('page8title') + "</a>";
                    }
                    if(localStorage.getItem('page9active') == "true"){
                        document.getElementById("page9").innerHTML = "<a href='" + localStorage.getItem('page9url') + "' target='_blank'>" + localStorage.getItem('page9title') + "</a>";
                    }
                    if(localStorage.getItem('page10active') == "true"){
                        document.getElementById("page10").innerHTML = "<a href='" + localStorage.getItem('page10url') + "' target='_blank'>" + localStorage.getItem('page10title') + "</a>";
                    }
                    if(localStorage.getItem('pageDMPactive') == "true"){
                        document.getElementById("pageDMP").innerHTML = "<a href='" + localStorage.getItem('pageDMPurl') + "' target='_blank'>" + localStorage.getItem('pageDMPtitle') + "</a>";
                    }
                    if(localStorage.getItem('brandusecallcenter') == "true"){
                        document.getElementById("pageCallCenter").innerHTML = "<a href='callcenter.html' target='_blank'>" + "Call Center" + "</a>";
                    }
                    if(localStorage.getItem('brandusepersonalshopper') == "true"){
                        document.getElementById("pagePersonalShopper").innerHTML = "<a href='personalshopper.html' target='_blank'>" + "Personal Shopper" + "</a>";
                    }
                    if(localStorage.getItem('brandusepos') == "true"){
                        document.getElementById("pagePOS").innerHTML = "<a href='pos.html' target='_blank'>" + "POS Terminal" + "</a>";
                    }
                    if(localStorage.getItem('branduseinstoredisplay') == "true"){
                        document.getElementById("pageInStoreDisplay").innerHTML = "<a href='instoredisplay.html' target='_blank'>" + "In-Store Display" + "</a>";
                    }
                }


                //*******************************************
                //Displaying Brand Profile values on homepage
                //*******************************************
                if(digitalData.page.home === true){
                    console.log(">>>>> Homepage detected.")

                    window.document.title = localStorage.getItem('brandname') + " Home";
                    $("#brandhero").attr("src", localStorage.getItem('brandhero'));
                    $("#brandheroimageurl").attr("href", localStorage.getItem('brandcalltoactionurl'));
                    $("#brandcalltoaction").attr("href", localStorage.getItem('brandcalltoactionurl'));

                    if(localStorage.getItem('brandusecalltoaction') === "false"){
                        $("#ctabox").attr("style", "display:none;");
                    }else{
                        $("#ctabox").attr("style", "display:block;");
                        if(localStorage.getItem('brandcalltoactionboxposition') === "BL"){
                            $("#brandcalltoaction").attr("style", "margin-left:50px; margin-top: 250px; width: 420px;");
                        }else if(localStorage.getItem('brandcalltoactionboxposition') === "TL"){
                            $("#brandcalltoaction").attr("style", "margin-left:50px; margin-top: -250px; width: 420px;");
                        }else if(localStorage.getItem('brandcalltoactionboxposition') === "TR"){
                            $("#brandcalltoaction").attr("style", "margin-left:800px; margin-top: -250px; width: 420px;");
                        }else{
                            $("#brandcalltoaction").attr("style", "margin-left:800px; margin-top: 250px; width: 420px;");
                        } 
                    }
                    document.getElementById("brandcalltoaction").innerHTML = "<h3 id='ctatext'>" + localStorage.getItem('brandcalltoaction') + "</h3>"
                    
                    //Product 1
                    if(localStorage.getItem('product1active') == "true"){
                        $("#p1-url").attr("href", localStorage.getItem('product1url'));
                        $("#p1-url").attr("title", localStorage.getItem('product1name'));
                        $("#p1-img1").attr("src", localStorage.getItem('product1image1'));
                        $("#p1-img2").attr("src", localStorage.getItem('product1image2'));
                        document.getElementById("p1-title").innerHTML = localStorage.getItem('product1name');
                        if(localStorage.getItem('product1price') == 0){
                            document.getElementById("p1-price").innerHTML = "";
                        }else if(localStorage.getItem('product1price') == "null"){
                            document.getElementById("p1-price").innerHTML = "";
                        }else{
                            document.getElementById("p1-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product1price');
                        }
                        $("#p1-url").attr("style", "display:block;");
                        $("#productList1").attr("style", "height:530px;");
                    }

                    //Product 2
                    if(localStorage.getItem('product2active') == "true"){
                        $("#p2-url").attr("href", localStorage.getItem('product2url'));
                        $("#p2-url").attr("title", localStorage.getItem('product2name'));
                        $("#p2-img1").attr("src", localStorage.getItem('product2image1'));
                        $("#p2-img2").attr("src", localStorage.getItem('product2image2'));
                        document.getElementById("p2-title").innerHTML = localStorage.getItem('product2name');

                        if(localStorage.getItem('product2price') == 0){
                            document.getElementById("p2-price").innerHTML = "";
                        }else if(localStorage.getItem('product2price') == "null"){
                            document.getElementById("p2-price").innerHTML = "";
                        }else{
                            document.getElementById("p2-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product2price');
                        }
                        $("#p2-url").attr("style", "display:block;");
                        $("#productList1").attr("style", "height:530px;");
                    }

                    //Product 3
                    if(localStorage.getItem('product3active') == "true"){
                        $("#p3-url").attr("href", localStorage.getItem('product3url'));
                        $("#p3-url").attr("title", localStorage.getItem('product3name'));
                        $("#p3-img1").attr("src", localStorage.getItem('product3image1'));
                        $("#p3-img2").attr("src", localStorage.getItem('product3image2'));
                        document.getElementById("p3-title").innerHTML = localStorage.getItem('product3name');
                        
                        if(localStorage.getItem('product3price') == 0){
                            document.getElementById("p3-price").innerHTML = "";
                        }else if(localStorage.getItem('product3price') == "null"){
                            document.getElementById("p3-price").innerHTML = "";
                        }else{
                            document.getElementById("p3-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product3price');
                        }
                        $("#p3-url").attr("style", "display:block;");
                        $("#productList1").attr("style", "height:530px;");
                    }

                    //Product 4
                    if(localStorage.getItem('product4active') == "true"){
                        $("#p4-url").attr("href", localStorage.getItem('product4url'));
                        $("#p4-url").attr("title", localStorage.getItem('product4name'));
                        $("#p4-img1").attr("src", localStorage.getItem('product4image1'));
                        $("#p4-img2").attr("src", localStorage.getItem('product4image2'));
                        document.getElementById("p4-title").innerHTML = localStorage.getItem('product4name');
                        
                        if(localStorage.getItem('product4price') == 0){
                            document.getElementById("p4-price").innerHTML = "";
                        }else if(localStorage.getItem('product4price') == "null"){
                            document.getElementById("p4-price").innerHTML = "";
                        }else{
                            document.getElementById("p4-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product4price');
                        }
                        $("#p4-url").attr("style", "display:block;");
                        $("#productList1").attr("style", "height:530px;");
                    }

                    //Product 5
                    if(localStorage.getItem('product5active') == "true"){
                        $("#p5-url").attr("href", localStorage.getItem('product5url'));
                        $("#p5-url").attr("title", localStorage.getItem('product5name'));
                        $("#p5-img1").attr("src", localStorage.getItem('product5image1'));
                        $("#p5-img2").attr("src", localStorage.getItem('product5image2'));
                        document.getElementById("p5-title").innerHTML = localStorage.getItem('product5name');
                        
                        if(localStorage.getItem('product5price') == 0){
                            document.getElementById("p5-price").innerHTML = "";
                        }else if(localStorage.getItem('product5price') == "null"){
                            document.getElementById("p5-price").innerHTML = "";
                        }else{
                            document.getElementById("p5-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product5price');
                        }
                        $("#p5-url").attr("style", "display:block;");
                        $("#productList2").attr("style", "height:530px;");
                    }

                    //Product 6
                    if(localStorage.getItem('product6active') == "true"){
                        $("#p6-url").attr("href", localStorage.getItem('product6url'));
                        $("#p6-url").attr("title", localStorage.getItem('product6name'));
                        $("#p6-img1").attr("src", localStorage.getItem('product6image1'));
                        $("#p6-img2").attr("src", localStorage.getItem('product6image2'));
                        document.getElementById("p6-title").innerHTML = localStorage.getItem('product6name');
                        
                        if(localStorage.getItem('product6price') == 0){
                            document.getElementById("p6-price").innerHTML = "";
                        }else if(localStorage.getItem('product6price') == "null"){
                            document.getElementById("p6-price").innerHTML = "";
                        }else{
                            document.getElementById("p6-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product6price');
                        }
                        $("#p6-url").attr("style", "display:block;");
                        $("#productList2").attr("style", "height:530px;");
                    }

                    //Product 7
                    if(localStorage.getItem('product7active') == "true"){
                        $("#p7-url").attr("href", localStorage.getItem('product7url'));
                        $("#p7-url").attr("title", localStorage.getItem('product7name'));
                        $("#p7-img1").attr("src", localStorage.getItem('product7image1'));
                        $("#p7-img2").attr("src", localStorage.getItem('product7image2'));
                        document.getElementById("p7-title").innerHTML = localStorage.getItem('product7name');
                        
                        if(localStorage.getItem('product7price') == 0){
                            document.getElementById("p7-price").innerHTML = "";
                        }else if(localStorage.getItem('product7price') == "null"){
                            document.getElementById("p7-price").innerHTML = "";
                        }else{
                            document.getElementById("p7-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product7price');
                        }
                        $("#p7-url").attr("style", "display:block;");
                        $("#productList2").attr("style", "height:530px;");
                    }

                    //Product 8
                    if(localStorage.getItem('product8active') == "true"){
                        $("#p8-url").attr("href", localStorage.getItem('product8url'));
                        $("#p8-url").attr("title", localStorage.getItem('product8name'));
                        $("#p8-img1").attr("src", localStorage.getItem('product8image1'));
                        $("#p8-img2").attr("src", localStorage.getItem('product8image2'));
                        document.getElementById("p8-title").innerHTML = localStorage.getItem('product8name');
                        
                        if(localStorage.getItem('product8price') == 0){
                            document.getElementById("p8-price").innerHTML = "";
                        }else if(localStorage.getItem('product8price') == "null"){
                            document.getElementById("p8-price").innerHTML = "";
                        }else{
                            document.getElementById("p8-price").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product8price');
                        }
                        $("#p8-url").attr("style", "display:block;");
                        $("#productList2").attr("style", "height:530px;");
                    }
                    
                }
                //************************************************
                //Displaying Product values on Product Detail Page
                //************************************************
                if(digitalData.page.productdtl === true){
                    console.log(">>>>> Product Detail page detected.")
                    switch (digitalData.page.number) {
                      case 1:
                        document.title = localStorage.getItem('product1name');
                        digitalData.product.imageUrl = localStorage.getItem('product1eeimgurl');
                        digitalData.product.price = localStorage.getItem('product1price');
                        digitalData.product.category = localStorage.getItem('product1category');
                        digitalData.product.categoryL1 = localStorage.getItem('product1CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product1CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product1CatL3');
                        digitalData.product.name = localStorage.getItem('product1name');
                        digitalData.product.interaction = "productView";
                        digitalData.product.sku = localStorage.getItem('product1sku');
                        digitalData.product.quantity = 1;

                        if(localStorage.getItem('product1isArticle') == "true"){
                            digitalData.category.pageType = "Article";
                            digitalData.category.siteSection = "Article";
                        }
                        if(localStorage.getItem('product1isVideo') == "true"){
                            $("#videodiv").attr("style", "display:block;");
                            $("#productdiv").attr("style", "display:none;");
                            digitalData.category.pageType = "Video";
                            digitalData.category.siteSection = "Video";
                        }

                        document.getElementById("productname").innerHTML = localStorage.getItem('product1name');

                        if(localStorage.getItem('product1price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product1price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product1price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }

                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product1description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product1image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product1image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product1image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product1image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product1image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product1image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product1image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product1image2'));

                        break;
                      case 2:
                        document.title = localStorage.getItem('product2name');
                        digitalData.product.imageUrl = localStorage.getItem('product2eeimgurl');
                        digitalData.product.price = localStorage.getItem('product2price');
                        digitalData.product.category = localStorage.getItem('product2category');
                        digitalData.product.categoryL1 = localStorage.getItem('product2CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product2CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product2CatL3');
                        digitalData.product.name = localStorage.getItem('product2name');
                        digitalData.product.sku = localStorage.getItem('product2sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        
                        if(localStorage.getItem('product2isArticle') == "true"){
                            digitalData.category.pageType = "Article";
                            digitalData.category.siteSection = "Article";
                        }
                        if(localStorage.getItem('product2isVideo') == "true"){
                            $("#videodiv").attr("style", "display:block;");
                            $("#productdiv").attr("style", "display:none;");
                            digitalData.category.pageType = "Video";
                            digitalData.category.siteSection = "Video";
                        }

                        document.getElementById("productname").innerHTML = localStorage.getItem('product2name');
                        
                        if(localStorage.getItem('product2price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product2price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product2price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }

                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product2description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product2image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product2image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product2image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product2image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product2image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product2image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product2image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product2image2'));
                        
                        break;
                      case 3:
                        document.title = localStorage.getItem('product3name');
                        digitalData.product.imageUrl = localStorage.getItem('product3eeimgurl');
                        digitalData.product.price = localStorage.getItem('product3price');
                        digitalData.product.category = localStorage.getItem('product3category');
                        digitalData.product.categoryL1 = localStorage.getItem('product3CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product3CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product3CatL3');
                        digitalData.product.name = localStorage.getItem('product3name');
                        digitalData.product.sku = localStorage.getItem('product3sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;

                        if(localStorage.getItem('product3isArticle') == "true"){
                            digitalData.category.pageType = "Article";
                            digitalData.category.siteSection = "Article";
                        }
                        if(localStorage.getItem('product3isVideo') == "true"){
                            $("#videodiv").attr("style", "display:block;");
                            $("#productdiv").attr("style", "display:none;");
                            digitalData.category.pageType = "Video";
                            digitalData.category.siteSection = "Video";
                        }

                        document.getElementById("productname").innerHTML = localStorage.getItem('product3name');
                        
                        if(localStorage.getItem('product3price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product3price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product3price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }
                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product3description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product3image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product3image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product3image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product3image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product3image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product3image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product3image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product3image2'));
                        
                        break;
                      case 4:
                        document.title = localStorage.getItem('product4name');
                        digitalData.product.imageUrl = localStorage.getItem('product4eeimgurl');
                        digitalData.product.price = localStorage.getItem('product4price');
                        digitalData.product.category = localStorage.getItem('product4category');
                        digitalData.product.categoryL1 = localStorage.getItem('product4CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product4CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product4CatL3');
                        digitalData.product.name = localStorage.getItem('product4name');
                        digitalData.product.sku = localStorage.getItem('product4sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;

                        if(localStorage.getItem('product4isArticle') == "true"){
                            digitalData.category.pageType = "Article";
                            digitalData.category.siteSection = "Article";
                        }
                        if(localStorage.getItem('product4isVideo') == "true"){
                            $("#videodiv").attr("style", "display:block;");
                            $("#productdiv").attr("style", "display:none;");
                            digitalData.category.pageType = "Video";
                            digitalData.category.siteSection = "Video";
                        }

                        document.getElementById("productname").innerHTML = localStorage.getItem('product4name');
                        
                        if(localStorage.getItem('product4price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product4price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product4price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }
                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product4description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product4image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product4image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product4image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product4image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product4image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product4image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product4image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product4image2'));
                        
                        break;
                      case 5:
                        document.title = localStorage.getItem('product5name');
                        digitalData.product.imageUrl = localStorage.getItem('product5eeimgurl');
                        digitalData.product.price = localStorage.getItem('product5price');
                        digitalData.product.category = localStorage.getItem('product5category');
                        digitalData.product.categoryL1 = localStorage.getItem('product5CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product5CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product5CatL3');
                        digitalData.product.name = localStorage.getItem('product5name');
                        digitalData.product.sku = localStorage.getItem('product5sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;

                        if(localStorage.getItem('product5isArticle') == "true"){
                            digitalData.category.pageType = "Article";
                            digitalData.category.siteSection = "Article";
                        }
                        if(localStorage.getItem('product5isVideo') == "true"){
                            $("#videodiv").attr("style", "display:block;");
                            $("#productdiv").attr("style", "display:none;");
                            digitalData.category.pageType = "Video";
                            digitalData.category.siteSection = "Video";
                        }

                        document.getElementById("productname").innerHTML = localStorage.getItem('product5name');
                        
                        if(localStorage.getItem('product5price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product5price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product5price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }
                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product5description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product5image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product5image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product5image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product5image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product5image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product5image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product5image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product5image2'));
                        
                        break;
                      case 6:
                        document.title = localStorage.getItem('product6name');
                        digitalData.product.imageUrl = localStorage.getItem('product6eeimgurl');
                        digitalData.product.price = localStorage.getItem('product6price');
                        digitalData.product.category = localStorage.getItem('product6category');
                        digitalData.product.categoryL1 = localStorage.getItem('product6CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product6CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product6CatL3');
                        digitalData.product.name = localStorage.getItem('product6name');
                        digitalData.product.sku = localStorage.getItem('product6sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        document.getElementById("productname").innerHTML = localStorage.getItem('product6name');
                        
                        if(localStorage.getItem('product6price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product6price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product6price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }
                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product6description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product6image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product6image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product6image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product6image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product6image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product6image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product6image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product6image2'));
                        
                        break;
                      case 7:
                        document.title = localStorage.getItem('product7name');
                        digitalData.product.imageUrl = localStorage.getItem('product7eeimgurl');
                        digitalData.product.price = localStorage.getItem('product7price');
                        digitalData.product.category = localStorage.getItem('product7category');
                        digitalData.product.categoryL1 = localStorage.getItem('product7CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product7CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product7CatL3');
                        digitalData.product.name = localStorage.getItem('product7name');
                        digitalData.product.sku = localStorage.getItem('product7sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        document.getElementById("productname").innerHTML = localStorage.getItem('product7name');
                        
                        if(localStorage.getItem('product7price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product7price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product7price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }
                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product7description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product7image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product7image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product7image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product7image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product7image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product7image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product7image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product7image2'));
                        
                        break;
                      case 8:
                        document.title = localStorage.getItem('product8name');
                        digitalData.product.imageUrl = localStorage.getItem('product8eeimgurl');
                        digitalData.product.price = localStorage.getItem('product8price');
                        digitalData.product.category = localStorage.getItem('product8category');
                        digitalData.product.categoryL1 = localStorage.getItem('product8CatL1');
                        digitalData.product.categoryL2 = localStorage.getItem('product8CatL2');
                        digitalData.product.categoryL3 = localStorage.getItem('product8CatL3');
                        digitalData.product.name = localStorage.getItem('product8name');
                        digitalData.product.sku = localStorage.getItem('product8sku');
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        document.getElementById("productname").innerHTML = localStorage.getItem('product8name');
                        
                        if(localStorage.getItem('product8price') == 0){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else if(localStorage.getItem('product8price') == "null"){
                            document.getElementById("productprice").innerHTML = "";
                            $("#addtocartbutton").attr("style", "display:none;");
                        }else{
                            document.getElementById("productprice").innerHTML = localStorage.getItem('brandcurrency') + " " + localStorage.getItem('product8price');
                            $("#addtocartbutton").attr("style", "display:block;");
                        }
                        document.getElementById("productdescription").innerHTML = localStorage.getItem('product8description');
                        if(digitalData.product.sku !== "undefined"){
                            document.getElementById("productsku").innerHTML = "SKU: " + digitalData.product.sku;
                        }
                        $("#primaryimg1").attr("src", localStorage.getItem('product8image1'));
                        $("#primaryimg1").attr("data-zoom-image", localStorage.getItem('product8image1'));
                        $("#galleryimg1").attr("data-image", localStorage.getItem('product8image1'));
                        $("#galleryimg1").attr("data-zoom-image", localStorage.getItem('product8image1'));
                        $("#galleryrealimg1").attr("src", localStorage.getItem('product8image1'));
                        $("#galleryimg2").attr("data-image", localStorage.getItem('product8image2'));
                        $("#galleryimg2").attr("data-zoom-image", localStorage.getItem('product8image2'));
                        $("#galleryrealimg2").attr("src", localStorage.getItem('product8image2'));
                        
                        break;
                    }
                }

                //************************************************
                //Displaying Custom Page Info on Custom Pages
                //************************************************
                if(digitalData.page.custompage === true){
                    console.log(">>>>> Custom page detected.")
                    switch (digitalData.page.custompagenumber) {
                      case 1:
                        document.title = localStorage.getItem('page1title');
                        digitalData.product.imageUrl = localStorage.getItem('page1heroimage');
                        digitalData.product.price = "0";
                        digitalData.product.category = "Custom";
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        digitalData.product.sku = "undefined";
                        digitalData.product.name = localStorage.getItem('page1title');
                        digitalData.page.pageName = localStorage.getItem('page1title');
                        $("#custompageimage").attr("src", localStorage.getItem('page1heroimage'));

                        break;
                      case 2:
                        document.title = localStorage.getItem('page2title');
                        digitalData.product.imageUrl = localStorage.getItem('page2heroimage');
                        digitalData.product.price = "0";
                        digitalData.product.category = "Custom";
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        digitalData.product.sku = "undefined";
                        digitalData.page.pageName = localStorage.getItem('page2title');
                        digitalData.product.name = localStorage.getItem('page2title');
                        $("#custompageimage").attr("src", localStorage.getItem('page2heroimage'));
                        
                        break;
                      case 3:
                        document.title = localStorage.getItem('page3title');
                        digitalData.product.imageUrl = localStorage.getItem('page3heroimage');
                        digitalData.product.price = "0";
                        digitalData.product.category = "Custom";
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        digitalData.product.sku = "undefined";
                        digitalData.page.pageName = localStorage.getItem('page3title');
                        digitalData.product.name = localStorage.getItem('page3title');
                        $("#custompageimage").attr("src", localStorage.getItem('page3heroimage'));
                        
                        break;
                      case 4:
                        document.title = localStorage.getItem('page4title');
                        digitalData.product.imageUrl = localStorage.getItem('page4heroimage');
                        digitalData.product.price = "0";
                        digitalData.product.category = "Custom";
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        digitalData.product.sku = "undefined";
                        digitalData.page.pageName = localStorage.getItem('page4title');
                        digitalData.product.name = localStorage.getItem('page4title');
                        $("#custompageimage").attr("src", localStorage.getItem('page4heroimage'));
                        
                        break;
                      case 5:
                        document.title = localStorage.getItem('page5title');
                        digitalData.product.imageUrl = localStorage.getItem('page5heroimage');
                        digitalData.product.price = "0";
                        digitalData.product.category = "Custom";
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        digitalData.product.sku = "undefined";
                        digitalData.page.pageName = localStorage.getItem('page5title');
                        digitalData.product.name = localStorage.getItem('page5title');
                        $("#custompageimage").attr("src", localStorage.getItem('page5heroimage'));
                        
                        break;
                        case 6:
                        document.title = localStorage.getItem('page6title');
                        digitalData.product.imageUrl = localStorage.getItem('page6heroimage');
                        digitalData.product.price = "0";
                        digitalData.product.category = "Custom";
                        digitalData.product.interaction = "productView";
                        digitalData.product.quantity = 1;
                        digitalData.product.sku = "CXL";
                        digitalData.page.pageName = localStorage.getItem('page6title');
                        digitalData.product.name = localStorage.getItem('page6title');
                        $("#custompageimage").attr("src", localStorage.getItem('page6heroimage'));
                        
                        break;
                    }
                }

                //*******************************************
                //Displaying Register Page Custom Attributes 
                //*******************************************
                if(digitalData.page.registerpage === true){
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
                }

                //*******************************************
                //Displaying Media Page values on homepage
                //*******************************************
                if(digitalData.page.mediapage === true){
                    console.log(">>>>> Mediapage detected.");
                    document.title = localStorage.getItem('pageDMPtitle');
                    $("#newssite").attr("src", localStorage.getItem('pageDMPiframe'));
                    $("#displayad").attr("src", localStorage.getItem('displayad1imgurl'));
                }

                //*******************************************
                //Displaying Cart values on Cart page
                //*******************************************
                if(digitalData.page.cart === true){
                    console.log(">>>>> Cart page detected.");

                    if(localStorage.getItem("cart") !== null || localStorage.getItem("cart") !== "undefined"){
                        $("#purchaseButton").attr("disabled", false);
                        cart = JSON.parse(localStorage.getItem("cart"));
                        var count = 0;
                        var cartString = "";
                        var totalAmount = 0;
                        var subTotal = 0;
                        for (var i in cart) {
                            count += cart[i].productQty; 

                            str = "<tr>" 
                            + "<td data-title='Product' class='col_product text-left'>"
                            + "<div class='image visible-lg'>"
                            + "<a href='" + cart[i].productUrl + "'>"
                            + "<img style='max-height:60px;max-width:60px;' src='" + cart[i].productImageUrl + "'>"
                            + "</a></div><h5><a href='" + cart[i].productUrl + "'>" + cart[i].productName + "</a></h5></td>"
                            + "<td data-title='Qty' class='col_qty text-right'>"
                            + "<span class='single-price'>" + cart[i].productQty + "</span>"
                            + "<td data-title='Single' class='col_single text-right'>"
                            + "<span class='single-price'>" + cart[i].productPrice + "</span></td>"
                            + "<td data-title='Total' class='col_total text-right'>"
                            + "<span class='total-price'>" + (cart[i].productQty * cart[i].productPrice) + "</span></td>";

                            cartString += str;

                            subTotal += (cart[i].productQty * cart[i].productPrice);
                        }
                        
                        totalAmount = (subTotal + 5);


                        if(count !== "0"){
                            $("#purchaseButton").attr("disabled", true);
                        }

                        console.log("Cart exists - " + count + " items in cart.");
                        if(count > 0){
                            $("#cartqty").text(count);
                            $("#carticonqty").attr("style", "display:block;");
                            $("#purchaseButton").attr("disabled", false);
                            cartTable.innerHTML = cartString;

                            var total = totalAmount.toFixed(2);
                            $("#subTotal").text(subTotal);
                            $("#total").text(total);
                        }
                    }
                }

                //*******************************************
                //Displaying POS values on POS page
                //*******************************************
                if(digitalData.page.pos === true){
                    console.log(">>>>> POS page detected.");

                localStorage.setItem("loyaltyCardScanned", "N");
                localStorage.setItem("customerAllergyDairy", "N");
                localStorage.setItem("customerAllergyGluten", "N");
                localStorage.setItem("customerAllergyShellfish", "N");
                localStorage.setItem("customerAllergyNuts", "N");
            

                    for (i = 1; i < localStorage.getItem("brandNumberProducts")+1; i++) {
                        if(localStorage.getItem("product" + i + "active")){
                            switch(i) {
                              case 1:
                                product1.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 2:
                                product2.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 3:
                                product3.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 4:
                                product4.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 5:
                                product5.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 6:
                                product6.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 7:
                                product7.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                              case 8:
                                product8.innerHTML = localStorage.getItem("product"+i+"name");
                                break;
                            }
                            
                        }     
                    }

                    if(localStorage.getItem("cartPOS") !== null || localStorage.getItem("cartPOS") !== "undefined"){
                        $("#purchaseButton").attr("disabled", false);
                        cartPOS = JSON.parse(localStorage.getItem("cartPOS"));
                        var count = 0;
                        var cartString = "";
                        var totalPOSAmount = 0;
                        var subTotal = 0;
                        for (var i in cartPOS) {
                            count += cartPOS[i].productQty; 

                            str = "<tr>" 
                                + "<td data-title='Product' class='col_product text-left'>"
                                + "<div class='image visible-lg'>"
                                + "<a href='" + cartPOS[i].productUrl + "'>"
                                + "<img style='max-height:60px;max-width:60px;' src='" + cartPOS[i].productImageUrl + "'>"
                                + "</a></div><h5><a href='" + cartPOS[i].productUrl + "'>" + cartPOS[i].productName + "</a></h5></td>"
                                + "<td data-title='Qty' class='col_qty text-right'>"
                                + "<span class='single-price'>" + cartPOS[i].productQty + "</span>"
                                + "<td data-title='Single' class='col_single text-right'>"
                                + "<span class='single-price'>" + cartPOS[i].productPrice + "</span></td>"
                                + "<td data-title='Total' class='col_total text-right'>"
                                + "<span class='total-price'>" + (cartPOS[i].productQty * cartPOS[i].productPrice) + "</span></td>";

                            cartString += str;

                            subTotal += (cartPOS[i].productQty * cartPOS[i].productPrice);
                        }

                        totalPOSAmount += subTotal;


                        if(count > 0){
                            $("#purchaseButton").attr("disabled", false);
                            cartPOSTable.innerHTML = cartString;

                            var total = totalPOSAmount.toFixed(2);
                            $("#subTotal").text(subTotal);
                            $("#totalPOS").text(totalPOSAmount);
                        }
                    }               
                }

                //**********************************************
                //Displaying order information on Purchase page
                //**********************************************
                if(digitalData.page.purchase === true){
                    console.log(">>>>> Purchase page detected.");

                    if(localStorage.getItem("orderId") !== null){
                        $("#orderId").text(localStorage.getItem("orderId"));
                        if(localStorage.getItem("deliveryType") == "homeaddress"){
                            $("#deliveryType").text("your Home Address.");
                        }else{
                            $("#deliveryType").text("your preferred Store.");
                        }
                    }
                }

                //**********************************************
                // Call Center & Shopper Dashboard Page
                //**********************************************
                if(digitalData.page.dashboardpage === true){
                    console.log(">>>>> Dashboard page detected.");

                    $("#brandlogo").attr("src", localStorage.getItem('brandlogo'));
                    $("#faviconlink").attr("href", localStorage.getItem('faviconlink'));
                    $("#gohome").attr("href", "index.html");

                    if(localStorage.getItem("brandusecustomprofileattributes") === "yes"){
                        if(localStorage.getItem("brandindustry") === "retail"){
                            $("#retailshoesize").attr("hidden", false);
                            $("#retailshirtsize").attr("hidden", false);
                            $("#retailpreferredcolor").attr("hidden", false);
                        }else{
                            $("#retailshoesize").attr("hidden", true);
                            $("#retailshirtsize").attr("hidden", true);
                            $("#retailpreferredcolor").attr("hidden", true);
                        }
                        if(localStorage.getItem("brandindustry") === "fmcg"){
                            $("#allergyInformation").attr("style", "display:block;");
                        }else{
                            $("#allergyInformation").attr("style", "display:none;");
                        }
                    }
                }

                //**********************************************
                // X-Ray 
                //**********************************************
                if(digitalData.page.loadxray === true){
                    console.log(">>>>> X-Ray will be loaded on this page.");
                    setTimeout(function(){ 
                        if(localStorage.getItem("brandusecustomprofileattributes") === "yes"){
                            if(localStorage.getItem("brandindustry") === "retail"){
                                $("#platformShoeSize").attr("style", "display:block;font-weight:100;");
                                $("#platformShirtSize").attr("style", "display:block;font-weight:100;");
                                $("#platformPreferredColor").attr("style", "display:block;font-weight:100;");
                            }else{
                                $("#platformShoeSize").attr("style", "display:none;");
                                $("#platformShirtSize").attr("style", "display:none;");
                                $("#platformPreferredColor").attr("style", "display:none;");
                            }

                            if(localStorage.getItem("brandindustry") === "fmcg"){
                                $("#platformAllergyInformation").attr("style", "display:block;");
                            }else{
                                $("#platformAllergyInformation").attr("style", "display:none;");
                            }
                        }
                    }, 2000);
                }

                //*****************************************************************************************
                //Pre-populating Brand Profile values on admin page from Local Storage for editing/updating
                //*****************************************************************************************
                if(digitalData.page.adminpage === true){
                    console.log(">>>>> Adminpage detected.");

                    //Brand Settings
                    $("#brandName").attr("value", localStorage.getItem('brandname'));
                    $("#brandLogo").attr("value", localStorage.getItem('brandlogo'));
                    $("#brandFavIcon").attr("value", localStorage.getItem('faviconlink'));
                    $("#brandHeroImage").attr("value", localStorage.getItem('brandhero'));
                    $("#brandcalltoaction").attr("value", localStorage.getItem('brandcalltoaction'));
                    $("#brandcalltoactionurl").attr("value", localStorage.getItem('brandcalltoactionurl'));
                    $("#industry").attr("value", localStorage.getItem('brandindustry'));

                    if(localStorage.getItem('demosetuptype') === "fullecommerceready"){
                        $("#demosetuptype").attr("value", "fullecommerceready");
                        $("#product1").attr("style", "display:block;");
                        $("#product2").attr("style", "display:block;");
                        $("#product3").attr("style", "display:block;");
                        $("#product4").attr("style", "display:block;");
                        $("#product5").attr("style", "display:block;");
                        $("#product6").attr("style", "display:block;");
                        $("#product7").attr("style", "display:block;");
                        $("#product8").attr("style", "display:block;"); 
                    }

                    //Custom Pages 
                    if(localStorage.getItem('page1active') === "true"){
                        $("#page1Active").prop('checked', true);
                        $("#page1Title").attr("value", localStorage.getItem('page1title'));
                    }
                    if(localStorage.getItem('page2active') === "true"){
                        $("#page2Active").prop('checked', true);
                        $("#page2Title").attr("value", localStorage.getItem('page2title'));
                    }
                    if(localStorage.getItem('page3active') === "true"){
                        $("#page3Active").prop('checked', true);
                        $("#page3Title").attr("value", localStorage.getItem('page3title'));
                    }
                    if(localStorage.getItem('page4active') === "true"){
                        $("#page4Active").prop('checked', true);
                        $("#page4Title").attr("value", localStorage.getItem('page4title'));
                    }
                    if(localStorage.getItem('page5active') === "true"){
                        $("#page5Active").prop('checked', true);
                        $("#page5Title").attr("value", localStorage.getItem('page5title'));
                    }

                    //DMP Page Settings
                    if(localStorage.getItem('mediadetailsactive') === "yesmedia"){
                        $("#dmpmedia").attr("style", "display:block;");
                        $("#dmpmediawebsitepagename").attr("value", localStorage.getItem('pageDMPtitle'));
                        $("#dmpmediawebsiteurl").attr("value", localStorage.getItem('pageDMPiframe'));
                        $("#displayad1image").attr("value", localStorage.getItem('displayad1imgfilename'));
                        $("#displayad2image").attr("value", localStorage.getItem('displayad2imgfilename'));
                        $("#displayad3image").attr("value", localStorage.getItem('displayad3imgfilename'));
                        $("#displayad4image").attr("value", localStorage.getItem('displayad4imgfilename'));
                        if(localStorage.getItem('displayad1localimg') === "true"){
                            $("#localDisplayAd1Image").prop('checked', true);
                        }
                        if(localStorage.getItem('displayad2localimg') === "true"){
                            $("#localDisplayAd2Image").prop('checked', true);
                        }
                        if(localStorage.getItem('displayad3localimg') === "true"){
                            $("#localDisplayAd3Image").prop('checked', true);
                        }
                        if(localStorage.getItem('displayad4localimg') === "true"){
                            $("#localDisplayAd4Image").prop('checked', true);
                        }
                    }

                    //Solutions Used Settings
                    if(localStorage.getItem('brandUseAAM') === "true"){
                        $("#useAAM").prop('checked', true);
                    }
                    if(localStorage.getItem('brandUseAA') === "true"){
                        $("#useAA").prop('checked', true);
                    }
                    if(localStorage.getItem('brandUseAT') === "true"){
                        $("#useAT").prop('checked', true);
                    }
                    if(localStorage.getItem('brandUseAC') === "true"){
                        $("#useAC").prop('checked', true);
                    }
                    if(localStorage.getItem('brandUseMKT') === "true"){
                        $("#useMKT").prop('checked', true);
                    }
                    if(localStorage.getItem('brandUsePlatform') === "true"){
                        $("#usePlatform").prop('checked', true);
                    }

                    //Call Center and Personal Shopper Settings
                    if(localStorage.getItem('brandusecallcenter') == "true"){
                        $("#usecallcenter").attr("value", "true");
                    }
                    if(localStorage.getItem('brandusepersonalshopper') == "true"){
                        $("#usepersonalshopper").attr("value", "true");
                    }

                    //Product Settings
                        //Product 1
                        if(localStorage.getItem('product1active') == "true"){
                            $("#product1Active").prop('checked', true);
                            $("#product1Url").attr("value", localStorage.getItem('product1url'));
                            $("#product1Name").attr("value", localStorage.getItem('product1name'));
                            $("#product1Description").attr("value", localStorage.getItem('product1description'));
                            $("#product1Category").attr("value", localStorage.getItem('product1category'));
                            $("#product1Price").attr("value", localStorage.getItem('product1price'));
                            $("#product1image1Url").attr("value", localStorage.getItem('product1image1'));
                            $("#product1image2Url").attr("value", localStorage.getItem('product1image2'));
                            $("#product1EEimgurl").attr("value", localStorage.getItem('product1EEimgurl'));
                        }

                        //Product 2
                        if(localStorage.getItem('product2active') == "true"){
                            $("#product2Active").prop('checked', true);
                            $("#product2Url").attr("value", localStorage.getItem('product2url'));
                            $("#product2Name").attr("value", localStorage.getItem('product2name'));
                            $("#product2Description").attr("value", localStorage.getItem('product2description'));
                            $("#product2Category").attr("value", localStorage.getItem('product2category'));
                            $("#product2Price").attr("value", localStorage.getItem('product2price'));
                            $("#product2image1Url").attr("value", localStorage.getItem('product2image1'));
                            $("#product2image2Url").attr("value", localStorage.getItem('product2image2'));
                            $("#product2EEimgurl").attr("value", localStorage.getItem('product2EEimgurl'));
                        }

                        //Product 3
                        if(localStorage.getItem('product3active') == "true"){
                            $("#product3Active").prop('checked', true);
                            $("#product3Url").attr("value", localStorage.getItem('product3url'));
                            $("#product3Name").attr("value", localStorage.getItem('product3name'));
                            $("#product3Description").attr("value", localStorage.getItem('product3description'));
                            $("#product3Category").attr("value", localStorage.getItem('product3category'));
                            $("#product3Price").attr("value", localStorage.getItem('product3price'));
                            $("#product3image1Url").attr("value", localStorage.getItem('product3image1'));
                            $("#product3image2Url").attr("value", localStorage.getItem('product3image2'));
                            $("#product3EEimgurl").attr("value", localStorage.getItem('product3EEimgurl'));
                        }

                        //Product 4
                        if(localStorage.getItem('product4active') == "true"){
                            $("#product4Active").prop('checked', true);
                            $("#product4Url").attr("value", localStorage.getItem('product4url'));
                            $("#product4Name").attr("value", localStorage.getItem('product4name'));
                            $("#product4Description").attr("value", localStorage.getItem('product4description'));
                            $("#product4Category").attr("value", localStorage.getItem('product4category'));
                            $("#product4Price").attr("value", localStorage.getItem('product4price'));
                            $("#product4image1Url").attr("value", localStorage.getItem('product4image1'));
                            $("#product4image2Url").attr("value", localStorage.getItem('product4image2'));
                            $("#product4EEimgurl").attr("value", localStorage.getItem('product4EEimgurl'));
                        }

                        //Product 5
                        if(localStorage.getItem('product5active') == "true"){
                            $("#product5Active").prop('checked', true);
                            $("#product5Url").attr("value", localStorage.getItem('product5url'));
                            $("#product5Name").attr("value", localStorage.getItem('product5name'));
                            $("#product5Description").attr("value", localStorage.getItem('product5description'));
                            $("#product5Category").attr("value", localStorage.getItem('product5category'));
                            $("#product5Price").attr("value", localStorage.getItem('product5price'));
                            $("#product5image1Url").attr("value", localStorage.getItem('product5image1'));
                            $("#product5image2Url").attr("value", localStorage.getItem('product5image2'));
                            $("#product5EEimgurl").attr("value", localStorage.getItem('product5EEimgurl'));
                        }

                        //Product 6
                        if(localStorage.getItem('product6active') == "true"){
                            $("#product6Active").prop('checked', true);
                            $("#product6Url").attr("value", localStorage.getItem('product6url'));
                            $("#product6Name").attr("value", localStorage.getItem('product6name'));
                            $("#product6Description").attr("value", localStorage.getItem('product6description'));
                            $("#product6Category").attr("value", localStorage.getItem('product6category'));
                            $("#product6Price").attr("value", localStorage.getItem('product6price'));
                            $("#product6image1Url").attr("value", localStorage.getItem('product6image1'));
                            $("#product6image2Url").attr("value", localStorage.getItem('product6image2'));
                            $("#product6EEimgurl").attr("value", localStorage.getItem('product6EEimgurl'));
                        }

                        //Product 7
                        if(localStorage.getItem('product7active') == "true"){
                            $("#product7Active").prop('checked', true);
                            $("#product7Url").attr("value", localStorage.getItem('product7url'));
                            $("#product7Name").attr("value", localStorage.getItem('product7name'));
                            $("#product7Description").attr("value", localStorage.getItem('product7description'));
                            $("#product7Category").attr("value", localStorage.getItem('product7category'));
                            $("#product7Price").attr("value", localStorage.getItem('product7price'));
                            $("#product7image1Url").attr("value", localStorage.getItem('product7image1'));
                            $("#product7image2Url").attr("value", localStorage.getItem('product7image2'));
                            $("#product7EEimgurl").attr("value", localStorage.getItem('product7EEimgurl'));
                        }

                        //Product 8
                        if(localStorage.getItem('product8active') == "true"){
                            $("#product8Active").prop('checked', true);
                            $("#product8Url").attr("value", localStorage.getItem('product8url'));
                            $("#product8Name").attr("value", localStorage.getItem('product8name'));
                            $("#product8Description").attr("value", localStorage.getItem('product8description'));
                            $("#product8Category").attr("value", localStorage.getItem('product8category'));
                            $("#product8Price").attr("value", localStorage.getItem('product8price'));
                            $("#product8image1Url").attr("value", localStorage.getItem('product8image1'));
                            $("#product8image2Url").attr("value", localStorage.getItem('product8image2'));
                            $("#product8EEimgurl").attr("value", localStorage.getItem('product8EEimgurl'));
                        }
                    }

                console.log(">>>>> Finished Loading Brand Profile from Local Storage!");
    }else{
    	if(localStorage.getItem("redirecttoadmin") !== "success"){

            localStorage.setItem('page0title', 'Home');
            localStorage.setItem('page0url', 'index.html');
            localStorage.setItem('page0heroimage', '');
            localStorage.setItem('page0active', true);

            localStorage.setItem('page6title', '');
            localStorage.setItem('page6url', '');
            localStorage.setItem('page6heroimage', '');
            localStorage.setItem('page6active', false);

            localStorage.setItem('page7title', 'Login/Register');
            localStorage.setItem('page7url', 'login-register.html');
            localStorage.setItem('page7heroimage', '');
            localStorage.setItem('page7active', true);

            localStorage.setItem('page8title', 'Privacy');
            localStorage.setItem('page8url', 'privacy.html');
            localStorage.setItem('page8heroimage', '');
            localStorage.setItem('page8active', true);

            localStorage.setItem('page10title', 'Admin');
            localStorage.setItem('page10url', 'admin.html');
            localStorage.setItem('page10heroimage', '');
            localStorage.setItem('page10active', true);
        	
            localStorage.setItem("redirecttoadmin", "success");

            var thisPageUrl = window.location.href;

        	if(thisPageUrl.includes("admin_register.html")){
                document.location.href = "./admin_register.html";
            }else{
                document.location.href = "./admin.html";
            }

        }
    }
}
