export default function Courses() {
  const courses = [
    'Budgeting 101',
    'Saving 101',
    'Investing 101',
    'Investing 102',
    'Protecting Against Identity Theft and Scams',
  ]

  return (
    <div className="courses-container">
      <h1>Available Courses</h1>

      <ul className="courses-list">
        {courses.map((course, index) => (
          <li key={index} className="course-item">
            {course}
          </li>
        ))}
      </ul>
    </div>
  )
}