export function NavTop() {
  return (
    <div className="h-[100px] flex justify-between items-center border border-black px-sm">
      <div className="text-lg text-black">안읽은 대화(2)</div>
      <div className="w-[40%]">
        <button className="w-full rounded-md bg-purple/90 hover:bg-purple text-white text-lg py-sm px-md">
          새로운 메세지
        </button>
      </div>
    </div>
  );
}
