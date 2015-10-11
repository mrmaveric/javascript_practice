exports.index = function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send(200, JSON.stringify({
        intacept: "intacept",
        version: "0.0"
    }));
    return;
}