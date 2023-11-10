import PropTypes from 'prop-types'

export default function ChatMessage({ username, message }) {
  return (
    <div>
      {username ? (
        <span>
          <b>{username}</b>: {message}
        </span>
      ) : (
        <i>{message}</i>
      )}
    </div>
  )
}

ChatMessage.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string.isRequired,
}
