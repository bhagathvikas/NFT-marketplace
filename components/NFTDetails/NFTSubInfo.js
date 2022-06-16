import {AiFillEye,AiFillHeart} from 'react-icons/ai'

const style = {
  wrapper:`flex space-x-6 py-6`,
  textInfoContainer:`text-lg font-medium text-gray-500 dark:text-gray-500`,
  owner: ` text-blue-500`,
  iconTextInfoContainer :` flex items-center space-x-2`,
  icon :` h-7 w-7 text-gray-500 dark:text-gray-500`,
  
  
}
const NFTSubInfo = () =>
  {
    return (
      <div className={style.wrapper}>
        <div className={style.textInfoContainer}>
          Owned by<span className={style.owner}> Owner</span>
        </div>
        <div className={style.iconTextContainer}>
        <AiFillEye className= {style.icon}/>
          <div className={style.textInfoContainer}>
          4.4k view
          </div>
          <div className ={ style.iconTextInfoContainer}>
            <AiFillHeart className = {style.icon}/>
            <div className = {style.textInfoContainer }> 200favs
            </div>
          </div>
        </div>
      </div>
    )
  }
export default NFTSubInfo