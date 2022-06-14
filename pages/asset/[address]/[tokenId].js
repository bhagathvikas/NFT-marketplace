import {useState,useEffect} from "react"
import {router} from "next/router"
import {useAddress,useMarketPlace} from "@thirdweb-dev/react"
import {BigNumber} from "ethers"

import TopNavbarLayout  from "../../../layouts/TopNavbarLayout"

const NFT=()=>{

  const [loading,setLoading] = useState(false)

  
  
  return(
    <TopNavbarLayout>
      <div className={style.wrapper}>
        {loading ?(
      <div>Loading...</div> 
        ):(
      <div className={style.nftContainer}>
      <div className={style.leftContainer}>
        <div className = {style.leftElement}>

          
        </div>
        <div className = {style.leftElement}>

          
        </div>
        
        
        </div>
        <div  className={style.Container}>
          <div className={style.buyoutContainer}>
            
          </div>
        </div>
      </div>

      
      
      
        )}
      
      </div>
    </TopNavbarLayout>
  )
  
  
}

export  default NFT