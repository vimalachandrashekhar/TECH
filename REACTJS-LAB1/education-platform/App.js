import React from 'react';
import Course from './component/Course';
import './App.css';

function App() {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      instructor: 'John Smith',
      duration: '8 weeks',
      price: 'RS 450'
    },
    {
      id: 2,
      title: 'Introduction to Data Science',
      instructor: 'Jane Doe',
      duration: '6 weeks',
      price: 'Rs 1000'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      instructor: 'Bob Johnson',
      duration: '12 weeks',
      price: 'Rs 700'
    },
    {
      id: 4,
      title: 'Business Management 101',
      instructor: 'Sara Lee',
      duration: '4 weeks',
      price: 'Rs 650'
    }
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Learn from the best educators</h1>
          <p>Choose from our wide range of courses and start learning today</p>
          <button>View Courses</button>
        </section>
        <section>
          <h2>Featured Courses</h2>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <Course course={course} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>About Us</h2>
          <p>We are a team of passionate educators who believe in making education accessible to everyone.</p>
          <button>Learn More</button>
        </section>
        <section>
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Online Education Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
