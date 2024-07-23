// import React, { useEffect, useState } from "react";
// import { getBlogList } from "../../services/apiService";

// function MenuRight() {
//   const getAllCode = async () => {
//     try {
//         console.log('dât');
//         let data = await getBlogList();
//         console.log('data ne`', data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// useEffect(() => {
//     const [asd ,setAsd] = useState();
//    let asd = getAllCode();
// }, []);
//   return (
//     <div>
//       {asd}
//     </div>
//   )
// }

// export default MenuRight
import React, { useEffect, useState } from "react";
import { getBlogList } from "../../services/apiService";

function MenuRight() {
  const [asd, setAsd] = useState(null);

  const getAllCode = async () => {
    try {
      console.log('dât');
      let data = await getBlogList();
      console.log('data ne`', data);
      setAsd(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCode();
  }, []);

  return (
    <div>
      {asd ? asd : "Loading..."}
    </div>
  );
}

export default MenuRight;
