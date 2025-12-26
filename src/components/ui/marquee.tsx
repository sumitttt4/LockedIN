export default function Marquee({ items }: { items: string[] }) {
    return (
        <div className="relative flex overflow-x-hidden bg-green-500/10 border-y border-green-500/20 py-2">
            <div className="animate-marquee whitespace-nowrap flex gap-8 text-green-400 font-mono text-xs uppercase tracking-widest">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        {item}
                    </span>
                ))}
                {items.map((item, i) => (
                    <span key={`dup-${i}`} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        {item}
                    </span>
                ))}
            </div>
            <div className="absolute top-0 flex w-full justify-between pointer-events-none">
                <div className="w-16 h-full bg-gradient-to-r from-black to-transparent" />
                <div className="w-16 h-full bg-gradient-to-l from-black to-transparent" />
            </div>
        </div>
    );
}
