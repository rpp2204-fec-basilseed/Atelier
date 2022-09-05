import React from "react";

export default function Characteristics ( {metaData} ) {
  const types = Object.keys(metaData.characteristics);

  return types.map((type) => {
    return (
    <>
    <label>{type}: </label>
        <input type="radio" onChange={(e) => {
          metaData.characteristics[type] = parseInt(e.target.value);
        }}></input>
        </>
    )
  })
}

//   return (
//     <>
//     <label>Comfort: </label>
//         <input type="text" placeholder="" onChange={(e) => {
//           reviewData.characteristics[`${comfort}`] = parseInt(e.target.value);
//         }}></input>
//         <label>Fit: </label>
//         <input type="text" onChange={(e) => {
//           reviewData.characteristics[`${fit}`] = parseInt(e.target.value);
//         }}></input>
//         <label>Length: </label>
//         <input type="text" onChange={(e) => {
//           reviewData.characteristics[`${length}`] = parseInt(e.target.value);
//         }}></input>
//         <label>Quality: </label>
//         <input type="text" onChange={(e) => {
//           reviewData.characteristics[`${quality}`] = parseInt(e.target.value);
//         }}></input>
//         </>
//   )
// }