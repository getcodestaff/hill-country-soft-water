import React from "react"
import { Hero } from "./hero"
import { Section1 } from "./section1/section1"
import { Services } from "./services/services"
import { Stories } from "./stories/stories"
import { Badges } from "./badges"
import { QandA } from "./qanda"
import { CityPosts } from "./city-posts"
import { PhoneButton } from "./phone-button"

export const MainTemplate = ({ title, city, posts, video }) => {

  return (
    <React.Fragment>
      <Hero />
      <div>
        <div className="tp-caption1-wd-2 uppercase text-sm w-3/5 pt-5 m-auto">
          {title && <h1 className="text-black">{title}</h1>}
        </div>
      </div>
      <Section1 />
       <Services cardsOnly="false" />
      <Stories /> 
      <QandA />
      <Badges /> 
      {posts && (
        <div className="font-bold text-center text-4xl mt-6 uppercase">
          {city} Water Quality News
        </div>
      )}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
      {posts && <CityPosts posts={posts} city={city} />}
        </div>
        <div className="w-full lg:w-1/2">
      {video ? (
            <>
              <div className="xl:w-3/4 2xl:w-1/2 m-auto mt-8">
          <div className="iframe-container-16-9">
          <iframe
              className="responsive-iframe"
                    title="Clean Valley Water Reviews"
            src={`https://www.youtube.com/embed/${video}`}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen=""
            ></iframe>
        </div>
      </div>
              <PhoneButton />
            </>
      ) : null}
        </div>
      </div>
    </React.Fragment>
  )
}
