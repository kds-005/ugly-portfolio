import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    async function getProject() {
      try {
        const response = await fetch('/api/projects');
        const projectData = await response.json();
        setProjects(projectData);
        setLoading(false);
      } catch (err) {
        setLoadingError(err.message)
        setLoading(false);
      }
    }
    getProject();
  }, []);
  if (loading) { <p>Still loading this my potato coding</p> }
  if (loadingError) { <p>Error:{loadingError}</p> }

  return (
    <div>
      <div className="max-w-[720px] min-h-[350px] mx-auto bg-gray-100 rounded-[10px] shadow px-[60px] py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-12">
          Welcome to my *slightly better (maybe)* portfolio.
        </h1>
        <p className="text-gray-500 max-w-[400px] my-[25px]">
          I&apos;m learning full-stack the hard way hopefully. But lets see how far i can go. <br />(probably not far ig &#128511;&#128511;)
        </p>
        <Image src="/pepe/67420-cryingpepe.png" alt="" width={0} height={0} sizes="100vw" className="w-auto h-auto"/>
        <button className="max-w-[200px] mt-4 px-4 py-2 bg-violet-500 text-white rounded shadow-lg hover:bg-purple-600">
          I hate blue button (Click to Support)
        </button>
      </div>
      <div className="max-w-[720px] mx-auto my-[20px] bg-gray-100 rounded-md shadow px-[60px] py-12">
        <h1 className="text-3xl font-bold text-grey-800 mb-12">Projects</h1>
        {projects.map(project => (
          <div key={project.id} className="w-[300px] min-h-[200px] bg-violet-200 rounded-md shadow my-[20px] p-[30px] hover:shadow-purple-950 duration-100">
            <h3 className="text-lg text-gray-800 font-bold pb-[10px]">{project.name}</h3>
            <p className="text-xs text-gray-500 pb-[20px]">
              {project.description}
            </p>
            <div>
              {project.tags.map(skills => (
                <span key={skills} className="bg-violet-500 text-white  px-[10px] mx-0.5 my-1 text-sm/8 inline-block rounded shadow-md">
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}