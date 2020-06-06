import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import TopBar from './index';
import Button from '../Button';

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

describe('TopBar Component', () => {

    test('if it renders correctly', () => {
        const wrapper = shallow(<TopBar />);

        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});
