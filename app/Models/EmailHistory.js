import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const EmailHistory = sequelize.define(
  'emailhistory',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },
  {
    underscored: true,
    paranoid: false
  }
);

// EmailHistory.associate = models => {};

export default EmailHistory;
