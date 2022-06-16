import {BiReferesh,BiLinkExternal  } from 'react-icons/bi'
import {MdShare,MdMoreVert} from 'react-icons/md'
import NFTSubInfo from './NFTSubInfo'

const style= {
  topContainer:`flex items-center justify-between`,
  collectionTitle:` text-lg font-semibold text-blue-500`,
  actionItems:` flex divide-x divide-gray-300 rounded-lg border border-gray-300 `,
  actionItemsContainer:` flex cursor-pointer items-center justify-center p-4`,
  icons:` h-6 w-6 text-gray-500 dark:text-gray-400 `,
  assetTitle:` pt-6 text-4xl font-bold text-gray-700 dark:text-gray-700`,
  subInfoContainer:` hidden lg:block`
  
}

const NFTBasicInfo = ( ) =>{
  const actionItems = [
    {
      icon : <BiReferesh className={style.icon}
    },
    {
      icon : <BiLinkExternal className={style.icon}
    },
    {
      icon : <MdShare className={style.icon}
    },
    {
      icon : <MdMoreVert className={style.icon}
    },
  ]
  return (
    <div className={style.topContainer}>
      <div className={style.collectionTitle}>
       
      </div>
      <div className={style.actionItems}>
        {actionItems.map((item,index)=>
      (
        <div key ={index} className={style.actionItemContainer}>
          {item.icon}
        
        </div>
      )
                        )}
      </div>
      <div className={style.assetTitle}>{name}
      
      </div>
      <div className = {style.subInfoContainer}>
      <NFTSubInfo/>
      
      </div>
      </div>
  )
  
}

export default NFTBasicInfo