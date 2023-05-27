/*import { sign, verify } from "jsonwebtoken"


export const generateRefreshToken = (id) => {

    try {
        const refreshToken = sign(JSON.stringify({
            id
        }), process.env.THESECRET)
        return refreshToken
    } catch (e) {
        throw new Error(
            "Unable to generate refresh token"
        )
    }
}


export const getNewAccessToken = (req, res) => {
    const cookies = req.cookies 

    const oldRefreshToken = cookies.refreshToken 

    // validate the old refresh token 

    try {
        const payload = verify(oldRefreshToken, process.env.THESECRET)

        if(payload.id) {
            const a_new_access_token = sign(payload.id, process.env.THESECRET) 

            res.cookies.set(
                "token",
                a_new_access_token,
                {
                    expires: new Date(Date.now() + 60 *1000 *60),
                    httpOnly: true,
                }
            )

            res.sendStatus(200)
        }  else {
            res.status(401).send("Unauthorized")
        }
    } catch (e) {
        res.status(403).send("Forbidded")
    }
}*/