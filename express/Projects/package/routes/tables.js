var db = require('../models')

exports.index = function (req, res) {
    res.render('tables',{
        title: 'Intacept',
        tables: {
            'Company': db.Company, 
            'Tag': db.Tag, 
            'Test': db.Test, 
            'Tester': db.Tester
        }
    });
}

