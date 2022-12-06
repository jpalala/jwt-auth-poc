const PORT = 3001;
const express = require("express");
const app = express();

const signJwt = require('./lib/signjwt');
const verifyJwt = require('./lib/verifyjwt');

app.post("/login", async (request, response) => {
   try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await auth.ser.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
    response.send("Hi there");
});

//protect with middleware
app.get("/posts")

app.listen(PORT, () => {
    console.log("Listen on the port " + PORT + "...");
});
