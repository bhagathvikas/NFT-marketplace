import {BsCreditCard2FrontFill,BsFillTagFill} from 'react-icons/bs'
import {AiOutlineQuestionCircle,AiOutlineClockCircle} from 'react-icons/ai' 
import Image from 'next/image'

const style = {
  wrapper:`flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black`,
  header : ` flex items-center justify-between rounded-t-lg px-6 py-4 dark:bg[#262a30]`,
  headerContent:`flex items-center space-x-2`,
  haederIcon: `h-6 w-6`,
  greyText:`text-gray-400`,
  mainContainer:`space-y-4 rounded-b-lg px-6 py-y dark:bg-[#313339]`,
  priceInfoContainer:`space-y-1`,
  mediumFont:`font-medium`,
  priceContainer :`flex items-center space-x-2`,
  price:`text-3xl font-bold`,
  buttonContainer:` flex space-x-4`,
  button:`flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-bg py-2 text-white`,
  purchaseButton:`bg-blue-500`,
  offerButton:`border border-black bg-[#363840]`,
  buttonIcon:`h-6 w-6`  
}

const NFTSalesInfo = ({price,buyNFT}) =>{
  return(
    <div className= {style.wrapper} >
      <div className = {style.header}>
      <div className = {style.headerContent}>
        <AiOutlineClockCircle className={`${style.greyText}${style.headerIcon}`}/>   
      
        <div className={style.greyText}>
          Sales Ends on 
          </div>
         <AiOutlineQuestionCircle className={style.hedaerIcon}/>
      </div>
       
        <div className={style.mainContainer}>
          <div className={style.priceInfoContainer}>
            <div className = {`${style.greyText} ${style.mediumFont}`}>
              <div className={style.priceContainer}>
                <Image

                  src = '/weth-logo.svg'
                  height = {24}
                  width = {24}
                  alt = 'weth'
                  />
                <span className={style.price}>{price}</span>
              
              </div>
            </div>
            <div className={style.buttonContainer}>
              <div className={`${style.button} ${style.purchaseButton}`} onClick={buyNFT}>
                <BsCreditCard2FrontFill className={style.buttonIcon}/>
                <span className='text-lg font-semibold'> Buy Now</span>
                
              </div>
              <div className={`${style.button}${style.offerButton}`}>
              <BsFillTagFill className={style.buttonIcon}/>
                <span className='text-lg font-semibold'> Offer</span>
              </div>
            </div>
          </div>
        
        </div>
      
        
          
        </div>
    </div>
      
    
    
  )
  
}

export default NFTSalesInfo