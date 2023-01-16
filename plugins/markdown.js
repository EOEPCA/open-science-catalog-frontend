import { marked } from "marked";

export default function (context, inject) {
  const markdown = (md) => marked.parse(md);
  inject("markdown", markdown);
}
