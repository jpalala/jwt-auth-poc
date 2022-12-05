const signJwt = async (subject, payload, secret) => {
	return new jose.SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		// subject
		.setSubject(subject)
		.setIssuedAt()
		// set this per component
		.setIssuer("https://example.com")
		// set this per usage
		.setAudience("https://example.com/test")
		// change it
		.setExpirationTime("1d")
		.sign(secret)
};

export default signJwt;
