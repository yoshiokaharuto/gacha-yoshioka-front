import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import ResultDisplay from '../src/components/ResultDisplay';

describe('ResultDisplay: 結果表示コンポーネント', () => {
  test('結果が提供されない場合に初期メッセージをレンダリングする', () => {
    render(<ResultDisplay />);
    expect(screen.getByText('結果はここに表示されます')).not.toBeNull();
  });

  test('結果を正しくレンダリングする', () => {
    render(<ResultDisplay result="A" />);
    const resultElement = screen.getByText('A');
    expect(resultElement).not.toBeNull();
  });

  test.each(['S', 'A', 'B', 'C'])('既知のランク %s に正しいクラスを適用する', (rank) => {
    render(<ResultDisplay result={rank} />);
    const resultElement = screen.getByText(rank);
    expect(resultElement.className).toBe(`rank-${rank.toLowerCase()}`);
  });

  test('提供されたclassNameをルートdivに適用する', () => {
    render(<ResultDisplay className="test-class" />);
    const rootDiv = screen.getByText('結果はここに表示されます').closest('div');
    expect(rootDiv.className).toContain('test-class');
  });

  test('未知のランクをレンダリングし、対応するクラスを適用する', () => {
    render(<ResultDisplay result="X" />);
    const resultElement = screen.getByText('X');
    expect(resultElement).not.toBeNull();
    expect(resultElement.className).toBe('rank-x');
  });
});
