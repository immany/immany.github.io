var PARSE_APP_ID = "hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9";
var PARSE_JS_KEY = "LgZYoUSHabVv5jjYzGTXhFoTRG7x7vw2ZE29pyPP";
var PARSE_URL = "https://parseapi.back4app.com/";

// Parse Initialize
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/'

function createUserPw() {

    $.ajax({
    url: "https://parseapi.back4app.com/users",
    dataType: "json",
    type: "post",
    headers: {
        "X-Parse-Application-Id":"hgJBdVOS2eff03JCn6qXXOxT5jJFzialLAHJixD9",
        "X-Parse-REST-API-Key":"0vcn04DTBGlVlgoSpz9Lw5k6FbpUbn9nvIunRSOP",
        "X-Parse-Revocable-Session":"1"
    },
    data: {
        "password": localStorage.getItem('password'),
        "username": localStorage.getItem('email'),
        "email": localStorage.getItem('email'),
        "activeLDAP": localStorage.getItem('admin_ldap')
        }
    });
}