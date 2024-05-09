import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./TextArea";
import { FACEBOOK_MAX_CHAR, INSTAGRAM_MAX_CHAR } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHAR - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHAR - text.length,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
