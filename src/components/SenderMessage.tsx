interface ISenderMessage {
  message: string;
}
export function SenderMessage({ message }: ISenderMessage) {
  return (
    <div className="rounded-full py-sm px-md bg-purple/25">
      <p className="text-md text-grey">{message}</p>
    </div>
  );
}
