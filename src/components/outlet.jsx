const homeData = [
  { id: 1, command: 'Welcome to my terminal portfolio!' },
  { id: 2, command: 'Here, you can explore my projects and skills.' },
  { id: 3, command: "Type 'help' to see a list of commands." },
  { id: 4, command: 'Enjoy your stay!' },
]

function Outlet() {

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

export default Outlet;