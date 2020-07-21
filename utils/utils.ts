import fs from "fs";
import path from "path";

const getAllComponentsIds = function () {
  const componentsDirectory = path.join(process.cwd(), "pages/components");
  const fileNames = fs.readdirSync(componentsDirectory);

  const componentsList = fileNames.map((fileName) => {
    const id = fileName.replace(/\.(tsx|ts)$/, "");
    return {
      id: id.charAt(0).toUpperCase() + id.slice(1),
    };
  });

  return {
    props: {
      componentsList,
    },
  };
};

export { getAllComponentsIds };
