import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PageHeader from "Components/PageHeader/index";

describe('PageHeader component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PageHeader />);
    });

    it('renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders a blank h1 tag with a surrounding div if no title provided', () => {
        expect(wrapper.find('h1').text()).toEqual('');
    });

    it('renders the title text provided in the title prop', () => {
        let titleText = 'About Us';
        wrapper.setProps({ title: titleText });
        expect(wrapper.find('h1').text()).toEqual(titleText);
    });
});