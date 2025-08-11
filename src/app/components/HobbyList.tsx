export default function HobbyList() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-medium mb-2">趣味</h2>
      <ul className="space-y-3">
        <li>
          <div className="flex items-center gap-2">
            <span className="text-xl">•</span>
            <span className="text-[1.4rem]">プログラミング</span>
          </div>
          <p className="text-xl ml-4 mb-4">
            最近はUnityでのシュミレーションや、Rustで数学系のツール作成に興味を持っている
          </p>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <span className="text-xl">•</span>
            <span className="text-[1.4rem]">ゲーム</span>
          </div>
          <p className="text-xl ml-4">スプラトゥーンとマリオカートを主にしている</p>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <span className="text-xl">•</span>
            <span className="text-[1.4rem]">読書</span>
          </div>
          <p className="text-xl ml-4 mb-1">哲学系の本や小説を読んでいる<br/></p>
          <p className="text-xl line-through ml-4 mb-4">1日に読む時間は少ない</p>
        </li>
      </ul>
    </section>
  );
}
