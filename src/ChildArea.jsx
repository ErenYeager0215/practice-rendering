// 親コンポーネントが再レンダリングした際に子コンポーネントが再レンダリングされるのを防ぐ
import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//アロー関数をmemo()で囲う
//propsが更新された時以外は再レンダリングしないことを意味する
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("Chaildereaがレンダリングされた");

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
