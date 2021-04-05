//Loading Adobe Experience Platform Launch dynamically
var launchTagUrl = "";

if(localStorage.getItem("brandUseLaunch") === "true"){
	console.log(">>>>> Loading Launch Configuration...");
	dynamicallyLoadScript(launchTagUrl);
}

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
}

//Loading Google Tag Manager dynamically
var gtmTagHead = "";

if(localStorage.getItem("brandUseGoogle") === "true"){
    console.log(">>>>> Loading Google Tag Manager Configuration in <head>...");
    dynamicallyLoadScriptTextHead(gtmTagHead);
}

function dynamicallyLoadScriptTextHead(text) {
    var script = document.createElement("script");
    var inlineScript = document.createTextNode(text);
    script.appendChild(inlineScript); 
    document.head.appendChild(script);
}