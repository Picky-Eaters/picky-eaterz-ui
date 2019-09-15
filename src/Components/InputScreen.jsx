import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export default class InputScreen extends React.Component {
  render() {
      return (
          <div>
            <TextField
              label="Join:"
              styles={{ fieldGroup: { width: 300 } }}
            />
          </div>
      );
  }
}