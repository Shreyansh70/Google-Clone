import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext, ResultContextProvider } from '../contexts/ResultContextProvider'
import Loading from './Loading'
function Results() {

  const { results, searchTerm, isLoading, getResults } = useResultContext();
  const location = useLocation()

  useEffect(() => {
    getResults('?query=Google&limit=20');
  }, []);

  if (isLoading) return <Loading />
  
  switch (location.pathname) {
    case '/websearch':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>

        </div>
      )
    case '/imagesearch':
      return 'SEARCH'
    case '/news':
      return 'SEARCH'
    case '/videosearch':
      return 'SEARCH'
    default:
      return '!ERROR'
  }
}

export default Results