// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     document.getElementById('div1').style.display = 'block';
//     document.getElementById('div2').style.display = 'none';
//   } else {
//     // No user is signed in.
//     document.getElementById('div2').style.display = 'show';
//   }
// });
function register() {
	// body...
	window.alert("hello");
	var name = document.getElementById("fullname").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	var confpassword = document.getElementById("confpassword").value;
	var mobnumber = document.getElementById("mobnumber").value;
	var city = document.getElementById("city").value;
	firebase.auth().createUserWithEmailAndPassword(email , pass).then(
	function(user){
		alert("Registration successful");
	}
	).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert(errorMessage);
  // ...
});
}

function login(){
	var name = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	firebase.auth().signInWithEmailAndPassword(name,password).then(
		function(user){
			alert("Login successful");
		}
		).catch(function(error){
			var errorCode = error.code;
  			var errorMessage = error.message;

  			window.alert(errorMessage);
		});
}

function addshop(){
	var dr = firebase.database().ref().child("Shop info");
	
	var shopn = document.getElementById("shopname").value;
	var own = document.getElementById("ownername").value;
	var mn = document.getElementById("mobilenumber").value;
	var se = document.getElementById("shopemail").value;
	var sa = document.getElementById("shopaddress").value;
	var abs = document.getElementById("aboutshop").value;
	
	dr.child(shopn).child("Owner's Name").set(own);
	dr.child(shopn).child("Mobile number").set(mn);
	dr.child(shopn).child("Shop's Email").set(se);
	dr.child(shopn).child("Shop's address").set(sa);
	dr.child(shopn).child("About the Shop").set(abs);

	window.alert("shop added succesfully");
}

function addproduct(){

	var cat = document.getElementById("category1");
	 if (cat.value=="none") {
		window.alert("pls select valid category");
	  }
	  var s = document.getElementById("size1");
	  if (s.value=="none") {
		window.alert("pls select valid size");
	 }

	var dr1 = firebase.database().ref().child("Product's info");
	var storage = firebase.app().storage("gs://technofashion-1f28a.appspot.com");
 
	var storage = firebase.storage();

	const refs = firebase.storage().ref();
	var ref = refs.child('images');
	
		const file = document.querySelector('#photo').files[0];
		const nam = (+new Date()) + '-' + file.nam;
		const metadata = { contentType: file.type };
		const task = ref.child(nam).put(file, metadata);
		
		task.then((snapshot) => {	
			$('#pic').attr("src",snapshot.downloadURL);
		});

	var shon = document.getElementById("shopname").value;	
	var pron = document.getElementById("productname").value;
	var ct1 = document.getElementById("category1").value;
	var sz1 = document.getElementById("size1").value;
	var pc = document.getElementById("productcolour").value;
	var rs = document.getElementById("mrp").value;
	var abp = document.getElementById("aboutproduct").value;
	
	dr1.child(pron).child("Shopname").set(shon);
	dr1.child(pron).child("Category").set(ct1);
	dr1.child(pron).child("Size").set(sz1);
	dr1.child(pron).child("Product's colour").set(pc);
	dr1.child(pron).child("Price").set(rs);
	dr1.child(pron).child("About the Product").set(abp);

	window.alert("Item added Succesfully");
}
	function display()		
	{
		var database = firebase.database().ref().child("Product's info");
		database.child("shirt").on("value",snap => {
				var shop = snap.child('Shopname').val();
				    $("#s1").html("<b>"+shop+"</b>");
				   });
		database.child("shirt").on("value",snap => {
				var shop = snap.child('Category').val();
				    $("#s2").html("<b>"+shop+"</b>");
				   });
		database.child("shirt").on("value",snap => {
				var shop = snap.child("Product's colour").val();
				    $("#s3").html("<b>Colour : "+shop+"</b>");
				   });
	}
	/* database.on("value", function(snapshot)
		{
			   var obj = snapshot.val();
			   alert(obj);  
		});
	}*/