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
