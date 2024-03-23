import { IonIcon } from '@ionic/react'
import { linkOutline,logoInstagram } from 'ionicons/icons'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { BlogsService } from '../../../services/blogs.service'

const Article = () => {
  const {id} = useParams()
  console.log(id);

  const {data, isError, error, isSuccess, status} = useQuery('blog',()=>BlogsService.getBlogBySlug(id))
  console.log(status);
  
  if(isError){
    console.log(error);
  }
  if(isSuccess){
    console.log(data);
  }
  
  return (
    <>
    <div className="w-full my-6">
        <div className="container my-4 flex items-center justify-between">
          <div className="py-2 inline-flex items-center text-xl">
            Published on 
            <div className="w-3 h-3 bg-gray-400 rounded-full mx-2"></div>
            <span className="text-gray-500 font-[Consolas]">21.01.2024</span>
          </div>
          <div className="inline-flex items-center">
            <a href="#" className="inline-block p-1 pb-0 rounded-md hover:bg-gray-200">
              <IonIcon icon={logoInstagram} className="text-3xl"/>
            </a>
            <button  className="inline-block p-1 pb-0 rounded-md hover:bg-gray-200 mx-2" onClick={()=>navigator.clipboard.writeText('Hello world!')}>
              <IonIcon icon={linkOutline} className="text-3xl"/>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <h1 className="text-3xl max-md:text-2xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur molestiae sequi cumque repellendus. Cum sint corporis inventore minima!
          </h1>
          <div className="w-full my-4 py-2 flex items-center justify-between">
            <div className="inline-flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"  className="w-full h-full aspect-square"/>
              </div>
              <div className="p-1 mx-2">
                <h3 className="text-md font-bold">John Wick</h3>
                <span className="text-gray-500">Member of <span className="text-blue-500">BravoBlog</span></span>
              </div>
            </div>
            <span className="p-2 text-gray-500">5 mins read</span>
          </div>
          <div className="w-full max-h-[550px] my-4 lg:max-h-[450px] rounded-md overflow-hidden">
            <img src="https://live-production.wcms.abc-cdn.net.au/18e570bbac2ada7350601b6875ea5d1e?impolicy=wcms_crop_resize&cropH=576&cropW=1024&xPos=0&yPos=0&width=862&height=485" className="w-full h-full object-cover aspect-1/1" alt=""/>
          </div>
          <div className="w-full py-2 my-4">
            <p className="text-sm md:text-xl tracking-wide" style={{wordSpacing:"3px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae, consectetur vel animi sit atque consequatur autem. Non, quo praesentium. Porro esse, error officia minus saepe aut ratione voluptate magni incidunt voluptatum adipisci fugiat nemo harum animi itaque exercitationem nisi laborum voluptas illum, aliquid laudantium, nulla neque distinctio atque? Asperiores iste consequatur error assumenda perspiciatis minus itaque! Minima saepe ipsam sequi deserunt reprehenderit, animi tempore rerum maxime, sunt totam, fuga voluptatem voluptatum dolore adipisci nobis officia id consequuntur. Id cumque sit ad nihil ducimus, laudantium a porro repudiandae? Suscipit, animi nihil dolore iste nesciunt ratione dolorem maxime numquam similique minus!</p>
          </div>
          <div className="w-full py-2 my-4">
            <p className="text-sm md:text-xl tracking-wide" style={{wordSpacing:"3px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae, consectetur vel animi sit atque consequatur autem. Non, quo praesentium. Porro esse, error officia minus saepe aut ratione voluptate magni incidunt voluptatum adipisci fugiat nemo harum animi itaque exercitationem nisi laborum voluptas illum, aliquid laudantium, nulla neque distinctio atque? Asperiores iste consequatur error assumenda perspiciatis minus itaque! Minima saepe ipsam sequi deserunt reprehenderit, animi tempore rerum maxime, sunt totam, fuga voluptatem voluptatum dolore adipisci nobis officia id consequuntur. Id cumque sit ad nihil ducimus, laudantium a porro repudiandae? Suscipit, animi nihil dolore iste nesciunt ratione dolorem maxime numquam similique minus!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article