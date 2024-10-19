'use client';
import { Input } from '@/components/ui/input';
import jsonTools from '@/data/tools.json';
import { Tool } from '@/lib/types';
import { HoverEffect } from '../components/ui/card-hover-effect';
import { useEffect, useState } from 'react';
import { Filters, FilterState } from './fiters';

const tools: Tool[] = jsonTools;

export default function Page() {
    const [items, setItems] = useState(tools);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPriceCat, setSelectedPriceCat] = useState('All');
    const [selectedCat, setSelectedCat] = useState('All');
    const [apiAvailable, setApiAvailable] = useState(true);

    const filterTools = () =>
        tools.filter((item) => {
            const apiCondition = apiAvailable || item.API !== 'Not Available';
            const priceCondition =
                selectedPriceCat === 'All' || item.Price === selectedPriceCat;
            const categoryCondition =
                selectedCat === 'All' || item.Category === selectedCat;

            return apiCondition && priceCondition && categoryCondition;
        });

    useEffect(() => {
        if (searchQuery) {
            setItems(() =>
                tools.filter((item) => {
                    return (
                        item['Tool Name']
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                        item.Description.toLowerCase().includes(
                            searchQuery.toLowerCase()
                        ) ||
                        item.Tags.toLowerCase().includes(
                            searchQuery.toLowerCase()
                        )
                    );
                })
            );
        } else {
            setItems(() => filterTools());
        }
    }, [searchQuery]);

    useEffect(() => {
        setItems(() => filterTools());
    }, [selectedPriceCat, selectedCat, apiAvailable]);

    const filters = ({
        apiAvailable,
        selectedCat,
        selectedPriceCat,
    }: FilterState) => {
        setApiAvailable(apiAvailable);
        setSelectedCat(selectedCat);
        setSelectedPriceCat(selectedPriceCat);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4 md:p-8 lg:p-16 xl:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-black">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-4 md:pb-8 lg:pb-16">
                {'AI Tools Repository  '}
            </h2>

            <div className="w-full sm:min-w-[24rem] max-w-md px-4  pb-4 md:pb-8 lg:pb-16">
                <Input
                    type="search"
                    placeholder="Search"
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <Filters getFilterState={filters} />
            <div className="max-w-5xl mx-auto">
                <HoverEffect
                    items={items.map((tool) => ({
                        title: tool['Tool Name'],
                        description: tool.Description,
                        logoUrl: tool['Logo URL'],
                        tileUrl: tool['Tile URL'],
                        link: tool['Youtube link'],
                    }))}
                />
            </div>
        </div>
    );
}
