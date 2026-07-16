/* @ds-bundle: {"format":4,"namespace":"SupernomicDesignSystem_8d0f5d","components":[{"name":"ActionRow","sourcePath":"components/case/ActionRow.jsx"},{"name":"DecisionOption","sourcePath":"components/case/DecisionOption.jsx"},{"name":"DecisionStack","sourcePath":"components/case/DecisionStack.jsx"},{"name":"DisclosureLine","sourcePath":"components/case/DisclosureLine.jsx"},{"name":"ProposalCard","sourcePath":"components/case/ProposalCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/case/QuoteBlock.jsx"},{"name":"SectionRule","sourcePath":"components/case/SectionRule.jsx"},{"name":"ArtifactChip","sourcePath":"components/context/ArtifactChip.jsx"},{"name":"AskAgentButton","sourcePath":"components/context/AskAgentButton.jsx"},{"name":"FieldRow","sourcePath":"components/context/FieldRow.jsx"},{"name":"LinkOutCard","sourcePath":"components/context/LinkOutCard.jsx"},{"name":"PanelSection","sourcePath":"components/context/PanelSection.jsx"},{"name":"SourceChip","sourcePath":"components/context/SourceChip.jsx"},{"name":"ThreadedComment","sourcePath":"components/context/ThreadedComment.jsx"},{"name":"TranscriptMessage","sourcePath":"components/context/TranscriptMessage.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"KeyHint","sourcePath":"components/core/KeyHint.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"CaseTab","sourcePath":"components/inbox/CaseTab.jsx"},{"name":"CommandBar","sourcePath":"components/inbox/CommandBar.jsx"},{"name":"Meter","sourcePath":"components/inbox/Meter.jsx"},{"name":"ThreadRow","sourcePath":"components/inbox/ThreadRow.jsx"},{"name":"Sweep","sourcePath":"components/motion/Sweep.jsx"},{"name":"CommandPalette","sourcePath":"components/navigation/CommandPalette.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"MetricTile","sourcePath":"components/surfaces/MetricTile.jsx"}],"sourceHashes":{"components/case/ActionRow.jsx":"42acdef9c3f3","components/case/DecisionOption.jsx":"35f134fa40de","components/case/DecisionStack.jsx":"af4b000d9902","components/case/DisclosureLine.jsx":"1fd7fb7e2275","components/case/ProposalCard.jsx":"1d907560712d","components/case/QuoteBlock.jsx":"a1d74d260f90","components/case/SectionRule.jsx":"327c692c3152","components/context/ArtifactChip.jsx":"1c521a9b8847","components/context/AskAgentButton.jsx":"335aabb2102e","components/context/FieldRow.jsx":"9001d88d83af","components/context/LinkOutCard.jsx":"3ac013931c39","components/context/PanelSection.jsx":"da9583740b24","components/context/SourceChip.jsx":"2460f1a57386","components/context/ThreadedComment.jsx":"01ef983329b8","components/context/TranscriptMessage.jsx":"93261f203a95","components/core/Badge.jsx":"9f80067c725b","components/core/Button.jsx":"6c70d9e9d013","components/core/Icon.jsx":"6d43d73c862a","components/core/KeyHint.jsx":"cdc28d5111ed","components/core/StatusDot.jsx":"e3e71c6207a9","components/forms/Input.jsx":"21c3fbdf4d01","components/forms/Select.jsx":"270f51319d75","components/inbox/CaseTab.jsx":"dacde62c1cde","components/inbox/CommandBar.jsx":"c111fe72bf90","components/inbox/Meter.jsx":"b3e0f125df79","components/inbox/ThreadRow.jsx":"3f2e894de1f8","components/motion/Sweep.jsx":"33b73f990ac0","components/navigation/CommandPalette.jsx":"dc3ad17c9d20","components/surfaces/Card.jsx":"a44059bce37d","components/surfaces/MetricTile.jsx":"99258f6e310c","ui_kits/action-inbox/app.jsx":"da2473287268","ui_kits/action-inbox/case.jsx":"7298a0c9dfa5","ui_kits/action-inbox/data.jsx":"e2de99cabc35","ui_kits/action-inbox/inbox.jsx":"7d7416785d6d","ui_kits/console/app.jsx":"aba166a75c1d","ui_kits/console/screens.jsx":"3373379a8d64","ui_kits/console/shell.jsx":"7f1f7e762e88","ui_kits/marketing/site.jsx":"434750aa97bd"},"inlinedExternals":[],"unexposedExports":[{"name":"playSweep","sourcePath":"components/motion/Sweep.jsx"}]} */

(() => {

const __ds_ns = (window.SupernomicDesignSystem_8d0f5d = window.SupernomicDesignSystem_8d0f5d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/case/ActionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HINT = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 11,
  color: 'var(--text-secondary)',
  background: 'var(--surface-panel-light)',
  border: '1px solid var(--border-light-strong)',
  borderRadius: 5,
  padding: '3px 7px',
  lineHeight: 1,
  minWidth: 10,
  textAlign: 'center'
};

/**
 * ActionRow — the steering strip closing the decision stack: secondary moves
 * (reply / steer / take over / dismiss) with bordered hotkey chips, plus a
 * dashed-rule "act via" footer naming the channels a reply can go through.
 */
function ActionRow({
  actions = [],
  via,
  viaKey,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '14px 22px',
      flexWrap: 'wrap'
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: a.onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: a.onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      letterSpacing: '-0.26px',
      color: 'var(--text-primary)'
    }
  }, a.label, a.keys && (Array.isArray(a.keys) ? a.keys : [a.keys]).map((k, j) => /*#__PURE__*/React.createElement("kbd", {
    key: j,
    style: HINT
  }, k))))), via && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 22px',
      borderTop: '1px dashed var(--border-light-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-muted)'
    }
  }, via), viaKey && /*#__PURE__*/React.createElement("kbd", {
    style: HINT
  }, viaKey)));
}
Object.assign(__ds_scope, { ActionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ActionRow.jsx", error: String((e && e.message) || e) }); }

// components/case/DecisionOption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HINT = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 11,
  color: 'var(--text-secondary)',
  background: 'var(--surface-panel-light)',
  border: '1px solid var(--border-light-strong)',
  borderRadius: 5,
  padding: '4px 8px',
  lineHeight: 1,
  minWidth: 12,
  textAlign: 'center'
};

/**
 * DecisionOption — one row of the decision stack: mono kind label, large
 * Geist action sentence, optional rationale, bordered hotkey chip right.
 * Selecting one moves the case AND records a training signal.
 */
function DecisionOption({
  kind,
  title,
  desc,
  keys,
  selected = false,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onSelect,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 20,
      padding: '18px 22px',
      cursor: onSelect ? 'pointer' : 'default',
      background: selected ? 'var(--surface-well-light)' : 'transparent',
      transition: 'background-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-muted)'
    }
  }, kind), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 18,
      letterSpacing: '-0.36px',
      lineHeight: 1.25,
      color: 'var(--text-primary)'
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      lineHeight: 1.45,
      letterSpacing: '-0.14px',
      color: 'var(--text-muted)'
    }
  }, desc)), keys && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 4,
      flex: 'none',
      marginTop: 2
    }
  }, (Array.isArray(keys) ? keys : [keys]).map((k, i) => /*#__PURE__*/React.createElement("kbd", {
    key: i,
    style: HINT
  }, k))));
}
Object.assign(__ds_scope, { DecisionOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/DecisionOption.jsx", error: String((e && e.message) || e) }); }

// components/case/DecisionStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DecisionStack — the bordered container for the decision: three stacked
 * DecisionOption rows (recommended / variant / alternative) divided by
 * hairlines, with the ActionRow steering strip as its final child.
 */
function DecisionStack({
  children,
  style,
  ...rest
}) {
  const kids = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-light-strong)',
      borderRadius: 'var(--radius-cards)',
      background: 'var(--surface-panel-light)',
      overflow: 'hidden',
      ...style
    }
  }, rest), kids.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: i ? {
      borderTop: '1px solid var(--border-light)'
    } : null
  }, k)));
}
Object.assign(__ds_scope, { DecisionStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/DecisionStack.jsx", error: String((e && e.message) || e) }); }

// components/case/DisclosureLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HINT = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 11,
  color: 'var(--text-secondary)',
  background: 'var(--surface-panel-light)',
  border: '1px solid var(--border-light-strong)',
  borderRadius: 5,
  padding: '3px 7px',
  lineHeight: 1,
  minWidth: 10,
  textAlign: 'center'
};

/**
 * DisclosureLine — collapsed evidence rows on the case page ("Why … 3
 * signals [i]", "Sources 6 examined [s]") with a caret, mono summary, and a
 * bordered hotkey chip.
 */
function DisclosureLine({
  label,
  summary,
  keys,
  open = false,
  onToggle,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: onToggle ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 9,
      color: 'var(--text-muted)',
      transform: open ? 'rotate(90deg)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: '-0.15px',
      color: 'var(--text-primary)'
    }
  }, label), summary && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      letterSpacing: '-0.26px',
      color: 'var(--text-muted)'
    }
  }, summary), keys && /*#__PURE__*/React.createElement("kbd", {
    style: HINT
  }, keys)), open && children && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0 0 24px',
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { DisclosureLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/DisclosureLine.jsx", error: String((e && e.message) || e) }); }

// components/case/ProposalCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProposalCard — the authoritative "Exact proposed action" record: a quiet
 * mono record block (hairline outline + header rule, no fill) listing the
 * fields the agent will execute verbatim.
 */
function ProposalCard({
  title = 'Exact proposed action',
  subtitle,
  status,
  statusTone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-muted)',
      borderColor: 'var(--border-light-strong)'
    },
    recorded: {
      color: 'var(--accent-requester)',
      borderColor: 'color-mix(in srgb, var(--accent-requester) 40%, transparent)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-light-strong)',
      borderRadius: 'var(--radius-cards)',
      background: 'var(--surface-panel-light)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 20px',
      borderBottom: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.22px',
      color: 'var(--text-muted)'
    }
  }, title), status && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '-0.2px',
      padding: '3px 9px',
      borderRadius: 999,
      border: '1px solid',
      ...tones[statusTone]
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      letterSpacing: '-0.26px',
      lineHeight: 1.8,
      color: 'var(--text-secondary)'
    }
  }, children), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 14px',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      letterSpacing: '-0.22px',
      color: 'var(--text-muted)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { ProposalCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ProposalCard.jsx", error: String((e && e.message) || e) }); }

// components/case/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * QuoteBlock — the requester's message with provenance: green avatar,
 * mono name, origin-system chip (orange dot), routing chain ("❯ TechOps
 * agent"), and current state. Hairline left bar; body in mid gray.
 */
function QuoteBlock({
  initials,
  name,
  via,
  route,
  status,
  children,
  style,
  ...rest
}) {
  const mono = {
    fontFamily: 'var(--font-geist-mono)',
    letterSpacing: '-0.26px'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderLeft: '2px solid var(--border-light-strong)',
      padding: '2px 0 2px 22px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, initials && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--accent-requester)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, name), via && /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 13,
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 5,
      padding: '3px 9px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 1,
      transform: 'rotate(45deg)',
      background: 'var(--color-signal-orange)'
    }
  }), via), route && /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "\u276F ", route), status && /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 17,
      lineHeight: 1.5,
      letterSpacing: '-0.17px',
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/case/SectionRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionRule — numbered case-section header: "01 — Signal" in mono ink with
 * a hairline rule stretching right. Orange dot marks the section that needs
 * the operator now; optional right-side meta.
 */
function SectionRule({
  index,
  label,
  active = false,
  meta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      ...style
    }
  }, rest), active && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-live)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      letterSpacing: '-0.26px',
      color: 'var(--text-primary)',
      flex: 'none'
    }
  }, index, " \u2014 ", label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-light)'
    }
  }), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.22px',
      color: 'var(--text-muted)'
    }
  }, meta));
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/context/ArtifactChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArtifactChip — a shared artifact (file, image, link) attached to a
 * conversation message: kind glyph + mono name + meta. Hairline outline.
 */
