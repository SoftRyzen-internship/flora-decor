// import React, { useRef, useEffect } from 'react';

import { ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
// import { Scrollbars } from 'react-custom-scrollbars-2';
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

{
  /* react-custom-scrollbars-2*/
}

// export const CustomScrollbar = ({ children }: ScrollProps) => {
//   return (
//     <Scrollbars
//       style={{ width: '100%', height: '100%' }}
//       renderThumbVertical={({ style, ...props }) => (
//         <div
//           {...props}
//           style={{
//             ...style,
//             backgroundColor: '#888',
//             borderRadius: '5px',
//           }}
//         />
//       )}
//     >
//       {children}
//     </Scrollbars>
//   );
// };
