import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Container from '../../components/container/container'
import styles from '../../styles/movies.module.css'

export default function Movies({movies}) {

  return (
    <Container>
      <Head>
        <title>Page movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Movies</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque, quibusdam quisquam dolorum, quidem
        necessitatibus, quam quisquam quis, quisquam quisquam.
      </p>
      
      {
        movies.map((movie) => {
          return (
            <Link href={`/movies/${movie._id}`} key={movie._id}>
              <a className={styles.movie_container}>
                <h2>{movie.name}</h2>
                <p>{movie.duration}</p>
              </a>
            </Link>
          )
        })
      }
      
    </Container>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/api/movie/find')
  const movies = await res.json()

  return {
    props: {
      movies
    }
  }
}

Movies.propTypes = {
  movies: PropTypes.array
}