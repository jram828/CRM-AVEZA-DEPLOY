import { server } from "./server.js";
import { models } from "./DB.js";

const { conn } = models;

const PORT = 3001;

conn
  .sync({ alter: true })
  .then(() => {})
  .catch((error) => console.error(error));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});