import React from 'react';
import styled from 'styled-components';

const Layout = (props) => {
    return (
        <LayoutCss>{props.children}</LayoutCss>
    )
}

export default Layout;

const LayoutCss = styled.div`
    margin: 100px auto;
  max-width: 1200px;
  max-height: 100%;
  background-color: white;
  height: 100%;
  width: 80%;
  box-shadow: 0px 0px 20px #7e7a87;
`