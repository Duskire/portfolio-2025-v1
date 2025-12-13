import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />
    ),
    h4: (props) => (
      <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />
    ),
    p: (props) => (
      <p className="text-base leading-relaxed my-4" {...props} />
    ),

    ul: (props) => (
      <ul className="list-disc ml-6 my-4" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal ml-6 my-4" {...props} />
    ),

    li: (props) => <li className="my-2" {...props} />,

    hr: (props) => <hr className="my-10 border-t border-gray-200 dark:border-gray-700" {...props} />,

    code: (props) => (
      <code
        className="bg-white dark:bg-dark-primary border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded text-sm font-mono"
        {...props}
      />
    ),
    pre: (props) => <CodeBlock {...props} />,

    ...components,
  };
}