import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../../src/pages/Main';

it('renders correctly', () => {
  renderer.create(<Main />);
});
