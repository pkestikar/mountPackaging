import React from 'react';
import { shallow, mount } from 'enzyme';

import InputComposer from "Components/InputComposer/index";

describe('InputComposer component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<InputComposer />);
    });

    it('adds in the error class if the hasError prop is true', () => {
        wrapper.setProps({ hasError: true });
        expect(wrapper.find('.mp--input-composer').hasClass('error')).toBe(true);
    });

    it('shows the label span if the label is provided in the props', () => {
        let text = 'hello';
        wrapper.setProps({ label: text });
        expect(wrapper.find('.mp--input-composer').first().text()).toEqual(text);
    });

    it('shows the default error message if hasError is true and shows the provided message if available', () => {
        let defaultValue = 'Field required.';
        let customErrorMessage = 'This is an error..';
        wrapper.setProps({ hasError: true });
        expect(wrapper.find('.error-message').text()).toEqual(defaultValue);

        wrapper.setProps({ errorMessage: customErrorMessage });
        expect(wrapper.find('.error-message').text()).toEqual(customErrorMessage);
    });

    it('renders the children as provided', () => {
        wrapper = mount(
            <InputComposer>
                <div className={'child-element'}>this is a child element</div>
            </InputComposer>
        );
        expect(wrapper.find('.child-element')).toBeTruthy();
    });
});
