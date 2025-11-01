"use client";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Data Structures",
      description: "基本的なデータ構造の実装を練習",
      items: [
        { name: "DSU (Union-Find)", path: "/editer", difficulty: "Medium", language: "C++" },
        { name: "Segment Tree", path: "/editer", difficulty: "Hard", language: "C++" },
        { name: "Binary Indexed Tree", path: "/editer", difficulty: "Medium", language: "C++" },
        { name: "Trie", path: "/editer", difficulty: "Medium", language: "C++" },
      ],
      icon: "🌳",
      color: "blue"
    },
    {
      title: "Algorithms",
      description: "重要なアルゴリズムをタイピングで習得",
      items: [
        { name: "Binary Search", path: "/editer", difficulty: "Easy", language: "Python" },
        { name: "Quick Sort", path: "/editer", difficulty: "Medium", language: "C++" },
        { name: "Dijkstra", path: "/editer", difficulty: "Hard", language: "C++" },
        { name: "DFS / BFS", path: "/editer", difficulty: "Easy", language: "Python" },
      ],
      icon: "⚡",
      color: "purple"
    },
    {
      title: "Dynamic Programming",
      description: "動的計画法の典型問題を学習",
      items: [
        { name: "Knapsack Problem", path: "/editer", difficulty: "Medium", language: "Python" },
        { name: "LCS (Longest Common Subsequence)", path: "/editer", difficulty: "Medium", language: "C++" },
        { name: "Edit Distance", path: "/editer", difficulty: "Medium", language: "Python" },
        { name: "Matrix Chain Multiplication", path: "/editer", difficulty: "Hard", language: "C++" },
      ],
      icon: "🎯",
      color: "green"
    },
    {
      title: "Graph Theory",
      description: "グラフアルゴリズムの実装練習",
      items: [
        { name: "Topological Sort", path: "/editer", difficulty: "Medium", language: "C++" },
        { name: "Strongly Connected Components", path: "/editer", difficulty: "Hard", language: "C++" },
        { name: "Minimum Spanning Tree", path: "/editer", difficulty: "Medium", language: "C++" },
        { name: "Maximum Flow", path: "/editer", difficulty: "Hard", language: "C++" },
      ],
      icon: "🕸️",
      color: "yellow"
    },
  ];

  const difficultyColors = {
    Easy: "bg-green-400/30 text-green-200 border-green-400/40",
    Medium: "bg-yellow-400/30 text-yellow-200 border-yellow-400/40",
    Hard: "bg-red-400/30 text-red-200 border-red-400/40",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700">
      {/* Header */}
      <header className="border-b border-slate-500/50 bg-slate-700/50 backdrop-blur-sm">
        <div className="max-w-9xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white">Coding Practice</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            コードタイピングで学ぶ
          </h2>
          <p className="text-xl text-slate-200 mb-6">
            タイピングしながらアルゴリズムとデータ構造を体で覚える
          </p>
          <div className="flex gap-4 justify-center">
            <div className="px-4 py-2 bg-slate-600/50 rounded-lg border border-slate-500/50">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-slate-200">練習問題</div>
            </div>
            <div className="px-4 py-2 bg-slate-600/50 rounded-lg border border-slate-500/50">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-xs text-slate-200">カテゴリー</div>
            </div>
            <div className="px-4 py-2 bg-slate-600/50 rounded-lg border border-slate-500/50">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs text-slate-200">言語対応</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-slate-600/50 rounded-xl border border-slate-500/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-slate-200 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.path}
                    className="bg-slate-500/50 hover:bg-slate-500/70 border border-slate-400/50 rounded-lg p-4 transition-all hover:scale-105 hover:shadow-lg group"
                  >
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex gap-2 items-center">
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${difficultyColors[item.difficulty as keyof typeof difficultyColors]}`}>
                          {item.difficulty}
                        </span>
                        <span className="text-xs text-slate-200 font-mono">
                          {item.language}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-600/50 rounded-lg border border-slate-500/50 p-6">
            <div className="text-3xl mb-3">💪</div>
            <h3 className="text-lg font-semibold text-white mb-2">体で覚える</h3>
            <p className="text-sm text-slate-200">
              コードを何度もタイピングすることで、アルゴリズムの構造を自然に習得できます。
            </p>
          </div>
          <div className="bg-slate-600/50 rounded-lg border border-slate-500/50 p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">実践的な学習</h3>
            <p className="text-sm text-slate-200">
              競技プログラミングや実務で使える実装を厳選。AtCoder Libraryなどの高品質なコードで練習。
            </p>
          </div>
          <div className="bg-slate-600/50 rounded-lg border border-slate-500/50 p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">差分表示</h3>
            <p className="text-sm text-slate-200">
              Monaco Editorの差分表示機能で、お手本と自分のコードを比較しながら学習できます。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-500/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-200 text-sm">
          <p>© 2025 Coding Practice Hub. コードタイピングで学ぶアルゴリズム学習プラットフォーム</p>
        </div>
      </footer>
    </div>
  );
}
