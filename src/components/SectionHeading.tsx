export default function SectionHeading({
    num,
    children,
}: {
    num: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-baseline gap-5">
            <span className="font-mono text-[11.5px] tracking-[0.14em] text-accent">{num}</span>
            <h2 className="m-0 font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-ink sm:text-[15px]">
                {children}
            </h2>
        </div>
    );
}
