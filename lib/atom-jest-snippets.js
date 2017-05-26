'use babel';

import generateSnippets from './generateSnippets';
import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.config.onDidChange('atom-jest-snippets', (value) => {
      generateSnippets();
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};