const homeData = [
  { id: 1, command: 'Welcome to my terminal portfolio!' },
  { id: 2, command: 'Here, you can explore my projects and skills.' },
  { id: 3, command: "Type 'help' to see a list of commands." },
  { id: 4, command: 'Feel free to reach out if you have any questions.' },
  { id: 5, command: 'You can also check out my GitHub for more projects.' },
  { id: 6, command: 'Enjoy your stay!' },
]

function Home() {
  
  return (
    <div className="content">
      {homeData.map(item => (
        <p key={item.id}>
          <span className="prompt">$</span> {item.command}
        </p>
      ))}
    </div>
  )
}

export default Home;