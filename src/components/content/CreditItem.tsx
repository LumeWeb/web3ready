export interface Credit {
  title: string;
  year: string;
  author: string;
  role: string;
  url?: string;
  useBy?: boolean;
}

export interface CreditItemProps {
  credit: Credit;
}

function CreditTitle({ title, url }: { title: string; url?: string }) {
  if (url) {
    return (
      <a href={url} className="text-cyan hover:text-primary transition-colors">
        <strong className="text-white">{title}</strong>
      </a>
    );
  }
  return <strong className="text-white">{title}</strong>;
}

function CreditYear({ year }: { year: string }) {
  return <> ({year})</>;
}

function CreditAuthor({ author, useBy }: { author: string; useBy?: boolean }) {
  if (!author) return null;
  return <> {useBy !== false ? `by ${author}` : author}</>;
}

function CreditRole({ role }: { role: string }) {
  return <> &mdash; {role}</>;
}
export function CreditItem({ credit }: CreditItemProps) {
  return (
    <p>
      <CreditTitle title={credit.title} url={credit.url} />
      <CreditYear year={credit.year} />
      <CreditAuthor author={credit.author} useBy={credit.useBy} />
      <CreditRole role={credit.role} />
    </p>
  );
}
