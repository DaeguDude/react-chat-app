export function WriteChat() {
  return (
    <div className="p-xl border border-black flex flex-col">
      <div className="border border-grey">
        <div>
          <textarea
            className="resize-none w-full p-sm outline-none bg-grey/20 text-black h-[80px]"
            placeholder="내용을 작성해 주세요."
          />
        </div>
        <div className="h-[50px] flex items-center justify-end">
          <div className="w-[20%]">
            <button className="w-full rounded-md bg-purple/90 hover:bg-purple text-white py-sm px-md">
              보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
