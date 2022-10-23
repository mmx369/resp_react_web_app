import React, { useRef, useState } from 'react'
import BasicAppBar from '../components/BasicAppBar'
import { useScroll } from '../hooks/useScroll'

import classes from './NewsPage.module.css'

export function NewsPage() {
  const [news, setNews] = useState([])
  const [offset, setOffset] = useState(0)
  const LIMIT = '10'

  const parentRef = useRef(null)
  const childRef = useRef(null)

  const intersected = useScroll(parentRef, childRef, () =>
    fetchNews(offset, LIMIT)
  )

  async function fetchNews(page, limit) {
    const res = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_OPEN_NEWS_FEED_API_KEY}&languages=en&limit=${limit}&offset=${page}`
    )
    const { data } = await res.json()
    console.log(1111, res)
    setNews((prev) => [...prev, ...data])
    setOffset((prev) => prev + 1)
  }

  return (
    <>
      <BasicAppBar />
      <div ref={parentRef}>
        <h3 className={classes.header}>News Page</h3>
        {news.map((el, i) => (
          <div className={classes.list} key={i}>
            <strong>
              {el.author ? `Author: ${el.author}` : `Author: unknown`}
            </strong>
            <br />
            <strong>Title: {el.title}</strong>
            <p>{el.description}</p>
            {el.image ? (
              <img src={el.image} alt={el.description} width='300px' />
            ) : null}
          </div>
        ))}
        <div ref={childRef} style={{ height: 20, background: 'green' }}></div>
      </div>
    </>
  )
}
