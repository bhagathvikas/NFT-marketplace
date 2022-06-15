import {useState,useEffect} from "react"
import {useRouter} from "next/router"
import {useAddress,useMarketplace} from "@thirdweb-dev/react"
import {BigNumber} from "ethers"

import TopNavbarLayout  from "../../../layouts/TopNavbarLayout"
import NFTImage from '../../../components/NFTDetails/NFTImage'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'

const style = {
  
}

const NFT=()=>{
  const [listing,setListing] = useState()
  const [loading,setLoading] = useState(false)
  const router = useRouter()

  const {tokenId} = router.query
  
const marketplace = useMarketplace('0x7303B06571759A4c274Ad530775987A00216D003')
const address = useAddress()

  useEffect(()=>{
    getListing()
  },[]
    )

  useEffect(()=>{
    if(!address){
      router.replace('/')
    }
  },[address]
    )



const getListing = async () =>{
  try {
    setLoading(true)
    const listing = await marketplace.getListing(BigNumber.from(tokenId))
    setListing(listing)
    setLoading(false)
  } catch (error) {
    console.log(error)
    
  }
}

  const buyNFT = async () =>{
    try {
      await marketplace.buyoutListing(tokenId,1)
      
    } catch (error) {
      console.log(error  )
      
    }
  }


  
  
  return(
    <TopNavbarLayout>
      <div className={style.wrapper}>
        {loading ?(
      <div>Loading...</div> 
        ):(
      <div className={style.nftContainer}>
      <div className={style.leftContainer}>
        <div className = {style.leftElement}>
          <NFTImage image={listing?.asset?.image}/> 
        </div>
        <div className = {style.leftElement}>

          {/*<NFTDetails/> */}
        </div>
        
        
        </div>
        <div className={style.rightContainer}>
        {/*<NFTBasicInfo/> */}
        </div>
        <div  className={style.Container}>
          <div className={style.buyoutContainer}>
            <NFTSalesInfo price = {listing?.buyoutCurrencyValuePerToken?.displayValue } buyNFT= {buyNFT}/> 
            
          </div>
        </div>
      </div>

      
      
      
        )}
      
      </div>
    </TopNavbarLayout>
  )
  
  
}

export  default NFT