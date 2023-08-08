import { useQuery } from '@tanstack/react-query'
import PropTypes from 'prop-types'

import {
  getTotalViews,
  getDailyViews,
  getDailyDurations,
} from '../api/events.js'

export default function PostStats({ postId }) {
  const totalViews = useQuery({
    queryKey: ['totalViews', postId],
    queryFn: () => getTotalViews(postId),
  })
  const dailyViews = useQuery({
    queryKey: ['dailyViews', postId],
    queryFn: () => getDailyViews(postId),
  })
  const dailyDurations = useQuery({
    queryKey: ['dailyDurations', postId],
    queryFn: () => getDailyDurations(postId),
  })

  return (
    <div>
      <b>{totalViews.data?.views} views</b>
      <pre>{JSON.stringify(dailyViews.data)}</pre>
      <pre>{JSON.stringify(dailyDurations.data)}</pre>
    </div>
  )
}

PostStats.propTypes = {
  postId: PropTypes.string.isRequired,
}
