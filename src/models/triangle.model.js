import { Sequelize, DataTypes } from "sequelize";

export class Triangle {
    constructor(sequelize) {
        this.model = sequelize.define("Triangle", {
            base: {
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
                    return (this.base * this.height) / 2;
                },
            },
            perimeter: {
                type: DataTypes.VIRTUAL,
                get() {
                    return this.base * 3;
                },
            },
        });
    }
}
