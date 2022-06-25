interface IReceiverMessage {
  message: string;
}
export function ReceiverMessage({ message }: IReceiverMessage) {
  return (
    <div className="rounded-full py-sm px-md bg-grey/25">
      <p className="text-md text-grey">{message}</p>
    </div>
  );
}
