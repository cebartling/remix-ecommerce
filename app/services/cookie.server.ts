import Preferences from '~/models/Preferences.model';
import { createCookie } from '@remix-run/node';

const COOKIE_NAME = 'remix-ecommerce';

const cookie = createCookie(COOKIE_NAME, {
  sameSite: 'lax',
  secure: false,
  maxAge: 31_449_600 // One year
});

export async function deserializeCookies(
  request: Request
): Promise<Preferences> {
  const cookieHeader = request.headers.get('Cookie');
  return (await cookie.parse(cookieHeader)) || new Preferences();
}

export async function serializePreferences(
  preferences: Preferences
): Promise<string> {
  return await cookie.serialize(preferences);
}
