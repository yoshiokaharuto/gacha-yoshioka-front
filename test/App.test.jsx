
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

    test('ガチャ成功時（Sランク）：結果にrank-sクラスが付与される', async () => {
    const mockResponse = { data: { result: 'S' } };
    axios.get.mockResolvedValue(mockResponse);
    
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを引く' }));
    
    await waitFor(() => {
      const resultElement = screen.getByText('S');
      expect(resultElement).toHaveClass('rank-s');
    });
  });

  test('ガチャ成功時（Aランク）：結果にrank-aクラスが付与される', async () => {
    const mockResponse = { data: { result: 'A' } };
    axios.get.mockResolvedValue(mockResponse);
    
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを引く' }));
    
    await waitFor(() => {
      const resultElement = screen.getByText('A');
      expect(resultElement).toHaveClass('rank-a');
    });
  });

  test('ガチャ成功時（Bランク）：結果にrank-bクラスが付与される', async () => {
    const mockResponse = { data: { result: 'B' } };
    axios.get.mockResolvedValue(mockResponse);
    
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを引く' }));
    
    await waitFor(() => {
      const resultElement = screen.getByText('B');
      expect(resultElement).toHaveClass('rank-b');
    });
  });

  test('ガチャ成功時（Cランク）：結果にrank-cクラスが付与される', async () => {
    const mockResponse = { data: { result: 'C' } };
    axios.get.mockResolvedValue(mockResponse);
    
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを引く' }));
    
    await waitFor(() => {
      const resultElement = screen.getByText('C');
      expect(resultElement).toHaveClass('rank-c');
    });
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