function ArtifactChip({
  kind = 'file',
  name,
  meta,
  style,
  ...rest
}) {
  const glyphs = {
    file: '▤',
    image: '▦',
    link: '↗'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 5,
      background: 'var(--surface-panel-light)',
      cursor: 'pointer',
      maxWidth: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, glyphs[kind] || glyphs.file), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      flex: 'none'
    }
  }, meta));
}
Object.assign(__ds_scope, { ArtifactChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/ArtifactChip.jsx", error: String((e && e.message) || e) }); }

// components/context/AskAgentButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AskAgentButton — the floating "Ask Ragnar" affordance: white pill with a
 * hairline border and an orange live dot, pinned bottom-right above the
 * command bar.
 */
function AskAgentButton({
  label = 'Ask Ragnar',
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 22px',
      background: 'var(--surface-panel-light)',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 'var(--radius-cards)',
      cursor: 'pointer',
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 15,
      letterSpacing: '-0.15px',
      color: 'var(--text-primary)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent-live)'
    }
  }), label);
}
Object.assign(__ds_scope, { AskAgentButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/AskAgentButton.jsx", error: String((e && e.message) || e) }); }

// components/context/LinkOutCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LinkOutCard — a device/app/record card in the context panel: name + meta,
 * "Open in <system> ↗" link-out. Hairline outline on the light surface.
 */
function LinkOutCard({
  name,
  meta,
  system,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-panel-light)',
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '-0.14px',
      color: 'var(--text-primary)'
    }
  }, name, meta && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, " \xB7 ", meta)), system && /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      letterSpacing: '-0.22px',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, "Open in ", system, " \u2197"));
}
Object.assign(__ds_scope, { LinkOutCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/LinkOutCard.jsx", error: String((e && e.message) || e) }); }

// components/context/PanelSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PanelSection — a titled block of the context panel: icon + mono heading,
 * then rows.
 */
function PanelSection({
  icon,
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '18px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 12
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.22px',
      color: 'var(--text-muted)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { PanelSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/PanelSection.jsx", error: String((e && e.message) || e) }); }

// components/context/SourceChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SourceChip — provenance dot + system name in mono ("● okta"). Every fact
 * carries one: it names the system of record. Orange marks Supernomic-derived.
 */
function SourceChip({
  source,
  extra,
  tone = 'neutral',
  style,
  ...rest
}) {
  const dot = tone === 'live' ? 'var(--accent-live)' : 'var(--text-muted)';
  const text = tone === 'live' ? 'var(--accent-live)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      letterSpacing: '-0.22px',
      color: text,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: dot,
      flex: 'none'
    }
  }), source, extra && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, " \xB7 ", extra));
}
Object.assign(__ds_scope, { SourceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/SourceChip.jsx", error: String((e && e.message) || e) }); }

// components/context/FieldRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FieldRow — one fact in the context panel: mono label, ink value,
 * provenance chip right.
 */
function FieldRow({
  label,
  value,
  source,
  sourceExtra,
  sourceTone,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      padding: '7px 0',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.22px',
      color: 'var(--text-muted)',
      width: 76,
      flex: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: '-0.14px',
      color: 'var(--text-primary)',
      minWidth: 0
    }
  }, value), source && /*#__PURE__*/React.createElement(__ds_scope.SourceChip, {
    source: source,
    extra: sourceExtra,
    tone: sourceTone,
    style: {
      flex: 'none'
    }
  }));
}
Object.assign(__ds_scope, { FieldRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/FieldRow.jsx", error: String((e && e.message) || e) }); }

// components/context/ThreadedComment.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ThreadedComment — one comment in the case discussion, with nested replies
 * on a hairline rail (reddit/discord-style). Nest via `replies`.
 */
function ThreadedComment({
  author,
  time,
  tag,
  replies,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '10px 0 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-primary)'
    }
  }, author), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '-0.2px',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 5,
      padding: '2px 6px'
    }
  }, tag), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      letterSpacing: '-0.22px',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, "reply")), replies && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: '1px solid var(--border-light)'
    }
  }, replies));
}
Object.assign(__ds_scope, { ThreadedComment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/ThreadedComment.jsx", error: String((e && e.message) || e) }); }

// components/context/TranscriptMessage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TranscriptMessage — one turn of the pre-handover conversation between the
 * requester and the agent: role-coded speaker line, body, shared artifacts.
 */
function TranscriptMessage({
  author,
  role = 'requester',
  time,
  artifacts = [],
  children,
  style,
  ...rest
}) {
  const dots = {
    agent: 'var(--accent-live)',
    requester: 'var(--accent-requester)',
    system: 'var(--border-light-strong)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '14px 0',
      borderBottom: '1px solid var(--border-light)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: dots[role] || dots.requester,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-primary)'
    }
  }, author), role === 'agent' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '-0.2px',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 5,
      padding: '2px 6px'
    }
  }, "agent"), time && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      flex: 'none'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      marginLeft: 13,
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, children), artifacts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 10,
      marginLeft: 13
    }
  }, artifacts.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.ArtifactChip, {
    key: i,
    kind: a.kind,
    name: a.name,
    meta: a.meta
  }))));
}
Object.assign(__ds_scope, { TranscriptMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/context/TranscriptMessage.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small mono label for status tags and categories.
 * Neutral by default; accent tones tint text/border only (never a solid fill).
 */
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-subtle)',
      borderColor: 'var(--border-hairline)'
    },
    live: {
      color: 'var(--accent-live)',
      borderColor: 'color-mix(in srgb, var(--accent-live) 45%, transparent)'
    },
    positive: {
      color: 'var(--accent-positive)',
      borderColor: 'color-mix(in srgb, var(--accent-positive) 45%, transparent)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid',
      background: 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Supernomic Button — neutral-chrome action control.
 * Chromatic accents are never used as fills; the primary action is a dark
 * neutral fill, secondary is a light fill, ghost is a hairline outline.
 */
function Button({
  variant = 'primary',
  size = 'md',
  shortcut,
  as: Tag = 'button',
  children,
  style,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-geist)',
    fontWeight: 400,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-buttons)',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    transition: 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
  };
  const sizes = {
    sm: {
      fontSize: '13px',
      height: '32px',
      padding: '0 12px'
    },
    md: {
      fontSize: '14px',
      height: '40px',
      padding: '0 16px'
    },
    lg: {
      fontSize: '16px',
      height: '48px',
      padding: '0 20px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)'
    },
    light: {
      background: 'var(--btn-contrast-bg)',
      color: 'var(--btn-contrast-text)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-hairline)'
    }
  };
  const chipStyle = {
    fontFamily: 'var(--font-geist-mono)',
    fontSize: '11px',
    padding: '2px 5px',
    borderRadius: 'var(--radius-sm)',
    lineHeight: 1,
    background: 'color-mix(in srgb, currentColor 10%, transparent)',
    border: '1px solid color-mix(in srgb, currentColor 16%, transparent)',
    color: 'inherit',
    opacity: 0.85
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children, shortcut && /*#__PURE__*/React.createElement("kbd", {
    style: chipStyle
  }, shortcut));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper around the Lucide icon set (substituted; see readme
 * ICONOGRAPHY). Requires the Lucide UMD script to be loaded on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 * Renders the named glyph as an inline stroke SVG using currentColor.
 */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lib = typeof window !== 'undefined' ? window.lucide : null;
    const node = ref.current;
    if (!lib || !node) return;
    const icons = lib.icons || {};
    const toPascal = s => s.split(/[-_]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const factory = icons[toPascal(name)] || icons[name];
    node.innerHTML = '';
    if (factory && lib.createElement) {
      const svg = lib.createElement(factory);
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      node.appendChild(svg);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "data-icon": name,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: 'currentColor',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/KeyHint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KeyHint — renders one or more keyboard keys as mono kbd chips.
 * The signature primitive of Supernomic's hotkey-first surface.
 */
function KeyHint({
  keys,
  size = 'md',
  tone = 'dark',
  style,
  ...rest
}) {
  const list = Array.isArray(keys) ? keys : String(keys).split('+');
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '2px 5px',
      minWidth: '16px'
    },
    md: {
      fontSize: '12px',
      padding: '3px 7px',
      minWidth: '20px'
    }
  };
  const tones = {
    dark: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-primary)'
    },
    light: {
      background: 'color-mix(in srgb, var(--text-on-card) 6%, transparent)',
      border: '1px solid color-mix(in srgb, var(--text-on-card) 16%, transparent)',
      color: 'var(--text-on-card)'
    }
  };
  const chip = {
    fontFamily: 'var(--font-geist-mono)',
    borderRadius: 'var(--radius-sm)',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    ...sizes[size],
    ...tones[tone]
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      gap: '4px',
      ...style
    }
  }, rest), list.map((k, i) => /*#__PURE__*/React.createElement("kbd", {
    key: i,
    style: chip
  }, k)));
}
Object.assign(__ds_scope, { KeyHint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KeyHint.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusDot — 6px filled circle used before status labels.
 * The one chromatic glyph in the chrome: signal-orange for live, metric-green
 * for healthy, granite for idle.
 */
function StatusDot({
  status = 'live',
  pulse = false,
  size = 6,
  style,
  ...rest
}) {
  const colors = {
    live: 'var(--accent-live)',
    healthy: 'var(--accent-positive)',
    idle: 'var(--text-muted)',
    error: 'var(--accent-live)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      background: colors[status] || colors.idle,
      boxShadow: pulse ? `0 0 0 3px color-mix(in srgb, ${colors[status]} 22%, transparent)` : 'none',
      flex: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — dark-surface text field. Carbon fill, hairline ash border, crisp
 * bone focus ring (never removed — the surface is keyboard-first). Optional
 * leading slot and trailing kbd hint.
 */
function Input({
  leading,
  hint,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--field-bg)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '0 12px',
      height: '40px',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...wrapStyle
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-geist)',
      fontSize: '14px',
      letterSpacing: '-0.01em',
      minWidth: 0,
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)',
      background: 'transparent',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 5px',
      lineHeight: 1
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — dark-surface native select styled to match the system. Carbon fill,
 * hairline border, mono-adjacent caret. Uses the native menu for accessibility.
 */
function Select({
  children,
  style,
  wrapStyle,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      ...wrapStyle
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'var(--field-bg)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-geist)',
      fontSize: '14px',
      letterSpacing: '-0.01em',
      height: '40px',
      padding: '0 34px 0 12px',
      cursor: 'pointer',
      outline: 'none',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '11px'
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/inbox/CaseTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KBD = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 10,
  color: 'var(--text-muted)',
  lineHeight: 1
};

/**
 * CaseTab — a tab in the top strip: status dot, mono case id + title,
 * ⌘n hint, optional close. Active tab is a white bordered pill.
 */
function CaseTab({
  label,
  dot,
  active = false,
  hint,
  onClose,
  icon,
  style,
  ...rest
}) {
  const dotColors = {
    pending: 'var(--accent-live)',
    warn: '#e0a83c',
    done: 'var(--accent-requester)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 34,
      padding: '0 12px',
      borderRadius: 'var(--radius-nav)',
      cursor: 'pointer',
      maxWidth: 260,
      flex: 'none',
      background: active ? 'var(--surface-panel-light)' : 'transparent',
      border: `1px solid ${active ? 'var(--border-light-strong)' : 'transparent'}`,
      transition: 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, icon), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      flex: 'none',
      background: dotColors[dot] || dotColors.pending
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      letterSpacing: '-0.26px',
      color: active ? 'var(--text-primary)' : 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: KBD
  }, hint), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onClose();
    },
    style: {
      ...KBD,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { CaseTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inbox/CaseTab.jsx", error: String((e && e.message) || e) }); }

// components/inbox/CommandBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KBD = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 11,
  color: 'var(--text-secondary)',
  background: 'var(--surface-panel-light)',
  border: '1px solid var(--border-light-strong)',
  borderRadius: 5,
  padding: '3px 7px',
  lineHeight: 1,
  minWidth: 10,
  textAlign: 'center'
};

/**
 * CommandBar — the persistent footer prompt of the Action Inbox: an orange
 * ">" caret, a type-to-act field, and a right-aligned hotkey legend.
 */
function CommandBar({
  placeholder = 'Type to act — @ people · / commands · # tools',
  legend = [],
  inputRef,
  onSubmit,
  style,
  ...rest
}) {
  const [v, setV] = React.useState('');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      height: 56,
      padding: '0 20px',
      background: 'var(--surface-page-light)',
      borderTop: '1px solid var(--border-light)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 15,
      color: 'var(--accent-live)'
    }
  }, ">"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: v,
    onChange: e => setV(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && onSubmit) {
        onSubmit(v);
        setV('');
      }
    },
    placeholder: placeholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      letterSpacing: '-0.26px',
      color: 'var(--text-primary)',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flex: 'none'
    }
  }, legend.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, l.label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-muted)'
    }
  }, l.label), (Array.isArray(l.keys) ? l.keys : [l.keys]).map((k, j) => /*#__PURE__*/React.createElement("kbd", {
    key: j,
    style: KBD
  }, k))))));
}
Object.assign(__ds_scope, { CommandBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inbox/CommandBar.jsx", error: String((e && e.message) || e) }); }

// components/inbox/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Meter — the glance signal on every inbox row. Confidence renders as a thin
 * dash + mono label; time-like measures (SLA remaining, last update) pass
 * bar={false} and render as a plain mono label — a progress bar only makes
 * sense for a 0–100 quantity.
 */
function Meter({
  value = 0,
  label,
  tone = 'neutral',
  width = 40,
  bar = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fills = {
    neutral: 'var(--text-primary)',
    critical: 'var(--accent-live)',
    positive: 'var(--accent-requester)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, rest), bar && /*#__PURE__*/React.createElement("span", {
    style: {
      width,
      height: 4,
      borderRadius: 2,
      background: 'var(--border-light)',
      overflow: 'hidden',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: `${pct}%`,
      height: '100%',
      borderRadius: 2,
      background: fills[tone] || fills.neutral
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: !bar && tone === 'critical' ? 'var(--accent-live)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, label != null ? label : `${pct}%`));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inbox/Meter.jsx", error: String((e && e.message) || e) }); }

// components/inbox/ThreadRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HINT = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 11,
  color: 'var(--text-secondary)',
  background: 'var(--surface-panel-light)',
  border: '1px solid var(--border-light-strong)',
  borderRadius: 5,
  padding: '3px 7px',
  lineHeight: 1,
  minWidth: 10,
  textAlign: 'center'
};

/**
 * ThreadRow — one actionable case in the inbox list. Ink title + mono
 * provenance path (agent / channel / requester / id / state), the action verb
 * with its hotkey, and a configurable Meter (confidence / SLA / freshness).
 * Focused row lifts to the bone well with an ink edge.
 */
function ThreadRow({
  title,
  path = [],
  verb,
  verbKey,
  meter,
  focused = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      padding: '18px 20px',
      cursor: 'pointer',
      background: focused ? 'var(--surface-well-light)' : 'transparent',
      borderLeft: `2px solid ${focused ? 'var(--text-primary)' : 'transparent'}`,
      borderRadius: focused ? '0 var(--radius-sm) var(--radius-sm) 0' : 0,
      transition: 'background-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: '-0.32px',
      color: 'var(--text-primary)',
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), verb && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.22px',
      color: 'var(--text-secondary)'
    }
  }, verb), verbKey && /*#__PURE__*/React.createElement("kbd", {
    style: HINT
  }, verbKey)), meter && /*#__PURE__*/React.createElement(__ds_scope.Meter, {
    value: meter.value,
    bar: meter.bar,
    label: meter.label,
    tone: meter.tone,
    style: {
      flex: 'none'
    }
  })), path.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      color: 'var(--text-muted)'
    }
  }, path.join(' / ')));
}
Object.assign(__ds_scope, { ThreadRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inbox/ThreadRow.jsx", error: String((e && e.message) || e) }); }

// components/motion/Sweep.jsx
try { (() => {
/**
 * Supernomic Sweep — a single shader-driven band that sweeps across the screen
 * as punctuation for completed actions and section-level page transitions.
 * WebGL, one fullscreen overlay canvas, self-removing. Respects
 * prefers-reduced-motion (skips straight to the midpoint callback).
 */

const PALETTES = {
  // cosine palettes: color(t) = a + b*cos(2π(c*t + d)), tuned to the brand.
  // d ≈ 0.5 puts the BRIGHT peak at the band center (t = 0.5) with dark edges.
  ember: {
    a: [0.515, 0.21, 0.055],
    b: [0.415, 0.17, 0.035],
    c: [1, 1, 1],
    d: [0.50, 0.53, 0.58]
  },
  // signal orange
  bone: {
    a: [0.50, 0.50, 0.50],
    b: [0.43, 0.43, 0.43],
    c: [1, 1, 1],
    d: [0.50, 0.51, 0.52]
  },
  // monochrome chalk
  moss: {
    a: [0.34, 0.42, 0.31],
    b: [0.29, 0.37, 0.26],
    c: [1, 1, 1],
    d: [0.50, 0.52, 0.55]
  } // metric green
};
const EASINGS = {
  linear: p => p,
  ease: p => p * p * (3 - 2 * p),
  easeOutQuart: p => 1 - Math.pow(1 - p, 4),
  easeInCubic: p => p * p * p,
  easeInOutCubic: p => p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2,
  easeOutExpo: p => p >= 1 ? 1 : 1 - Math.pow(2, -10 * p),
  back: p => {
    const c = 1.70158;
    return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2);
  },
  snap: p => p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
};
const VERT = 'attribute vec2 p;varying vec2 v;void main(){v=p*0.5+0.5;gl_Position=vec4(p,0.,1.);}';
const FRAG = `precision mediump float;varying vec2 v;
uniform float uEdge,uTight,uBright,uPeak,uTime,uRipple;uniform int uDir;
uniform vec3 uA,uB,uC,uD;
void main(){
  float axis=uDir==0?v.x:uDir==1?1.0-v.x:uDir==2?1.0-v.y:v.y;
  float crossAxis=uDir<2?v.y:v.x;
  float d=axis-uEdge;
  d+=sin(crossAxis*6.0+uTime*1.4)*0.006*uRipple;
  float alpha=clamp(uPeak*exp(-uTight*10.0*d*d),0.0,1.0);
  float t=clamp(0.5-d*3.0,0.0,1.0);
  vec3 col=(uA+uB*cos(6.2831853*(uC*t+uD)))*uBright;
  gl_FragColor=vec4(col*alpha,alpha);
}`;
let active = null;

/** Imperative trigger. Returns a Promise that resolves when the sweep fully exits. */
function playSweep(opts = {}) {
  if (active) return active;
  const {
    palette = 'ember',
    direction = 'ltr',
    easing = 'easeInOutCubic',
    sweepMs = 800,
    outroMs = 350,
    midpoint = 0.5,
    peakAlpha = 1,
    brightness = 0.85,
    bandTight = 14,
    rippleAmount = 1,
    waveSpeed = 1,
    zIndex = 2147483000,
    onMidpoint
  } = opts;
  const pal = typeof palette === 'string' ? PALETTES[palette] || PALETTES.ember : palette;
  const ease = typeof easing === 'function' ? easing : EASINGS[easing] || EASINGS.easeInOutCubic;
  if (typeof window === 'undefined' || window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (onMidpoint) onMidpoint();
    return Promise.resolve();
  }
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: String(zIndex)
  });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
  document.body.appendChild(canvas);
  const gl = canvas.getContext('webgl', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    preserveDrawingBuffer: true
  });
  if (!gl) {
    canvas.remove();
    if (onMidpoint) onMidpoint();
    return Promise.resolve();
  }
  const sh = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  const u = n => gl.getUniformLocation(prog, n);
  gl.uniform1f(u('uTight'), bandTight);
  gl.uniform1f(u('uBright'), brightness);
  gl.uniform1f(u('uPeak'), peakAlpha);
  gl.uniform1f(u('uRipple'), rippleAmount);
  gl.uniform1i(u('uDir'), {
    ltr: 0,
    rtl: 1,
    ttb: 2,
    btt: 3
  }[direction] || 0);
  gl.uniform3fv(u('uA'), pal.a);
  gl.uniform3fv(u('uB'), pal.b);
  gl.uniform3fv(u('uC'), pal.c);
  gl.uniform3fv(u('uD'), pal.d);
  const uEdge = u('uEdge'),
    uTime = u('uTime');
  const margin = Math.min(0.9, Math.max(0.25, Math.sqrt(8 / (bandTight * 10))));
  const promise = new Promise(resolve => {
    const start = performance.now();
    let midFired = false,
      done = false;
    const fireMid = () => {
      if (!midFired) {
        midFired = true;
        if (onMidpoint) onMidpoint();
      }
    };
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(midT);
      clearTimeout(killT);
      fireMid();
      canvas.remove();
      active = null;
      resolve();
    };
    // rAF can be throttled to zero (hidden tab, offscreen iframe) — time-based
    // safety nets guarantee the midpoint swap fires and the overlay is removed.
    const midT = setTimeout(fireMid, sweepMs * midpoint);
    const killT = setTimeout(finish, sweepMs + outroMs + 200);
    const frame = now => {
      if (done) return;
      const raw = Math.min((now - start) / sweepMs, 1);
      if (raw >= midpoint) fireMid();
      gl.uniform1f(uEdge, -margin + ease(raw) * (1 + 2 * margin));
      gl.uniform1f(uTime, (now - start) / 1000 * waveSpeed);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (raw < 1) {
        requestAnimationFrame(frame);
        return;
      }
      fireMid();
      canvas.style.transition = 'opacity ' + outroMs + 'ms linear';
      canvas.style.opacity = '0';
      setTimeout(finish, outroMs + 40);
    };
    requestAnimationFrame(frame);
  });
  active = promise;
  return promise;
}

