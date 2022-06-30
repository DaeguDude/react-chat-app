export function NavTop() {
  return (
    <div className="h-[100px] px-sm border-b border-grey/50">
      <div className="hidden lg:flex h-[100%] lg:justify-between lg:items-center">
        <div className="text-lg text-black">안읽은 대화(2)</div>
        <div className="w-[40%]">
          <button className="w-full rounded-md bg-purple/90 hover:bg-purple text-white text-lg py-sm px-md">
            새로운 메세지
          </button>
        </div>
      </div>
    </div>
  );
}
