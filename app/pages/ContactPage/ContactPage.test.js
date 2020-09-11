import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import ContactPage from "Pages/ContactPage/index";

describe('ContactPage component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ContactPage />);
    });

    it('renders correctly', () => {
         expect(toJSON(wrapper)).toMatchSnapshot();
    });


});
