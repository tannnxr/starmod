import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";

import "./App.css";

import TopBar from "./components/TopBar";
import ModManagementBar from "./components/ModManagementBar";
import ModCard from "./components/ModCard";
import Panel from "./components/Panel";

function App() {
  const [installedMods, setInstalledMods] = useState<string[]>([
    "Example Mod 1",
    "Example Mod 2",
    "Example Mod 3"
  ]);
  const [activeMods, setActiveMods] = useState<string[]>([]);

  const findContainer = (modId: string) => {
    if (installedMods.includes(modId)) return "installed-mods";
    if (activeMods.includes(modId)) return "active-mods";
    return null;
  };

  const moveMod = (modId: string, from: string, to: string) => {
    if (from === to) return;

    if (from === "installed-mods" && to === "active-mods") {
      setInstalledMods((prev) => prev.filter((mod) => mod !== modId));
      setActiveMods((prev) => [modId, ...prev]);
      return;
    }

    if (from === "active-mods" && to === "installed-mods") {
      setActiveMods((prev) => prev.filter((mod) => mod !== modId));
      setInstalledMods((prev) => [modId, ...prev]);
    }
  };

  return (
    <DragDropProvider
  onDragEnd={(event) => {
    if (event.canceled) return;

    const source = event.operation.source;
    const target = event.operation.target;

    if (!source || !target) return;

    const modName = String(source.id);
    const targetId = String(target.id);

    if (targetId === "active-mods") {
      setInstalledMods((prev) => prev.filter((mod) => mod !== modName));
      setActiveMods((prev) => [modName, ...prev]);
    }

    if (targetId === "installed-mods") {
      setActiveMods((prev) => prev.filter((mod) => mod !== modName));
      setInstalledMods((prev) => [modName, ...prev]);
    }
  }}
>
      <main className="container">
        <TopBar />
        <ModManagementBar />

        <div className="split-panel">
          <Panel id="installed-mods" className="installed-mods">
            {installedMods.length > 0 ? (
              installedMods.map((mod) => (
                <ModCard key={mod} modName={mod} id={mod} />
              ))
            ) : (
              <p>No Mods Installed</p>
            )}
          </Panel>

          <Panel id="active-mods" className="active-mods">
            {activeMods.length > 0 ? (
              activeMods.map((mod) => (
                <ModCard key={mod} modName={mod} id={mod} />
              ))
            ) : (
              <p>No Active Mods</p>
            )}
          </Panel>
        </div>
      </main>
    </DragDropProvider>
  );
}

export default App;