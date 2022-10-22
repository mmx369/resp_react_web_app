import BasicAppBar from '../components/BasicAppBar'
import classes from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <BasicAppBar />
      <div className={classes.root}>
        <h1 className={classes.header}>Home Page</h1>
      </div>
    </>
  )
}
