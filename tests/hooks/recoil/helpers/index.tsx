import { act, renderHook } from '@testing-library/react';
import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil';

export const renderRecoilHook = <P, R>(callback: (props: P) => R) => {
  return renderHook(callback, {
    wrapper: ({ children }) => <RecoilRoot><Suspense>{children}</Suspense></RecoilRoot>,
  })
}

export const flushPromisesAndTimers = async (): Promise<void> => {
  await act(
    () =>
      new Promise(resolve => {
        setTimeout(resolve, 100)
        jest.useFakeTimers()
        jest.runAllTimers()
      }),
  )
  return
}