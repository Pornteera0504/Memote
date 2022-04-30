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

const validateCategory = async (categoryName,conn) => {
    querySql = "SELECT categoryID FROM categories where name = ?"
    const [row, _] = await conn.query(querySql, [categoryName])

    if(row.length === 0) return res.status(400).send("This category is not already.")
    const categoryID =  row[0].categoryID
    return categoryID
}

const modifyTask = async (req, res) => {
    try {
        const conn = await pool.getConnection()
        await conn.beginTransaction()

        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()

        var statusModify
        const taskID = req.body.taskID
        const userID = req.body.userID
        const name = req.body.name
        const description = req.body.description
        const activityDate = req.body.activityDate
        const lastEditDate = date
        const categoryName = req.body.categoryName
        
        try {
            querySql = "SELECT * FROM users where userID = ?"
            const [row, _] = await conn.query(querySql, [userID])
            if(row.length === 0) return res.status(400).send("This user not have permission.")

            if(taskID === 0 ){
                const categoryID = await validateCategory(categoryName, conn)
                const insertSql = "INSERT INTO tasks (name, description, activityDate, lastEditDate, userID, categoryID) VALUES (?, ?, ?, ?, ?, ?)"
                await conn.query(insertSql, [name, description, activityDate, lastEditDate, userID, categoryID])
                statusModify = "Add task data success."
                res.status(200).send(statusModify)
            }
            else{
                const categoryID = await validateCategory(categoryName, conn)
                console.log(categoryID)
                const updateSql = "UPDATE tasks SET name = ?, description = ?, activityDate = ?, lastEditDate = ?, categoryID = ? WHERE taskID = ?"
                await conn.query(updateSql, [name, description, activityDate, lastEditDate, categoryID, taskID])
                statusModify = "Update task data success."
                res.status(200).send(statusModify)
            }

            await conn.commit()
            return statusModify
            
        } catch (error) {
            await conn.rollback()
            return res.status(500).send("[Modify task module] Can not modify task data")
        } finally {
            conn.release()
        }
          
    } catch (error) {
        return res.status(500).send("[Modify task module] Can not get database connection")
    }
}

module.exports = { taskDetail, modifyTask }