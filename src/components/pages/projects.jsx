import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const baseUrl = "https://api.github.com/users/mishael-codes";

        const endPoint = `${baseUrl}/repos`;
        const response = await fetch(endPoint);

        if (response.status !== 200) {
          console.log(`Error: ${response.status}`);
        } else {
          const data = await response.json();
          console.log(data);
          setRepos(data);
        }
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  return (
    <>
      <div className="text-textColor h-auto">
        <h1>Projects</h1>
        <div className="w-screen grid grid-cols-2 gap-2 place-content-center">
          {repos.map((repo) => (
            <div key={repo.id} className="w-full border rounded-xl p-4">
              <h3 className="text-accentColor">{repo.name}</h3>
              <p>{repo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
