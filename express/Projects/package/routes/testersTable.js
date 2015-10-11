var db = require('../models')

exports.index = function (req, res) {
    db.Tester.findAll().success(function (rows) {
        if (req.query.format == "json") {
            return res.send(rows);
        }
        res.render('table', {
            title: 'Intacept',
            tableName: 'Tester',
            attributes: db.Tester.attributes,
            rows: rows
        })
    })
}
/* Example:
    curl http://localhost:3000/tables/tester?format=json
 */

exports.post = function (req, res) {
    db.Tester.create(req.body).success(function () {
        res.send(201);
    }).error(function (err) {
        res.send(400);
    });
}

/* Example:
    curl -H "Content-Type: application/json" -d '{"CompanyId": 1, "password": "1234", "surname": "User", "firstname": "Demo", "email": "demo"}' http://localhost:3000/tables/tester
 */
