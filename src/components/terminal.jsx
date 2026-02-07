import '../styles/Terminal.css';

function Terminal() {

  return ( 
    <div className="terminal">
      <div className="header">
        <h1>Terminal</h1>
      </div>
      <div className="line-numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div className="content">
        <p><span className="prompt">$</span> Welcome to my terminal portfolio!</p>
        <p><span className="prompt">$</span> Here, you can explore my projects and skills.</p>
        <p><span className="prompt">$</span> Type 'help' to see a list of commands.</p>
        <p><span className="prompt">$</span> Enjoy your stay!</p>
      </div>
      <div className="spacer"></div>
      <div className="input">
        <span className="prompt">$</span> <input type="text" placeholder="Type a command..." />
      </div>
    </div>
  )
}

export default Terminal;