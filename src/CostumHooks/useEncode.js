import React, { useState } from 'react'
const [encoded, setEncoded] =useState()
const useEncode = (token) => {
    const encoded = encodeURIComponent(token).replace(/\./g, '');
    setEncoded(encoded)
  return {encoded}
}

export default useEncode