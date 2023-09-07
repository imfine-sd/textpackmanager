import React from "react";
import { useAppSelector } from "../../context";
import { queriedTextDataSelector } from "../../context/queriedTexts";
import { Article, Details, Scene, SceneList, Summary } from "./styled";

type SearchedListAttributes = {};

function SearchedList({ ...attrs }: SearchedListAttributes) {
  const everySceneTextsData = useAppSelector(queriedTextDataSelector);
  return (
    <SceneList>
      {everySceneTextsData.map((scene, sceneIndex) => (
        <Scene key={scene.name + sceneIndex}>
          <Details>
            <Summary>
              {scene.name} <input type="checkbox" name={scene.id} />
            </Summary>
            {scene.textDatas.map((data, dataIndex) => (
              <Article key={data.id}>
                <h1>{`${scene.name}-${dataIndex + 1}`}</h1>
                <ul>
                  <li>
                    <span></span>
                    <p>{data.characters}</p>
                  </li>
                </ul>
              </Article>
            ))}
          </Details>
        </Scene>
      ))}
    </SceneList>
  );
}

export default SearchedList;
