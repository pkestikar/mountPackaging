import React from 'react';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";

import AboutUsPage from "Pages/AboutUsPage";

describe('AboutUsPage component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AboutUsPage />);
    });

    it('renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
