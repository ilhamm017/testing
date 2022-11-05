"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Photos", [
      {
        title: "foto ini milik userID 1",
        caption: "test untuk menambahkan foto milik userID 1",
        image_url: "http://photopertamauserID1.com",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "foto ini milik userID 1 juga",
        caption: "test untuk menambahkan foto kedua milik userID 1",
        image_url: "http://photopertamauserID1.com",
        UserId: 1,
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
