import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA Logo Error " />
          <SignUp>GET ALL THERE</SignUp>
          <Discription>
            Disney is the home for your favorite movies and shows from Disney,
            Pixar, Marvel, Star Wars, and Nat Geo. Sign up for Disney+ and start
            streaming today.
          </Discription>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA Logo Error " />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Discription = styled.p`
  font-weight: bold;
  color: #f9f9f9;
  margin-bottom: 0 0 24px;
  font-size: 20px;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
