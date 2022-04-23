const { pool } = require("../utilities/databaseConfig")
const Joi = require("joi")

const categories = async (req, res) => {
  try {
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
      const querySql = "SELECT * FROM categories"
      const [rows, _] = await conn.query(querySql)
      res.status(200).json(rows)

      await conn.commit()
      return rows
    } catch (error) {
      await conn.rollback()
      return res.status(500).send("[Categories module] Can not get catagories data")
    } finally {
      conn.release()
    }
  } catch (error) {
    return res.status(500).send("[Categories module] Can not get database connection")
  }
}

const allTask = async (req, res) => {
    try {
        const conn = await pool.getConnection()
        await conn.beginTransaction()

        const userID = req.body.userID
        if(userID === undefined) return res.status(400).send("UserID not define.")
    
        try {
          const querySql = "SELECT taskID, name, activityDate, lastEditDate FROM tasks WHERE userID = ?"
          const [rows, _] = await conn.query(querySql, [userID])
          res.status(200).json(rows)
    
          await conn.commit()
          return rows
        } catch (error) {
          await conn.rollback()
          return res.status(500).send("[All task module] Can not get task that matching with user")
        } finally {
          conn.release()
        }

      } catch (error) {
        return res.status(500).send("[All task module] Can not get database connection")
    }
}

module.exports = { categories, allTask }