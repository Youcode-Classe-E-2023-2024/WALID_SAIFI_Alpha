-- Création de la table 'Utilisateurs'
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
reset_token VARCHAR(255),
reset_token_expires DATETIME
);

CREATE TABLE notifications (
notification_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
notification_content TEXT,
is_read BOOLEAN DEFAULT FALSE,
created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (user_id) REFERENCES Utilisateurs(user_id)
);