// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

// data arrays
//team members
const teamMembers = [
  { name: "Oarabile Mbewe", role: "Team Lead and Documentation Manager", bio: "Leads project planning and coordination, ensuring the Community Portal meets its deadlines and objectives. Maintains project documentation to keep the Community Portal’s development process clear and organized." },
  { name: "Darius Greef", role: "Backend Developer", bio: "Handles server-side development and routing to power the Community Portal’s functionality." },
  { name: "Kultwano Thaga", role: "Frontend Developer", bio: "Crafts the user interface and styles for the Community Portal, enhancing its visual appeal." },
  { name: "Tarina Snyman", role: "Data Manager", bio: "Manages data arrays and ensures dynamic rendering of content for the Community Portal." },
];
//events
const events = [
  { title: "Tech Talk", date: "2025-06-15", location: "Tech Hub", image: "/images/techtalk.png" },
  { title: "Music Fest", date: "2025-07-01", location: "Park", image: "/images/musicfest.png" },
  { title: "Coding Bootcamp", date: "2025-06-05", location: "Innovation Lab", image: "/images/codingbootcamp.png" },
  { title: "Photography Workshop", date: "2025-06-10", location: "Art Gallery", image: "/images/photoworkshop.png" },
  { title: "Craft Fair", date: "2025-07-10", location: "Town Square", image: "/images/craftfair.png" },
  { title: "Hackathon", date: "2025-07-25", location: "University Campus", image: "/images/hackathon.png" },
  { title: "Food Festival", date: "2025-08-10", location: "City Park", image: "/images/foodfest.png" },
  { title: "Design Workshop", date: "2025-08-15", location: "Art Studio", image: "/images/design.png" },
  { title: "Tech Expo", date: "2025-08-20", location: "Exhibition Hall", image: "/images/techexpo.png" },
  { title: "Charity Run", date: "2025-08-25", location: "Downtown", image: "/images/charityrun.png" },
  { title: "Summer Concert", date: "2025-09-01", location: "Theater", image: "/images/summerconcert.png" },
  { title: "Science Fair", date: "2025-09-15", location: "School Gym", image: "/images/sciencefair.png" },
  { title: "Game Dev Workshop", date: "2025-09-20", location: "Innovation Lab", image: "/images/gamedev.png" },
  { title: "Dance Workshop", date: "2025-10-05", location: "Dance Studio", image: "/images/danceworkshop.png" },
  { title: "Music Workshop", date: "2025-10-15", location: "Community Center", image: "/images/musicworkshop.png" },
  { title: "Book Club Meetup", date: "2025-10-25", location: "Library", image: "/images/bookclub.png" },
  { title: "Fitness Bootcamp", date: "2025-10-28", location: "Park", image: "/images/fitnessbootcamp.png" },
  { title: "Cybersecurity Workshop", date: "2025-10-30", location: "Innovation Lab", image: "/images/cybersecurity.png" },
  { title: "Rock Music Festival", date: "2025-10-31", location: "Town Square", image: "/images/rockmf.png" }
];

let contactSubmissions = [];

//console.log('app.js - teamMembers defined:', teamMembers);//for debugging

// middleware to attach data to req
app.use((req, res, next) => {
  req.teamMembers = teamMembers;
  req.events = events;
  req.contactSubmissions = contactSubmissions;
  console.log('app.js - Middleware setting req.teamMembers:', req.teamMembers); //for debugging
  next();
});


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use("/", pageRoutes);




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
