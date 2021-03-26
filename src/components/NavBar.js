import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons";
import resume from "../resources/resume.pdf"

export default function NavBar() {
  return (
    <header className="bg-gray-200">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white-700"
            className="inflex-flex items-center py-6 px-3 my-6 hover:text-gray-500 text-2xl text tracking-widest"
          >
            garvin
          </NavLink>
          <NavLink
            to="/internships"
            className="inflex-flex items-center py-6 px-3 my-6 hover:text-gray-500 text-2xl text tracking-widest"
            activeClassName="text-white-100 bg-gray-400 rounded"
          >
            internships
          </NavLink>
          <NavLink
            to="/projects"
            className="inflex-flex items-center py-6 px-3 my-6 hover:text-gray-500 text-2xl text tracking-widest"
            activeClassName="text-white-100 bg-gray-400 rounded"
          >
            projects
          </NavLink>
          <NavLink
            to="/contact"
            className="inflex-flex items-center py-6 px-3 my-6 hover:text-gray-500 text-2xl text tracking-widest"
            activeClassName="text-white-100 bg-gray-400 rounded"
          >
            contact
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-10 content-end">
          <SocialIcon
            url="https://github.com/garvingit"
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/garvinmozhen/"
            className="mr-4"

            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url={resume}
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}