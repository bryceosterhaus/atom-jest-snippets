'use babel';

import generateSnippets from './generateSnippets';
import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.config.onDidChange('atom-jest-snippets', (value) => {
      generateSnippets(
        atom.config.get('atom-jest-snippets.toggleSemicolons'),
        atom.config.get('atom-jest-snippets.quoteType'),
      );
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
