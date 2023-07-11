import { Sequelize, DataTypes } from "sequelize";

export class Rectangle {
    constructor(sequelize) {
        this.model = sequelize.define("Rectangle", {
            width: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            height: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            area: {
                type: DataTypes.VIRTUAL,
                get() {
                    return this.width * this.height;
                },
            },
            perimeter: {
                type: DataTypes.VIRTUAL,
                get() {
                    return 2 * (Number(this.width) + Number(this.height));
                },
            },
        });
    }
}
