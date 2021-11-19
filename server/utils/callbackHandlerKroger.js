export async function callbackHandler(req, res, next) {
    let params = url.parse(req.url, true).query;
    if (!params.code) {
        res.sendStatus(400);
        return;
    }
    let token = await tokenService.getByAuth(params.code);

    res.cookie('accToken', token.access_token);
    res.cookie('refToken', token.refresh_token);
    res.redirect('/');
} try {
    callbackHandler();
} catch (error) {
    console.log(`error: ${error}`);
    res.sendStatus(500);
}