// Entry for the Agentation feedback toolbar — bundled locally by bun into
// agentation-toolbar.js (own React root, independent of the dc-runtime tree).
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

const mount = document.createElement('div');
mount.id = 'agentation-root';
document.body.appendChild(mount);
createRoot(mount).render(React.createElement(Agentation));
