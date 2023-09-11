import React from "react";
import { useAppSelector } from "../../../../context";
import { queriedTextDataSelector } from "../../../../context/queriedTexts";
import { SceneList, Scene, Details, Article } from "./SeachedListStyled";
import TextDataTable from "../../../base/TextDataTable";

type SearchedListAttributes = {};
//TODO: Detail Component 화
function SearchedList({ ...attrs }: SearchedListAttributes) {
  const queriedTexts = useAppSelector(queriedTextDataSelector);
  return (
    <SceneList>
      {queriedTexts.map((scene, sceneIndex) => (
        <Scene key={scene.name + sceneIndex}>
          <Details open>
            <summary>
              <input type="checkbox" name={scene.id} />
              {scene.name}
            </summary>
            <Article>
              {scene.textDatas.length > 0 ? (
                scene.textDatas.map((data, dataIndex) => (
                  <TextDataTable data={data} index={dataIndex} />
                ))
              ) : (
                <h1>No Text in the Group</h1>
              )}
            </Article>
          </Details>
        </Scene>
      ))}
    </SceneList>
  );
}

export default SearchedList;
