import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LeapYear from './App';

Enzyme.configure({ adapter: new Adapter() });

test('check for no input', () => {
  const App = Enzyme.mount(<LeapYear />);
  App.find('input').instance().value = '';
  let output = App.instance().checkIfLeapYear();
  expect(output).toEqual('');
});

test('check for Leap year', () => {
  const App = Enzyme.mount(<LeapYear />);
  App.find('input').instance().value = '2000';
  let output = App.instance().checkIfLeapYear();
  expect(output).toEqual(true);
});

test('check for not a Leap year', () => {
  const App = Enzyme.mount(<LeapYear />);
  App.find('input').instance().value = '1700';
  let output = App.instance().checkIfLeapYear();
  expect(output).toEqual(false);
});

