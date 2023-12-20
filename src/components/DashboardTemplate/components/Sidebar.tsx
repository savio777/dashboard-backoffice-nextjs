import Logo from '@/assets/logo.svg';
import Badge from '@/components/atom/Badge';
import Image from 'next/image';
import { useCallback, useState } from 'react';
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
  expanded: boolean;
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
      expanded: true,
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

  const handleExpandNavigation = useCallback(
    (index: number) => {
      const navigationListTemp = navigationList;

      navigationListTemp[index].expanded = !navigationListTemp[index].expanded;

      setNavigationList([...navigationListTemp]);
    },
    [navigationList]
  );

  return (
    <div className='flex h-full w-80 flex-col bg-white border-r border-r-grey-200'>
      <a
        href=''
        className='flex items-center gap-5 px-3.5 py-5 text-primary-500 text-2xl'
      >
        <MdMenuOpen />

        <Image src={Logo} alt='logo image' width={95.5} height={19} />
      </a>

      <div className='flex justify-center h-px bg-grey-200 -mt-px'>
        <div className='w-4/5 h-px bg-primary-400' />
      </div>

      <nav className='pl-3.5'>
        {navigationList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 pr-3.5 py-6 ${
              index + 1 < navigationList.length && 'border-b border-b-grey-200'
            }`}
          >
            {!!item.title && (
              <button
                className='flex w-full items-center justify-between px-3.5 pb-1 text-sm text-grey-500'
                onClick={() => handleExpandNavigation(index)}
              >
                <span className='font-bold text-xs uppercase text-grey-600'>
                  {item.title}
                </span>

                {item?.expanded ? <HiChevronUp /> : <HiChevronDown />}
              </button>
            )}

            <div className='flex flex-col gap-1'>
              {item.expanded &&
                item.items.map(
                  ({ title, badgeNumber, selected, Icon }, buttonIndex) => (
                    <a
                      className={`${
                        selected ? 'bg-primary-500 text-white' : 'text-grey-900'
                      } flex gap-3 rounded-lg items-center px-3.5 py-2 text-lg hover:bg-primary-500 hover:text-white`}
                      href=''
                      key={`${title}-${buttonIndex}`}
                    >
                      <Icon />

                      <span className='text-sm font-medium'>{title}</span>

                      {!!badgeNumber && <Badge>{badgeNumber}</Badge>}
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
