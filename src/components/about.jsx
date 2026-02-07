const aboutData = [
  {
    id: 1,
    command: 'echo "About Me"',
  },
  {
    id: 2, 
    command: 'My name is Myx Peace.',
  },
  {
    id: 3,
    command: '-----------------------------------',
  },
  {
    id: 4,
    command: 'I am a passionate software developer with experience in building web applications.',
  },
  {
    id: 5,
    command: 'My skills include JavaScript, React, Node.js, and more.',
  },
  {
    id: 6,
    command: 'I love creating interactive and user-friendly applications.',
  },
  {
    id: 7,
    command: 'In my free time, I enjoy working on new projects, refining my skills, and learning new technologies.',
  },
  { id: 8, command: 'Feel free to explore my projects and skills!' },
]
function About() {

  return (
    <div className="content">
      {aboutData.map(item => (
        <p key={item.id}>
          <span className="prompt">$</span> {item.command}
        </p>
      ))}
    </div>
  )
}

export default About;