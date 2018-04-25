import React from 'react';
import Home from '../src/scenes/home.jsx';
import renderer from 'react-test-renderer';
import "isomorphic-fetch"

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});