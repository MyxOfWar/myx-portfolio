import { useLocation, Outlet } from 'react-router';
import '../styles/Terminal.css';


function Terminal() {
  const location = useLocation();
  const pageName = location.pathname.slice(1) || 'home';

  return ( 
    <div className="terminal">
      <div className="header" currentpage={pageName}>
        <p >{'portfolio > src > '}<i>{pageName}{'.jsx'}</i></p>
        <span>
          <p className='window-controls maximize'>{' '}</p>
          <p className='window-controls minimize'>{' '}</p>
          <p className='window-controls close'>{' '}</p>
        </span>
      </div>
      <Outlet context={{ pageName }} />
      <div className="input">
        <p>
          <span className="prompt">$</span> <input type="text" id='commandInput' autoFocus placeholder="Type a command..." />
        </p>
      </div>
    </div>
  )
}

export default Terminal;