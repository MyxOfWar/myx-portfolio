import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router';
import { processCommand } from '../utils/commandHandler';
import TerminalLine from './TerminalLine';
import MatrixRain from './MatrixRain';
import '../styles/Terminal.css';

const DESKTOP_QUERY = '(min-width: 768px)';

function Terminal() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageName = location.pathname.slice(1) || 'home';

  const [entries, setEntries] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeEffect, setActiveEffect] = useState(null);
  const [typingEnabled, setTypingEnabled] = useState(false);
  const [windowMode, setWindowMode] = useState('normal');
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia(DESKTOP_QUERY).matches
  );
  // Key that changes on route change to re-trigger animations
  const [animKey, setAnimKey] = useState(0);

  const inputRef = useRef(null);
  const contentRef = useRef(null);

  // Track desktop breakpoint
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Scroll to bottom only when command entries are added
  useEffect(() => {
    if (contentRef.current && entries.length > 0) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [entries]);

  // Focus input when clicking the terminal
  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Reset on route change: clear entries, scroll to top
  useEffect(() => {
    setEntries([]);
    setActiveEffect(null);
    setAnimKey(k => k + 1);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  const shouldAnimate = typingEnabled && isDesktop;

  const handleCommand = useCallback((input) => {
    const result = processCommand(input, commandHistory);

    // Add command to history
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    if (result.clear) {
      setEntries([]);
      return;
    }

    // Handle typing toggle
    if (result.action === 'typing') {
      const newState = result.typingArg === 'on' ? true
        : result.typingArg === 'off' ? false
        : !typingEnabled;
      setTypingEnabled(newState);

      const statusText = newState
        ? 'Typing animation: ON (desktop only)'
        : 'Typing animation: OFF';

      setEntries(prev => [
        ...prev,
        { id: Date.now(), type: 'command', text: input },
        { id: Date.now() + 1, type: 'output', text: statusText },
      ]);
      return;
    }

    // Build new entries: the command line + output lines
    const newEntries = [];
    newEntries.push({ id: Date.now(), type: 'command', text: input });
    result.output.forEach((line, i) => {
      newEntries.push({ id: Date.now() + i + 1, type: 'output', text: line });
    });

    setEntries(prev => [...prev, ...newEntries]);

    // Handle navigation
    if (result.navigate) {
      setTimeout(() => navigate(result.navigate), 400);
    }

    // Handle effects
    if (result.effect) {
      setActiveEffect(result.effect);
      setTimeout(() => setActiveEffect(null), 6000);
    }
  }, [commandHistory, navigate, typingEnabled]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.trim();
      if (value) {
        handleCommand(value);
        e.target.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        e.target.value = commandHistory[newIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          e.target.value = '';
        } else {
          setHistoryIndex(newIndex);
          e.target.value = commandHistory[newIndex];
        }
      }
    }
  }, [handleCommand, commandHistory, historyIndex]);

  return (
    <div className={`terminal ${windowMode}`} onClick={handleTerminalClick}>
      <div className="header" currentpage={pageName}>
        <p>{'portfolio > src > '}<i>{pageName}{'.jsx'}</i></p>
        <span>
          <p className='window-controls maximize' onClick={(e) => { e.stopPropagation(); setWindowMode(m => m === 'maximized' ? 'normal' : 'maximized'); }}>{' '}</p>
          <p className='window-controls minimize' onClick={(e) => { e.stopPropagation(); setWindowMode(m => m === 'minimized' ? 'normal' : 'minimized'); }}>{' '}</p>
          <p className='window-controls close' onClick={(e) => { e.stopPropagation(); setEntries([]); }}>{' '}</p>
        </span>
      </div>

      <div className="content" ref={contentRef}>
        <Outlet context={{ pageName, shouldAnimate, animKey }} />

        {entries.map(entry => (
          <p key={entry.id} className={entry.type === 'command' ? 'command-entry' : 'output-entry'}>
            {entry.type === 'command' && <span className="prompt">$</span>}
            <TerminalLine text={entry.text} />
          </p>
        ))}
      </div>

      {activeEffect && (
        <MatrixRain effect={activeEffect} onComplete={() => setActiveEffect(null)} />
      )}

      <div className="input">
        <p>
          <span className="prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            id='commandInput'
            autoFocus
            placeholder="Type a command..."
            onKeyDown={handleKeyDown}
          />
        </p>
      </div>
    </div>
  );
}

export default Terminal;
