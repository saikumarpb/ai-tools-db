import { Tabs } from './ui/tabs';

export function TabSection() {
    const tabs = [
        {
            title: 'Product',
            value: 'product',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Product Tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Services',
            value: 'services',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Services tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Playground',
            value: 'playground',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Playground tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Content',
            value: 'content',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Content tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: 'Random',
            value: 'random',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-900 to-sky-700">
                    <p>Random tab</p>
                    <DummyContent />
                </div>
            ),
        },
    ];
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-center mb-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return <>Hello</>;
};