/**
 * Declarative wrapper: renders nothing; plays a sweep whenever `playKey`
 * changes to a new non-null value. All playSweep options pass through as props.
 */
function Sweep({
  playKey,
  onMidpoint,
  onDone,
  ...opts
}) {
  const first = React.useRef(true);
  React.useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (playKey == null) return;
    playSweep({
      ...opts,
      onMidpoint
    }).then(() => {
      if (onDone) onDone();
    });
  }, [playKey]);
  return null;
}
Sweep.play = playSweep;
Sweep.palettes = PALETTES;
Object.assign(__ds_scope, { playSweep, Sweep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Sweep.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CommandPalette.jsx
try { (() => {
/**
 * CommandPalette — the ⌘K surface at the heart of Supernomic's hotkey-first UX.
 * A centered bone-outlined dark panel over a dim scrim, with a search field and
 * grouped command rows carrying kbd shortcut hints. Filters as you type.
 */
function CommandPalette({
  open = true,
  groups = [],
  placeholder = 'Type a command or search…',
  onClose,
  onRun
}) {
  const [q, setQ] = React.useState('');
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef(null);
  const flat = [];
  const filtered = groups.map(g => {
    const items = g.items.filter(it => it.label.toLowerCase().includes(q.toLowerCase()));
    items.forEach(it => flat.push(it));
    return {
      ...g,
      items
    };
  }).filter(g => g.items.length);
  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);
  React.useEffect(() => {
    setActive(0);
  }, [q]);
  if (!open) return null;
  const onKey = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(a => Math.min(a + 1, flat.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(a => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      flat[active] && onRun && onRun(flat[active]);
    } else if (e.key === 'Escape') {
      onClose && onClose();
    }
  };
  let idx = -1;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '12vh',
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(92vw, 620px)',
      background: 'var(--overlay-panel)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '0 16px',
      height: '52px',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '13px'
    }
  }, "\u2318"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: onKey,
    placeholder: placeholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-geist)',
      fontSize: '16px',
      letterSpacing: '-0.01em'
    }
  }), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 5px',
      lineHeight: 1
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: '360px',
      overflowY: 'auto',
      padding: '6px'
    }
  }, filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em'
    }
  }, "No matches"), filtered.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px 6px',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--text-muted)'
    }
  }, g.label), g.items.map(it => {
    idx += 1;
    const isActive = idx === active;
    const myIdx = idx;
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      onMouseEnter: () => setActive(myIdx),
      onMouseDown: e => {
        e.preventDefault();
        onRun && onRun(it);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 12px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        background: isActive ? 'color-mix(in srgb, var(--text-primary) 9%, transparent)' : 'transparent',
        transition: 'background-color var(--duration-fast) var(--ease-standard)'
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)',
        display: 'inline-flex'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-geist)',
        fontSize: '14px',
        color: 'var(--text-primary)',
        letterSpacing: '-0.01em'
      }
    }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: '4px'
      }
    }, (Array.isArray(it.shortcut) ? it.shortcut : String(it.shortcut).split('+')).map((k, i) => /*#__PURE__*/React.createElement("kbd", {
      key: i,
      style: {
        fontFamily: 'var(--font-geist-mono)',
        fontSize: '11px',
        color: 'var(--text-subtle)',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-sm)',
        padding: '2px 6px',
        lineHeight: 1
      }
    }, k))));
  }))))));
}
Object.assign(__ds_scope, { CommandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — Supernomic's two surface treatments.
 *  - "light"   : the signature bone (#eeeeee) figure on dark ground, dark text.
 *  - "outline" : dark feature card, implied by a 1px hairline border, no fill.
 * No drop shadows ever; depth is figure/ground contrast.
 */
function Card({
  variant = 'light',
  padding = 24,
  grain = false,
  children,
  style,
  ...rest
}) {
  const variants = {
    light: {
      background: 'var(--surface-card)',
      color: 'var(--text-on-card)',
      border: '1px solid transparent'
    },
    chalk: {
      background: 'var(--surface-card-elevated)',
      color: 'var(--text-on-card)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-divider)'
    }
  };
  const grainBg = grain ? {
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")"
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-cards)',
      padding: typeof padding === 'number' ? `${padding}px` : padding,
      boxShadow: 'none',
      ...variants[variant],
      ...grainBg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MetricTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetricTile — a single data cell for dashboards. Mono uppercase label, large
 * Geist value, optional delta and a 1px sparkline in signal-orange / metric-green.
 */
function MetricTile({
  label,
  value,
  unit,
  delta,
  trend = 'up',
  spark,
  style,
  ...rest
}) {
  const accent = trend === 'down' ? 'var(--accent-live)' : 'var(--accent-positive)';
  const points = Array.isArray(spark) && spark.length > 1 ? spark : null;
  let path = '';
  if (points) {
    const max = Math.max(...points),
      min = Math.min(...points),
      range = max - min || 1;
    path = points.map((p, i) => {
      const x = i / (points.length - 1) * 100;
      const y = 34 - (p - min) / range * 30 - 2;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '20px',
      borderBottom: '1px solid var(--border-divider)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '-0.24px',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: '36px',
      fontWeight: 400,
      letterSpacing: '-1.12px',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '12px',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '12px',
      color: accent,
      marginLeft: 'auto'
    }
  }, delta)), points && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 36",
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: '40px',
      marginTop: '12px',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: accent,
    strokeWidth: "1",
    vectorEffect: "non-scaling-stroke"
  })));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MetricTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/action-inbox/app.jsx
