import React from 'react';
import {storiesOf} from '@storybook/react';
import Hello from '../src/components/hello';

storiesOf('Hello', module)
  .add('just hello', () => <Hello/>);