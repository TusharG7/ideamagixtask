import cors from "cors";
import express from "express";
import instructorRoutes from "./routes/InstructorRoutes.js";
import adminRoutes from "./routes/AdminRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);

app.use("/instructor", instructorRoutes);

// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
