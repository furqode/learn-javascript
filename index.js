var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"a
	}
];
var userNameprompt =  prompt("Enter your username: ");
var passprompt =  prompt("Enter your password: ");
function signIn(user, pass) {
	if ( user === database[0].username &&
		pass === database[0].password )
	{
		console.log(newsfeed);
	} else {
		alert("Incorrect username or password.")
	}
}

console.log('Motlo');
console.log('hehe');

signIn(userNameprompt, passprompt);