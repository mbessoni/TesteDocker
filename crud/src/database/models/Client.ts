import { Model } from 'sequelize'
import sequelize from 'sequelize'
import db from '.'

class Client extends Model {
    declare id: number
    declare name: string
    declare cpf: string
    declare birthday: Date
    declare registeredAt: Date
}

Client.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: sequelize.STRING,
        allowNull: false
      },
      birthday: {
        type: sequelize.DATE,
        allowNull: false
      },
      registeredAt: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
}, {
    sequelize: db,
    tableName: 'client',
    timestamps: false
})

export default Client