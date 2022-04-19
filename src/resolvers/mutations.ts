
import data from '../data'

export const updateQuote = (src, args, ctx, info) => {
  return {
      ...data[0],
      ...args.data,
  }
}
