import React from "react";
import { useAppSelector } from "../context";
import { everySceneTextsSelector } from "../context/allTextsOnScene";
import SearchEngine from "../components/SearchEngine";

function MainUI() {
  const everySceneTextsData = useAppSelector(everySceneTextsSelector);

  return (
    <main>
      <SearchEngine />
      {everySceneTextsData.map((scene, sceneIndex) => (
        <article key={scene.name}>
          <h1>{scene.name}</h1>
          <ul>
            {scene.textDatas.map((data, dataIndex) => (
              <li key={data.id}>
                <h4>{true ? data.name : `${scene.name}-${dataIndex + 1}`}</h4>
                <p>{data.characters}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}

export default MainUI;
