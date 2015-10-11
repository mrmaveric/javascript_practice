/*
 //
 // Log should be:
 // action=READ , testerId, date, tagId, location, notes
 // action=WRITE, testerId, date, tagId, location, notes
 //
public class RecordTest {
    public long testId; //10
    public long TagId; //fk
    public long TesterId; //fk
    public Date dateOfTest; //yyyy-mm-dd
    public Date dateOfExpiry; //yyyy-mm-dd
    public String location; // 20 gps
    public boolean testResult; //pass/fail
    public String comment; //20
    public String plant; //16
}
*/

module.exports = function (sequelize, DataTypes) {
    var Test = sequelize.define('Test', {
        dateOfTest: DataTypes.DATE,
        dateOfExpiry: DataTypes.DATE,
        location: DataTypes.STRING(20),
        testResult: DataTypes.INTEGER(10),
        comment: DataTypes.STRING(20),
        plant: DataTypes.STRING(16)
    }, {
        associate: function (models) {
            Test.belongsTo(models.Tag);         // TagId (note sequelize gives foreign key capital letter)
            Test.belongsTo(models.Tester);      // TesterId (note sequelize gives foreign key capital letter)
        }
    });
    
    return Test;
}
