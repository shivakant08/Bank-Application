const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("../config/db.js"); 

// Register Controller
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "Fields cannot be empty" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const [result] = await database.query(query, [username, email, hashedPassword]);

    res.status(201).json({ message: "User registered", insertId: result.insertId });

  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Fields cannot be empty" });
    }

    // find user by username
    const [result] = await database.query("SELECT * FROM users WHERE username = ?", [username]);

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ 
      message: "Login successful",
      token,
      user: { id: user.id, username: user.username, email: user.email }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = { register, login };