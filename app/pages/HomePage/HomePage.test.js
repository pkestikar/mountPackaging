import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import HomePage from './index';
import { serviceItems, ServiceInfoItemComposer } from "./index";

describe('HomePage component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    it('should render correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should have 5 service elements in the WE SPECIALIZE IN section', () => {
        expect(wrapper.find('.mp--homepage--second-section').childAt(1).find('ServiceInfoItemComposer').length).toEqual(5);
    });

    it('should have the right info passed in for the 5 service info elements', () => {
        wrapper.find('.mp--homepage--second-section').childAt(1).find('ServiceInfoItemComposer').forEach((node, index) => {
            expect(node.prop('image')).toEqual(serviceItems[index].image);
            expect(node.prop('title')).toEqual(serviceItems[index].title);
            expect(node.prop('description')).toEqual(serviceItems[index].description);
        });
    });
});

describe('ServiceInfoItemComposer component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ServiceInfoItemComposer
                image={serviceItems[0].image}
                title={serviceItems[0].title}
                description={serviceItems[0].description}
            />
        );
    });

    it('should render correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should set the image path correctly', () => {
        expect(wrapper.find('.service-info-img').prop('src')).toContain(serviceItems[0].image);
    });


    it('should set the title correctly', () => {
        expect(wrapper.find('.title').text()).toEqual(serviceItems[0].title);
    });

    it('should set the description correctly', () => {
        expect(wrapper.find('.text').text()).toEqual(serviceItems[0].description);
    });
});
