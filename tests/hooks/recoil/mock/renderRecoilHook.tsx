import { renderHook } from '@testing-library/react';
import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil';

export const renderRecoilHook = <P, R>(callback: (props: P) => R) => {
  return renderHook(callback, {
    wrapper: ({ children }) => <RecoilRoot><Suspense>{children}</Suspense></RecoilRoot>,
  });
};