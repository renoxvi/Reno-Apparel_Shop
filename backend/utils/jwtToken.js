const { generateRefreshToken } = require("../controller/auth");

// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // Options for cookies
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      Secure: true,
    };
    

  /*  const the_refresh_token = generateRefreshToken(user.id) 
    res.cookie("refresh_token", the_refresh_token, {
      ...options,
      expires: Date.now() + 1000 * 60 *15
    })*/
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;
  