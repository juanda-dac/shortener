import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Link = sequelize.define("link",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortedId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    views:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        set(value){
          this.setDataValue("views", value);
        }
    },
  },
  {
        timestamps: false,
});







