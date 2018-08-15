/* eslint global-require: 0 */
import React from 'react';
import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import ExampleWithInfo from './components/ExampleWithInfo';

// Customize the UI
setOptions({
  name: '🛒 components library',
  url: 'http://localhost:9000',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

// add WithInfo addon which exposes proptables, usage, and source code for examples
setAddon({
  addWithInfo({ kind, story, storyFn, components, usage, useHOC }) {
    return this.add(story, () => (
      <ExampleWithInfo
        kind={kind}
        story={story}
        storyFn={storyFn}
        components={components}
        usage={usage}
        useHOC={useHOC}
      />
    ));
  },
});

function loadStories() {
  require('../examples/index');
}

configure(loadStories, module);
