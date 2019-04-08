import React from 'react';
import styled from 'styled-components';


function DropdownMenu({ pos }) {

    const Menu = styled.ul`
    background-color: rgb(28, 28, 28);
    position: fixed;
    z-index: 2;
    top: ${pos.top};
    left: ${pos.left};
    list-style-type: none;
    padding: 5px 0px;
    min-width: 160px;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    outline: none;
    border-radius: .25rem;
  `;

    return (
        <Menu className="menu-options">
          <li className="menu-option">Start Radio</li>
          <li className="menu-option">Save to Your Library</li>
          <li className="menu-option">Copy Artist Link</li>
        </Menu>
    );
  }

export default DropdownMenu;