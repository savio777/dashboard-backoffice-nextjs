import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { useState } from 'react';
import { IconType } from 'react-icons';
import {
  HiChevronDown,
  HiChevronUp,
  HiInboxStack,
  HiOutlineBolt,
  HiOutlineBookmarkSquare,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { MdMenuOpen } from 'react-icons/md';

interface INavigationList {
  title?: string;
  expanded?: boolean;
  items: {
    Icon: IconType;
    title: string;
    badgeNumber?: number;
    selected?: boolean;
  }[];
}

const Sidebar: React.FC = () => {
  const [navigationList, setNavigationList] = useState<INavigationList[]>([
    {
      items: [{ title: 'Dashboard', Icon: HiOutlineHome, selected: true }],
    },
    {
      title: 'SHOP',
      expanded: true,
      items: [
        { title: 'Products', badgeNumber: 25, Icon: HiOutlineBolt },
        { title: 'Customers', Icon: HiOutlineUserGroup },
        { title: 'Orders', badgeNumber: 100, Icon: HiOutlineShoppingBag },
        { title: 'Categories', Icon: HiOutlineTag },
        { title: 'Brands', Icon: HiOutlineBookmarkSquare },
      ],
    },
    {
      title: 'BLOG',
      expanded: true,
      items: [
        { title: 'Posts', Icon: HiOutlineDocumentText },
        { title: 'Categories', Icon: HiInboxStack },
        { title: 'Authors', Icon: HiOutlineUsers },
      ],
    },
  ]);

  return (
    <div className='flex h-full w-80 border flex-col bg-white'>
      <div className='flex items-center gap-5 px-3.5 py-5 text-primary-500 text-2xl'>
        <MdMenuOpen />

        <Image src={Logo} alt='logo image' width={95.5} height={19} />
      </div>

      <div className='flex justify-center border bg-grey-200'>
        <div className='border w-4/5 border-primary-400' />
      </div>

      <nav className='pl-3.5'>
        {navigationList.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`flex flex-col gap-1 pr-3.5 py-6 ${
              index + 1 < navigationList.length && 'border-b border-b-grey-200'
            }`}
          >
            {!!item.title && (
              <button className='flex w-full items-center justify-between px-3.5 pb-1 text-sm text-grey-500'>
                <span className='font-bold text-xs uppercase text-grey-600'>
                  {item.title}
                </span>

                {item?.expanded ? <HiChevronUp /> : <HiChevronDown />}
              </button>
            )}

            <div className='flex flex-col gap-1'>
              {item.items.map(
                ({ title, badgeNumber, selected, Icon }, index) => (
                  <a
                    className={`${
                      selected ? 'bg-primary-500 text-white' : 'text-grey-900'
                    } flex gap-3 rounded-lg items-center px-3.5 py-2 text-lg`}
                    href=''
                    key={`${title}-${index}`}
                  >
                    <Icon />

                    <span className='text-sm font-medium'>{title}</span>

                    {!!badgeNumber && (
                      <span className='text-primary-700 bg-primary-100 rounded-3xl ml-auto px-2 py-0.5 text-xs font-medium'>
                        {badgeNumber}
                      </span>
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
