import axios from "../axios";


const getBlogList = ()=>( axios.get("blog/list"));

const getBlogList2 = ()=>{
  return axios.get("blog/list");
}
export {
  getBlogList,
  getBlogList2
}