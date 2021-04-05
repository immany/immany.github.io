clipboard = new ClipboardJS('.btCopy');
clipboard.on('success', function(e) {
    alert('Object copied!')
});

loadData().then(function(){
    buildLayout();
}).then(function(){
    $('#loader-wrapper').fadeOut();
});


function refreshNews(){
    $('#loader-wrapper').fadeIn();
    loadData(true).then(function(){
        buildLayout();
    }).then(function(){
        $('#loader-wrapper').fadeOut();
    });

}


async function loadData(force = false) {

    let news = getFeed('latestNews');
    let sports = getFeed('sportsFeed')
    let Entertainment = getFeed('entertainmentNews');
    let tech = getFeed('techFeed')
}

async function loadVideo(qry, ls, qty) {
    let video = await getVideos(qry, ls, qty)
}


function getFeed(storageName) {
    return localStorage.getItem(storageName);
}

function buildLayout(){

    // Latest News
    let latestNews = JSON.parse(localStorage.getItem('latestNews'))
    let limitLN = 4;
    $(latestNews.items).each(function(index, item){
        if(index == 0){
            $('#main-news').html('<div><a style="text-decoration: none; color: inherit;" href="article-single.html?article='+beautifyURL(item.title)+'&cat=news"><h2>'+item.title+'</h2><div class="feature-image"><p class="resume">'+removeBrands(item.description)+'</p> <img style="width: 100%" src="'+returnImage(item)+'"></div></a></div>')
        }else if(limitLN > 0 && index != 0 && returnImage(item) != ""){
            $('#latest-news').append('<div class="col-lg-3"> <div class="card"> <img class="card-img-top" width="100%" src="'+returnImage(item)+'"> <div class="card-body"> <h5 class="card-title">'+item.title+'</h5> <p class="card-text">'+removeBrands(item.description)+'</p><a href="article-single.html?article='+beautifyURL(item.title)+'&cat=news" class="btn btn-primary">Read</a> </div></div></div>')
            limitLN--;
        }
    })

    // Secondary News
    let entertainmentNews = JSON.parse(localStorage.getItem('entertainmentNews'))
    let limitEN = 4;
    $(entertainmentNews.items).each(function(index, item){
        if(limitEN > 0){
            $('#entretainement-news div.swiper-wrapper').append('<div class="swiper-slide"><div style="max-height: 200px; overflow: hidden"><img width="100%" src="'+returnImage(item)+'"></div><div><h5 class="title">'+item.title+'</h5><p>'+removeBrands(item.description)+'</p> <a class="btn btn-outline-light" href="article-single.html?article='+beautifyURL(item.title)+'&cat=entertainment" role="button">Read</a></div></div>')
            limitEN--;
        }
    })

    var secondaryNews = new Swiper('.swiper-container#entretainement-news', 
        {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                progressbarFillClass: 'custom-progressbar-fill'
            },
            autoplay: {
                delay: 10000
            },
            effect: 'fade', 
            fadeEffect: {
                crossFade: true
            },
            
        })
    

    // Sports
    let sportsFeed = JSON.parse(localStorage.getItem('sportsFeed'))
    let limitSN = 4;
    let pushedItems = [];

    while(limitSN > 0){
        let index = getRndInteger(0, sportsFeed.items.length-1);
        let item = sportsFeed.items[index]

        if(limitSN > 0 && returnImage(item) != "" && !pushedItems.includes(index)){
            $('#sports-feed').append('<li class="media"><a href="article-single.html?article='+beautifyURL(item.title)+'&cat=sports"><img width="100" src="'+returnImage(item)+'" class="mr-3" alt="'+item.title+'"> <div class="media-body"> <h5 class="mt-0 mb-1">'+item.title+'</h5></a></div></li>');
            pushedItems.push(index);
            limitSN-- ;
        }
    }

    

    // Tech
    let techFeed = JSON.parse(localStorage.getItem('techFeed'))
    let limitTF = 4;
    let pushedItems2 = [];

    while(limitTF > 0){
        let index = Math.floor(Math.random() * (techFeed.items.length - 0)) + 0;
        let item = techFeed.items[index]

        if(limitTF > 0 && item.thumbnail != "" && !pushedItems2.includes(index)){
            $('#tech-feed').append('<li class="media"><a href="article-single.html?article='+beautifyURL(item.title)+'&cat=tech"><img width="100" src="'+returnImage(item)+'" class="mr-3" alt="'+item.title+'"> <div class="media-body"><h5 class="mt-0 mb-1">'+item.title+'</h5></a></div></li>');
            pushedItems2.push(index);
            limitTF-- ;
        }
    }

}


