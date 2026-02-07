/**
 * Midnight Violet — custom Prism theme for react-syntax-highlighter
 *
 * Palette
 * ───────────────────────────────────────────
 * Background       #0C0020   Midnight Violet
 * Background Alt   #1a0f2e   Cards / panels
 * Text Primary     #e4dff7   Default code text
 * Text Secondary   #9d8fb8   Comments
 * Text Dim         #6b5b7a   Line numbers
 * Border           #2d1f3d   Subtle borders
 *
 * Keywords         #C468FF   Mauve
 * Functions        #58DBE4   Cyan
 * Strings          #f0c674   Golden
 * Components       #FF57F7   Peony
 * Properties       #B88AFF   Lavender
 * Operators        #e4dff7   Light
 * ───────────────────────────────────────────
 */

export const midnightVioletTheme = {
  // ── Base ──────────────────────────────────
  'code[class*="language-"]': {
    color: '#e4dff7',
    background: '#0C0020',
    fontFamily: '"Source Code Pro", "Fira Code", "Consolas", monospace',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 2,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#e4dff7',
    background: '#0C0020',
    fontFamily: '"Source Code Pro", "Fira Code", "Consolas", monospace',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 2,
    hyphens: 'none',
    padding: '1rem',
    margin: 0,
    overflow: 'auto',
  },

  // ── Comments & Documentation ──────────────
  comment:  { color: '#9d8fb8', fontStyle: 'italic' },
  prolog:   { color: '#9d8fb8' },
  doctype:  { color: '#9d8fb8' },
  cdata:    { color: '#9d8fb8' },

  // ── Punctuation ───────────────────────────
  punctuation: { color: '#e4dff7' },

  // ── Namespace (dimmed) ────────────────────
  namespace: { opacity: 0.7 },

  // ── Keywords ── #C468FF Mauve ─────────────
  keyword:  { color: '#C468FF' },
  atrule:   { color: '#C468FF' },
  'attr-value': { color: '#f0c674' },

  // ── Functions ── #58DBE4 Cyan ─────────────
  function: { color: '#58DBE4' },
  builtin:  { color: '#58DBE4' },

  // ── Strings ── #f0c674 Golden ─────────────
  string: { color: '#f0c674' },
  char:   { color: '#f0c674' },
  regex:  { color: '#f0c674' },
  'template-string':           { color: '#f0c674' },
  'template-punctuation':      { color: '#C468FF' },

  // ── Components / Tags ── #FF57F7 Peony ────
  'class-name': { color: '#FF57F7' },
  tag:          { color: '#FF57F7' },
  selector:     { color: '#FF57F7' },
  'maybe-class-name': { color: '#FF57F7' },

  // ── Properties ── #B88AFF Lavender ────────
  property:    { color: '#B88AFF' },
  'attr-name': { color: '#B88AFF' },
  variable:    { color: '#B88AFF' },
  parameter:   { color: '#B88AFF' },

  // ── Numbers / Constants ── Cyan ───────────
  number:   { color: '#58DBE4' },
  boolean:  { color: '#58DBE4' },
  constant: { color: '#58DBE4' },
  symbol:   { color: '#58DBE4' },

  // ── Operators ── Light ────────────────────
  operator: { color: '#e4dff7' },
  entity:   { color: '#e4dff7', cursor: 'help' },
  url:      { color: '#58DBE4' },

  // ── CSS-specific overrides ────────────────
  '.language-css .token.string': { color: '#f0c674' },
  '.style .token.string':        { color: '#f0c674' },

  // ── Diff markers ──────────────────────────
  inserted: { color: '#5af78e' },
  deleted:  { color: '#ff6b6b' },

  // ── Emphasis ──────────────────────────────
  important: { color: '#ff6b6b', fontWeight: 'bold' },
  bold:      { fontWeight: 'bold' },
  italic:    { fontStyle: 'italic' },
};

/** Line-number styling to pair with the theme */
export const midnightVioletLineNumbers = {
  color: '#6b5b7a',
  paddingRight: '1rem',
  borderRight: '1px solid #2d1f3d',
  minWidth: '3ch',
  userSelect: 'none',
};
