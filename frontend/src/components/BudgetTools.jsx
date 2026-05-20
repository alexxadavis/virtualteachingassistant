export default function BudgetTools() {
  const templates = [
    'Basic College Budget',
    '50/30/20 Budget',
    'Zero-Based Budget',
  ]

  return (
    <div className="budget-container">
      <h2>Available Budget Templates</h2>

      <ul className="budget-list">
        {templates.map((template, index) => (
          <li key={index} className="budget-item">
            {template}
          </li>
        ))}
      </ul>
    </div>
  )
}