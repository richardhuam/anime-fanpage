import React, { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <div className="space-y-6 pb-6">{children}</div>;
};

export default PageWrapper;
