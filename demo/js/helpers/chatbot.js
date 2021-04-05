$(window).on('load', function() {
    setTimeout(function() {
        $('#openChat').show();
    }, 5000);

    $('#openChat').click(function() {
        console.log("[openChat]");
        $(this).hide();
        openChat();
    });

    $('#closeChat').click(function() {
        console.log("[closeChat]");
        closeChat();
        $('#openChat').show();
    });
});

function openChat() {
    var webBot = $("#chatForm").find("iframe").attr("src");
    if (webBot != "webbot.html") {
        $("#chatForm").find("iframe").attr("src", "../webbot.html");
    }

    document.getElementById("chatForm").style.display = "block";
}

function closeChat() {
    document.getElementById("chatForm").style.display = "none";
}