try { (() => {
/* Action Inbox — orchestrator: tabs, keyboard model, command bar. */
const {
  CommandBar,
  AskAgentButton
} = window.SupernomicDesignSystem_8d0f5d;
function App() {
  const [cases, setCases] = React.useState(window.INBOX_CASES.map(c => ({
    ...c
  })));
  const [openTabs, setOpenTabs] = React.useState(['ACT-1049', 'ACT-1050']);
  const [active, setActive] = React.useState('inbox');
  const [sheet, setSheet] = React.useState('Needs');
  const [sort, setSort] = React.useState('Arrival');
  const [meterMode, setMeterMode] = React.useState('Confidence');
  const [focus, setFocus] = React.useState(0);
  const [whyOpen, setWhyOpen] = React.useState(false);
  const [srcOpen, setSrcOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [panelTab, setPanelTab] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [theme, setTheme] = React.useState(() => window.localStorage.getItem('sn-inbox-theme') || 'light');
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('sn-inbox-theme', theme);
  }, [theme]);
  const cmdRef = React.useRef(null);
  const needs = cases.filter(c => c.state === 'needs');
  const cur = cases.find(c => c.id === active);
  const say = msg => {
    setToast(msg);
    window.clearTimeout(say.t);
    say.t = window.setTimeout(() => setToast(null), 2600);
  };
  const openCase = id => {
    setOpenTabs(t => t.includes(id) ? t : [...t, id]);
    setActive(id);
    setWhyOpen(false);
    setSrcOpen(false);
    setSelected(null);
    setPanelTab(null);
  };
  const closeTab = id => {
    setOpenTabs(t => t.filter(x => x !== id));
    if (active === id) setActive('inbox');
  };
  const choose = i => {
    if (!cur || cur.state === 'handled') return;
    setSelected(i);
    setCases(cs => cs.map(c => c.id === cur.id ? {
      ...c,
      state: 'handled',
      dot: 'done'
    } : c));
    say(`${cur.options[i].title} — recorded. Ragnar learns from this choice.`);
  };
  const nextCase = () => {
    if (!cur) return;
    const rest = needs.filter(c => c.id !== cur.id);
    if (rest.length) openCase(rest[0].id);else {
      setActive('inbox');
      say('Sheet clear — nothing needs you.');
    }
  };
  const act = kind => {
    if (kind === 'dismiss') {
      setCases(cs => cs.map(c => c.id === cur.id ? {
        ...c,
        state: 'handled',
        dot: 'done'
      } : c));
      say('Dismissed — recorded as a negative signal.');
      nextCase();
    } else if (kind === 'reply') {
      cmdRef.current && cmdRef.current.focus();
      say('Reply routes back through the requester\u2019s channel.');
    } else if (kind === 'steer') {
      cmdRef.current && cmdRef.current.focus();
      say('Steering note goes to the agent — and into training.');
    } else if (kind === 'takeover') say('You now own the case; the agent observes and learns.');
  };
  React.useEffect(() => {
    const h = e => {
      const el = document.activeElement;
      const typing = el && (el.tagName === 'INPUT' || el.tagName === 'SELECT');
      if (e.key === 'Escape') {
        el && el.blur();
        if (panelTab) setPanelTab(null);else if (active !== 'inbox') setActive('inbox');
        return;
      }
      if (typing) return;
      if ((e.metaKey || e.ctrlKey) && /^[1-9]$/.test(e.key)) {
        e.preventDefault();
        const n = +e.key;
        if (n === 1) setActive('inbox');else if (openTabs[n - 2]) setActive(openTabs[n - 2]);
        return;
      }
      if (e.key === '/') {
        e.preventDefault();
        cmdRef.current && cmdRef.current.focus();
        return;
      }
      if (e.key === 't') {
        setTheme(v => v === 'light' ? 'dark' : 'light');
        return;
      }
      if (active === 'inbox') {
        const list = sheet === 'Needs' ? needs : cases;
        if (e.key === 'ArrowDown' || e.key === 'j') {
          e.preventDefault();
          setFocus(f => Math.min(f + 1, list.length - 1));
        } else if (e.key === 'ArrowUp' || e.key === 'k') {
          e.preventDefault();
          setFocus(f => Math.max(f - 1, 0));
        } else if (e.key === 'Enter' && list[focus]) openCase(list[focus].id);else if (e.key === 'a' && list[focus]) openCase(list[focus].id);else if (e.key === 'o') setSort(s => {
          const o = ['Arrival', 'SLA', 'Confidence', 'Last update'];
          return o[(o.indexOf(s) + 1) % o.length];
        });
      } else if (cur) {
        if (e.key === 'Enter') choose(0);else if (e.altKey && e.code === 'Digit1') choose(1);else if (e.altKey && e.code === 'Digit2') choose(2);else if (e.key === 'a') choose(0);else if (e.key === 'i') setWhyOpen(v => !v);else if (e.key === 'o') setSrcOpen(v => !v);else if (e.key === 's') {
          act('steer');
        } else if (e.key === 'c') setPanelTab(v => v === 'Context' ? null : 'Context');else if (e.key === 'm') setPanelTab(v => v === 'Conversation' ? null : 'Conversation');else if (e.key === 'u') setPanelTab(v => v === 'Discussion' ? null : 'Discussion');else if (e.key === 'n') nextCase();else if (e.key === 'x') act('dismiss');else if (e.key === 'r') {
          e.preventDefault();
          act('reply');
        }
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });
  const legend = active === 'inbox' ? [{
    label: 'move',
    keys: ['↑', '↓']
  }, {
    label: 'open',
    keys: '↵'
  }, {
    label: 'approve',
    keys: 'a'
  }, {
    label: 'sort',
    keys: 'o'
  }, {
    label: 'search',
    keys: '/'
  }, {
    label: 'theme',
    keys: 't'
  }, {
    keys: '?'
  }] : [{
    label: 'act',
    keys: '/'
  }, {
    label: 'why',
    keys: 'i'
  }, {
    label: 'refs',
    keys: ['c', 'm', 'u']
  }, {
    label: 'reply',
    keys: 'r'
  }, {
    label: 'next',
    keys: 'n'
  }, {
    label: 'theme',
    keys: 't'
  }, {
    keys: '?'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page-light)'
    }
  }, /*#__PURE__*/React.createElement(TopStrip, {
    tabs: cases.filter(c => openTabs.includes(c.id)),
    active: active,
    onSelect: setActive,
    onClose: closeTab
  }), active === 'inbox' ? /*#__PURE__*/React.createElement(InboxScreen, {
    cases: cases,
    focus: focus,
    sheet: sheet,
    onSheet: s => {
      setSheet(s);
      setFocus(0);
    },
    sort: sort,
    onSort: setSort,
    meterMode: meterMode,
    onMeterMode: setMeterMode,
    onFocus: setFocus,
    onOpen: openCase
  }) : /*#__PURE__*/React.createElement(CaseScreen, {
    c: cur,
    pos: needs.findIndex(c => c.id === active) + 1 || 1,
    total: Math.max(needs.length, 1),
    whyOpen: whyOpen,
    srcOpen: srcOpen,
    onToggleWhy: () => setWhyOpen(!whyOpen),
    onToggleSrc: () => setSrcOpen(!srcOpen),
    selected: selected,
    onChoose: choose,
    onAction: act,
    panelTab: panelTab,
    onPanelTab: setPanelTab,
    handled: cur && cur.state === 'handled'
  }), /*#__PURE__*/React.createElement(AskAgentButton, {
    style: {
      position: 'absolute',
      right: 24,
      bottom: 74
    },
    onClick: () => say('Ragnar is listening — ask about this case.')
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 72,
      background: 'var(--surface-card)',
      color: 'var(--text-on-card)',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      letterSpacing: '-0.24px',
      padding: '11px 18px',
      borderRadius: 'var(--radius-sm)',
      zIndex: 60
    }
  }, toast), /*#__PURE__*/React.createElement(CommandBar, {
    inputRef: cmdRef,
    placeholder: active === 'inbox' ? 'Type to act on the focused case — approve, remind, assign, pin' : 'Type to act — @ people · / commands · # tools',
    legend: legend,
    onSubmit: v => v && say(`Sent to Ragnar: "${v}" — routed and recorded.`)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/action-inbox/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/action-inbox/case.jsx
try { (() => {
/* Action Inbox — case detail screen + tabbed context side panel. Light operator surface. */
const {
  SectionRule,
  QuoteBlock,
  DisclosureLine,
  DecisionStack,
  DecisionOption,
  ActionRow,
  PanelSection,
  FieldRow,
  SourceChip,
  LinkOutCard,
  TranscriptMessage,
  ThreadedComment,
  Icon
} = window.SupernomicDesignSystem_8d0f5d;
const M = {
  fontFamily: 'var(--font-geist-mono)',
  letterSpacing: '-0.24px'
};
const HINT = {
  ...M,
  fontSize: 11,
  color: 'var(--text-secondary)',
  background: 'var(--surface-panel-light)',
  border: '1px solid var(--border-light-strong)',
  borderRadius: 5,
  padding: '3px 7px',
  lineHeight: 1
};
function RefLink({
  label,
  count,
  keys,
  onClick
}) {
  const empty = !count;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: onClick ? 'pointer' : 'default',
      opacity: empty ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("kbd", {
    style: HINT
  }, keys), /*#__PURE__*/React.createElement("span", {
    style: {
      ...M,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      ...M,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, count || 0));
}
function Bullets({
  items,
  mono
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, (items || []).slice(0, 3).map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      flex: 'none'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", {
    style: mono ? {
      ...M,
      fontSize: 13,
      color: 'var(--text-secondary)'
    } : null
  }, it))));
}
function CaseScreen({
  c,
  pos,
  total,
  whyOpen,
  srcOpen,
  onToggleWhy,
  onToggleSrc,
  selected,
  onChoose,
  onAction,
  panelTab,
  onPanelTab,
  handled
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0,
      background: 'var(--surface-page-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '26px 44px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...M,
      fontSize: 12,
      color: 'var(--text-secondary)',
      textAlign: 'right'
    }
  }, pos, " of ", total), /*#__PURE__*/React.createElement(SectionRule, {
    index: "01",
    label: "Signal",
    style: {
      marginTop: 24
    }
  }), handled && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...M,
      fontSize: 12,
      color: 'var(--accent-requester)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent-requester)'
    }
  }), " HANDLED \u2014 DECISION RECORDED, AGENT EXECUTING ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      textTransform: 'none'
    }
  }, "\xB7 training signal saved")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 40,
      lineHeight: 1.12,
      letterSpacing: '-1.2px',
      color: 'var(--text-primary)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 17,
      lineHeight: 1.5,
      letterSpacing: '-0.17px',
      color: 'var(--text-secondary)',
      maxWidth: 720
    }
  }, c.summary), /*#__PURE__*/React.createElement(QuoteBlock, {
    initials: c.quote.initials,
    name: c.quote.name,
    via: c.quote.via,
    route: c.quote.route,
    status: c.quote.status,
    style: {
      marginTop: 26
    }
  }, c.quote.body), /*#__PURE__*/React.createElement(DisclosureLine, {
    label: "Why",
    summary: "handover reason \xB7 3 signals",
    keys: "i",
    open: whyOpen,
    onToggle: onToggleWhy,
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Bullets, {
    items: c.why
  })), /*#__PURE__*/React.createElement(DisclosureLine, {
    label: "Sources",
    summary: c.sources,
    keys: "o",
    open: srcOpen,
    onToggle: onToggleSrc,
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Bullets, {
    items: c.sourcesDetail,
    mono: true
  })), /*#__PURE__*/React.createElement(SectionRule, {
    index: "02",
    label: "Decision",
    active: !handled,
    meta: "recorded \xB7 trains ragnar",
    style: {
      marginTop: 56
    }
  }), /*#__PURE__*/React.createElement(DecisionStack, {
    style: {
      marginTop: 24
    }
  }, c.options.map((o, i) => /*#__PURE__*/React.createElement(DecisionOption, {
    key: i,
    kind: o.kind,
    title: o.title,
    desc: o.desc,
    keys: o.keys,
    selected: selected === i,
    onSelect: () => onChoose(i)
  })), /*#__PURE__*/React.createElement(ActionRow, {
    actions: [{
      label: 'Reply to requester',
      keys: 'r',
      onClick: () => onAction('reply')
    }, {
      label: 'Steer agent',
      keys: 's',
      onClick: () => onAction('steer')
    }, {
      label: 'Dismiss',
      keys: 'x',
      onClick: () => onAction('dismiss')
    }],
    via: c.via,
    viaKey: "/"
  })), /*#__PURE__*/React.createElement(SectionRule, {
    index: "03",
    label: "Reference",
    style: {
      marginTop: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(RefLink, {
    label: "Context",
    count: c.context.roster.length + c.context.identity.length + c.context.devices.length + c.context.apps.length,
    keys: "c",
    onClick: () => onPanelTab('Context')
  }), /*#__PURE__*/React.createElement(RefLink, {
    label: "Conversation",
    count: c.conversation.length,
    keys: "m",
    onClick: () => onPanelTab('Conversation')
  }), /*#__PURE__*/React.createElement(RefLink, {
    label: "Discussion",
    count: c.discussion.length + c.discussion.reduce((n, d) => n + (d.replies ? d.replies.length : 0), 0),
    keys: "u",
    onClick: () => onPanelTab('Discussion')
  })))), panelTab && /*#__PURE__*/React.createElement(ContextPanel, {
    c: c,
    tab: panelTab,
    onTab: onPanelTab,
    onClose: () => onPanelTab(null)
  }));
}
function PanelTabs({
  tab,
  onTab,
  onClose
}) {
  const tabs = [['Context', 'c'], ['Conversation', 'm'], ['Discussion', 'u']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      borderBottom: '1px solid var(--border-light)',
      paddingBottom: 0
    }
  }, tabs.map(([t, k]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    onClick: () => onTab(t),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      padding: '2px 0 12px',
      marginBottom: -1,
      borderBottom: `1px solid ${tab === t ? 'var(--accent-live)' : 'transparent'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...M,
      fontSize: 12,
      textTransform: 'uppercase',
      color: tab === t ? 'var(--text-primary)' : 'var(--text-muted)'
    }
  }, t), /*#__PURE__*/React.createElement("kbd", {
    style: HINT
  }, k))), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      ...M,
      fontSize: 11,
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      paddingBottom: 12
    }
  }, "esc \xD7"));
}
function PanelRule({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '20px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...M,
      fontSize: 11,
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-light)'
    }
  }));
}
function ContextPanel({
  c,
  tab,
  onTab,
  onClose
}) {
  const x = c.context;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 380,
      flex: 'none',
      borderLeft: '1px solid var(--border-light)',
      overflowY: 'auto',
      padding: '16px 24px 60px',
      background: 'var(--surface-page-light)'
    }
  }, /*#__PURE__*/React.createElement(PanelTabs, {
    tab: tab,
    onTab: onTab,
    onClose: onClose
  }), tab === 'Context' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelRule, {
    t: "Requester"
  }), c.context.identity.map((f, i) => /*#__PURE__*/React.createElement(FieldRow, {
    key: i,
    label: f.label,
    value: f.value,
    source: f.source,
    sourceExtra: f.extra,
    sourceTone: f.tone
  })), /*#__PURE__*/React.createElement(PanelRule, {
    t: "Roster"
  }), c.context.roster.map((r, i) => /*#__PURE__*/React.createElement(FieldRow, {
    key: i,
    source: r.source,
    value: /*#__PURE__*/React.createElement(React.Fragment, null, r.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, r.meta), r.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        ...M,
        fontSize: 10,
        textTransform: 'uppercase',
        color: 'var(--accent-live)',
        border: '1px solid color-mix(in srgb, var(--accent-live) 40%, transparent)',
        borderRadius: 'var(--radius-sm)',
        padding: '2px 6px',
        marginLeft: 8
      }
    }, r.tag))
  })), /*#__PURE__*/React.createElement(PanelRule, {
    t: "Devices & apps"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, c.context.devices.map((d, i) => /*#__PURE__*/React.createElement(LinkOutCard, {
    key: 'd' + i,
    name: d.name,
    meta: d.meta,
    system: d.source.charAt(0).toUpperCase() + d.source.slice(1)
  })), c.context.apps.map((a, i) => /*#__PURE__*/React.createElement(LinkOutCard, {
    key: 'a' + i,
    name: a.name,
    meta: a.meta,
    system: a.name
  }))), /*#__PURE__*/React.createElement(FieldRow, {
    label: "Scope",
    value: c.context.scope,
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement(PanelRule, {
    t: "Related threads"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, c.context.prior.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...M,
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, p.id, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-geist)'
    }
  }, p.title), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\xB7 ", p.meta))))), tab === 'Conversation' && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...M,
      fontSize: 11,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      padding: '12px 0 4px'
    }
  }, "Before handover \u2014 requester \u2194 ", c.path[0]), c.conversation.map((m2, i) => /*#__PURE__*/React.createElement(TranscriptMessage, {
    key: i,
    author: m2.author,
    role: m2.role,
    time: m2.time,
    artifacts: m2.artifacts
  }, m2.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...M,
      fontSize: 11,
      color: 'var(--text-secondary)',
      paddingTop: 14
    }
  }, "Handed to you \xB7 reply goes back through ", c.quote.via)), tab === 'Discussion' && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, c.discussion.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...M,
      fontSize: 12,
      color: 'var(--text-secondary)',
      padding: '24px 0'
    }
  }, "No discussion yet \u2014 comment to loop someone in."), c.discussion.map((d, i) => /*#__PURE__*/React.createElement(ThreadedComment, {
    key: i,
    author: d.author,
    tag: d.tag,
    time: d.time,
    style: i ? {
      borderTop: '1px solid var(--border-light)',
      marginTop: 10,
      paddingTop: 12
    } : null,
    replies: d.replies && d.replies.map((r, j) => /*#__PURE__*/React.createElement(ThreadedComment, {
      key: j,
      author: r.author,
      tag: r.tag,
      time: r.time
    }, r.body))
  }, d.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 22,
      border: '1px solid var(--border-light-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '9px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...M,
      fontSize: 12,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, "Comment \u2014 @ to loop someone in"), /*#__PURE__*/React.createElement("kbd", {
    style: HINT
  }, "\u21E7u"))));
}
Object.assign(window, {
  CaseScreen,
  ContextPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/action-inbox/case.jsx", error: String((e && e.message) || e) }); }

// ui_kits/action-inbox/data.jsx
try { (() => {
/* Action Inbox — sample cases. Every case: who kicked it off (user, domain
   agent, customer-facing agent), what the agent proposes, and what the
   operator must give (approval / context / steering). */
window.INBOX_CASES = [{
  id: 'ACT-1049',
  tab: 'ACT-1049 Unlock Okta fo…',
  dot: 'pending',
  title: 'Unlock Okta for Priya N. after MFA recovery',
  summary: /*#__PURE__*/React.createElement(React.Fragment, null, "I can unlock the account and require a password reset on next sign-in. ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, "Confidence 91% \u2014 held for operator approval.")),
  path: ['TechOps agent', 'zendesk', 'priya nair', 'act-1049', 'awaiting you'],
  verb: 'APPROVE',
  verbKey: 'A',
  timer: '8h 11m',
  confidence: 91,
  state: 'needs',
  updated: '2m ago',
  updatedPct: 92,
  slaPct: 32,
  arrival: 1,
  quote: {
    initials: 'PN',
    name: 'Priya Nair',
    via: 'Zendesk',
    route: 'TechOps agent',
    status: 'waiting for you',
    body: 'Priya is locked out after a device migration. The ticket includes manager confirmation and a current Iru device match.'
  },
  why: ['Confidence below the auto-run threshold for identity writes', 'Action touches a production system of record', 'Requester recently changed devices'],
  sources: '6 examined',
  sourcesDetail: ['okta employee record · iru device inventory', 'zendesk ZD-7782 · slack #it-help thread', 'HR roster · prior case TKT-4776'],
  proposal: {
    status: 'Not recorded',
    body: ['No action proposal is recorded for this case']
  },
  options: [{
    kind: "Recommended - agent's proposal",
    title: 'Approve & run',
    desc: 'Requester identity matches the employee record and active device inventory.',
    keys: '↵'
  }, {
    kind: 'Variant',
    title: 'Approve, then post the standard reset note.',
    keys: ['⌥', '1']
  }, {
    kind: 'Alternative',
    title: 'Ask for a second manager check.',
    keys: ['⌥', '2']
  }],
  via: /*#__PURE__*/React.createElement(React.Fragment, null, "Act via ", /*#__PURE__*/React.createElement("b", null, "#okta"), " \xB7 ", /*#__PURE__*/React.createElement("b", null, "#slack"), " \xB7 ", /*#__PURE__*/React.createElement("b", null, "#zendesk"), " \u2014 or @supernomic, /commands \u2014 type to act"),
  context: {
    roster: [{
      name: 'Priya Nair',
      meta: 'Software Engineer · Engineering',
      tag: 'Requester',
      source: 'okta'
    }, {
      name: 'Leah Chen',
      meta: 'Manager · confirmed the unlock',
      source: 'okta'
    }, {
      name: 'IT intake',
      meta: 'auto-router',
      source: 'zendesk'
    }],
    identity: [{
      label: 'Role',
      value: 'Software Engineer',
      source: 'okta'
    }, {
      label: 'Dept',
      value: 'Engineering',
      source: 'okta'
    }, {
      label: 'Manager',
      value: 'Leah Chen',
      source: 'okta'
    }, {
      label: 'Tenure',
      value: 'Since May 2024',
      source: 'supernomic',
      extra: 'recall',
      tone: 'live'
    }],
    devices: [{
      name: 'MacBook Pro 14"',
      meta: 'P-442 · Iru compliant · migrated today',
      source: 'iru',
      extra: '30s'
    }],
    apps: [{
      name: 'Okta',
      meta: 'MFA recovery active',
      source: 'okta'
    }, {
      name: 'Zendesk',
      meta: 'ticket ZD-7782',
      source: 'zendesk'
    }, {
      name: 'Slack',
      meta: '',
      source: 'slack'
    }],
    scope: 'Unlock account · require password reset · SLA 22m remaining',
    prior: [{
      id: 'TKT-4776',
      title: 'Device migration for Priya N.',
      meta: 'resolved yesterday · zendesk'
    }, {
      id: 'TKT-4744',
      title: 'MFA recovery fallback approval',
      meta: 'resolved 3w ago · zendesk'
    }]
  },
  conversation: [{
    author: 'Priya Nair',
    role: 'requester',
    time: '07:58',
    body: "I'm locked out of Okta after the laptop swap — MFA won't accept the new device.",
    artifacts: [{
      kind: 'image',
      name: 'okta-error.png',
      meta: 'screenshot'
    }]
  }, {
    author: 'TechOps agent',
    role: 'agent',
    time: '08:00',
    body: 'I see the device migration completed this morning and the new MacBook is Iru-compliant. Checking the MFA recovery state.'
  }, {
    author: 'Priya Nair',
    role: 'requester',
    time: '08:01',
    body: 'Leah already confirmed on the ticket. Attaching the migration log just in case.',
    artifacts: [{
      kind: 'file',
      name: 'device-migration-log.txt',
      meta: 'TXT · 14KB'
    }, {
      kind: 'link',
      name: 'ZD-7782',
      meta: 'zendesk'
    }]
  }, {
    author: 'TechOps agent',
    role: 'agent',
    time: '08:02',
    body: 'Identity and device match, manager confirmed. Unlocking touches a production identity system, so I\u2019m handing this to an operator for approval.'
  }],
  discussion: [{
    author: 'Leah Chen',
    tag: 'manager',
    time: '1h ago',
    body: 'Confirmed — Priya swapped laptops yesterday. Fine to unlock.',
    replies: [{
      author: 'Dana Mol',
      tag: 'security',
      time: '52m ago',
      body: 'No open incidents on that account. Clear from our side.'
    }]
  }]
}, {
  id: 'ACT-1050',
  tab: 'ACT-1050 Grant contract…',
  dot: 'warn',
  title: 'Grant contractor Figma viewer access for Brand sprint',
  summary: /*#__PURE__*/React.createElement(React.Fragment, null, "I can grant viewer-only access scoped to the Brand-sprint project, expiring in 14 days. ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, "Confidence 84% \u2014 external account, held for approval.")),
  path: ['Access agent', 'slack', 'marta kline', 'act-1050', 'awaiting you'],
  verb: 'APPROVE',
  verbKey: 'A',
  timer: '41h 2m',
  confidence: 84,
  state: 'needs',
  updated: '18m ago',
  updatedPct: 64,
  slaPct: 78,
  arrival: 2,
  quote: {
    initials: 'MK',
    name: 'Marta Kline',
    via: 'Slack',
    route: 'Access agent',
    status: 'waiting for you',
    body: 'Marta needs the contractor from Studio Norr to see the Brand sprint files. Contract runs through the end of the month.'
  },
  why: ['External collaborator on a company resource', 'No standing grant policy covers agencies', 'Expiry date inferred, not confirmed'],
  sources: '4 examined',
  sourcesDetail: ['figma org directory · slack #brand-sprint thread', 'vendor contract record', 'access policy doc'],
  proposal: {
    status: 'Recorded',
    tone: 'recorded',
    body: ['system: figma · action: grant.viewer', 'target: e.laurent@studionorr.com · scope: project "Brand sprint"', 'expires: +14d']
  },
  options: [{
    kind: "Recommended - agent's proposal",
    title: 'Approve & run',
    desc: 'Viewer-only, project-scoped, time-boxed to the contract window.',
    keys: '↵'
  }, {
    kind: 'Variant',
    title: 'Approve, but expire at contract end (18 days).',
    keys: ['⌥', '1']
  }, {
    kind: 'Alternative',
    title: 'Route to design ops for a standing agency policy.',
    keys: ['⌥', '2']
  }],
  via: /*#__PURE__*/React.createElement(React.Fragment, null, "Act via ", /*#__PURE__*/React.createElement("b", null, "#figma"), " \xB7 ", /*#__PURE__*/React.createElement("b", null, "#slack"), " \u2014 or @supernomic, /commands \u2014 type to act"),
  context: {
    roster: [{
      name: 'Marta Kline',
      meta: 'Brand Lead · Marketing',
      tag: 'Requester',
      source: 'okta'
    }, {
      name: 'E. Laurent',
      meta: 'Contractor · Studio Norr',
      source: 'figma'
    }],
    identity: [{
      label: 'Role',
      value: 'Brand Lead',
      source: 'okta'
    }, {
      label: 'Vendor',
      value: 'Studio Norr · active contract',
      source: 'supernomic',
      extra: 'recall',
      tone: 'live'
    }],
    devices: [],
    apps: [{
      name: 'Figma',
      meta: 'org has 2 open guest seats',
      source: 'figma'
    }, {
      name: 'Slack',
      meta: '#brand-sprint thread',
      source: 'slack'
    }],
    scope: 'Grant viewer · project-scoped · expiring · SLA 3h remaining',
    prior: [{
      id: 'ACT-0981',
      title: 'Agency viewer grant for Q1 refresh',
      meta: 'approved 2mo ago · figma'
    }]
  },
  conversation: [{
    author: 'Marta Kline',
    role: 'requester',
    time: '11:20',
    body: 'The Studio Norr contractor needs to see the Brand sprint files — contract runs through month end.',
    artifacts: [{
      kind: 'link',
      name: 'brand-sprint',
      meta: 'figma'
    }]
  }, {
    author: 'Access agent',
    role: 'agent',
    time: '11:22',
    body: 'No standing policy covers agency guests, and the expiry is inferred from the contract record — handing to an operator with a scoped, time-boxed proposal.'
  }],
  discussion: []
}, {
  id: 'ACT-1053',
  tab: 'ACT-1053 Revoke GitHub…',
  dot: 'pending',
  title: 'Revoke GitHub access for departed contractor Tomas V.',
  summary: /*#__PURE__*/React.createElement(React.Fragment, null, "Off-boarding shows Tomas departed Friday; his PAT is still active. I can revoke org access and rotate the affected deploy key. ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, "Confidence 88% \u2014 destructive action, held for approval.")),
  path: ['Security agent', 'slack', 'dana mol', 'act-1053', 'awaiting you'],
  verb: 'APPROVE',
  verbKey: 'A',
  timer: '2h 44m',
  confidence: 88,
  state: 'needs',
  updated: '45s ago',
  updatedPct: 97,
  slaPct: 12,
  arrival: 3,
  quote: {
    initials: 'DM',
    name: 'Dana Mol',
    via: 'Slack',
    route: 'Security agent',
    status: 'waiting for you',
    body: 'Off-boarding checklist flagged an active GitHub token for a contractor who left on Friday. Access should be gone already.'
  },
  why: ['Destructive, hard-to-reverse action', 'Deploy key rotation touches CI', 'Account shows a commit 2 hours ago that needs a look'],
  sources: '5 examined',
  sourcesDetail: ['github org audit log · CI deploy-key registry', 'HR off-boarding record', 'slack #security · vendor roster'],
  proposal: {
    status: 'Recorded',
    tone: 'recorded',
    body: ['system: github · action: org.remove-member + key.rotate', 'target: tomas-v', 'affected: deploy key ci-prod-2']
  },
  options: [{
    kind: "Recommended - agent's proposal",
    title: 'Approve & run',
    desc: 'Departure confirmed by HR record; token activity is automated CI, not human.',
    keys: '↵'
  }, {
    kind: 'Variant',
    title: 'Revoke access now, rotate the key in the maintenance window.',
    keys: ['⌥', '1']
  }, {
    kind: 'Alternative',
    title: 'Escalate to security on-call for the recent commit.',
    keys: ['⌥', '2']
  }],
  via: /*#__PURE__*/React.createElement(React.Fragment, null, "Act via ", /*#__PURE__*/React.createElement("b", null, "#github"), " \xB7 ", /*#__PURE__*/React.createElement("b", null, "#slack"), " \u2014 or @supernomic, /commands \u2014 type to act"),
  context: {
    roster: [{
      name: 'Dana Mol',
      meta: 'Security Ops',
      tag: 'Requester',
      source: 'okta'
    }, {
      name: 'Tomas V.',
      meta: 'Contractor · departed Fri',
      source: 'github'
    }],
    identity: [{
      label: 'Status',
      value: 'Departed · off-boarded Friday',
      source: 'okta'
    }, {
      label: 'Access',
      value: 'GitHub org member + PAT',
      source: 'github'
    }],
    devices: [],
    apps: [{
      name: 'GitHub',
      meta: 'last activity 2h ago (CI)',
      source: 'github'
    }, {
      name: 'CI',
      meta: 'deploy key ci-prod-2',
      source: 'github'
    }],
    scope: 'Revoke org access · rotate deploy key · SLA 15m remaining',
    prior: [{
      id: 'ACT-0912',
      title: 'Contractor off-board revoke (batch)',
      meta: 'approved 1mo ago · github'
    }]
  },
  conversation: [{
    author: 'Dana Mol',
    role: 'requester',
    time: '09:14',
    body: 'Off-boarding checklist flagged an active GitHub PAT for Tomas V., who left Friday.',
    artifacts: [{
      kind: 'file',
      name: 'offboard-audit.csv',
      meta: 'CSV · 3KB'
    }]
  }, {
    author: 'Security agent',
    role: 'agent',
    time: '09:15',
    body: 'Access revocation plus deploy-key rotation is destructive and touches CI — holding for operator approval. The 2h-ago commit is automated CI activity.'
  }],
  discussion: [{
    author: 'Dana Mol',
    tag: 'security',
    time: '20m ago',
    body: 'Rotate ci-prod-2 in the same change, please — it was in his scope.'
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/action-inbox/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/action-inbox/inbox.jsx
try { (() => {
/* Action Inbox — top strip + inbox list screen. Dark instrument surface. */
const {
  CaseTab,
  ThreadRow,
  Icon
} = window.SupernomicDesignSystem_8d0f5d;
const MONO = {
  fontFamily: 'var(--font-geist-mono)',
  letterSpacing: '-0.24px'
};
function TopStrip({
  tabs,
  active,
  onSelect,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      height: 52,
      padding: '0 14px',
      borderBottom: '1px solid var(--border-light)',
      background: 'var(--surface-page-light)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 14,
      color: 'var(--text-muted)',
      marginRight: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "panel-left",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--border-light-strong)',
      margin: '0 8px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 16,
      color: 'var(--text-secondary)',
      marginRight: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  })), /*#__PURE__*/React.createElement(CaseTab, {
    label: /*#__PURE__*/React.createElement(InboxLabel, null),
    active: active === 'inbox',
    hint: "\u23181",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "inbox",
      size: 14
    }),
    onClick: () => onSelect('inbox')
  }), tabs.map((t, i) => /*#__PURE__*/React.createElement(CaseTab, {
    key: t.id,
    label: t.tab,
    dot: t.dot,
    active: active === t.id,
    hint: `⌘${i + 2}`,
    onClick: () => onSelect(t.id),
    onClose: () => onClose(t.id)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      marginLeft: 6,
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  })));
}
function InboxLabel() {
  return /*#__PURE__*/React.createElement("span", null, "INBOX ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "NEEDS"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "3"));
}
function SheetTabs({
  tabs,
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      borderBottom: '1px solid var(--border-light)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("span", {
    key: t.label,
    onClick: () => onSelect(t.label),
    style: {
      ...MONO,
      fontSize: 12,
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: '2px 0 12px',
      color: active === t.label ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: `1px solid ${active === t.label ? 'var(--color-signal-orange)' : 'transparent'}`,
      marginBottom: -1
    }
  }, t.label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      marginLeft: 4
    }
  }, t.count))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      ...MONO,
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13
  }), " Split"));
}
function Picker({
  icon,
  title,
  value,
  options,
  onChange,
  hint
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [hi, setHi] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (open) setHi(Math.max(0, options.indexOf(value)));
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const k = e => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        setHi(i => Math.min(i + 1, options.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        setHi(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        onChange(options[hi]);
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', h);
    document.addEventListener('keydown', k, true);
    return () => {
      document.removeEventListener('mousedown', h);
      document.removeEventListener('keydown', k, true);
    };
  }, [open, hi, options, onChange]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      setOpen(!open);
      setHover(false);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 30,
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: open ? 'var(--surface-well-light)' : 'var(--surface-panel-light)',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  })), hover && !open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: 0,
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--surface-card)',
      color: 'var(--text-on-card)',
      ...MONO,
      fontSize: 11,
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, title, " \xB7 ", value.toLowerCase(), hint && /*#__PURE__*/React.createElement("kbd", {
    style: {
      ...MONO,
      fontSize: 10,
      color: 'color-mix(in srgb, var(--text-on-card) 75%, transparent)',
      border: '1px solid color-mix(in srgb, var(--text-on-card) 40%, transparent)',
      borderRadius: 3,
      padding: '1px 4px',
      lineHeight: 1
    }
  }, hint)), open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      right: 0,
      minWidth: 148,
      zIndex: 40,
      background: 'var(--surface-panel-light)',
      border: '1px solid var(--border-light-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: 4,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...MONO,
      fontSize: 10,
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '6px 10px 4px'
    }
  }, title, " \xB7 \u2191\u2193 \u21B5"), options.map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: o,
    onClick: () => {
      onChange(o);
      setOpen(false);
    },
    onMouseEnter: () => setHi(i),
    style: {
      ...MONO,
      fontSize: 12,
      whiteSpace: 'nowrap',
      padding: '7px 10px',
      borderRadius: 3,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: o === value ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: i === hi ? 'var(--surface-well-light)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      flex: 'none'
    }
  }, o === value ? '✓' : ''), o))));
}
function meterFor(c, mode) {
  if (mode === 'SLA') return {
    bar: false,
    label: c.timer,
    tone: c.slaPct < 40 ? 'critical' : 'neutral'
  };
  if (mode === 'Last update') return {
    bar: false,
    label: c.updated,
    tone: 'neutral'
  };
  return {
    bar: false,
    label: `${c.confidence}%`
  };
}
function InboxScreen({
  cases,
  focus,
  sheet,
  onSheet,
  sort,
  onSort,
  meterMode,
  onMeterMode,
  onFocus,
  onOpen
}) {
  const needs = cases.filter(c => c.state === 'needs');
  const handled = cases.filter(c => c.state === 'handled');
  let shown = sheet === 'Needs' ? needs : sheet === 'Handled' ? handled : sheet === 'Blocked' ? [] : cases.slice();
  const keyFns = {
    'Arrival': c => c.arrival,
    'SLA': c => c.slaPct,
    'Confidence': c => -c.confidence,
    'Last update': c => -c.updatedPct
  };
  shown = shown.slice().sort((a, b) => keyFns[sort](a) - keyFns[sort](b));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--surface-page-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '26px 40px'
    }
  }, /*#__PURE__*/React.createElement(SheetTabs, {
    tabs: [{
      label: 'Needs',
      count: needs.length
    }, {
      label: 'Blocked',
      count: 1
    }, {
      label: 'Handled',
      count: handled.length + 1
    }, {
      label: 'All',
      count: cases.length + 2
    }],
    active: sheet,
    onSelect: onSheet
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      margin: '18px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...MONO,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, shown.length, " threads on this sheet"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Picker, {
    icon: "gauge",
    title: "Meter",
    value: meterMode,
    options: ['Confidence', 'SLA', 'Last update'],
    onChange: onMeterMode
  }), /*#__PURE__*/React.createElement(Picker, {
    icon: "arrow-up-down",
    title: "Sort",
    value: sort,
    options: ['Arrival', 'SLA', 'Confidence', 'Last update'],
    onChange: onSort,
    hint: "o"
  }))), shown.map((c, i) => /*#__PURE__*/React.createElement(ThreadRow, {
    key: c.id,
    focused: i === focus,
    title: c.title,
    path: c.path,
    verb: i === focus ? c.verb : undefined,
    verbKey: i === focus ? c.verbKey : undefined,
    meter: meterFor(c, meterMode),
    onMouseEnter: () => onFocus(i),
    onClick: () => onOpen(c.id)
  })), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...MONO,
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      padding: '48px 0',
      textAlign: 'center'
    }
  }, "Nothing on this sheet.")));
}
Object.assign(window, {
  TopStrip,
  InboxScreen,
  meterFor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/action-inbox/inbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/app.jsx
try { (() => {
/* Supernomic Console — app orchestrator (login + nav + ⌘K palette). */
const {
  CommandPalette,
  Button,
  Input,
  Icon,
  KeyHint
} = window.SupernomicDesignSystem_8d0f5d;
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bg-canvas)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/supernomic-mark-white.png",
    alt: "",
    style: {
      width: 40,
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 28,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, "Supernomic")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, "Sign in to your workspace"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 8,
      marginBottom: 28
    }
  }, "Your world models run inside your boundary."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@enterprise.com",
    defaultValue: "ava@enterprise.com",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Workspace",
    defaultValue: "atlas-corp",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "building",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    shortcut: "\u21B5",
    onClick: onEnter,
    style: {
      justifyContent: 'center',
      marginTop: 4
    }
  }, "Continue")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--text-secondary)',
      marginTop: 24,
      textAlign: 'center'
    }
  }, "SSO \xB7 SAML \xB7 SCIM enforced")));
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [screen, setScreen] = React.useState('worlds');
  const [world, setWorld] = React.useState(null);
  const [palette, setPalette] = React.useState(false);
  const [theme, setTheme] = React.useState(() => window.localStorage.getItem('sn-console-theme') || 'dark');
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('sn-console-theme', theme);
  }, [theme]);
  React.useEffect(() => {
    window.__snToggleTheme = () => setTheme(v => v === 'dark' ? 'light' : 'dark');
    return () => {
      delete window.__snToggleTheme;
    };
  }, []);
  React.useEffect(() => {
    const h = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette(p => !p);
        return;
      }
      const el = document.activeElement;
      if (e.shiftKey && e.key.toLowerCase() === 't' && !(el && (el.tagName === 'INPUT' || el.tagName === 'SELECT'))) {
        window.__snToggleTheme && window.__snToggleTheme();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  const go = (s, w) => {
    setScreen(s);
    if (w) setWorld(w);
    setPalette(false);
  };
  const groups = [{
    label: 'Models',
    items: [{
      label: 'Run model',
      shortcut: ['⌘', '↵'],
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 16
      }),
      act: () => go('run')
    }, {
      label: 'Deploy to production',
      shortcut: ['⇧', 'D'],
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "rocket",
        size: 16
      }),
      act: () => go('run')
    }, {
      label: 'New world model',
      shortcut: ['⌘', 'N'],
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      }),
      act: () => go('worlds')
    }]
  }, {
    label: 'Navigate',
    items: [{
      label: 'Go to worlds',
      shortcut: 'G+W',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "globe",
        size: 16
      }),
      act: () => go('worlds')
    }, {
      label: 'Go to model detail',
      shortcut: 'G+M',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "box",
        size: 16
      }),
      act: () => go('model')
    }, {
      label: 'Go to runs',
      shortcut: 'G+R',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "activity",
        size: 16
      }),
      act: () => go('run')
    }]
  }];
  if (!authed) return /*#__PURE__*/React.createElement(Login, {
    onEnter: () => setAuthed(true)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    onOpenPalette: () => setPalette(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: screen === 'run' ? 'runs' : screen === 'model' ? 'model' : 'worlds',
    onNav: id => go(id === 'runs' ? 'run' : id === 'model' ? 'model' : 'worlds')
  }), screen === 'worlds' && /*#__PURE__*/React.createElement(WorldsScreen, {
    onOpen: w => go('model', w)
  }), screen === 'model' && /*#__PURE__*/React.createElement(ModelScreen, {
    world: world,
    onOpenRun: () => go('run')
  }), screen === 'run' && /*#__PURE__*/React.createElement(RunScreen, null)), /*#__PURE__*/React.createElement(CommandPalette, {
    open: palette,
    groups: groups,
    onClose: () => setPalette(false),
    onRun: it => it.act && it.act()
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/screens.jsx
try { (() => {
/* Supernomic Console — screens. Exports to window. */
const {
  Card,
  MetricTile,
  Badge,
  StatusDot,
  Button,
  Icon,
  KeyHint
} = window.SupernomicDesignSystem_8d0f5d;
const PAGE = {
  flex: 1,
  overflowY: 'auto',
  background: 'var(--bg-canvas)'
};
const WRAP = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '40px 40px 80px'
};
const EYEBROW = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '-0.02em',
  color: 'var(--text-muted)'
};
const H1 = {
  fontFamily: 'var(--font-geist)',
  fontWeight: 400,
  fontSize: 36,
  letterSpacing: '-1.12px',
  color: 'var(--text-primary)',
  margin: '12px 0 0'
};
const WORLDS = [{
  name: 'atlas-world',
  desc: 'Global supply-chain reality model',
  status: 'live',
  models: 12,
  updated: '2m ago'
}, {
  name: 'ledger-world',
  desc: 'Financial operations & risk',
  status: 'live',
  models: 8,
  updated: '18m ago'
}, {
  name: 'grid-world',
  desc: 'Energy grid demand simulation',
  status: 'healthy',
  models: 5,
  updated: '1h ago'
}, {
  name: 'retail-world',
  desc: 'Store network & inventory',
  status: 'idle',
  models: 3,
  updated: '2d ago'
}];
function WorldsScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: EYEBROW
  }, "Workspace \xB7 4 worlds"), /*#__PURE__*/React.createElement("h1", {
    style: H1
  }, "Worlds")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    shortcut: "\u2318N"
  }, "New world")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginTop: 32
    }
  }, WORLDS.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.name,
    variant: "outline",
    style: {
      cursor: 'pointer'
    },
    onClick: () => onOpen(w)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      ...EYEBROW,
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: w.status
  }), " ", w.status), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16,
    style: {
      color: 'var(--text-muted)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 22,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      marginTop: 18
    }
  }, w.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, w.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 20,
      ...EYEBROW
    }
  }, /*#__PURE__*/React.createElement("span", null, w.models, " models"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "updated ", w.updated)))))));
}
function ModelScreen({
  world,
  onOpenRun
}) {
  const w = world || WORLDS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: EYEBROW
  }, w.name, " \xB7 model detail"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: H1
  }, "atlas-world-v3"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "View data \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    shortcut: "\u2318\u21B5",
    onClick: onOpenRun
  }, "Run model"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "positive"
  }, "Healthy"), /*#__PURE__*/React.createElement(Badge, null, "Owned \xB7 your weights"), /*#__PURE__*/React.createElement(Badge, null, "VPC us-east")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      border: '1px solid var(--border-divider)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(MetricTile, {
    label: "Throughput",
    value: "1.2M",
    unit: "rows/s",
    delta: "+18.4%",
    trend: "up",
    spark: [3, 5, 4, 7, 6, 9, 11, 10, 12]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "p95 latency",
    value: "42",
    unit: "ms",
    delta: "-6%",
    trend: "down",
    spark: [9, 8, 8, 7, 6, 5, 4, 4, 3]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Forecast MAE",
    value: "0.031",
    delta: "-11%",
    trend: "down",
    spark: [8, 7, 7, 6, 5, 5, 4, 3, 3]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Rows trained",
    value: "418M",
    delta: "+2.1M",
    trend: "up",
    spark: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Live runs",
    value: "3",
    unit: "active",
    delta: "+1",
    trend: "up",
    spark: [1, 1, 2, 2, 2, 3, 3, 3, 3]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Uptime",
    value: "99.98",
    unit: "%",
    delta: "+0.02",
    trend: "up",
    spark: [9, 9, 9, 10, 10, 10, 10, 10, 10]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      marginTop: 32
    }
  }, "Recent runs"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      border: '1px solid var(--border-divider)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, [['4A2F', 'live', '00:41', 'forecast · Q3 demand'], ['4A2E', 'healthy', '02:12', 'backfill · 2024 ledger'], ['4A2D', 'healthy', '00:58', 'eval · holdout set']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    onClick: onOpenRun,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 120px 90px 1fr 24px',
      alignItems: 'center',
      gap: 12,
      padding: '14px 20px',
      borderTop: i ? '1px solid var(--border-divider)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      color: 'var(--text-primary)'
    }
  }, "RUN ", r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      ...EYEBROW,
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: r[1]
  }), " ", r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, r[3]), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      color: 'var(--text-secondary)'
    }
  }))))));
}
const LOG = [['00:00', 'boot', 'Loading atlas-world-v3 weights from VPC volume'], ['00:03', 'data', 'Streaming 1.2M rows · supply-chain events'], ['00:09', 'run', 'Forecast horizon 90d · confidence bands on'], ['00:22', 'run', 'Epoch 1/3 · MAE 0.041'], ['00:34', 'run', 'Epoch 2/3 · MAE 0.034'], ['00:41', 'ok', 'Epoch 3/3 · MAE 0.031 · converged']];
function RunScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: EYEBROW
  }, "atlas-world-v3 \xB7 run 4A2F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: H1
  }, "Run console"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    shortcut: "\u21E7D"
  }, "Deploy result"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "live"
  }, "Running"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center'
    }
  }, "elapsed 00:41")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: 'var(--surface-well)',
      border: '1px solid var(--border-divider)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 13,
      lineHeight: 1.9
    }
  }, LOG.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      width: 48,
      flex: 'none'
    }
  }, l[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: l[1] === 'ok' ? 'var(--color-metric-green)' : l[1] === 'run' ? 'var(--color-signal-orange)' : 'var(--text-muted)',
      width: 44,
      flex: 'none',
      textTransform: 'uppercase'
    }
  }, l[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, l[2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      width: 48
    }
  }, "00:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "\u258F")))));
}
Object.assign(window, {
  WorldsScreen,
  ModelScreen,
  RunScreen,
  WORLDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/shell.jsx
try { (() => {
/* Supernomic Console — shell chrome (top bar + sidebar). Exports to window. */
const {
  Icon,
  StatusDot,
  KeyHint,
  Button,
  Badge
} = window.SupernomicDesignSystem_8d0f5d;
function Logo({
  size = 26
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/supernomic-mark-white.png",
    alt: "",
    className: "sn-mark",
    style: {
      width: size,
      height: size
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 16,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, "Supernomic"));
}
function TopBar({
  onOpenPalette
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      borderBottom: '1px solid var(--border-divider)',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    onClick: onOpenPalette,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 320,
      height: 34,
      padding: '0 12px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-geist)',
      fontSize: 13
    }
  }, "Type a command or search\u2026"), /*#__PURE__*/React.createElement(KeyHint, {
    keys: ['⌘', 'K'],
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--text-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "healthy"
  }), " VPC \xB7 us-east"), /*#__PURE__*/React.createElement("span", {
    onClick: () => window.__snToggleTheme && window.__snToggleTheme(),
    title: "Toggle theme (\u21E7T)",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sun-moon",
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--text-muted)',
      color: 'var(--bg-canvas)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12
    }
  }, "AV")));
}
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    id: 'worlds',
    label: 'Worlds',
    icon: 'globe',
    key: 'W'
  }, {
    id: 'model',
    label: 'Models',
    icon: 'box',
    key: 'M'
  }, {
    id: 'runs',
    label: 'Runs',
    icon: 'activity',
    key: 'R'
  }, {
    id: 'data',
    label: 'Data',
    icon: 'database',
    key: 'D'
  }, {
    id: 'deploy',
    label: 'Deployments',
    icon: 'rocket',
    key: 'P'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 220,
      flex: 'none',
      borderRight: '1px solid var(--border-divider)',
      background: 'var(--bg-canvas)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--text-muted)',
      padding: '4px 10px 10px'
    }
  }, "Workspace"), items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onClick: () => onNav(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 36,
        padding: '0 10px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        background: on ? 'var(--bg-elevated)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-geist)',
        fontSize: 14,
        letterSpacing: '-0.01em'
      }
    }, it.label), /*#__PURE__*/React.createElement("kbd", {
      style: {
        fontFamily: 'var(--font-geist-mono)',
        fontSize: 10,
        color: 'var(--text-muted)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 2,
        padding: '1px 4px',
        lineHeight: 1,
        opacity: on ? 1 : 0.5
      }
    }, it.key));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "healthy"
  }), " All systems healthy"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      color: 'var(--text-secondary)'
    }
  }, "Press \u2318K anywhere"))));
}
Object.assign(window, {
  Logo,
  TopBar,
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/site.jsx
try { (() => {
/* Supernomic marketing site — sections. Single-file kit. */
const {
  Button,
  Card,
  Badge,
  StatusDot,
  MetricTile,
  KeyHint,
  Icon
} = window.SupernomicDesignSystem_8d0f5d;
const MAXW = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 40px'
};
const EYE = {
  fontFamily: 'var(--font-geist-mono)',
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '-0.24px',
  color: 'var(--text-muted)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8
};
function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => window.localStorage.getItem('sn-mkt-theme') || 'dark');
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('sn-mkt-theme', theme);
  }, [theme]);
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => setTheme(v => v === 'dark' ? 'light' : 'dark'),
    title: "Toggle theme (t)",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-buttons)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon',
    size: 15
  }));
}
function Nav() {
  const links = ['Product', 'Enterprise', 'Security', 'Pricing', 'Company'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in srgb, var(--bg-canvas) 72%, transparent)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAXW,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/supernomic-mark-white.png",
    alt: "",
    className: "sn-mark",
    style: {
      width: 26,
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 16,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, "Supernomic")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      letterSpacing: '-0.01em'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, null), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Contact sales \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "sm"
  }, "Log in"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...MAXW,
      paddingTop: 96,
      paddingBottom: 96,
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: EYE
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "live"
  }), " World models \xB7 owned, not rented"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: '-2.88px',
      color: 'var(--text-primary)',
      margin: '20px 0 0'
    }
  }, "Own the model. Own the reality it describes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: '24px 0 0',
      maxWidth: 440
    }
  }, "Supernomic trains foundation models of your business \u2014 its markets, operations, and decisions \u2014 and runs them inside your boundary. You hold the weights. Your data never leaves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Read the docs \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYE,
      marginTop: 32,
      color: 'var(--text-secondary)'
    }
  }, "Press \u2318K in the console to do anything")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-well)',
      border: '1px solid var(--border-divider)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 38,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...EYE,
      marginLeft: 8,
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "live"
  }), " atlas-world \xB7 run 4A2F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement(MetricTile, {
    label: "Throughput",
    value: "1.2M",
    unit: "rows/s",
    delta: "+18%",
    trend: "up",
    spark: [3, 5, 4, 7, 6, 9, 11]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "p95",
    value: "42",
    unit: "ms",
    delta: "-6%",
    trend: "down",
    spark: [9, 8, 8, 6, 5, 4, 3]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Forecast MAE",
    value: "0.031",
    delta: "-11%",
    trend: "down",
    spark: [8, 7, 6, 5, 5, 4, 3]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Rows",
    value: "418M",
    delta: "+2.1M",
    trend: "up",
    spark: [2, 3, 4, 5, 6, 7, 8]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Live runs",
    value: "3",
    unit: "active",
    delta: "+1",
    trend: "up",
    spark: [1, 1, 2, 2, 3, 3, 3]
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Uptime",
    value: "99.98",
    unit: "%",
    delta: "+0.02",
    trend: "up",
    spark: [9, 9, 10, 10, 10, 10, 10]
  }))));
}
function Trust() {
  const names = ['MERIDIAN', 'NORTHWIND', 'ATLAS CORP', 'HELIOS', 'VANTA GRID', 'KELVIN'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-divider)',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAXW,
      paddingTop: 40,
      paddingBottom: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYE,
      justifyContent: 'center'
    }
  }, "Running inside the boundary of"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 15,
      letterSpacing: '0.04em',
      color: 'var(--text-muted)'
    }
  }, n)))));
}
function Features() {
  const items = [{
    k: 'box',
    t: 'Your world, modeled',
    d: 'A foundation model trained on your operations — not a generic LLM with your PDFs bolted on.'
  }, {
    k: 'shield',
    t: 'Inside your boundary',
    d: 'Runs in your VPC or on-prem. Data never leaves. You hold the weights and the audit trail.'
  }, {
    k: 'command',
    t: 'Hotkey-first console',
    d: '⌘K to run, deploy, or navigate. Built for operators who live in the keyboard.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...MAXW,
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: EYE
  }, "Why Supernomic"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 44,
      letterSpacing: '-1.1px',
      color: 'var(--text-primary)',
      margin: '16px 0 40px',
      maxWidth: 640
    }
  }, "A model of your business that you actually own."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    variant: "outline",
    padding: 24
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.k,
    size: 20,
    style: {
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 20,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      marginTop: 20
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      marginTop: 10
    }
  }, it.d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      marginTop: 20,
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, "Read more \u2192")))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...MAXW,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "light",
    grain: true,
    padding: 48,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '-0.24px',
      color: 'var(--color-signal-orange)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--color-signal-orange)'
    }
  }), " Build with us"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontWeight: 400,
      fontSize: 36,
      letterSpacing: '-1.12px',
      color: 'inherit',
      margin: '14px 0 0'
    }
  }, "Own your world model.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      background: 'var(--text-on-card)',
      color: 'var(--surface-card)'
    }
  }, "Request access \u2192")));
}
function Footer() {
  const cols = [['Product', ['World models', 'Console', 'Deployments', 'Pricing']], ['Company', ['About', 'Careers', 'News', 'Contact']], ['Resources', ['Docs', 'Security', 'Status', 'Changelog']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAXW,
      paddingTop: 64,
      paddingBottom: 64,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/supernomic-mark-white.png",
    alt: "",
    className: "sn-mark",
    style: {
      width: 24,
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 15,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, "Supernomic")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 14,
      maxWidth: 240
    }
  }, "World models enterprises can own.")), cols.map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 16
    }
  }, ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-geist)',
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, l)))))));
}
function Site() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-canvas)',
      minHeight: '100%',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActionRow = __ds_scope.ActionRow;

__ds_ns.DecisionOption = __ds_scope.DecisionOption;

__ds_ns.DecisionStack = __ds_scope.DecisionStack;

__ds_ns.DisclosureLine = __ds_scope.DisclosureLine;

__ds_ns.ProposalCard = __ds_scope.ProposalCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.ArtifactChip = __ds_scope.ArtifactChip;

__ds_ns.AskAgentButton = __ds_scope.AskAgentButton;

__ds_ns.FieldRow = __ds_scope.FieldRow;

__ds_ns.LinkOutCard = __ds_scope.LinkOutCard;

__ds_ns.PanelSection = __ds_scope.PanelSection;

__ds_ns.SourceChip = __ds_scope.SourceChip;

__ds_ns.ThreadedComment = __ds_scope.ThreadedComment;

__ds_ns.TranscriptMessage = __ds_scope.TranscriptMessage;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.KeyHint = __ds_scope.KeyHint;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.CaseTab = __ds_scope.CaseTab;

__ds_ns.CommandBar = __ds_scope.CommandBar;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.ThreadRow = __ds_scope.ThreadRow;

__ds_ns.Sweep = __ds_scope.Sweep;

__ds_ns.CommandPalette = __ds_scope.CommandPalette;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetricTile = __ds_scope.MetricTile;

})();
