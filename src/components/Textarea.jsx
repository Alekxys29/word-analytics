import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningTxt, setWarningTxt] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningTxt("No script tag allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningTxt("No @ symbol allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningTxt("");
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />

      <Warning warningTxt={warningTxt} />
    </div>
  );
}
