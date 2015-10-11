var db = require('../models')

exports.index = function (req, res) {
    db.Company.findAll().success(function (rows) {
        if (req.query.format == "json") {
            return res.send(rows);
        }
        res.render('table', {
            title: 'Intacept',
            tableName: 'Company',
            attributes: db.Company.attributes,
            rows: rows
        })
    })
}
/* Example:
    curl http://localhost:3000/tables/company?format=json
 */

exports.post = function (req, res) {
    db.Company.create(req.body).success(function () {
        res.send(201);
    }).error(function (err) {
        res.send(400);
    });
}
/* Example:
    curl -H "Content-Type: application/json" -d '{"name": "Intacept"}' http://localhost:3000/tables/company
 */
