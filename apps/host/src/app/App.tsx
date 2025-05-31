import React, { Suspense } from 'react';
import { Stack } from "@mui/material";

export function App() {
const RemoteButton1 = React.lazy(() => import('remote1/RemoteButton'));
const RemoteButton2 = React.lazy(() => import('remote2/RemoteButton'));

  return (
    <Stack width={'200px'} spacing={2} alignItems="center" direction={'column'}>
      <Suspense fallback={<div>Loading Remote Button1...</div>}>
        <RemoteButton1 />
      </Suspense>
      <Suspense fallback={<div>Loading Remote Button2...</div>}>
        <RemoteButton2 />
      </Suspense>
    </Stack>
  );
}

export default App;
