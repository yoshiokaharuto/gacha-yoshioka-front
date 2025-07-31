
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import axios from 'axios';
import App from '../src/App';
import '@testing-library/jest-dom';

// axiosのモックを作成
vi.mock('axios');

describe('App: アプリケーションコンポーネント', () => {
  test('初期表示時にタイトル、ボタン、初期メッセージがレンダリングされる', () => {
    render(<App />);
    
    // タイトルが表示されているか
    expect(screen.getByRole('heading', { name: 'ガチャ' })).not.toBeNull();
    
    // ガチャボタンが表示されているか
    expect(screen.getByRole('button', { name: 'ガチャを引く' })).not.toBeNull();
    
    // 結果表示の初期メッセージが表示されているか
    expect(screen.getByText('結果はここに表示されます')).not.toBeNull();
  });

  test('ガチャ失敗時：エラーがコンソールに出力される', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const mockError = new Error('Network Error');
    axios.get.mockRejectedValue(mockError);
    
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを引く' }));
    
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching gacha result:', mockError);
    });
    
    consoleErrorSpy.mockRestore();
  });
});
