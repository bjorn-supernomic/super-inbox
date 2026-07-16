# Super Inbox

Action Inbox — operator surface for reviewing and approving agent-proposed actions,
imported from [claude.ai/design](https://claude.ai/design/p/111b4948-aa64-4bbc-ac95-08e0956e3a1d).

`Action Inbox.dc.html` is the app: a self-contained React component rendered by the
dc-runtime (`support.js`), styled by the Supernomic design system (`_ds/`), with sample
data in `inbox-data.js`. No build step.

## Run

```sh
bunx serve .
```

then open http://localhost:3000 (needs an HTTP server — the app uses ES module imports).
