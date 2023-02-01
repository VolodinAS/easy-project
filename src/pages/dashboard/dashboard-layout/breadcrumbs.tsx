import React from 'react';

import { CustomLink } from './custom-link';
import { LinkSeparator, StyledLinkNoUrl } from './components';
import { ArrowRight } from '../../../assets/images';

export type BreadcrumbsLinks = Array<{
  name: string;
  enabled?: boolean;
  url?: string;
}>;

type BreadcrumbsProps = {
  links: BreadcrumbsLinks;
}

export const Breadcrumbs:React.FC<BreadcrumbsProps> = ({ links }) => {
    return <>
        {links.map((link, index) => (
            <React.Fragment key={`${link.name}_${link.url}_${index}`}>
                {link.url && link.enabled ? (
                    <CustomLink to={link.url} title={link.name}>{link.name}</CustomLink>
                ):(
                    <StyledLinkNoUrl>{link.name}</StyledLinkNoUrl>
                )}
                {(index + 1) !== links.length && (
                    <LinkSeparator>
                        <img src={ArrowRight} alt="link separator" />
                    </LinkSeparator>
                )}
            </React.Fragment>
        ))
        }
    </>;
};
