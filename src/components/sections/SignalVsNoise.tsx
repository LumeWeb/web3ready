import { tv, cn } from 'tailwind-variants';

const signalVsNoise = tv({
  slots: {
    base: 'w-full bg-white/5 py-24',
    container: 'max-w-[1200px] mx-auto px-6 md:px-20 lg:px-40',
    header: 'mb-12 text-center',
    title: 'text-primary font-mono text-3xl font-bold uppercase mb-4',
    subtitle: 'text-cyan/80 font-mono text-sm italic',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/20 border border-primary/20',
    panel: 'bg-background-dark p-8 md:p-12',
    panelHeader: 'flex items-center gap-3 mb-8',
    panelTitle: 'font-mono text-xl font-bold uppercase',
    list: 'space-y-6 font-mono text-sm',
    listItem: 'flex gap-4',
    itemNumber: '',
  },
});

export interface SignalVsNoiseProps {
  className?: string;
}

export function SignalVsNoise({ className }: SignalVsNoiseProps) {
  const { base, container, header, title, subtitle, grid, panel, panelHeader, panelTitle, list, listItem, itemNumber } = signalVsNoise();

  const signalItems = [
    'Permissionless execution of code.',
    'Immutable ledgers with no "admin keys".',
    'Open source protocols verified by the community.',
    'Privacy-first architecture (ZKP/Encryption).',
  ];

  const noiseItems = [
    'VC-controlled governance structures.',
    'Censurable transactions via "Safety" lists.',
    'Closed source proprietary "secret" sauce.',
    'KYC/AML mandatory for base layer access.',
  ];

  return (
    <section className={cn(base(), className)}>
      <div className={container()}>
        <div className={header()}>
          <h2 className={title()}>Signal vs Noise</h2>
          <p className={subtitle()}>Detecting DINO (Decentralized In Name Only) projects</p>
        </div>

        <div className={grid()}>
          <div className={panel()}>
            <div className={`${panelHeader()} text-cyan`}>
              <span className="material-symbols-outlined">radar</span>
              <h3 className={panelTitle()}>The Signal</h3>
            </div>
            <ul className={list()}>
              {signalItems.map((item, index) => (
                <li key={index} className={listItem()}>
                  <span className={`${itemNumber()} text-primary`}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={panel()}>
            <div className={`${panelHeader()} text-red-danger/70`}>
              <span className="material-symbols-outlined">sensors_off</span>
              <h3 className={panelTitle()}>The Noise</h3>
            </div>
            <ul className={list()}>
              {noiseItems.map((item, index) => (
                <li key={index} className={`${listItem()} text-gray-500`}>
                  <span className={`${itemNumber()} text-red-danger/50`}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="line-through">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
