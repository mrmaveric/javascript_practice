/*
public class RecordCompany {
	public long companyId; //8
	public String name; //18
	public String phoneNumber; //12
	public String addressNumber; //4
	public String addressStreet; //18
	public String city; //18
	public String postcode; //4
	public String country; //18
	public String email; //30
	public Date startDate; //yyyy-mm-dd
	public Date finishDate; //yyyy-mm-dd
	public String comment; //20
}
*/

module.exports = function (sequelize, DataTypes) {
    var Company = sequelize.define('Company', {
        name: DataTypes.STRING(18),
        phoneNumber: DataTypes.STRING(12),
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
            Company.hasMany(models.Tag);
            Company.hasMany(models.Tester);
        }
    });
    
    return Company;
}
