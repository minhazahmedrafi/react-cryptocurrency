import { Container, Grid, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/Api';
import { CryptoState } from '../utils/CryptoContex';
import parse from 'html-react-parser';
import { numberWithCommas } from '../components/CoinsTable';


const Coin = () => {

const { id } = useParams();
const [coin, setCoin] = useState()
const {currency, symbol} = CryptoState();

const fetchCoin =async()=> {
const { data } = await axios.get(SingleCoin(id))

setCoin(data)
}

useEffect(() => {
fetchCoin();
// eslint-disable-next-line
}, [])

if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
return (
<div>
  <Container style={{textAlign: 'center', paddingBottom: 20,}}>
    <Grid item xs={12}>
      <Grid item xs={12} className="coinImage">
        <img src={coin?.image.large} alt={coin?.name} />
      </Grid>
      <Typography style={{fontWeight: 'bold'}} variant="h3">{coin?.name}</Typography>
      <Typography className="coinDesc"
       variant="subtitle1"
       style={{
         width: '100%',
         padding: 25,
         paddingBottom: 15,
         paddingTop: 0,
         margin: "0px auto"
       }}
       >
          {parse(`${coin?.description.en.split(". ")[0]}`)}.
        </Typography>
        <Grid item xs={12}>
          <span style={{display: 'flex',justifyContent:'center', alignItems: "center",}}>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Rank:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span  style={{display: 'flex',justifyContent:'center', alignItems: "center", margin: '10px 0px',}}>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Current Price:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {symbol}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span  style={{display: 'flex',justifyContent:'center', alignItems: "center",}}>
            <Typography variant="h5" style={{fontWeight: 'bold'}}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </Grid>
    </Grid>
  </Container>
</div>
)
}

export default Coin