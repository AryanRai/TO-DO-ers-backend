var googlesigninbtn = document.getElementById('googlesigninbtn');
var googlesignupbtn = document.getElementById('googlesignupbtn');

var provider = new firebase.auth.GoogleAuthProvider();

googlesigninbtn.addEventListener('click', function() {googleauth()});
googlesignupbtn.addEventListener('click', function() {googleauth()});

function googleauth() {
  console.log('googleauth');
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    console.log(token);
    console.log(credential);

    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
    // ...
  });   
};

