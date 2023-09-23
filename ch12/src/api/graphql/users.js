import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation signupUser($username: String!, $password: String!) {
    signupUser(username: $username, password: $password)
  }
`

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password)
  }
`
