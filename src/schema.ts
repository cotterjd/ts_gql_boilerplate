import { gql } from 'apollo-server'

export default gql`
  type Quote {
    text: String
    author: String
    date: String
    context: String
  }

  type Query {
    quotes: [Quote] 
  }
`
