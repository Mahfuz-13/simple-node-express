const express = require("express");
const app = express();
var cors = require("cors");

const port = 5000;
app.use(cors());
app.use(express.json());

const handler = (req, res) => {
  res.send("Hello from node");
};

const users = [
  { id: 0, name: "Mahfuz", email: "mahfuz@gmail.com", phone: "0178888888" },
  { id: 1, name: "Wahid", email: "Wahid@gmail.com", phone: "0178888888" },
  { id: 2, name: "Rafsan", email: "Rafsan@gmail.com", phone: "0178888888" },
  { id: 3, name: "numuer", email: "numuer@gmail.com", phone: "0178888888" },
  { id: 4, name: "tawsif", email: "tawsif@gmail.com", phone: "0178888888" },
  { id: 5, name: "maruf", email: "maruf@gmail.com", phone: "0178888888" },
  { id: 6, name: "rifat", email: "rifat@gmail.com", phone: "0178888888" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/", (req, res) => {
  res.send("Hello from my first ever node and express");
});

app.listen(port, () => {
  console.log("listening to port");
});