function loadArticle(title, category) {
    let data = localStorage.getItem(newsDatabase[category]);
    if(data == null){
        alert('Not data available for this category')
    }else{
        data = JSON.parse(data).items;
        let article = getContent(data, title);
        if(article.length > 0){
            return article[0]
        }else{
            return { "title": "Not Found", "description": "Content not found" }
        }
    }
}


function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}

function removeBrands(content){
    return content.replace(/(<([^>]+)>)/ig,"");
}


function beautifyURL(url) {
    return url.toString()               // Convert to string
        .normalize('NFD')               // Change diacritics
        .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
        .replace(/\s+/g,'-')            // Change whitespace to dashes
        .toLowerCase()                  // Change to lowercase
        .replace(/&/g,'-and-')          // Replace ampersand
        .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
        .replace(/-+/g,'-')             // Remove duplicate dashes
        .replace(/^-*/,'')              // Remove starting dashes
        .replace(/-*$/,'');             // Remove trailing dashes
}

function returnImage(obj){

    let preferedImage = 0;
    let img = undefined;

    if(obj.media != undefined){
        if(obj.media.group != undefined){
            var groupImg = obj.media.group['media:content'];
            img = groupImg[0].url[0];
        }
        else if(obj.media.content != undefined){
            
            preferedImage = obj.media.content.length-1;
            img = obj.media.content[preferedImage].url[0];

        }else if(obj.media.thumbnail != undefined) {
            img = obj.media.thumbnail[0].url[0]
        }else{
            img = "https://www.ledr.com/colours/grey.jpg";
        }
    }else{

        img = "https://www.ledr.com/colours/grey.jpg";

    }

    return img;

}


function getContent(data, title) {
    return data.filter(
        function(data){ 
            return beautifyURL(data.title) == title
        }
    );
}


function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
  
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
  
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
  };



  function getVideos(query, storageName,  limit = 10, force = false) {

    if(localStorage.getItem(storageName) == null || force == true){
        return new Promise((resolve, reject) => {
            $.ajax({ 
                method: 'GET', 
                url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults='+limit+'&q='+query+'&type=video&key='+apiKey,
                success: function(data){
                    localStorage.setItem(storageName, JSON.stringify(data))
                    resolve(data)
                }, 
                error: reject
            });
        });
    }else{
        return localStorage.getItem(storageName);
    }
}


