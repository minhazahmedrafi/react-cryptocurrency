import React from 'react'
import { Container, AppBar, Toolbar, Typography, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CryptoContex, { CryptoState } from '../utils/CryptoContex';

const Header = () => {
    
    const useStyles = makeStyles({
    title: {
      flex: 1,
      color: "#FFD700",
      fontWeight: "bold !important",
      cursor: "pointer",
    },
});
const classes = useStyles();
const navigate = useNavigate()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const {currency, setCurrency} = CryptoState()
    return (
        <>
        <ThemeProvider theme={darkTheme}>
           <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" onClick={()=> navigate("/")} className={classes.title}>Crypto Hunter</Typography>

                        <Select 
                        defaultValue={"BDT"}
                        variant="outlined" 
                        style={{width: 100, height: 40,marginLeft: 15,}}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"} >USD</MenuItem>
                            <MenuItem value={"BDT"} >BDT</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
           </ThemeProvider>
        </>
    )
}

export default Header
