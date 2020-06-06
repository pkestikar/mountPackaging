import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Button from './index';

describe('Button component', () => {
    test('if the button renders correctly', () => {
        const wrapper = shallow(<Button>Button Text</Button>);

        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should add in the appropriate color palette for the button based on the palette prop', () => {
        const wrapper = shallow(<Button palette={'secondary'}>Button Text</Button>);

        expect(toJSON(wrapper).props.className).toContain('mp--button-secondary');

        wrapper.setProps({ palette: 'primary' });
        wrapper.update();
        expect(toJSON(wrapper).props.className).toContain('mp--button-primary');

        wrapper.setProps({ palette: 'tertiary' });
        wrapper.update();
        expect(toJSON(wrapper).props.className).toContain('mp--button-tertiary');
    });

    it('should add in the appropriate button size class based on the size prop', () => {
        const wrapper = shallow(<Button size={'small'}>Button Text</Button>);

        expect(toJSON(wrapper).props.className).toContain('small');

        wrapper.setProps({ size: 'medium' });
        wrapper.update();
        expect(toJSON(wrapper).props.className).toContain('medium');

        wrapper.setProps({ size: 'large' });
        wrapper.update();
        expect(toJSON(wrapper).props.className).toContain('large');
    });

    it('should display Loading... when the isLoading prop is true', () => {
        const wrapper = shallow(<Button isLoading={true}>Button Text</Button>);

        expect(wrapper.find('.mp--button').text()).toEqual('Loading..');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