function validateFormOnSubmit() {
    localStorage.setItem('firstname', document.getElementById("firstname").value);
    localStorage.setItem('lastname', document.getElementById("lastname").value);
    localStorage.setItem('email', document.getElementById("login_email").value);

    var thisEmail = document.getElementById("login_email").value;
    var bitArray = sjcl.hash.sha256.hash(thisEmail);  
    var thisEmail_sha256 = sjcl.codec.hex.fromBits(bitArray); 
    console.log(">>>>> SHA256 Encrypted Email: " + thisEmail_sha256);
    localStorage.setItem('emailSha256', thisEmail_sha256);

    localStorage.setItem('password', document.getElementById("login_password").value);
    localStorage.setItem('loggedin', "Yes");
    localStorage.setItem('gender', document.getElementById("gender").value);
    localStorage.setItem('birthday', document.getElementById("birthday").value);
    localStorage.setItem('birthmonth', document.getElementById("birthmonth").value);
    localStorage.setItem('birthyear', document.getElementById("birthyear").value);
    localStorage.setItem('street', document.getElementById("street").value);
    localStorage.setItem('city', document.getElementById("city").value);
    localStorage.setItem('postalcode', document.getElementById("postalcode").value);
    localStorage.setItem('countryname', document.getElementById("countryname").value);
    localStorage.setItem('pictureurl', document.getElementById("pictureurl").value);
    localStorage.setItem('mobilenr', document.getElementById("mobilenr").value);
    localStorage.setItem('shoesize', document.getElementById("shoesize").value);
    localStorage.setItem('shirtsize', document.getElementById("shirtsize").value);
    localStorage.setItem('preferredcolor', document.getElementById("preferredcolor").value);
    localStorage.setItem('loyaltylevel', 'Bronze');
    localStorage.setItem('loyaltypoints', '0');
    localStorage.setItem('churnscore', '0.00');
    
    if(document.getElementById('allergy_nuts').checked){
        localStorage.setItem('allergy_nuts', 'Y');
    }else{
        localStorage.setItem('allergy_nuts', 'N');
    }
    if(document.getElementById('allergy_gluten').checked){
        localStorage.setItem('allergy_gluten', 'Y');
    }else{
        localStorage.setItem('allergy_gluten', 'N');
    }
    if(document.getElementById('allergy_soy').checked){
        localStorage.setItem('allergy_soy', 'Y');
    }else{
        localStorage.setItem('allergy_soy', 'N');
    }
    if(document.getElementById('allergy_shellfish').checked){
        localStorage.setItem('allergy_shellfish', 'Y');
    }else{
        localStorage.setItem('allergy_shellfish', 'N');
    }
    if(document.getElementById('allergy_dairy').checked){
        localStorage.setItem('allergy_dairy', 'Y');
    }else{
        localStorage.setItem('allergy_dairy', 'N');
    }


    if(document.getElementById('optin_dm').checked){
        localStorage.setItem('optin_dm', 'in');
    }else{
        localStorage.setItem('optin_dm', 'out');
    }
    if(document.getElementById('optin_phone').checked){
        localStorage.setItem('optin_phone', 'in');
    }else{
        localStorage.setItem('optin_phone', 'out');
    }
    if(document.getElementById('optin_sms').checked){
        localStorage.setItem('optin_sms', 'in');
    }else{
        localStorage.setItem('optin_sms', 'out');
    }
    if(document.getElementById('optin_email').checked){
        localStorage.setItem('optin_email', 'in');
    }else{
        localStorage.setItem('optin_email', 'out');
    }
    createUserPw();
    _satellite.track('createaccount');
    $("#accountcreationstatus").text("SUCCESS! Your account has been created. You will be redirected to the homepage in 3 seconds.");
    setTimeout(function(){document.location.href = "./index.html";}, 3000);
}

function reLogin(){
    localStorage.setItem('reloggedin', "Yes");
    localStorage.setItem('email', document.getElementById("relogin_email").value);
    localStorage.setItem('password', document.getElementById("relogin_password").value);
}



function loadArticlePersonalizations(){ 

    let title = getUrlParameter('article');
    let category = getUrlParameter('cat')
    let single = loadArticle(title, category);
    
    document.title = single.title + ' - ' + localStorage.getItem('brandname')   


    digitalData.media.mediaId = title;
    digitalData.media.mediaName = single.title;
    digitalData.media.image = returnImage(single) || "";

    if(single.category != undefined && single.category.length > 0){
        let categoryQty = single.category.length;
        
        for(var c = 0; c<categoryQty; c++)
            $('#article-cat').append('<span class="badge badge-secondary">'+ single.category[c]._+'</span>');

        
        let cat1 = getRndInteger(0, categoryQty);
        let cat2 = getRndInteger(0, categoryQty);

        while(cat1 == cat2){
            cat2 = getRndInteger(0, categoryQty);
        };
        
        digitalData.media.categoryL1 = catTitle[category];
        digitalData.media.categoryL2 = single.category[0] ? single.category[cat1]._ : "Demo";
        digitalData.media.categoryL3 = single.category[1] ? single.category[cat2]._ : localStorage.getItem("brandname");

    }else{
        digitalData.media.categoryL1 = catTitle[category];
        digitalData.media.categoryL2 = "Demo";
        digitalData.media.categoryL3 = localStorage.getItem("brandname");
    }

    $('#article-cat').prepend('<span class="badge badge-secondary">'+catTitle[category]+'</span>');


    $('#article-title').html(single.title)
    document.title = single.title + ' - ' + catTitle[category];
    $('#article-content').html(single.description) 
    $('#article-content').append("<img src='"+returnImage(single)+"' class='custom-image'>"); 


    loadVideo(single.title, title, 2).then(function(){ 
        let topVideos = JSON.parse(localStorage.getItem(title)).items;
        if(topVideos.length > 0){

            let videoName = topVideos[0].snippet.title
            let videoId = topVideos[0].id.videoId

            digitalData.video.id = videoId
            digitalData.video.name = videoName

            createYT(videoId)
        }
    })
}