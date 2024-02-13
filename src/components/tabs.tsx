
import { FC, ReactNode, CSSProperties } from 'react';

import { css, jsx } from '@emotion/react';

import { Box, xcss } from '@atlaskit/primitives';
import { N20, N200 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import Tabs, { TabList, TabPanel, useTab } from '@atlaskit/tabs';
import Table from './table';
import Form from './form';
import Flag from './flag';
import Tittle from './header-tittle';

const panelStyles: CSSProperties = {
    display: 'flex',
    padding: token('space.400', '32px'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: token('color.background.neutral', N20),
    borderRadius: token('border.radius', '3px'),
    color: token('color.text.subtlest', N200),
    fontSize: '4em',
    fontWeight: 500,
    marginBlockEnd: token('space.100', '8px'),
    marginBlockStart: token('space.200', '16px'),
};

export const Panel = ({ children }: { children: ReactNode }) => (
    <div style={panelStyles}>{children}</div>
);

const customTabStyles = xcss({
    fontSize: '16px',
});

const CustomTab = ({ label }: { label: string }) => {
    const tabAttributes = useTab();

    return (
        <Box xcss={customTabStyles} {...tabAttributes}>
            {label}
        </Box>
    );
};

const TabCustomExample = () => (
    <div style={{
        width: '80vw',
        height: '60vh',
        display: 'flex',
    }}>

        <div>
            <Tabs id="custom-tabs">
                <TabList>
                    <CustomTab label="Tab 1" />
                    <CustomTab label="Tab 2" />
                    <CustomTab label="Tab 3" />
                </TabList>
                <TabPanel>
                    <Table></Table>
                </TabPanel>
                <TabPanel>
                    <div style={{
                        width: '60vw',
                        height: '60vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><div style={{
                    }}>
                            <Form></Form>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <Flag></Flag>
                </TabPanel>
            </Tabs>
        </div>

    </div>
);

export default TabCustomExample;