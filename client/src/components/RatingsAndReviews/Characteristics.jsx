import React from "react";

export default function Characteristics({ metaData, reviewData }) {
  const types = Object.keys(metaData.characteristics);
  const descriptions = {
    Quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    Size: {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide'
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide'
    },
    Length: {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Fit: {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  }

  return types.map((type) => {
    return (
      <div key={type} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <label>{type}: </label>
        <input
          type="radio" name={`"${type}"`}
          onChange={(e) => {
            reviewData.characteristics[`${metaData.characteristics[type].id}`] =
              1
          }}
        ></input>
        <p>{descriptions[type][1]}</p>
        <input
          type="radio"
          name={`"${type}"`}
          onChange={(e) => {
            reviewData.characteristics[`${metaData.characteristics[type].id}`] =
              2
          }}
        ></input>
        <p>{descriptions[type][2]}</p>
        <input
          type="radio"
          name={`"${type}"`}
          onChange={(e) => {
            reviewData.characteristics[`${metaData.characteristics[type].id}`] =
              3
          }}
        ></input>
        <p>{descriptions[type][3]}</p>
        <input
          type="radio"
          name={`"${type}"`}
          onChange={(e) => {
            reviewData.characteristics[`${metaData.characteristics[type].id}`] =
              4
          }}
        ></input>
        <p>{descriptions[type][4]}</p>
        <input
          type="radio"
          name={`"${type}"`}
          onChange={(e) => {
            reviewData.characteristics[`${metaData.characteristics[type].id}`] =
              5
          }}
        ></input>
        <p>{descriptions[type][5]}</p>
      </div>
    );
  });
}

/*
****** WORKING WITH TEXT FOR INPUT ******

<div key= {type} style={{display: "flex", flexDirection: "row"}}>
    <label>{type}: </label>
        <input type="text" onChange={(e) => {
          reviewData.characteristics[`${metaData.characteristics[type].id}`] = parseInt(e.target.value);
        }}></input>
        </div>



*/

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