import { useOutletContext } from 'react-router';
import TerminalLine from './TerminalLine';
import TypewriterLine from './TypewriterLine';

const SPEED = 15;
const LINE_GAP = 80;

function PageContent({ data, children }) {
  const { shouldAnimate, animKey } = useOutletContext();

  let charOffset = 0;

  return (
    <>
      {data.map((item, index) => {
        const delay = shouldAnimate ? (charOffset * SPEED + index * LINE_GAP) : 0;
        charOffset += item.command.length;

        return (
          <p key={item.id}>
            {shouldAnimate ? (
              <TypewriterLine
                key={`${animKey}-${item.id}`}
                text={item.command}
                delay={delay}
                speed={SPEED}
                showPrompt
              />
            ) : (
              <>
                <span className="prompt">$</span>
                <TerminalLine text={item.command} />
              </>
            )}
          </p>
        );
      })}
      {children}
    </>
  );
}

export default PageContent;
