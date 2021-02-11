import { useFormikContext } from 'formik';
import React from 'react';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ 
    items, 
    name,
    numberOfColumns, 
    width, 
    PickerItemComponent, 
    placeholder 
}) {
    const { setFieldValue, errors, values, touched } = useFormikContext();


    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;