create table users (
userID int AUTO_INCREMENT PRIMARY KEY,
name varchar(50),
email varchar(50),
image varchar(255),
status enum('online', 'offline')
);
create table categories (
categoryID int AUTO_INCREMENT PRIMARY KEY,
name varchar(50),
definition varchar(255)
);
create table tasks (
taskID int AUTO_INCREMENT PRIMARY KEY,
name varchar(50),
description TEXT,
activityDate DATETIME,
lastEditDate DATETIME,
userID int NOT NULL,
categoryID int NOT NULL,
FOREIGN KEY (userID) REFERENCES users(userID),
FOREIGN KEY (categoryID) REFERENCES categories(categoryID)
ON DELETE CASCADE
);