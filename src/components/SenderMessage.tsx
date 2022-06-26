interface ISenderMessage {
  message: string;
}
export function SenderMessage({ message }: ISenderMessage) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[60%] rounded-full py-sm px-md bg-purple/25">
        <p className="text-md text-grey">{message}</p>
      </div>
    </div>
  );
}
