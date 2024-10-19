import {} from './components/ui/tabs';
import { HeroParallax } from './components/ui/hero-parallax';
import jsonTools from '@/data/tools.json';
import { Tool } from '@/lib/types';

const tools: Tool[] = jsonTools;

export default function Home() {
  const products : {title: string, link: string, thumbnail: string}[]= tools.map((tool) => {
    return {
      title: tool['Tool Name'], link: tool['Tool Directory URL'], thumbnail: tool['Tile URL']
    }
  }) 
    return (
        <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] dark:bg-black">
            <main className="flex flex-col items-center">
                {/* <Navbar/> */}
                <div className="w-full">
                    {/* <GlobeSection />
                    <TabSection /> */}
                    <HeroParallax products={products} />;
                </div>
            </main>
        </div>
    );
}
