import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import HomePage from './index';

jest.mock('Components/Button', () => <button>Mock button</button>);

describe('HomePage component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    it('should render correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
