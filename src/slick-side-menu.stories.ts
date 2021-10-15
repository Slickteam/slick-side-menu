import { html } from 'lit-html';
import './slick-side-menu.ts';

export default {
    title: 'SlickSideMenu',
    component: 'slick-side-menu',
    argTypes: {
        open: { control: 'boolean' },
        title: { control: 'string' },
        user: { control: 'boolean' },
        username: { control: 'string' },
        avatar: { control: 'string' },
        items: { control: 'array' },
        color: { control: 'string' },
        background: { control: 'string' },
    }
};


function Template({
                      open=true,
                      title='Menu title',
                      user=true,
                      username='Michel Laboule',
                      items = [
                          {
                              title: 'First title',
                              event: 'first',
                              icon: 'M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 8V4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 11H6v-3h4v3z'
                          },
                          {
                              title: 'Title second',
                              event: 'second',
                              icon: 'M2.5,19H21.5V21H2.5V19M22.07,9.64C21.86,8.84 21.03,8.36 20.23,8.58L14.92,10L8,3.57L6.09,4.08L10.23,11.25L5.26,12.58L3.29,11.04L1.84,11.43L3.66,14.59L4.43,15.92L6.03,15.5L11.34,14.07L15.69,12.91L21,11.5C21.81,11.26 22.28,10.44 22.07,9.64Z'
                          }
                      ]
                  }) {
    return html`
        <slick-side-menu
                .open=${open}
                .title=${title}
                .user=${user}
                .username=${username}
                .items=${items}
        ></slick-side-menu>
    `;
}

export const Regular = Template.bind({});
