import { ReactNode, useState } from "react";
import { LayoutProvider } from "./layout.context";
import { FloatControl } from "./floatcontrol";
import NavBar from "./navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [useTheme, setUseTheme] = useState("");

  return (
    <LayoutProvider value={{ useTheme, setUseTheme }}>
      <div className={`${useTheme}`}>
        <NavBar />
        <main
          id="MainContent"
          className={`fixed block bg-theme-muted overflow-auto top-16 w-screen h-[calc(100%-64px)] z-40`}
        >
          {children}
        </main>
        <div id="ThemeChanger" className="absolute bottom-0 right-0 z-50">
          <FloatControl />
        </div>
      </div>
    </LayoutProvider>
  );
}
