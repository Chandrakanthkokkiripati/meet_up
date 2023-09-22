import {Link} from 'react-router-dom'

import {Navbar, LogoImage} from './style'

const Header = () => (
  <Link to="/">
    <Navbar>
      <LogoImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Navbar>
  </Link>
)

export default Header
