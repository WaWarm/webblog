module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User',{
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        last: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
       return User
}