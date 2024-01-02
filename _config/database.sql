CREATE TABLE utilisateur (
  id INT PRIMARY KEY AUTO_INCREMENT,
  utilisateurname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
); 

CREATE TABLE Friend (
  id INT PRIMARY KEY AUTO_INCREMENT,
  utilisateur_id INT,
  friend_id INT,
  status VARCHAR(20) NOT NULL,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE
  FOREIGN KEY (friend_id) REFERENCES utilisateur(id) ON DELETE CASCADE
);

CREATE TABLE room (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  id_createur INT NOT NULL
);

CREATE TABLE utilisateur_room (
  utilisateur_id INT,
  room_id INT,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE,
  FOREIGN KEY (room_id) REFERENCES Room(id) ON DELETE CASCADE
);

CREATE TABLE Message (
  id INT PRIMARY KEY AUTO_INCREMENT,
  utilisateur_id INT,
  room_id INT,
  content TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id),
  FOREIGN KEY (room_id) REFERENCES Room(id)
);

