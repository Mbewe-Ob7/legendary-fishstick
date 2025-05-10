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
  { name: "John Doe", role: "Developer", bio: "Experienced coder" },
  { name: "Jane Smith", role: "Designer", bio: "Creative UI expert" },
  { name: "Alex Lee", role: "Manager", bio: "Team coordinator" },
  { name: "Emily Chen", role: "Frontend Developer", bio: "Specialist in React and Vue" },
  { name: "Michael Brown", role: "Backend Developer", bio: "Expert in Node.js and databases" },
  { name: "Sarah Davis", role: "UI/UX Designer", bio: "Passionate about user-centered design" },
  { name: "David Wilson", role: "Project Manager", bio: "Skilled in Agile methodologies" },
  { name: "Laura Martinez", role: "Data Analyst", bio: "Proficient in Python and SQL" },
  { name: "James Taylor", role: "DevOps Engineer", bio: "Automates cloud infrastructure" },
  { name: "Olivia White", role: "Content Writer", bio: "Crafts engaging stories" },
  { name: "Robert Garcia", role: "Security Specialist", bio: "Ensures robust cybersecurity" },
  { name: "Sophia Adams", role: "Marketing Lead", bio: "Drives community engagement" },
  { name: "William Clark", role: "Mobile Developer", bio: "Builds iOS and Android apps" },
  { name: "Isabella Lopez", role: "Graphic Designer", bio: "Creates stunning visuals" },
  { name: "Thomas Harris", role: "QA Engineer", bio: "Ensures bug-free software" },
  { name: "Emma Lewis", role: "Community Manager", bio: "Fosters vibrant communities" },
  { name: "Daniel Walker", role: "AI Specialist", bio: "Develops machine learning models" },
  { name: "Mia Young", role: "Product Manager", bio: "Guides product vision" }
];
//events
const events = [
  { title: "Art Workshop", date: "2025-06-01", location: "Community Center", image: "/images/art.jpg" },
  { title: "Tech Talk", date: "2025-06-15", location: "Tech Hub", image: "/images/tech.jpg" },
  { title: "Music Fest", date: "2025-07-01", location: "Park", image: "/images/music.jpg" },
  { title: "Coding Bootcamp", date: "2025-06-05", location: "Innovation Lab", image: "/images/event1.jpg" },
  { title: "Photography Workshop", date: "2025-06-10", location: "Art Gallery", image: "/images/event2.jpg" },
  { title: "Startup Pitch Night", date: "2025-06-20", location: "Co-Working Space", image: "/images/event3.jpg" },
  { title: "Yoga Retreat", date: "2025-06-25", location: "Nature Reserve", image: "/images/event4.jpg" },
  { title: "AI Symposium", date: "2025-07-05", location: "Conference Center", image: "/images/event5.jpg" },
  { title: "Craft Fair", date: "2025-07-10", location: "Town Square", image: "/images/event6.jpg" },
  { title: "Web Dev Meetup", date: "2025-07-15", location: "Tech Hub", image: "/images/event7.jpg" },
  { title: "Poetry Slam", date: "2025-07-20", location: "Library", image: "/images/event8.jpg" },
  { title: "Hackathon", date: "2025-07-25", location: "University Campus", image: "/images/event9.jpg" },
  { title: "Film Screening", date: "2025-08-01", location: "Cinema", image: "/images/event10.jpg" },
  { title: "Career Fair", date: "2025-08-05", location: "Convention Center", image: "/images/event11.jpg" },
  { title: "Food Festival", date: "2025-08-10", location: "City Park", image: "/images/event12.jpg" },
  { title: "Design Workshop", date: "2025-08-15", location: "Art Studio", image: "/images/event13.jpg" },
  { title: "Tech Expo", date: "2025-08-20", location: "Exhibition Hall", image: "/images/event14.jpg" },
  { title: "Charity Run", date: "2025-08-25", location: "Downtown", image: "/images/event15.jpg" },
  { title: "Summer Concert", date: "2025-09-01", location: "Theater", image: "/images/event16.jpg" },
  { title: "Blockchain Seminar", date: "2025-09-05", location: "Tech Hub", image: "/images/event17.jpg" },
  { title: "Art Exhibition", date: "2025-09-10", location: "Museum", image: "/images/event18.jpg" },
  { title: "Science Fair", date: "2025-09-15", location: "School Gym", image: "/images/event19.jpg" },
  { title: "Game Dev Workshop", date: "2025-09-20", location: "Innovation Lab", image: "/images/event20.jpg" },
  { title: "Literary Festival", date: "2025-09-25", location: "Library", image: "/images/event21.jpg" },
  { title: "Eco Summit", date: "2025-10-01", location: "Conference Center", image: "/images/event22.jpg" },
  { title: "Dance Workshop", date: "2025-10-05", location: "Dance Studio", image: "/images/event23.jpg" },
  { title: "Startup Workshop", date: "2025-10-10", location: "Co-Working Space", image: "/images/event24.jpg" },
  { title: "Music Workshop", date: "2025-10-15", location: "Community Center", image: "/images/event25.jpg" },
  { title: "VR Experience", date: "2025-10-20", location: "Tech Hub", image: "/images/event26.jpg" },
  { title: "Book Club Meetup", date: "2025-10-25", location: "Library", image: "/images/event27.jpg" },
  { title: "Fitness Bootcamp", date: "2025-10-28", location: "Park", image: "/images/event28.jpg" },
  { title: "Cybersecurity Workshop", date: "2025-10-30", location: "Innovation Lab", image: "/images/event29.jpg" },
  { title: "Fall Festival", date: "2025-10-31", location: "Town Square", image: "/images/event30.jpg" }
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
