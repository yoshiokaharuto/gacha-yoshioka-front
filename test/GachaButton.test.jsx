import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import GachaButton from '../src/components/GachaButton';

test('GachaButton: 正しくレンダリングされ、クリックを処理する', () => {
  // クリックイベントのモック関数を作成
  const handleClick = vi.fn();

  // コンポーネントをレンダリング
  render(<GachaButton onClick={handleClick} />);

  // ボタンが正しく表示されているか確認
  const buttonElement = screen.getByText('ガチャを引く');
  expect(buttonElement).not.toBeNull();

  // ボタンをクリック
  fireEvent.click(buttonElement);

  // onClickハンドラが1回呼び出されたか確認
  expect(handleClick).toHaveBeenCalledTimes(1);
});
