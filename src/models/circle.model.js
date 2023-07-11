import { Sequelize, DataTypes } from "sequelize";

export class Circle {
    constructor(sequelize) {
        this.model = sequelize.define("Circle", {
            radius: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            area: {
                type: DataTypes.VIRTUAL,
                get() {
                    return Math.PI * this.radius * this.radius;
                },
            },
            perimeter: {
                type: DataTypes.VIRTUAL,
                get() {
                    return 2 * Math.PI * this.radius;
                },
            },
        });
    }
}
