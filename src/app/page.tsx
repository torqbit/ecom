'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/Header/Header';
import { useState } from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import BestSeller from '@/components/BestSeller/BestSeller';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <Header menuActive={menuActive} onMenuActive={onMenuActive} />
        <BestSeller />
      </section>
    </main>
  );
}
