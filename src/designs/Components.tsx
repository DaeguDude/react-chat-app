import {
  Profile,
  ProfileHovered,
  ProfileSelected,
} from "../components/Profile";

export const Components = () => {
  return (
    <div>
      <h1 className="text-[40px]">컴포넌트</h1>
      <div className="w-[330px] border-2 border-black">
        <h2 className="text-[20px]">Profile</h2>
        <Profile />
        <ProfileHovered />
        <ProfileSelected />
      </div>
    </div>
  );
};
