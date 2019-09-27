import React from 'react';
import InputField from './InputField';


const InputFieldList = {
  entityId: "entityId",
  name: "name",
  status: "status"
};

export default class EntityForm extends React.Component {
  constructor(props) {
    super(props);
  }


  renderInputFields() {
    const renderedInputFields = [];
    for (const inputField in InputFieldList) {
      const currentInputField = (
        <div key={inputField} className="col-md-12">
          <InputField name={inputField} 
            type="text"
            placeholder={InputFieldList[inputField]} />
        </div>
      );
      renderedInputFields.push(currentInputField);
    }
    return renderedInputFields;
  }





  render() {
    return (
      <div >
        {this.renderInputFields()}
      </div>
    );
  }
}
