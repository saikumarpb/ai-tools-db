import jsonTools from '@/data/tools.json';
import { Tool } from '@/lib/types';

const tools: Tool[] = jsonTools;
export default function Page({ params }: { params: { slug: string } }) {
    const toolId = params.slug;

    const tool = tools.find((tool) => tool['Tool Name'].toLowerCase().replace(/\s+/g, '-')===toolId)
    return <div>My Post: {tool?.Description}</div>
}