import React from 'react';

import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
} from '@atlaskit/atlassian-navigation';

import DropdownMenu, {
    DropdownItem,
    DropdownItemCheckbox,
    DropdownItemGroup,
  } from '@atlaskit/dropdown-menu';

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const Header = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton>Your work</PrimaryButton>,
      <PrimaryDropdownButton>Issues</PrimaryDropdownButton>,
      <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,      
      <PrimaryButton>Repositories</PrimaryButton>,
    ]}
    renderProductHome={AtlassianProductHome}
  />
);

export default Header;

