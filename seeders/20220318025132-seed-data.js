const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface) => {

    let itemsList =[]

    for (let i=0; i<50; i+=1){
      itemsList.push({
        name:faker.commerce.product(), 
        description: faker.commerce.productDescription(), 
        created_at: new Date(),
        updated_at: new Date(),
      })
    }
    const items = await queryInterface.bulkInsert(
      'items',
      itemsList,
      { returning: true },
    );

  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('items', null, {});
  },
}
