import {Link} from 'react-router-dom'

import RegisterContext from '../context/RegisterContext'

import Header from '../Header'

import {
  HomeBgContainer,
  HomeHeading,
  HomeDescription,
  RegisterButton,
  Img,
} from './style'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <>
            <Header />
            {isRegistered ? (
              <HomeBgContainer>
                <HomeHeading isRegistered>Hello {name}</HomeHeading>
                <HomeDescription>Welcome to {topic}</HomeDescription>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                  alt="meetup"
                />
              </HomeBgContainer>
            ) : (
              <HomeBgContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomeDescription>Please register for the topic</HomeDescription>
                <Link to="/register">
                  <RegisterButton onClick={onRegister} type="button">
                    Register
                  </RegisterButton>
                </Link>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                  alt="meetup"
                />
              </HomeBgContainer>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
