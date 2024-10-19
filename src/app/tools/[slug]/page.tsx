'use client';
import { Button } from '@/components/ui/button';
import jsonTools from '@/data/tools.json';
import { Tool } from '@/lib/types';
import Link from 'next/link';
import ReactPlayer from 'react-player';

const tools: Tool[] = jsonTools;
export default function Page({ params }: { params: { slug: string } }) {
    const toolId = params.slug;

    const tool = tools.find(
        (tool) =>
            tool['Tool Name'].toLowerCase().replace(/\s+/g, '-') === toolId
    );
    return (
        tool && (
            <div className="flex flex-col items-center min-h-screen p-4 md:p-8 lg:p-16 xl:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-black">
                {/* Main content and video wrapper */}
                <div className="flex flex-col md:flex-row md:items-start w-full gap-8">
                    {/* Main content */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold">
                            {tool?.['Tool Name']}
                        </h3>
                        <Button className="text-black bg-white mt-4 hover:bg-blue-400 hover:text-white z-50 relative">
                            <Link href={tool['Tool Directory URL']}>
                                Visit Website
                            </Link>
                        </Button>

                        {/* Overview Section */}
                        <div>
                            <h2 className="text-orange-500 font-bold pt-4 text-xl">
                                Overview:{' '}
                            </h2>
                            {tool.Description}
                        </div>

                        {/* API Button */}
                        {tool.API && (
                            <Button className="text-white bg-green-500 mt-4 hover:bg-blue-400 hover:text-white z-50 relative">
                                <Link
                                    href={tool['Tool Directory URL']}
                                    target="_blank"
                                >
                                    API Available
                                </Link>
                            </Button>
                        )}

                        {/* Price Section */}
                        <div className="flex items-center justify-start pt-4 gap-2">
                            <h2 className="text-orange-500 font-bold text-xl">
                                Price:{' '}
                            </h2>
                            {tool.Price}
                        </div>

                        {/* Pricing Link */}
                        {tool['Pricing Link'] && (
                            <div className="flex items-center justify-start pt-4 gap-2">
                                <h2 className="text-orange-500 font-bold text-xl">
                                    Pricing Details:{' '}
                                </h2>
                                <Link
                                    href={tool['Pricing Link']}
                                    target="_blank"
                                >
                                    View pricing details
                                </Link>
                            </div>
                        )}
                    </div>

                    <ReactPlayer
                        url={tool['Youtube link']}
                    />
                </div>
            </div>
        )
    );
}
