import { LitElement, html, customElement, property, css } from 'lit-element'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('slick-side-menu')
export class SlickSideMenu extends LitElement {
  static styles = css`
    .sidenav {
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      height: 100%;
      width: 240px;
      padding: 6px 10px;
    }
    
    .sidenav .header{
      display: block;
      height: 120px;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
      padding: 10px 3px;
    }
    
    .sidenav .header .title{
      display: flex;
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
    }
    
    .sidenav .header .connected{
      background-blend-mode: exclusion;
      display: flex;
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      filter: brightness(120%);
    }    
    
    .sidenav .header .avatar{
      margin: 0 10px 0 5px;
      border-radius: 5px;
    }
    
    .sidenav .header .username{
      font-size: smaller;
    }
    
    .sidenav ul li a{
      text-decoration: none;
    }
    
    .nav ul {
      padding: 0;
      margin: 0;
    }
    
    .nav ul li{
      height: 40px;
      margin: 0 3px 5px;
      list-style: none;
      line-height: 40px;
      padding: 6px 12px;
      border-radius: 5px;
      transition: all 0.2s ease;
    }
    
    .nav ul li a > *{
      margin: 0 6px;
    }
    
    .nav ul li a{
      color: inherit;
      display: flex;
      align-items: center;
      transition: all 0.2s ease;
    }
    
    .nav ul li:hover {
      height: 100%;
      transition: all 0.2s ease;
    }
    
    .log_out {
      margin: 0 10px 0 0;
      border: none;
      color: currentColor;
      background: inherit;
    }
    
    .log_out:hover {
      cursor: pointer;
    }
    
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.5;
      transition: all 1s ease;
      z-index: 90;
    }
  `

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  open = false

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  title = 'Menu'

  /**
   * A boolean to show or hide the user section
   */
  @property()
  user = true

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  avatar = 'http://www.fillmurray.com/50/50'

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  username = 'Michel Laboule'

  /**
   * An array that defines the menu items through 3 properties:
   * "title" to define the text content,
   * "to" to define the href,
   * "icon" that should be filled with the "d" property of a <path> tag from a <svg> tag
   */
  @property({ type: Array })
  items = [
    {
      title: 'Le premier titre',
      to: '#',
      icon: 'M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 8V4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 11H6v-3h4v3z'
    },
    {
      title: 'Le titre second',
      to: '#',
      icon: 'M2.5,19H21.5V21H2.5V19M22.07,9.64C21.86,8.84 21.03,8.36 20.23,8.58L14.92,10L8,3.57L6.09,4.08L10.23,11.25L5.26,12.58L3.29,11.04L1.84,11.43L3.66,14.59L4.43,15.92L6.03,15.5L11.34,14.07L15.69,12.91L21,11.5C21.81,11.26 22.28,10.44 22.07,9.64Z'
    }
  ]

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  color = '#ffffff'

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  background = '#f97316'

  colorInversion(e: any) {
    e.currentTarget.setAttribute('style', `background: ${this.color}; color: ${this.background};`)
  }

  backToNormal(e: any) {
    e.currentTarget.setAttribute('style', `background: ${this.background}; color: ${this.color};`)
  }

  logOut() {
    console.log(`event 'slick-logout' emitted`)
    const event = new CustomEvent('slick-logout');
    dispatchEvent(event);
  }

  overlayClicked() {
    console.log(`event 'slick-overlay' emitted`)
    const event = new CustomEvent('slick-overlay');
    dispatchEvent(event);
  }

  render() {
    return html`
      <div 
          class="sidenav" 
          style="${this.open ? css`transform: translate(0); transition: transform 0.5s ease-in-out; ` : css`transform: translate(-100%); transition: transform 0.5s ease-in-out;`} background:${this.background};">
        <div 
            class="header"
            style="color: ${this.color};"
        >
          <div 
              class="title"
              style="color: ${this.color};"
          >
            ${this.title.toUpperCase()}
          </div>
          ${ this.user ? html`
            <div class="connected" style="background: ${this.background}; color: ${this.color};">
              <img class="avatar" height="40" width="40" src="${this.avatar}" alt="Avatar pic">
              <div class="username">
                ${this.username}
              </div>
              <button class="log_out" @click="${this.logOut}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor ;transform: ;msFilter:;"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
              </button>
          </div>` 
              : html``
          }
          
        </div>
        <div class="nav">
          <ul>
            ${ this.items.map( el => {
                return html`
                  <li
                      style="color: ${this.color};"
                      @mouseover="${this.colorInversion}"
                      @mouseout="${this.backToNormal}"
                  >
                    <a
                        href="${el.to}"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="${ el.icon }"></path></svg>
                      <span class="link_name">${ el.title }</span>
                    </a>
                  </li>
                `
            }) }
          </ul>
        </div>
      </div>
      ${this.open ? html`
            <div class="overlay" @click="${this.overlayClicked}"></div>
          ` 
          : html``}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slick-side-menu': SlickSideMenu
  }
}
