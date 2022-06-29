const sequelize = require('../connection/connection');
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const DISABLE_SEQUELIZE_DEFAULTS = {
  timestamps: false,
  freezeTableName: true,
};

class sharedDB {
    constructor() {
    }

    //sequelizing the hm_todo table
    hm_shared = sequelize.define('hm_shared', {
        uid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        pract_id: { type: DataTypes.INTEGER },
        client_id: { type: DataTypes.INTEGER },
        shared_email:{type:DataTypes.CHAR}
      }, DISABLE_SEQUELIZE_DEFAULTS)

//posting task details to todo table
      async saveSharedData(obj) {
        return await this.hm_shared.create({
          pract_id: obj.pract_id,
         shared_email:obj.shared_email,
          client_id:obj.client_id
    }).then(data => {
          console.log("Added hm_shared details", data)
          return Promise.resolve(data)
        }).catch(err => {
          console.log("Error while Inserting data", err)
          throw new Error("Can not insert data", err)
        })
      }

      async getAllData(){
        return await this.hm_shared.findAll().then(rows => {
          return rows;
        }).catch((err) => {
          console.log("Error while getting data", err);
          throw new Error('Error while getting data', err.message);
        });
      }

      }
    
module.exports=sharedDB;