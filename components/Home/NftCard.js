import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const style = {

  wrapper: `relative flex h-[450px] w-[350px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#3333]`,
  imageContainer: `h-3/4 overflow-hidden`,
  nftImage: `rounded-t-lg object-cover`,
  nftInfoContainer:`flex justify-between`,
  nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
  collectionTitle:`text-sm font-bold `,
  priceContainer: `flex flex-col items-end justify-center space-y-1`,
  priceTitle: `text-xs fiont-light`,
  likesContainer: ` flex items-center justify-end space-x-2 `,
  heartIcon:   `h-3 w-3 text-gray-500 dark:text-gray-400`,
  likesCounter: `text-xs text-gray-500 dark:text-gray-400`,
  wethImageContainer: `flex items-center justify-end space-x-2`,
  
}

const NftCard = ({listing}) => {
  return (
    <div className={style.wrapper}>
      
      <div className= {style.nftLowerConstainer}>
        <div className={style.nftInfoContainer}>
          <div>
            {listing.asset.collection && (
      <div className={style.collectionTitle}>
        {listing.asset?.collection?.name}
      </div>
            )}
            <div className={style.nftTitle}>
              {listing.asset.name}
            </div>
          </div>
        </div>
        <div className={style.priceConstainer}>
        <div  className = {style.priceTitle}>buy at
        
        </div>
          <div className={style.wethImageContainer}>
            <Image
              height= {16}
              width = {16}
              src = 'weth-logo.svg'
              alt= 'weth'
              
              />
            <div className={style.priceValue}>
        {listing.buyoutCurrencyValuePerToken?.displayValue}
            </div>
          </div>
          
        
        </div>

        <div className={style.likecontainer}>
          <AiOutlineHeart className={style.heartIcon}/>
          <div className={style.likeCounter}>
            {
              listing.asset?.stats?.favorites ?? 0}
            }
          </div>
        </div>
      
    
      </div>
    
    </div>

  
  )
}
export default NftCard;