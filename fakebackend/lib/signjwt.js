const fs = require('fs');
const path = require('path');


import * as jose from 'jose';

const privateKeyText = fs.readFileSync(path.join(__dirname, '../keys', 'rsa.key'), 'utf8');
console.log(privateKeyText);
const privateKey = await jose.importPKCS8(privateKeyText, algo);
const publicKey = fs.readFileSync(path.join(__dirname, '../keys', 'rsa.key.pub'), 'utf8');

const signJwt = async (subject, payload) => {
  const algo = 'RS256';
  
  return new jose.SignJWT(payload)
		.setProtectedHeader({ algo })
		// subject
		.setSubject(subject)
		.setIssuedAt()
		// set this per component
		.setIssuer("https://localhost:3001")
		// set this per usage
		.setAudience("https://localhost:3000/test")
		// change it
		.setExpirationTime("1d")
		.sign(privateKey)
};

export default signJwt;
