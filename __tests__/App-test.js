import React from 'react';
import {create} from 'react-test-renderer';
import ModalDev from '../src/components/modalDev';


const modal =  create(<ModalDev/>);

test('snapshot', () => {
  expect(modal).toMatchSnapshot();
});
