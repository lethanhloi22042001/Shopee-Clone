import data from "../axios";


const getBlogList = ()=>(data.get("blog/list"));

const getBlogList2 = ()=>{
  return data.get("blog/list");
}
export {
  getBlogList,
  getBlogList2
}