import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Container = styled(Box)`
  display: flex;
  align-items: center;
`

const CustomButton = styled(Button)`
  margin-left: 20px;
  width: 200px;
  height: 30px;
  background: #fff;
  color: blue;
  font-size: 16;
  border-radius: 0;
  text-transform: 'capitalize';
  :hover {
    background: #fff;
    color: blue;
  }
`

const NavItems = () => {
  return (
    <Container>
      <CustomButton variant='contained'>Login</CustomButton>
      <Typography
        style={{
          marginLeft: '8%',
          width: 205,
        }}
      >
        Become a Seller
      </Typography>
      <Typography
        style={{
          marginLeft: '5%',
        }}
      >
        More
      </Typography>
      <Box
        style={{
          marginLeft: '8%',
          display: 'flex',
        }}
      >
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>
    </Container>
  )
}

export default NavItems
