import React from "react";

export default function Characteristics ({ metaData, reviewData }) {
  const types = Object.keys(metaData.characteristics);

  return types.map((type) => {
    return (
    <div key= {type} style={{display: "flex", flexDirection: "row"}}>
    <label>{type}: </label>
        <input type="text" onChange={(e) => {
          reviewData.characteristics[`${metaData.characteristics[type].id}`] = parseInt(e.target.value);
        }}></input>
        </div>
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