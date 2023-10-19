import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

export const CityPosts = ({ posts, city }) => {
  return (
    <React.Fragment>
      <div className="font-bold text-center text-4xl mt-6 uppercase">
        {city} Water Quality News
      </div>        
      <div className="global-wrapper">
        <header className="global-header">
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.title

              return (
                <li key={post.uri}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      </h2>
                      <small>{post.date}</small>
                    </header>
                    <section itemProp="description">
                      {parse(post.excerpt)}
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </header>
      </div>
    </React.Fragment>
  )
}
