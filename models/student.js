module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("product", {
      title: {
        type: Sequelize.STRING
      }
    });
  
    return Student;
  };