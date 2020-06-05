import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Button from './index';

describe('Testing out the Button component', () => {
    test('if the button renders correctly', () => {
        const wrapper = shallow(<Button>Button Text</Button>);

        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should add in the appropriate color palette for the button based on the prop', () => {
        const wrapper = shallow(<Button palette={'secondary'}>Button Text</Button>);

        expect(toJSON(wrapper).props.className).toContain('mp--button-secondary');
    });

    it('should display Loading... when the isLoading prop is true', () => {
        const wrapper = shallow(<Button isLoading={true}>Button Text</Button>);


        expect(wrapper.find('Loading..').to.have.lengthOf(1));
    });
});
