var db = require('../models')

exports.index = function (req, res) {
    db.Tag.findAll().success(function (rows) {
        if (req.query.format == "json") {
            return res.send(rows);
        }
        res.render('table', {
            title: 'Intacept',
            tableName: 'Tag',
            attributes: db.Tag.attributes,
            rows: rows
        })
    })
}
/* Example:
    curl http://localhost:3000/tables/tag?format=json
 */

exports.post = function (req, res) {
    db.Tag.create(req.body).success(function () {
        res.send(201);
    }).error(function (err) {
        res.send(400);
    });
}

/* Example:
    curl -H "Content-Type: application/json" -d '{"CompanyId": "1"}' http://localhost:3000/tables/tag
 */
