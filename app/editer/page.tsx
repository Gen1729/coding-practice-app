"use client";
import MonacoWrapper from "./MonacoWrapper";
import Link from "next/link";
import { useState } from "react";
import "./light-dark-button.css";

export default function Page() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  
	const targetCode:string = 
  `struct dsu {
  public:
    dsu() : _n(0) {}
    explicit dsu(int n) : _n(n), parent_or_size(n, -1) {}

    int merge(int a, int b) {
        assert(0 <= a && a < _n);
        assert(0 <= b && b < _n);
        int x = leader(a), y = leader(b);
        if (x == y) return x;
        if (-parent_or_size[x] < -parent_or_size[y]) std::swap(x, y);
        parent_or_size[x] += parent_or_size[y];
        parent_or_size[y] = x;
        return x;
    }

    bool same(int a, int b) {
        assert(0 <= a && a < _n);
        assert(0 <= b && b < _n);
        return leader(a) == leader(b);
    }

    int leader(int a) {
        assert(0 <= a && a < _n);
        return _leader(a);
    }

    int size(int a) {
        assert(0 <= a && a < _n);
        return -parent_or_size[leader(a)];
    }

    std::vector<std::vector<int>> groups() {
        std::vector<int> leader_buf(_n), group_size(_n);
        for (int i = 0; i < _n; i++) {
            leader_buf[i] = leader(i);
            group_size[leader_buf[i]]++;
        }
        std::vector<std::vector<int>> result(_n);
        for (int i = 0; i < _n; i++) {
            result[i].reserve(group_size[i]);
        }
        for (int i = 0; i < _n; i++) {
            result[leader_buf[i]].push_back(i);
        }
        result.erase(
            std::remove_if(result.begin(), result.end(),
                           [&](const std::vector<int>& v) { return v.empty(); }),
            result.end());
        return result;
    }

  private:
    int _n;
    // root node: -1 * component size
    // otherwise: parent
    std::vector<int> parent_or_size;

    int _leader(int a) {
        if (parent_or_size[a] < 0) return a;
        return parent_or_size[a] = _leader(parent_or_size[a]);
    }
};`
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700">
      {/* Header */}
      <header className="border-b border-slate-500/50 bg-slate-700/50 backdrop-blur-sm">
        <div className="max-w-9xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white">Coding Practice</h1>
            </div>
            <nav className="flex gap-4">
              <Link href="/" className="text-slate-200 hover:text-white transition-colors text-sm">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-10xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl font-bold text-white">DSU</h2>
            <span className="px-3 py-1 bg-blue-400/30 text-blue-200 text-xs font-semibold rounded-full border border-blue-400/40">
              Data Structure
            </span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">
            Union-Find木として知られるデータ構造。素集合を効率的に管理し、2つの要素が同じ集合に属するかの判定や、集合の結合を高速に行います。
          </p>
        </div>

        {/* Editor Section */}
        <div className="bg-slate-500/50 rounded-xl border border-slate-400/50 overflow-hidden shadow-2xl mb-6">
          <div className="bg-slate-600/80 px-4 py-3 border-b border-slate-400/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-100 text-mid ml-4 font-mono">dsu.cpp</span>
            </div>
            <div className="flex gap-2">
              <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)}
                className="theme-checkbox"
              />
            </div>
          </div>
          <div className="p-4">
            <MonacoWrapper theme={isChecked ? "myCustomDark" : "myCustomLight"}>{targetCode}</MonacoWrapper>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Complexity Card */}
          <div className="bg-slate-600/50 rounded-lg border border-slate-500/50 p-5">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-purple-300">⚡</span>
              Time Complexity
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-100">Union (merge):</span>
                <code className="text-green-300 font-mono">O(α(n))</code>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-100">Find (leader):</span>
                <code className="text-green-300 font-mono">O(α(n))</code>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-100">Same check:</span>
                <code className="text-green-300 font-mono">O(α(n))</code>
              </div>
            </div>
          </div>

          {/* Reference Card */}
          <div className="bg-slate-600/50 rounded-lg border border-slate-500/50 p-5">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-300">📚</span>
              Reference
            </h3>
            <p className="text-slate-100 text-sm mb-3">
              AtCoder Libraryの実装を参考にしています。使用例やテストケースは公式ドキュメントをご覧ください。
            </p>
            <a 
              href="https://github.com/atcoder/ac-library/blob/master/document_ja/dsu.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium"
            >
              <span>公式ドキュメントを見る</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Usage Example */}
        <div className="bg-slate-600/50 rounded-lg border border-slate-500/50 p-5">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-yellow-300">💡</span>
            Usage Tips
          </h3>
          <ul className="space-y-2 text-slate-100 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-300 mt-1">•</span>
              <span>経路圧縮とランクによる結合により、ほぼO(1)で動作します</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-300 mt-1">•</span>
              <span>グラフの連結性判定や、最小全域木アルゴリズムなどで活用できます</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-300 mt-1">•</span>
              <span>groups()メソッドで全ての連結成分を取得できます</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}