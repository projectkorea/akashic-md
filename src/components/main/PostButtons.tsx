import Link from 'next/link';

export default function PostButtons() {
  const ids = [0, 1, 2, 3];
  return (
    <>
      {ids.map(id => (
        <Link
          key={id}
          href={`/test/${id}`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {`Go to MD File ${id}`}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Navigate to the posts page.</p>
        </Link>
      ))}
    </>
  );
}
