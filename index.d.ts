// Type definitions for react-mdl-extra 
// Definitions by: _Alz
// TypeScript Version: 2.2

import * as React from 'react'
import {TextfieldProps} from 'react-mdl'
 export = __ReactMDLExtra;

declare namespace __ReactMDLExtra {

    interface AutoCompleteProps extends TextfieldProps{
        valueIndex?: string
        dataIndex?: string
        items?: any[]
    }

    interface AutoComplete extends React.Component<AutoCompleteProps, {}>{}

    interface AutoCompleteConstructor {
        new ():AutoComplete
    }
    
    var AutoComplete: AutoCompleteConstructor


}