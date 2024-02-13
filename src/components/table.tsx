import React from 'react';

import DynamicTable from '@atlaskit/dynamic-table';

import { head, rows } from './sample-data';

export default function TableUncontrolled() {
    return (
        <div style={{
            width: '80vw',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
        }}><div style={{
            width: '50vw'
        }}>
                <DynamicTable
                    head={head}
                    rows={rows}
                    rowsPerPage={5}
                    defaultPage={1}
                    loadingSpinnerSize="large"
                    isRankable
                />
             </div>
         </div>
    );
}
