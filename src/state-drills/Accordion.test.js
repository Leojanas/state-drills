import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion sections={sections}/>, div);
    ReactDOM.unmountComponentAtNode(div);
    })

it('renders first with all sections closed', () => {
        const wrapper = shallow(<Accordion sections={sections}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
        })

it('opens first section when clicked', () => {
            const wrapper = shallow(<Accordion sections={sections} />)
            wrapper.find('button').at(0).simulate('click')
            expect(toJson(wrapper)).toMatchSnapshot()
          })

it('opens second section when clicked', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

it('only opens last section when multiple have been clicked', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(2).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

it('closes a section when clicked again', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })