// Hooks
import { useCallback } from 'react'
import { useDynamicMdx } from 'shared/hooks/use-dynamic-mdx.mjs'
// Components
import { MdxWrapper } from 'shared/components/wrappers/mdx.mjs'

export const useApikeyDocs = (locale) => {
  const loader = (option) =>
    useCallback(
      () =>
        import(
          /* webpackInclude: /docs\/site\/apikeys\/[a-z]+\/[a-z][a-z]\.md$/ */ `markdown/docs/site/apikeys//${option}/${locale}.md`
        ),
      [locale]
    )

  const docs = {}

  for (const option of ['name', 'expiry', 'level']) {
    const { MDX, frontmatter } = useDynamicMdx(loader(option))
    docs[option] = (
      <>
        <h2>{frontmatter.title}</h2>
        <MdxWrapper>{MDX}</MdxWrapper>
      </>
    )
  }

  return docs
}
