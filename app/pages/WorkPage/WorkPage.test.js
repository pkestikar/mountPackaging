import React from 'react';
import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import WorkPage from "Pages/WorkPage/index";

describe('WorkPage component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<WorkPage />);
    });

    it('renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});