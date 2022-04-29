const { pool } = require("../utilities/databaseConfig")

const taskDetail = async (req, res) => {
    try {
        const conn = await pool.getConnection()
        await conn.beginTransaction()

        const taskID = req.body.taskID
        if(taskID === undefined) return res.status(400).send("Task ID not define")

        try {
            const querySql = "SELECT taskID, tasks.name, description, activityDate, lastEditDate, categories.name FROM tasks JOIN categories ON tasks.categoryID = categories.categoryID WHERE taskID = ?"
            const [row, _] = await conn.query(querySql, [taskID])
            if(row.length === 0) return res.status(404).send("Not have task data.")
            res.status(200).json(row[0])

            await conn.commit()
            return row
        } catch (error) {
            await conn.rollback()
          return res.status(500).send("[Get task detail module] Can not get task details")
        } finally {
            conn.release()
        }

    } catch (error) {
        return res.status(500).send("[Get task detail module] Can not get database connection")

    }
}

module.exports = { taskDetail }