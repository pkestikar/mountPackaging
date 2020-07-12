import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {CONTACT_EMAIL, COPYRIGHT_NOTICE_TEXT} from "../../config";

import Footer from './index';

describe('Footer component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should render correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should have the right logo (mount light)', () => {
        expect(wrapper.find('img').prop('src')).toContain('mount-logo-light.png');
    });

    it('should contain the right copyright notice text', () => {
        expect(wrapper.find('.mp--copyright-notice').text()).toEqual(COPYRIGHT_NOTICE_TEXT);
    });

    it('should have the right email address from config', () => {
        expect(wrapper.find('.footer-email').text()).toContain(CONTACT_EMAIL);
    });

    it('should have the right number of the footer nav links', () => {
        expect(wrapper.find('.footer-nav-wrapper').children().length).toEqual(4);
    });
});
