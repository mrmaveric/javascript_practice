var db = require('../models')

exports.index = function (req, res) {
    db.Test.findAll().success(function (rows) {
        if (req.query.format == "json") {
            return res.send(rows);
        }
        return res.render('table', {
            title: 'Intacept',
            tableName: 'Test',
            attributes: db.Test.attributes,
            rows: rows
        })
    })
}
/* Example:
    curl http://localhost:3000/tables/test?format=json
 */

exports.post = function (req, res) {
    db.Test.create(req.body).success(function () {
        res.send(201);
    }).error(function (err) {
        res.send(400);
    });
}
/* Example:
    curl -H "Content-Type: application/json" -d '{
        "dateOfTest": "2014-11-22T13:00:00.000Z",
        "dateOfExpiry": "2014-11-13T13:00:00.000Z",
        "location": "unknown",
        "testResult": 1,
        "comment": "sample comment",
        "plant": "airport"}' http://localhost:3000/tables/test
 */
