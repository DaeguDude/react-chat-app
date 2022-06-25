export function Profile() {
  return (
    // cursor pointer
    // hover color change

    <div className="flex p-2 border border-black">
      {/* Let's make shrink not possible */}
      <div className="w-[20%]">
        <img
          className="rounded-full border-2 border-black"
          alt="Lucas Revelle"
          src="https://video-ssn1-1.xx.fbcdn.net/v/t1.6435-1/74324814_3165646943507281_7840642414380318720_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=yecNstk8TNwAX8GxtFe&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=video-ssn1-1.xx&amp;oh=00_AT_1rKgPWwLKQ0YqJKcluS9d8vld23qjzCIUDQ7A9YDvRg&amp;oe=62DD8F32"
        ></img>
      </div>
      <div className="w-[80%] pl-3">
        {/* 오른쪽 */}
        <div className="flex">
          <div className="text-[15px] font-normal text-[#050505] mr-2">
            김유진
          </div>
          <div className="flex items-center">
            <span className="h-[4px] w-[4px] bg-[#65676b] rounded-full inline-block mr-1"></span>
            <span className="text-[13px] font-normal text-[#65676b]">
              2016.12.13
            </span>
          </div>
        </div>

        <div className="text-[13px] font-normal text-[#65676b] overflow-hidden whitespace-nowrap text-ellipsis">
          안녕하세요 서류지원 합격한 최예슬입니다. 안녕하세요 서류지원 합격한
          최예슬입니다. 안녕하세요 서류지원 합격한 최예슬입니다.
        </div>
      </div>
    </div>
  );
}
