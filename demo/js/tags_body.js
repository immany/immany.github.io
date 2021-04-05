if(localStorage.getItem("brandUseGoogle") === "true"){
	console.log(">>>>> Loading Google Tag Manager Configuration in <body>...");
    dynamicallyLoadScriptTextBody();
}

function dynamicallyLoadScriptTextBody() {
    var noscript = document.createElement("noscript");
    var iframe = document.createElement("iframe");
    iframe.src = "";
    noscript.appendChild(iframe);  
    document.body.appendChild(noscript);
}