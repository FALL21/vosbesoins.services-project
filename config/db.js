const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.lerwmsu.mongodb.net/VBS",
        // "mongodb+srv://Mame_bou:Passer123@cluster0.lerwmsu.mongodb.net/VBS",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed connected to MongoDB", err)); 

    