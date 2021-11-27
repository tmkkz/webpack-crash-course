import _ from 'lodash';

const component = () => {
  const element = document.createElement('div')
  const array = ['Hellow', 'webpack'];
  element = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());