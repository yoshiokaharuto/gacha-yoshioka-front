# ガチャを作ろう

jsで作ったのと同じようなガチャをもう一度作る  
ランダムでS,A,B,Cが出るガチャアプリ

* 技術
    * バックエンド → Python(FastAPI)
    * フロントエンド → React

* テスト
    * Python → pytest
    * React → vitest


* フロントエンド
    * バックエンドで作ったガチャAPIからデータを取得して表示する

* 手順
    1. Reactプロジェクトのセットアップ
    2. コンポーネントの設計と作成
        - GachaButtonコンポーネント
        - ResultDisplayコンポーネント
        - Appコンポーネント
    3. API通信処理の実装
    4. スタイリング
    5. テストの実装