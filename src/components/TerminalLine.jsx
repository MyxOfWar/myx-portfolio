/**
 * TerminalLine — parses a line of terminal text and applies
 * syntax-highlighting spans using the midnight violet palette.
 *
 * Patterns matched (in priority order):
 *  1. Separators  (------)           → dim
 *  2. Quoted strings ("..." / '...')  → golden
 *  3. JS keywords (function, return)  → mauve (keyword)
 *  4. Function names (after function) → cyan
 *  5. Commands (echo, cat, npm, ...)  → mauve (keyword)
 *  6. Flags (--verbose, -rf)          → lavender (property)
 *  7. Brackets / parens  { } ( )      → operator color
 *  8. Section headers (Frontend:)     → peony (component)
 *  9. List bullets (- item)           → cyan bullet + text
 */

const COMMANDS = [
  'echo', 'cat', 'ls', 'cd', 'mkdir', 'rm', 'cp', 'mv', 'grep',
  'find', 'chmod', 'curl', 'wget', 'npm', 'node', 'git', 'type',
  'help', 'clear', 'exit', 'sudo', 'ssh', 'touch', 'pwd', 'man',
];

const JS_KEYWORDS = [
  'function', 'return', 'const', 'let', 'var', 'if', 'else',
  'for', 'while', 'import', 'export', 'default', 'class', 'new',
  'this', 'async', 'await', 'try', 'catch', 'throw',
];

const COMMAND_PATTERN = new RegExp(
  `^(${COMMANDS.join('|')})(?=\\s|$)`
);

// Matches: quoted strings, JS keywords (word-bounded), flags, brackets/parens
const TOKEN_PATTERN = new RegExp(
  `("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'` +                 // strings
  `|\\b(${JS_KEYWORDS.join('|')})\\b` +                             // JS keywords
  `|--?\\w[\\w-]*` +                                                // flags
  `|[{}()])`,                                                        // brackets & parens
  'g'
);

const JS_KEYWORD_SET = new Set(JS_KEYWORDS);

function tokenize(text) {
  // Separator lines (all dashes)
  if (/^-{3,}$/.test(text.trim())) {
    return [{ type: 'separator', value: text }];
  }

  // Section headers — word(s) ending with a colon
  if (/^[\w\s&/]+:$/.test(text.trim())) {
    return [{ type: 'header', value: text }];
  }

  // List items — starts with "- "
  if (/^-\s/.test(text.trim())) {
    const rest = text.trim().slice(2);
    const tokens = [{ type: 'bullet', value: '- ' }];
    // Parse the rest for brackets/parens in list items too
    tokenizeInline(rest, tokens);
    return tokens;
  }

  const tokens = [];
  let remaining = text;

  // Check for a leading shell command keyword
  const cmdMatch = remaining.match(COMMAND_PATTERN);
  if (cmdMatch) {
    tokens.push({ type: 'command', value: cmdMatch[0] });
    remaining = remaining.slice(cmdMatch[0].length);
  }

  tokenizeInline(remaining, tokens);
  return tokens;
}

function tokenizeInline(text, tokens) {
  TOKEN_PATTERN.lastIndex = 0;
  let lastIndex = 0;
  let match;

  while ((match = TOKEN_PATTERN.exec(text)) !== null) {
    // Plain text before this match
    if (match.index > lastIndex) {
      const before = text.slice(lastIndex, match.index);
      tokens.push({ type: 'text', value: before });
    }

    const val = match[0];

    if (val.startsWith('"') || val.startsWith("'")) {
      tokens.push({ type: 'string', value: val });
    } else if (JS_KEYWORD_SET.has(val)) {
      tokens.push({ type: 'keyword', value: val });
      // If it's "function", peek ahead for the function name
      if (val === 'function') {
        const after = text.slice(TOKEN_PATTERN.lastIndex);
        const nameMatch = after.match(/^(\s+)(\w+)/);
        if (nameMatch) {
          tokens.push({ type: 'text', value: nameMatch[1] });
          tokens.push({ type: 'funcName', value: nameMatch[2] });
          TOKEN_PATTERN.lastIndex += nameMatch[0].length;
        }
      }
    } else if (val === '{' || val === '}' || val === '(' || val === ')') {
      tokens.push({ type: 'bracket', value: val });
    } else {
      tokens.push({ type: 'flag', value: val });
    }

    lastIndex = TOKEN_PATTERN.lastIndex;
  }

  // Trailing plain text
  if (lastIndex < text.length) {
    tokens.push({ type: 'text', value: text.slice(lastIndex) });
  }
}

const CLASS_MAP = {
  separator: 'syn-separator',
  header:    'syn-header',
  command:   'syn-command',
  keyword:   'syn-keyword',
  funcName:  'syn-func-name',
  string:    'syn-string',
  flag:      'syn-flag',
  bullet:    'syn-bullet',
  bracket:   'syn-bracket',
  text:      null,
};

function TerminalLine({ text }) {
  const tokens = tokenize(text);

  return (
    <>
      {tokens.map((token, i) => {
        const cls = CLASS_MAP[token.type];
        return cls
          ? <span key={i} className={cls}>{token.value}</span>
          : <span key={i}>{token.value}</span>;
      })}
    </>
  );
}

export default TerminalLine;
