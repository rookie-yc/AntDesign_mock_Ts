import { configure, addDecorator, addParameters } from '@storybook/react';
import React from 'react';

import "../src/styles/index.scss"

configure(require.context('../src', true, /\.stories\.tsx$/), module);

const styles: React.CSSProperties = {
  textAlign: 'center',
}

const  CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)