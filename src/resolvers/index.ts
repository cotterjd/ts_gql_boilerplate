import { getQuotes } from './queries'
import { updateQuote } from './mutations'

export default {
  Query: {
    quotes: getQuotes,
  },
  Mutation: {
    updateQuote: updateQuote,
  },
}
