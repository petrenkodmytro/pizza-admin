import React, { FC } from 'react';
import { AutocompleteArrayInput, useGetList } from 'react-admin';

interface ManyToManyInputProps {
    label: string;
    reference: string;
    joinResource: string;
    resourceField: string;
    referenceField: string;
    resource: string;
  }

const ManyToManyInput: FC<ManyToManyInputProps> = ({label, resource,reference, resourceField, joinResource}) => {
    const choices = useGetList(reference);

  return (
    <AutocompleteArrayInput
      label={label}
      fullWidth
      optionText="title"
      translateChoice={false}
      choices={choices.data ?? []}
      source='123'
    />
  );
};

export default ManyToManyInput;
