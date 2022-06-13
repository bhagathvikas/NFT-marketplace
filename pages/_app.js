import '../styles/globals.css';
import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react';


function MyApp({ Component, pageProps }) {
  return(
  <ThirdwebProvider
    desiredChainId = {ChainId.Rinkeby}
    ChainRpc = {{[ChainId.Rinkeby] : "https://rinkeby.infura.io/v3/fb18c917041c49ee936ddf1708c2fae9"}}
    >
 <Component {...pageProps} />
    </ThirdwebProvider>
)
}

export default MyApp
