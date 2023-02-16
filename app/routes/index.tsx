import type { LoaderFunction } from '@remix-run/node';
import type { IndexLoaderData } from '~/loaders/IndexLoaderFunction';
import indexLoaderFunction from '~/loaders/IndexLoaderFunction';
import { useLoaderData } from 'react-router';

export const loader: LoaderFunction = indexLoaderFunction;

export default function Index() {
  const { preferences } = useLoaderData() as IndexLoaderData;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <div>Foobar: {preferences.foobar}</div>
    </div>
  );
}
