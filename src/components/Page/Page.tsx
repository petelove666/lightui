
import React from 'react';

import './Page.css';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({children} : PageProps) => {

 
  return (
    <main className="page">
      {children}
    </main>
  );
}

export default Page;