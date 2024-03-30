// import {useState, useContext, useEffect} from "react"
// import { ApiContext } from "../../../../contexts/ApiProvider";



// const ProfilePicture = ({ imageUrl,setUrl}) => {

//   const {getProfile} = useContext(ApiContext);

//     const [addUrl, setAddUrl] = useState(false);
//     const[getUrl, setGetUrl] = useState("");
//     const [showImage, setShowImage] = useState(false)

//     useEffect(() => {
//       handleUrl()
//     }, []) 

//     const handleUrl = async () => {
//       const user = await getProfile()
//       if(user.imageUrl != ""){
//         setGetUrl(user.imageUrl)
//         setShowImage(true)
//         return
//       }
//     }

//     return (
//         <>
//         <div className="mt-3 mb-3 profile-picture-content container">

//         <img className="profile-picture" src={showImage? getUrl : ""}></img>
//         <i onClick={() => {addUrl? setAddUrl(false) : setAddUrl (true)}} className="profile-circle fa-thin fa-pen"></i>

//         </div>

//         {addUrl && 
//             <div className="col-lg-12 input-wrapper">
//             <label>Image Url</label>
//            <input name="imageUrl" value={imageUrl} onChange={(event) => setUrl(event.target.value)} type="text" onKeyUp={(event) => {
//             if (event.target.value.length <= 1) 
//            {
//             document.querySelector("#image").innerHTML = "Not a valid image url"
//            } 
//             else 
//            {
//              document.querySelector("#image").innerHTML = ""
//            }}}>
//          </input>
//           <div id="image" className="text-danger"></div>
//         </div>
//         }
//         </>
//     )
// }

// export default ProfilePicture;