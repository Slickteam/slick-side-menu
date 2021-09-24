import { html } from 'lit-html';
import './my-element.ts';

export default {
    title: 'SlickSideMenu',
    component: 'slick-side-menu',
    argTypes: {
        name: { control: 'text' },
    }
};


function Template({
                      name='Username',
                  }) {
    return html`
        <slick-side-menu
                .name=${name}
        ></slick-side-menu>
    `;
}

export const Regular = Template.bind({});
