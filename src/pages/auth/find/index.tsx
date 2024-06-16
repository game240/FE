import * as S from "./style";
import { TAB_NAME } from "@/constants/auth";
import { useState } from "react";
import FindId from "./FindId";
import FindPw from "./FindPw";

const Find = () => {
  const [currentTab, setCurrentTab] = useState<string>(TAB_NAME[0]);

  return (
    <S.Container>
      <S.TabNav>
        <S.TabName
          $isCurrent={TAB_NAME[0] === currentTab}
          onClick={() => setCurrentTab(TAB_NAME[0])}
        >
          {TAB_NAME[0]}
        </S.TabName>

        <S.TabName
          $isCurrent={TAB_NAME[1] === currentTab}
          onClick={() => setCurrentTab(TAB_NAME[1])}
        >
          {TAB_NAME[1]}
        </S.TabName>
      </S.TabNav>

      {currentTab === TAB_NAME[0] && <FindId />}
      {currentTab === TAB_NAME[1] && <FindPw />}
    </S.Container>
  );
};

export default Find;
