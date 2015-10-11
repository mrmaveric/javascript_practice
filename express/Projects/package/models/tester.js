/*
 public class RecordTester {
	public long testerId; //8
	public String password; //10
	public String surname; //18
	public String firstname; //18
	public String phonenumber; //12
    public String addressNumber; //4
	public String addressStreet; //18
	public String city; //18
	public String postcode; //4
	public String Country; //18
	public String email; //30
	public Date startDate; //yyyy-mm-dd
	public Date finishDate; //yyyy-mm-dd
	public String comment; //20
}
*/
module.exports = function (sequelize, DataTypes) {
    var Tester = sequelize.define('Tester', {
        password: DataTypes.STRING(10),
        surname: DataTypes.STRING(18),
        firstname: DataTypes.STRING(18),
        phonenumber: DataTypes.STRING(12),
        addressNumber: DataTypes.STRING(4),
        addressStreet: DataTypes.STRING(18),
        city: DataTypes.STRING(18),
        postcode: DataTypes.STRING(4),
        country: DataTypes.STRING(18),
        email: DataTypes.STRING(30),
        startDate: DataTypes.DATE,
        finishDate: DataTypes.DATE,
        comment: DataTypes.STRING(20)
    }, {
        associate: function (models) {
            Tester.belongsTo(models.Company);
            Tester.hasMany(models.Test);
        }
    });
    
    return Tester;
}