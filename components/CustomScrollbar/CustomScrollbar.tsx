import { ReactNode } from 'react';

import SimpleBarReact from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

type ScrollProps = {
  children: ReactNode;
};

export const CustomScrollbar = ({ children }: ScrollProps) => {
  return (
    <SimpleBarReact className="h-[254px] md:h-[274px] xl:h-[288px] w-full overflow-x-auto">
      {children}
    </SimpleBarReact>
  );
};
