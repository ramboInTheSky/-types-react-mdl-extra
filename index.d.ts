// Type definitions for react-mdl-extra 
// Definitions by: _Alz
// TypeScript Version: 2.2

import * as React from 'react'
import { MDLHTMLAttributes,TextfieldProps,__MDLComponent } from 'react-mdl'
 export = __ReactMDLExtra;
declare module 'react-mdl-extra'
declare namespace __ReactMDLExtra {

    interface AutoCompleteProps extends TextfieldProps {
        valueIndex?: string
        dataIndex?: string
        items?: any[]
    }

    interface AutoComplete extends React.Component<AutoCompleteProps, {}>{}

    interface AutoCompleteConstructor {
        new ():AutoComplete
    }
    
    var AutoComplete: AutoCompleteConstructor


    interface OptionProps extends MDLHTMLAttributes, React.DOMAttributes<Option>{
        value?: any
    }
    class Option extends __MDLComponent<OptionProps>{}

    interface SelectFieldProps extends MDLHTMLAttributes, React.DOMAttributes<SelectField> {
        align?: string,
        children?: JSX.Element | JSX.Element[],
        className?: string,
        disabled?: boolean,
        error?: string | boolean,
        floatingLabel?: boolean,
        label?: string,
        offset?: string,
        readOnly?: boolean,
        showMenuBelow?: boolean,
        value?: any
    }
    class SelectField extends __MDLComponent<SelectFieldProps>{}

    interface MultiSelectFieldProps extends MDLHTMLAttributes, React.DOMAttributes<MultiSelectField> {
        align?: string,
        children: JSX.Element[],
        className?: string,
        chipsAfter?: boolean,
        chipsOutside?: boolean,
        error?: string | boolean,
        label?: string,
        offset?: string,
        readOnly?: boolean,
        showChipsBelow?: boolean,
        value?: any[]
    }

    class MultiSelectField extends __MDLComponent<MultiSelectFieldProps>{}

}
