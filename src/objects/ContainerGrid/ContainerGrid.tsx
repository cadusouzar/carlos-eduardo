interface PropsContainerGrid {
  children: React.ReactNode
  flexColumn?: string
}

export const ContainerGrid: React.FC<PropsContainerGrid> = ({ children, flexColumn }) => {
  return (
    <div className={`md:block lg:block biglg:justify-center biglg:items-center biglg:flex ${flexColumn} md:mt-16 mt-28`}>
      {children}
    </div>
  );
};
