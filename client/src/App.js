import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { SnackbarProvider, useSnackbar } from 'notistack';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { useGetAllProductsQuery } from './containers/featcher/producApi/productApi'
import { Container } from '@mui/material';
import ConfigPages from './configPages/ConfigPages';
import Header from './components/header/Header'
import { Box, ThemeProvider } from '@mui/system';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import theme from './theme';
import Footer from './components/footer/Footer';
import { store } from './containers/store';
import { productsFatch } from './containers/featcher/product/productSlice';
import { Slide, Stack, Typography } from '@mui/material';
import { UseFormProvider } from './context/formContext';
import { GuardSpinner } from "react-spinners-kit";


function App() {
  const { data, isLoading, error } = useGetAllProductsQuery()
  const [product, setProduct] = useState([])
  const [loding, setLoding] = useState(false)

  const productsCart = () => {
    setLoding(true)
    let listproduct = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    return new Promise((res, rej) => {
      if (listproduct.length >= 1) {
        res(listproduct)
        setLoding(false)
        return
      }
      if (data) {
        localStorage.setItem('products', JSON.stringify(data))
        res(data)
        setLoding(false)
        return
      }
    })
  }

  useEffect(() => {
    productsCart()
      .then(res => setProduct(res))
  }, [data])
  return (
    <>
      {loding ?
        <Box
          height='100vh'
          width='100vw'
          bgcolor='#0c0e30'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <GuardSpinner size={50} color="#686769" loading={loding} />
        </Box> :
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={2}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            TransitionComponent={Slide}
          >
            <UseFormProvider>
              <Container maxWidth="xl">
              <div style={{ background: '#f6f9fc', overflow: 'hidden' }}>
                <Header />
                <ToastContainer />
                <ConfigPages />
                <Footer />
              </div>
              </Container>
            </UseFormProvider>
          </SnackbarProvider>
        </ThemeProvider>
      }
    </>
  );
}

export default App;



