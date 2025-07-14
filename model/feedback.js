module.exports = (sequelize,DataTypes) => {
  const Feedback = sequelize.define('feedback', {
    sno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Designation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Company: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Comment:{
        type: DataTypes.TEXT,
        allowNull: true
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return Feedback;
}