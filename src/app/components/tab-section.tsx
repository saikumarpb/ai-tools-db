import { Tabs } from './ui/tabs';

export function TabSection() {
    const tabs = [
        {
            title: 'Tools',
            value: 'Tools',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Tools</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'About',
            value: 'About',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>About</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Events',
            value: 'Events',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Events</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Contact',
            value: 'Contact',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Contact</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Subscribe',
            value: 'Subscribe',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Subscribe</p>
                    <DummyContent />
                </div>
            ),
        },
    ];
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-center mb-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return <>Hello</>;
};
