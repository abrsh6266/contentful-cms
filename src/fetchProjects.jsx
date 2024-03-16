import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const getData = async () => {
    try {
      const { items } = await client.getEntries({ content_type: "projects" });
      const project = items.map((item) => {
        const { image, url, title } = item;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, img, url, title };
      });
      setProject(project);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, project };
};
