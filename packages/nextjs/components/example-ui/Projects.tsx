import { useEffect, useMemo, useState } from "react";
import categoryOptions from "./data/categories.json";
import allInitiatives from "./data/initiatives.json";

export const Projects = () => {
  const [category, setcategory] = useState("");
  const [searchTerm, setSearchTem] = useState("");

  const initiatives = useMemo(() => {
    if (category === "") {
      if (searchTerm === "") {
        return allInitiatives;
      } else {
        return allInitiatives.filter(initiative => {
          const searchFields =
            `${initiative.title.toLowerCase()} ` + `${initiative.year} ` + `${initiative.category.toLowerCase()}`;
          return searchFields.includes(searchTerm.toLowerCase());
        });
      }
    }
    return allInitiatives.filter(initiative => {
      const initiativecategory = initiative.category.toLowerCase();
      return initiativecategory.includes(category);
    });
  }, [category, searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      setcategory("");
    }
  }, [searchTerm]);

  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-xl font-bold my-6 text-white">Top Initiatives</h1>
      <form className="flex flex-col w-full md:w-72">
        <select
          className="px-2 py-1 border w-full md:w-40"
          value={category}
          onChange={e => setcategory(e.target.value)}
        >
          {categoryOptions.map((option, i) => {
            return (
              <option className="py-2" value={option.value} key={i}>
                {option.label}
              </option>
            );
          })}
        </select>
        <input
          className="border p-1 px-3 my-3 w-full"
          name="searchInitiative"
          placeholder="Initiative"
          value={searchTerm}
          onChange={e => setSearchTem(e.target.value)}
        />
      </form>
      <hr className="mb-6 mt-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {initiatives.map((initiative, index) => {
          return (
            <div key={index} className="flex flex-col border rounded p-4 my-4 lg:my-0 text-ellipsis overflow-hidden">
              <div className="flex-grow flex flex-col text-white">
                <h1 className="text-base font-bold mt-2">{initiative.title}</h1>
                <span className="text-sm mt-2">
                  Year:
                  <span className="m-2">{initiative.year}</span>
                  Runtime:
                  <span className="m-2">{initiative.runtime}</span>
                </span>
                <span className="text-sm mt-2">
                  Category:
                  <span className="m-2">{initiative.category}</span>
                </span>
              </div>
              <button className="btn btn-primary mt-4 self-start text-white">Donate</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
