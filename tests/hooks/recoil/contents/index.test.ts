/**
 * @jest-environment jsdom
 */

import { act } from '@testing-library/react';
import { useFetch, useCountUp } from '../../imports';
import { renderRecoilHook } from '../mock/renderRecoilHook';

// act and advance jest timers
const flushPromisesAndTimers = async (): Promise<void> => {
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

const useMock = () => {
  const fetch = useFetch()
  const countUp = useCountUp()
  
  return { fetch, countUp }
}

describe('The form state should', () => {
    test('test', async () => {
      const { result } = renderRecoilHook(useMock)
      // await flushPromisesAndTimers()

      await act(async () => {
        expect(await result.current.fetch('key1')).toEqual({ data: 'data-key1-0' })

        expect(await result.current.fetch('key1')).toEqual({ data: 'data-key1-0' })

        await result.current.countUp()
        expect(await result.current.fetch('key1')).toEqual({ data: 'data-key1-1' })
    })

    }, 30000)
  });