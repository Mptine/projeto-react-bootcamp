type MiniButtonProps = {
  onClick: () => void;
  source: string;
  icon: React.ReactNode;
};

export function MiniButton(props: MiniButtonProps) {
  return (
    <>
      <span onClick={props.onClick}>{props.icon}</span>
    </>
  );
}
