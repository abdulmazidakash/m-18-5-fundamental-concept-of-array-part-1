const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

console.log(friends.includes('gelam'));
console.log(friends.includes('salam'));

if(friends.includes('khailam')){
	console.log('party');
}
else {
	console.log('no food. we are fasting');
}