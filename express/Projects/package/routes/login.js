var db = require('../models')

exports.post = function (req, res) {
    
    // req.body = {
    //  userEmail: ... todo: this should be case insensitive but sequelize doesnt support it
    //  userId: ...
    //  userPassword: ...
    // }

    var query = null;
    
    if (req.body.userPassword) {
        
        // Use either TesterId to identify user.
        if (req.body.userId)
            query = { where: { TesterId: req.body.userId } };
        else if (req.body.userEmail)
            query = { where: { email: req.body.userEmail } };
        
        if (query) {
            db.Tester.find(query).success(function (tester) {
                if (tester && tester.password && tester.password == req.body.userPassword) {
                    // Success password correct.
                    res.set('Content-Type', 'application/json');
                    res.send(200, JSON.stringify(tester));
                    return;
                }
                // Error, wrong password
                res.send(403);
            }).error(function (err) {
                // Error, no such user
                res.send(403);
            });
            return;
        }
    }

    // Return error not found as no password was supplied.
    res.send(400);
}

