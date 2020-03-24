import React from 'react';
import { Container, Box } from '@material-ui/core';
const DashBoard = () => {
  return (
    <Container>
      <Box my={2}>
        {[...new Array(400)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Box>
    </Container>
  );
};

export default DashBoard;
