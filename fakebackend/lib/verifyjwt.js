import * as jose from 'jose';

const publicKey = fs.readFileSync(path.join(__dirname, '../keys', 'rsa.key.pub'), 'utf8');



const verifyJwt = (jwt, options) = {alg: 'RS256')) => {
 const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey, {
    issuer: 'urn:example:issuer',
    audience: 'urn:example:audience',
  });
  console.log(protectedHeader)
  console.log(payload)

  return payload;
}
