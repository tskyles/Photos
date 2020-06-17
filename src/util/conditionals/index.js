import React from 'react';

const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};

/**
 * Component to render components with if condition
 * @param {*} props 
 */
export const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition }),
  );

/**
* Component to render components, used with If component
* @param {*} props 
*/
export const Then = props => render(props.condition, props.children);

/**
 * Component to render components, used with If component
 * @param {*} props 
 */
export const Else = props => render(!props.condition, props.children);

/*
<When condition={true}>
  <h2>When Works</h2>
</When>
*/

/**
 * Component to render components when a condition is true
 * @param {*} props 
 */
export const When = props => render(props.condition, props.children);

/*
<Unless condition={administrator}>
  Pay more $$ and we will make you an admin
</Unless>
*/

/**
 * Component to render components unless a condition is met
 * @param {*} props 
 */
export const Unless = props => render(!props.condition, props.children);