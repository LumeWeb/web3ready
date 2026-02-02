import { tv, cn, type VariantProps } from 'tailwind-variants';

const threeBeatHook = tv({
  base: 'border-l-2 border-cyan pl-8 py-2',
});

export interface ThreeBeatHookProps extends VariantProps<typeof threeBeatHook> {
  tagline?: string;
  className?: string;
}

export function ThreeBeatHook({
  tagline = "We're not here to save you. We're here to build.",
  className = '',
}: ThreeBeatHookProps) {
  return (
    <section className={cn(threeBeatHook(), className)}>
      <div className="font-mono space-y-2">
        <p className="text-2xl md:text-3xl text-white font-bold tracking-tight">
          Web1 was open.
        </p>
        <p className="text-2xl md:text-3xl text-cyan font-bold tracking-tight">
          Web2 was captured.
        </p>
        <p className="text-2xl md:text-3xl text-primary font-bold tracking-tight">
          Web3 is a casino.
        </p>
      </div>
      <p className="mt-6 text-white/70 font-light text-lg max-w-lg">
        {tagline}
      </p>
    </section>
  );
}
