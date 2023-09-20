import { useState } from 'react'
import { useQuery as useGraphQLQuery } from '@apollo/client'

import Header from '../components/Header.jsx'
import PostList from '../components/PostList.jsx'
import CreatePost from '../components/CreatePost.jsx'
import PostFilter from '../components/PostFilter.jsx'
import PostSorting from '../components/PostSorting.jsx'
import { GET_POSTS } from '../api/graphql/posts.js'

export default function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const postsQuery = useGraphQLQuery(GET_POSTS)
  const posts = postsQuery.data?.posts ?? []

  return (
    <div style={{ padding: 8 }}>
      <Header />
      <br />
      <hr />
      <br />
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <br />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
