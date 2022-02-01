
import data from '../data'

export const updateQuote = (src, args, ctx, info) => {
  return {
      ...data[-1],
      ...args.data,
  }
}
