import React from 'react';
import toJSON from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import ServicesPage from "Pages/ServicesPage/index";

describe('ServicesPage component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ServicesPage />);
    });

    it('renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
