import React, { Fragment } from 'react';
import Header from '../components/left-side-bar';
import Table from '../components/table';
import Tabs from '../components/tabs';
import Tittle from '../components/header-tittle';
import LeftBar from '../components/left-bar';
const FormDefaultExample = () => (
    <>
        <Header></Header>
        <div style={{
            width: '100',
            height: '60vh',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            <div style={{
            }}>
                <LeftBar></LeftBar>
            </div>

            <div style={{
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Tabs></Tabs>
                {/* <Table></Table> */}
            </div>
  
        </div>



    </>
);

export default FormDefaultExample;