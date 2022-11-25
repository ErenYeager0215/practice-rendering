import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  //useCallback()で囲うとpropsにアロー関数を渡してもmemo（）し、再レンダリングを防ぐ
  //useCallback()の第二引数の[]内には見張る値をいれる。見張る値が変わったときにアロー関数が再生成される
  //[]を空にすることで、最初に生成したものをずっと使う
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
