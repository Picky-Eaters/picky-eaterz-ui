import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export default class TextFields extends React.Component() {
  render() {
    return (
      <div>
          <div class="ms-TextField">
            <label class="ms-Label">Name</label>
            <input class="ms-TextField-field" type="text" value="" placeholder=""/>
          </div>
          <script type="text/javascript">
              var TextFieldElements = document.querySelectorAll(".ms-TextField");
              for (var i = 0; i < TextFieldElements.length; i++) {
                new fabric['TextField'](TextFieldElements[i]);
              }
        </script>
      <div/>
    );
  }
}