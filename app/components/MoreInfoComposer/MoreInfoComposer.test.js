import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import MoreInfoComposer from "Components/MoreInfoComposer/index";

let handleClick = jest.fn();

describe('MoreInfoComposer component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MoreInfoComposer />);
    });

    it('renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders a blank title if no title is provided in the props', () => {
        expect(wrapper.find('span').text()).toEqual('');
    });

    it('renders the cta with no text value if not provided', () => {
        expect(wrapper.find('Button').text()).toEqual('');
    });

    it('executes the function provided for the button', () => {
        wrapper.setProps({ handleClick: handleClick });
        wrapper.find('Button').simulate('click');
        expect(handleClick).toBeCalled();
    });

    it('renders the provided title and the cta text', () => {
        let title = 'This is the text title';
        let cta = 'Click here';

        wrapper.setProps({ title: title, ctaText: cta });
        expect(wrapper.find('span').text()).toEqual(title);
        expect(wrapper.find('Button').text()).toEqual(cta);
    });
});
