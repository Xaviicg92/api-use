(function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  window.fbAsyncInit = function () {
    FB.init({
      appId: 828200545756072,
      xfbml: true,
      version: "v18.0",
    });
  };

  function statusChangeCallback(response) {
    // Called with the results from FB.getLoginStatus().
    console.log(response); // The current login status of the person.
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
      console.log("conectado")
      document.getElementById("button").disabled = false;
      //testAPI();
    } else {
      // Not logged into your webpage or we are unable to tell.
      document.getElementById("status").innerHTML =
        "Please log " + "into this webpage.";
    }
  }

  function checkLoginState() {
    // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) {
      // See the onlogin handler
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: "public_profile,user_friends" });
  }

  function addPermisions() {
    FB.login(
      function (response) {
        console.log(response);
        if (response.status === 'connected') {
          getFollowers();
        } else {
          console.log(
            "El usuario canceló el inicio de sesión o no autorizó la aplicación."
          );
        }
      },
      { scope: "public_profile,user_friends" }
    ); // Aquí se solicitan los permisos necesarios
  }

