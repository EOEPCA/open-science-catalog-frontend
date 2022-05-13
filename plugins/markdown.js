import { marked } from 'marked'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (context, inject) {
  const markdown = md => marked.parse(md)
  inject('markdown', markdown)
}
