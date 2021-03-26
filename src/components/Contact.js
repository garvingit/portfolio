import React from "react"

export default function Contact() {
  return (
 <div class="container bg-gray-100 mx-auto my-20 w-1/3 shadow-xl rounded-xl justify center">

      <h4 class="text-center text-2xl text-semibold p-5">Contact Me!</h4>
      <form
        action="https://formspree.io/f/xrgrzyrr"
        method="POST"
      >
        <div class="grid grid-cols-1">
          <label class="mb-2">
            Name:
        </label>
          <input
            type="text"
            name="name"
            class="border px-2" />
          <label class="mt-5 mb-2">
            Email:
        </label>
          <input
            type="text"
            name="email"
            class="border px-2" />
          <label class="mt-5 mb-2">
            Message:
        </label>
          <textarea cols="10" rows="5" class="border px-2 pt-2 pb-2" name="message"></textarea>


        </div>
        <div class="md:w-1/3 ">
        <button
            type="submit"
            class="border border-gray-400 mx-auto mt-5 mb-5 content-center bg-gray-200 rounded py-2 px-4 font-semibold hover:text-white hover:bg-green-600"
          >Send</button>

    </div>
      </form>

    </div> 
    
  )
}