"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Photos", [
      {
        title: "Foto jadul",
        caption: "hanya foto jadul ",
        image_url: "http://fotojadul.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Foto baru",
        caption: "hanya foto baru ",
        image_url: "http://fotobaru.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
