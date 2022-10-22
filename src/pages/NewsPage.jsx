import React from 'react'
import BasicAppBar from '../components/BasicAppBar'
import useFetch from '../hooks/useFetch'

import classes from './NewsPage.module.css'

export function NewsPage() {
  const url = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_OPEN_NEWS_FEED_API_KEY}&languages=en&limit=15`

  const { data, loading, error } = useFetch(url)

  if (loading)
    return (
      <>
        <BasicAppBar />
        <div className={classes.header}>Loading...</div>
      </>
    )

  return (
    <>
      <BasicAppBar />
      <div>
        <h3 className={classes.header}>News Page</h3>
        {error && <div>{error}</div>}
        {data &&
          data.data.map((el) => (
            <div className={classes.list} key={el.title}>
              {el.author ? `Author: ${el.author}` : `Author: unknown`}
              <br />
              <strong>Title: {el.title}</strong>
              <p>{el.description}</p>
              {el.image ? (
                <img src={el.image} alt={el.description} width='300px' />
              ) : null}
            </div>
          ))}
      </div>
    </>
  )
}
