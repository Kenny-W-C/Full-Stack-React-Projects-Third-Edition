import PropTypes from 'prop-types'

export default function Post({ title, contents, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{contents}</div>
      {author && (
        <i>
          <br />
          Written by <b>{author}</b>
        </i>
      )}
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
