interface PropsContainerGrid {
  children: React.ReactNode
  flexColumn?: string
}

export const ContainerGrid: React.FC<PropsContainerGrid> = ({ children, flexColumn }) => {
  return (
    <div className={`flex justify-center items-center ${flexColumn} mt-28`}>
      {children}
    </div>
  );
};
