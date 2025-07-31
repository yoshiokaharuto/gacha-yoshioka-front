import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect, vi, describe } from 'vitest';
import GachaButton from '../src/components/GachaButton';

describe('GachaButton', () => {
  test('正しくレンダリングされる', () => {
    render(<GachaButton />);
    const buttonElement = screen.getByText('ガチャを引く');
    expect(buttonElement).not.toBeNull();
  });

  test('クリック時にonClickハンドラが呼び出される', () => {
    const handleClick = vi.fn();
    render(<GachaButton onClick={handleClick} />);
    const buttonElement = screen.getByText('ガチャを引く');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
