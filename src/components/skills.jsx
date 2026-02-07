import TerminalLine from './TerminalLine';

const skillsData = [
  { id: 1, command: 'npm run SkillsOverview' },
  { id: 2, command: '-----------------------------------' },
  { id: 3, command: 'function Frontend () {' },
  { id: 4, command: 'return (' },
  { id: 5, command: '- React' },
  { id: 6, command: '- JavaScript' },
  { id: 7, command: '- HTML5' },
  { id: 8, command: '- CSS3' },
  { id: 9, command: '- Responsive Design' },
  { id: 10, command: '- UI/UX Best Practices )' },
  { id: 11, command: '}' },
  { id: 12, command: ' ' },
  { id: 13, command: 'function Backend () {' },
  { id: 14, command: 'return (' },
  { id: 15, command: '- Node.js' },
  { id: 16, command: '- Express.js' },
  { id: 17, command: '- MongoDB' },
  { id: 18, command: '- Database Design' },
  { id: 19, command: '- RESTful API Patterns' },
  { id: 20, command: '- Basic SQL )' },
  { id: 21, command: '}' },
  { id: 22, command: ' ' },
  { id: 23, command: 'function AccessibilityAndUX () {' }, 
  { id: 24, command: 'return (' },
  { id: 25, command: '- Accessibility Reviews' },
  { id: 26, command: '- WCAG Compliance' },
  { id: 27, command: '- Informed Architecture' },
  { id: 28, command: '- Usability Testing )' },
  { id: 29, command: '}' },
  { id: 30, command: ' ' },
  { id: 31, command: 'function ToolsAndPlatforms () {' },
  { id: 32, command: 'return (' },
  { id: 33, command: '- Git & GitHub' },
  { id: 34, command: '- WordPress Customization' },
  { id: 35, command: '- Microsoft 365 )' },
  { id: 36, command: '}' },
  { id: 37, command: ' ' },
  { id: 38, command: 'function Practices() {' },
  { id: 39, command: 'return (' },
  { id: 40, command: '- Code Review & QA' },
  { id: 41, command: '- Refactoring for Performance and Readability' },
  { id: 42, command: '- SEO Analysis and Optimisation )' },
  { id: 43, command: '}' },
];

function Skills() {

  return (
    <div className="content">
      {skillsData.map(item => (
        <p key={item.id}>
          <span className="prompt">$</span> <TerminalLine text={item.command} />
        </p>
      ))}
    </div>
  )
}

export default Skills;