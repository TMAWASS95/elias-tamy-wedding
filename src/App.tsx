import { useState } from "react";
import Cover from "./components/Cover";
import Invitation from "./components/Invitation";
import Invitation2 from "./components/Invitation2";
import EventScreen from "./components/EventScreen";
import Story from "./components/Story";
import Countdown from "./components/Countdown";
import RSVP from "./components/RSVP";

type Phase = "cover" | "invitation2" | "invitation" | "eventscreen" | "main";

export default function App() {
  const [phase, setPhase] = useState<Phase>("cover");

  if (phase === "cover")        return <Cover       onStart={()     => setPhase("invitation2")} />;
  if (phase === "invitation2")  return <Invitation2 onContinue={() => setPhase("invitation")} />;
  if (phase === "invitation")   return <Invitation  onContinue={() => setPhase("eventscreen")} />;
  if (phase === "eventscreen")  return <EventScreen onContinue={() => setPhase("main")} />;

  return (
    <main>
      <Story />
      <Countdown />
      <RSVP />
    </main>
  );
}
