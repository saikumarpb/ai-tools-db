import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import jsonTools from '@/data/tools.json';
import { Tool } from '@/lib/types';

const tools: Tool[] = jsonTools;

const priceCategories: string[] = tools.reduce(
    (acc: string[], { Price }) => {
        if (!acc.includes(Price)) {
            acc.push(Price);
        }
        return acc;
    },
    ['All']
);

const categories: string[] = tools.reduce(
    (acc: string[], { Category }) => {
        if (!acc.includes(Category)) {
            acc.push(Category);
        }
        return acc;
    },
    ['All']
);

interface FiltersProps {
    getFilterState: (state: FilterState) => void;
}

export interface FilterState {
    selectedPriceCat: string;
    selectedCat: string;
    apiAvailable: boolean;
}

export function Filters({ getFilterState }: FiltersProps): JSX.Element {
    const [selectedPriceCat, setSelectedPriceCat] = useState('All');
    const [selectedCat, setSelectedCat] = useState('All');
    const [apiAvailable, setApiAvailable] = useState(true);

    useEffect(() => {
        getFilterState({
            selectedPriceCat,
            selectedCat,
            apiAvailable,
        });
    }, [selectedPriceCat, selectedCat, apiAvailable]);

    const resetFilters = () => {
        setSelectedPriceCat('All');
        setSelectedCat('All');
        setApiAvailable(true);
    };

    return (
        <div className="w-full p-4 border h-fit border-gray-700 rounded-2xl flex flex-wrap gap-4 max-w-5xl justify-between">
            <div className="flex items-center justify-between w-full sm:w-[48%] lg:w-[26%]">
                <span className="pr-3">Price:</span>
                <Select
                    value={selectedPriceCat}
                    onValueChange={(value) => setSelectedPriceCat(value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-black">
                        <SelectGroup>
                            {priceCategories.map((pc) => (
                                <SelectItem value={pc} key={pc}>
                                    {pc}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center justify-between w-full sm:w-[48%] lg:w-[26%]">
                <span className="pr-3">Category:</span>
                <Select
                    value={selectedCat}
                    onValueChange={(value) => setSelectedCat(value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-black">
                        <SelectGroup>
                            {categories.map((category) => (
                                <SelectItem value={category} key={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center justify-between w-full sm:w-[48%] lg:w-[26%]">
                <span className="pr-3">API:</span>
                <Select
                    value={apiAvailable ? 'All' : 'Yes'}
                    onValueChange={(value) => setApiAvailable(value === 'All')}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-black">
                        <SelectGroup>
                            <SelectItem value="All" key={'all'}>
                                All
                            </SelectItem>
                            <SelectItem value="Yes" key={'true'}>
                                Yes
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <Button
                onClick={resetFilters}
                className="bg-white text-black hover:bg-black hover:text-white border"
            >
                Reset Filters
            </Button>
        </div>
    );
}
