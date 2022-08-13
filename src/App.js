import { Box, styled } from '@mui/material'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Header from './components/Header/Header'


const BannerContainer = styled(Box)`
  padding: 10px;
`
const CategoryContainer = styled(Box)`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 16%);
`
const Container = styled(Box)`
  margin-top: 55;
`
function App() {
  return (
    <>
      <Header />
      <Container>
        <CategoryContainer>
          <Category />
        </CategoryContainer>
        <BannerContainer>
          <Banner />
        </BannerContainer>
      </Container>
    </>
  )
}

export default App
