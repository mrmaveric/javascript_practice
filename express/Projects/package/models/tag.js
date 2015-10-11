/*
public class RecordTag {
	public long tagId; //8
	public Date manufactureDate; //yyyy-mm-dd
	public int manufactureBatch; //4
	public Date batteryFitted; //yyy-mm-dd
	public int designVersion; //4
	public String comment; //20
}
*/

module.exports = function (sequelize, DataTypes) {
    var Tag = sequelize.define('Tag', {
        manufactureDate: DataTypes.DATE,
        manufactureBatch: DataTypes.INTEGER(4),
        batteryFitted: DataTypes.DATE,
        designVersion: DataTypes.INTEGER(4),
        comment: DataTypes.STRING(20),
    }, {
        associate: function (models) {
            Tag.belongsTo(models.Company);
            Tag.hasMany(models.Test);
        }
    });
    
    return Tag;
}

