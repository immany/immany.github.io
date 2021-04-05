
            var login_params=
            {
            version: 2
            ,showTermsLink: 'false'
            ,height: 100
            ,width: 200
            ,containerID: 'componentDiv'
            ,autoDetectUserProviders: 'facebook'
            ,callback: onLogin
            ,facepilePosition: 'none'
            }

            function onLogin(response)
            {
                // verify the signature ... 
                console.log("onLogin triggered")
                console.log(response);
            }

            // onlogin listener
            function manageGigyaLogin(eventObj) {

            gigya.socialize.getUserInfo({
            callback: onUserInfoHandler,
            extraFields: "likes,religion,hometown,relationshipStatus"
            });

            }
			
			var user_gigya;
			function notifyGigyaLogin(user){
				user_gigya = user;
				console.log(user_gigya);
			}

            function onUserInfoHandler(eventObj) {
                //notifyGigyaLogin(eventObj.user);
                parent.notifyGigyaLogin(eventObj.user);
                console.log("onLogin triggered")
                console.log(response);
                

            }
            // declares the onlogin event listener
            gigya.socialize.addEventHandlers({
                onLogin:manageGigyaLogin
               }
            );