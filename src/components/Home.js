import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'
function Home() {
  return (
    <Container>
      <Section 
      title= "Model 3"
      description = "Order Online for Touchless Delivery"
      backgroundImg ="m3.jfif"
      leftBtnText ="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="mY.jfif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="ms.jfif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="mX.jfif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solarpanel.jfif"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solarroof.jfif"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="access.jfif"
        leftBtnText="Shop Now"
        
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh; 
`