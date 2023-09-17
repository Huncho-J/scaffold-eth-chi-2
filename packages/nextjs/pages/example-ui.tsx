// pages/index.tsx
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Projects } from "~~/components/example-ui/Projects";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="Decentralized Community Platform | Your Project"
        description="A platform for decentralized governance and funding of community projects."
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Decentralized Community Platform</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Home;
