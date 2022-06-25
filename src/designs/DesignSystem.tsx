export const DesignSystem = () => {
  return (
    <div className="flex flex-wrap">
      <Wrapper name="Color">
        <Colors />
      </Wrapper>
      <Wrapper name="Typography">
        <Typography />
      </Wrapper>
      <Wrapper name="Spacing">
        <Spacing />
      </Wrapper>
      <Wrapper name="Radius">
        <BorderRadius />
      </Wrapper>
    </div>
  );
};

interface IWrapper {
  name: string;
  children: React.ReactNode;
}
const Wrapper = ({ name, children }: IWrapper) => {
  return (
    <div className="p-xl">
      <h1 className="text-[30px]">{name}</h1>
      <div className="flex">{children}</div>
    </div>
  );
};

const Colors = () => {
  return (
    <div className="flex">
      <Color name="grey" color="#65676B" />
      <Color name="black" color="#050505" />
      <Color name="white" color="#ffffff" />
      <Color name="purple" color="#4e61ff" />
    </div>
  );
};

interface IColor {
  name: string;
  color: string;
}
const Color = ({ name, color }: IColor) => {
  return (
    <div className="w-[100px]">
      <div>{name}</div>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

const Typography = () => {
  return (
    <div>
      <Font name="xs" size={12} />
      <Font name="sm" size={13} />
      <Font name="md" size={15} />
      <Font name="lg" size={16} />
      <Font name="xl" size={18} />
    </div>
  );
};

interface IFont {
  size: number;
  name: string;
}
const Font = ({ name, size }: IFont) => {
  return (
    <p
      className="[w-50px]"
      style={{
        fontSize: size,
      }}
    >
      {name} - 리액트 챗 앱 폰트
    </p>
  );
};

const Spacing = () => {
  return (
    <div className="flex">
      <Padding name="xs" size={4} />
      <Padding name="sm" size={8} />
      <Padding name="md" size={12} />
      <Padding name="lg" size={16} />
      <Padding name="xl" size={20} />
    </div>
  );
};

interface IPadding {
  name: string;
  size: number;
}
const Padding = ({ name, size }: IPadding) => {
  return (
    <div className="h-[80px] w-[50px] ">
      <div
        style={{
          backgroundColor: "black",
          width: size,
          height: 80,
        }}
      ></div>
      <span>{name}</span>
    </div>
  );
};

const BorderRadius = () => {
  return (
    <div className="flex">
      <Radius name="sm" radius={8} />
      <Radius name="md" radius={50} />
      <RadiusFull />
    </div>
  );
};

interface IRadius {
  name: string;
  radius: number | string;
}
const Radius = ({ name, radius }: IRadius) => {
  return (
    <div>
      <span>{name}</span>
      <div
        className="h-[50px] w-[150px] bg-purple mr-sm"
        style={{
          borderRadius: radius,
        }}
      ></div>
    </div>
  );
};

const RadiusFull = () => {
  return (
    <div>
      <span>full</span>
      <div
        className="h-[50px] w-[50px] bg-purple mr-2"
        style={{
          borderRadius: 9999,
        }}
      ></div>
    </div>
  );
};
