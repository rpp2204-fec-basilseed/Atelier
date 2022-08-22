import React from 'react';

export default function Helpful ({helpfulness}) {
  return (
    <div onClick={() => {
      console.log('ello')
    }}>
      Yes({helpfulness})
    </div>
  )
}