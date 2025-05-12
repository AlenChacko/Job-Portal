import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const JobListing = () => {
  const { isSearched, setIsSearched, searchFilter, setSearchFilter } =
    useContext(AppContext);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Side bar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search bar from hero component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3>Current Search</h3>
              <div>
                {searchFilter.title && (
                  <span>
                    {searchFilter.title}
                    <img
                      src={assets.cross_icon}
                      alt=""
                      className="cursor-pointer"
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                    />
                  </span>
                )}

                {searchFilter.location && (
                  <span>
                    {searchFilter.location}
                    <img
                      src={assets.cross_icon}
                      alt=""
                      className="cursor-pointer"
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                    />
                  </span>
                )}
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default JobListing;
