import React from "react"

//Based on https://formsubmit.co/live-demo

export const Contact = () => {
  return (
    <div className="bg-chsblue text-white pb-4">
      <div>
        <div className="lg:flex lg:items-center">
          <div className="hl my-4 lg:no-hl" />
          <div className="lg:vl w-full lg:m-auto">
            <div className="text-center lg:text-xl">
              <h1 className="my-4 text-lg">CONTACT US</h1>
              <p className="text-xs lg:text-sm xl:text-base w-[80%] m-auto">
                 Contact a home water treatment professional today.
              </p>
            </div>
            <form target="_blank" action="https://formsubmit.co/info@watersoftenersanantonio.co" method="POST">
              <div className="text-black flex flex-col xl:flex-row justify-center lg:w-[80%] lg:m-auto">
                <input
                  type="text"
                  name="name"
                  className="form-control m-3 h-10"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-control m-3 h-10"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="phone"
                  name="phone"
                  className="form-control m-3 h-10"
                  placeholder="Phone number (optional)"
                />
              </div>
              <div className="text-black flex justify-center m-3">
                <textarea
                  placeholder="Your Message"
                  className="form-control lg:w-[80%]"
                  name="message"
                  rows="10"
                  cols="78"
                  required
                ></textarea>
              </div>

              <div className="mt-4 text-center">
                <button type="submit" className="submit-button bg-white">
                  <span className='text-black'>Submit Form</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="spacer-border w-[90%] m-auto my-4"
       >
          <p
            className="text-center text-xl visible mb-4"
          >
            Hill Country Soft Water
          </p>
        </div>
      </div>
    </div>
  )
}
