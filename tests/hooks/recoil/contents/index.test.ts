/**
 * @jest-environment jsdom
 */

import { act } from '@testing-library/react';
import { useFetch, useCountUp } from '../../imports';
import { renderRecoilHook } from '../helpers';

const useMock = () => {
  const fetch = useFetch()
  const countUp = useCountUp()

  return { fetch, countUp }
}

describe('', () => {
    test('test', async () => {
      const { result } = renderRecoilHook(useMock)

      await act(async () => {
        expect(result.current.fetch('key1')).resolves.toEqual({ data: 'data-key1-0' })

        await result.current.countUp('key1')
        expect(result.current.fetch('key1')).resolves.toEqual({ data: 'data-key1-1' })

        expect(result.current.fetch('key2')).resolves.toEqual({ data: 'data-key2-0' })

        await result.current.countUp('key2')
        expect(result.current.fetch('key2')).resolves.toEqual({ data: 'data-key2-1' })

        await result.current.countUp('key2')
        expect(result.current.fetch('key2')).resolves.toEqual({ data: 'data-key2-2' })

        expect(result.current.fetch('key1')).resolves.toEqual({ data: 'data-key1-1' })
    })

    }, 30000)
  });