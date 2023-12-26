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
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 mt-5'>
        {results?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
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