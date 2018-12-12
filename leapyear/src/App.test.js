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
  App.find('button').simulate('click');
  const warn = App.find('#warn');
  expect(warn.text()).toEqual("Please enter year");
});

test('check for Leap year', () => {
  const App = Enzyme.mount(<LeapYear />);
  App.find('input').instance().value = '2000';
  App.find('button').simulate('click');
  const output = App.find('#leap');
  expect(output.text()).toEqual("Hurray! its a Leap year");
});

test('check for not a Leap year', () => {
  const App = Enzyme.mount(<LeapYear />);
  App.find('input').instance().value = '1700';
  App.find('button').simulate('click');
  const output = App.find('#notLeap');
  expect(output.text()).toEqual("Oops! its not a Leap year");
});

