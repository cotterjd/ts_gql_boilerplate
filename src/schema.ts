import { gql } from 'apollo-server-express'

export default gql`
  type Quote {
    id: Int
    text: String
    author: String
    date: String
    source: String
  }
  
  input QuoteInput {
    id: Int
    text: String
    author: String
    date: String
    source: String
  }

  type Query {
    quotes: [Quote]
  }
  
  type Mutation {
    updateQuote (id: Int data: QuoteInput): Quote
  }
`
