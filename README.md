# Nexora Technologies

A modern full-stack IT company website built using **React.js**, **Vite**, **Node.js**, **Express.js**, and **MongoDB**. The application showcases the company's services, products, featured projects, achievements, client testimonials, and provides a responsive contact form integrated with a RESTful backend API.

---

##  Overview

Nexora Technologies is a fictional IT solutions company website designed to demonstrate modern full-stack web development practices. The project features a responsive corporate interface, reusable React components, dynamic content rendering, RESTful API integration, and MongoDB database connectivity.

---

##  Features

* Responsive corporate website
* Professional landing page
* Company overview
* IT services showcase
* Product showcase
* Featured projects section
* Company achievements
* Client testimonials
* Business statistics
* Contact form with MongoDB integration
* RESTful API built with Express.js
* Clean and reusable React component architecture

---

##  Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* JavaScript (ES6+)
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* MongoDB Node Driver
* Dotenv
* CORS

---

##  Project Structure

```text
IT_COMPANY_PROJECT/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── backend/
│   │   ├── .env
│   │   └── server.js
│   │
│   ├── components/
│   │   ├── Cards.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Layout.jsx
│   │   ├── Stats.jsx
│   │   └── Testimonials.jsx
│   │
│   ├── data/
│   │   ├── achievements.js
│   │   ├── products.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── testimonials.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   └── StartProject.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md
```

---

##  Website Pages

###  Home

* Hero section
* Company overview
* Featured services
* Featured products
* Company achievements
* Statistics
* Client testimonials

###  Services

* Complete list of IT solutions
* Service descriptions
* Technology expertise

###  Products

* Software products
* Product features
* Business solutions

###  Contact

* Contact form
* Company information
* Backend integration with MongoDB

###  Start Project

* Project inquiry form
* Client project request submission
*  Backend integration with MongoDB

---

##  Data Modules

* **achievements.js** – Company milestones and achievements
* **services.js** – IT services information
* **products.js** – Product catalog
* **projects.js** – Featured projects
* **testimonials.js** – Client testimonials

---

##  Reusable Components

* Layout (Navbar & Footer)
* Service Card
* Product Card
* Project Card
* Contact Form
* Statistics
* Testimonials

---

##  API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | `/health`      | Server health check |
| POST   | `/api/contact` | Submit contact form |
| POST | `/api/start-project` | Submit project inquiry |

---

##  Future Enhancements

* User Authentication
* Admin Dashboard
* Email Notifications
* Project Tracking System
* Newsletter Subscription
* Cloud Deployment
* Dark Mode

---

##  Learning Outcomes

Through this project, the following concepts were explored:

- Building responsive user interfaces with React.js
- Component-based architecture
- Client-side routing using React Router
- RESTful API development with Express.js
- MongoDB database integration
- Environment variable management using Dotenv
- Full-stack application development
