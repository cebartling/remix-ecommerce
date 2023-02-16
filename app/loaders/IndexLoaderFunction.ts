import type { DataFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { LINK_ERROR } from '~/constants';
import {
  deserializeCookies,
  serializePreferences
} from '~/services/cookie.server';
import type Preferences from '~/models/Preferences.model';

export interface IndexLoaderData {
  preferences: Preferences;
}

export default async function indexLoaderFunction({
  request
}: DataFunctionArgs) {
  try {
    const preferences = await deserializeCookies(request);
    preferences.foobar = 'foobarBarfoo';

    return json({ preferences } as IndexLoaderData, {
      headers: {
        'Set-Cookie': await serializePreferences(preferences)
      }
    });
  } catch (e) {
    return redirect(LINK_ERROR);
  }
}
