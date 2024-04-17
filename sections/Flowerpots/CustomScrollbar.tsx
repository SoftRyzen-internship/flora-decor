// import React, { useRef, useEffect } from 'react';

import { ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

type ScrollProps = {
  children: ReactNode;
};

export const CustomScrollbar = ({ children }: ScrollProps) => {
  //   const simpleBarRef = useRef<any>(null);

  //   useEffect(() => {
  //     if (simpleBarRef.current) {
  //       simpleBarRef.current.recalculate();
  //     }
  //   }, []);

  // ref = { simpleBarRef };

  return (
    <SimpleBar style={{ width: '100%', height: '300px' }}>{children}</SimpleBar>
  );
};
