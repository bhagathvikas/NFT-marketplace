import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const style ={
  wrapper : `rounded-lg border dark:border-transparent dark:bg-[#313339]`,
  nftHeader: `flex items-center justify-between p-4`,
  likesCounter : ` flex items-center justify-end space-x-2`,
  heartIcon : `h-5 w-5 text-gray-500 dark:text-gray-400`,
  likesCount:`text-sm font-semibold text-gray-500 dark:text-gray-400`,
  nftImage :`rounded-b-lg object-cover`
  
}

const NFTImage = ({image} )=>{
  return (
    <div className={style.wrapper}>
      <div className={style.nftHeader}>
        <Image
          height = {20}
          width = {20}
          src= '/eth-logo.svg'
          alt='eth'
          />

        <div className = {style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon}/>
          <div  className={style.likesCount}>100
          
          </div>
        </div>
        <div>
          {
            image&&<Image
                     src={image}
                     alt='image'
                     height={480}
                     width={480}
                     />
          }
        
        </div>
      
      </div>
      
    </div>
  )
  
}

export default NFTImage