import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import TopBar from './index';
import Button from '../Button';
// import Icon from '../Icon';

// jest.mock('../Button', () => {
//     return {
//         __esModule: true,
//         default: () => {
//             return (
//                 <button>
//                     Button Text
//                 </button>
//             )
//         }
//     }
// });

jest.mock('../Button', () => 'Button');

const resizeWindow = (x, y) => {
    window.innerHeight = y;
    window.innerWidth = x;

    window.outerWidth = x;
    window.outerHeight = y;

    window.dispatchEvent(new Event('resize'));
};

describe('TopBar Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TopBar />);
    });

    test('if it renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    // it('should not display the side menu above 1000px width', () => {
    //     console.log(wrapper);
    //     expect(wrapper.exists('#side-menu')).toEqual(false);
    // });
    //
    // it('should display the side menu below 1000px width', () => {
    //     resizeWindow(800, 800);
    //     expect(wrapper.exists('#side-menu')).toEqual(true);
    // });

});
