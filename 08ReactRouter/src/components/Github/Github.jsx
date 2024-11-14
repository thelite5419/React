import React, { useState } from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const url = "https://api.github.com/users/thelite5419"
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data=>{
    //     console.log('data :>> ', data);
    //     setData(data)
    //   })
    // }, [])
    

  return (
    <div className='bg-gray-600 text-white m-4 p-4 text-3xl text-center'>
      GitHub followers: {data.followers}
      <img src={data.avatar_url} alt="gitprofile" />

    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
    const url = "https://api.github.com/users/thelite5419"
    const res = await fetch(url)
    return res.json();
}