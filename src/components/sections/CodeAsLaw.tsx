import { tv, cn } from 'tailwind-variants';
import { Terminal } from '@/components/ui/terminal';

const codeAsLaw = tv({
  slots: {
    base: 'w-full max-w-[1200px] px-6 md:px-20 lg:px-40 py-24',
    header: 'flex items-center gap-4',
    divider: 'h-px flex-1 bg-primary/20',
    title: 'text-primary font-mono text-2xl font-bold uppercase tracking-[0.2em]',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  },
});

export interface CodeAsLawProps {
  className?: string;
}

export function CodeAsLaw({ className }: CodeAsLawProps) {
  const { base, header, divider, title, grid } = codeAsLaw();

  const solidityCode = `contract Web3Ready {
  // Sovereignty is the default state
  function checkFreedom() public {
    require(user.ownsPrivateKeys == true);
    emit ProtocolLiberated();
  }
}`;

  const rustCode = `pub fn encrypt_identity(id: Identity) {
  // Reject tracking by design
  let mask = ZkProof::generate(id);
  return mask.is_valid();
}`;

  return (
    <section className={cn(base(), className)}>
      <div className="flex flex-col gap-12">
        <div className={header()}>
          <div className={divider()} />
          <h2 className={title()}>Code as Law</h2>
          <div className={divider()} />
        </div>

        <div className={grid()}>
          <Terminal variant="primary" title="SOVEREIGNTY.SOL" size="2.4 KB">
            <span className="text-primary">contract</span> Web3Ready {'{'}
            <span className="text-gray-500">// Sovereignty is the default state</span>
            <span className="text-primary">function</span> checkFreedom() <span className="text-primary">public</span> {'{'}
            <span className="text-primary">require</span>(user.ownsPrivateKeys == <span className="text-primary">true</span>);
            <span className="text-primary">emit</span> ProtocolLiberated();
            {'}'}
            {'}'}
          </Terminal>

          <Terminal variant="cyan" title="PRIVACY.RS" size="1.8 KB">
            <span className="text-cyan">pub fn</span> encrypt_identity(id: Identity) {'{'}
            <span className="text-gray-500">// Reject tracking by design</span>
            <span className="text-cyan">let</span> mask = ZkProof::generate(id);
            <span className="text-cyan">return</span> mask.is_valid();
            {'}'}
          </Terminal>
        </div>
      </div>
    </section>
  );
}
