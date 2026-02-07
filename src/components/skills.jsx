const skillsData = [
  { id: 1, command: 'Skills Overview:' },
  { id: 2, command: '-----------------------------------' },
  { id: 3, command: 'Frontend:' },
  { id: 4, command: '- React' },
  { id: 5, command: '- JavaScript' },
  { id: 6, command: '- HTML5' },
  { id: 7, command: '- CSS3' },
  { id: 8, command: '- Responsive Design' },
  { id: 9, command: '- UI/UX Best Practices' },
  { id: 10, command: '-----------------------------------' },
  { id: 11, command: 'Backend:' },
  { id: 12, command: '- Node.js' },
  { id: 13, command: '- Express.js' },
  { id: 14, command: '- MongoDB' },
  { id: 15, command: '- Database Design' },
  { id: 16, command: '- RESTful API Patterns' },
  { id: 17, command: '- Basic SQL' },
  { id: 18, command: '-----------------------------------' },
  { id: 19, command: 'Accessibility & UX:' },
  { id: 20, command: '- Accessibility Reviews' },
  { id: 21, command: '- WCAG Compliance' },
  { id: 22, command: '- Informed Architecture' },
  { id: 23, command: '- Usability Testing' },
  { id: 24, command: '-----------------------------------' },
  { id: 25, command: 'Tools and Platforms:' },
  { id: 26, command: '- Git & GitHub' },
  { id: 27, command: '- WordPress Customization' },
  { id: 28, command: '- Microsoft 365' },
  { id: 29, command: '-----------------------------------' },
  { id: 29, command: 'Practices' },
  { id: 30, command: '- Code Review & QA' },
  { id: 31, command: '- Refactoring for Performance and Readability' },
  { id: 32, command: '- SEO Analysis and Optimisation' },
];

function Skills() {

  return (
    <div className="content">
      {skillsData.map(item => (
        <p key={item.id}>
          <span className="prompt">$</span> {item.command}
        </p>
      ))}
    </div>
  )
}

export default Skills;