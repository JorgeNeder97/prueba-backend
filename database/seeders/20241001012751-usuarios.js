"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("usuarios",
            [
                {
                    nombre: 'Jorge'
                },
                {
                    nombre: 'Raul'
                },
                {
                    nombre: 'Pedro'
                },
            ]
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('usuarios', null, {});
    },
};
