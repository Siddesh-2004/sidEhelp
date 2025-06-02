import app from "./app.js";
import connectDb from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
connectDb()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process with failure
});
