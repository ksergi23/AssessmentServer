module.exports =(sequelize, DataTypes) => {
    const List = sequelize.define('list', {
    
        ride : {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        park: {
            type: DataTypes.STRING,
            allowNull: false
        },

        land:{
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return List;
}