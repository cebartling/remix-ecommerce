import type { LoaderFunction } from '@remix-run/node';
import type { IndexLoaderData } from '~/loaders/IndexLoaderFunction';
import indexLoaderFunction from '~/loaders/IndexLoaderFunction';
import { useLoaderData } from 'react-router';
import { Button } from '@material-tailwind/react';
import Header1 from '~/components/Header1';

export const loader: LoaderFunction = indexLoaderFunction;

export default function Index() {
  const { preferences } = useLoaderData() as IndexLoaderData;

  return (
    <div>
      <Header1 />
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <div>Foobar: {preferences.foobar}</div>
      <div>
        <Button>Button</Button>
      </div>
    </div>
  );
}
