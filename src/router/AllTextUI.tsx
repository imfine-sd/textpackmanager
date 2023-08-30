import React from "react";
import { useAppSelector } from "../context";
import { everySceneTextsSelector } from "../context/allTextsOnScene";

function AllTextsonSceneUI() {
  const everySceneTextsData = useAppSelector(everySceneTextsSelector);

  return (
    <main>
      {everySceneTextsData.map((scene, sceneIndex) => (
        <section key={scene.name}>
          <h1>{scene.name}</h1>
          <ul>
            {scene.textDatas.map((data, dataIndex) => (
              <li key={data.id}>
                <h4>{true ? data.name : `${scene.name}-${dataIndex + 1}`}</h4>
                <p>{data.characters}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default AllTextsonSceneUI;
