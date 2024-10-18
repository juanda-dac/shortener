import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Link } from "./Link.js";

export const User = sequelize.define("user", {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING(20),
            unique:true,
        },
        email:{
            type:DataTypes.STRING(50),
            unique:true
        },
        password:{
            type:DataTypes.TEXT
        }
    },
    {
        timestamps:false
    }
)

User.hasMany(Link, {
    foreignKey: "userId",
    sourceKey: "id"
})

Link.belongsTo(User, {
    foreignKey: "userId",
    targetKey: "id"
})

