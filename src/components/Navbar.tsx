// Navbar Component
export const Navbar = () => (
  <div className='navbar bg-base-100'>
    <LogoSection />
    <DropdownSections />
  </div>
)

// Logo Section
const LogoSection = () => (
  <div className='flex-1'>
    <a className='btn btn-ghost text-xl'>Jobs Analysis</a>
  </div>
)

// Dropdown Sections
const DropdownSections = () => (
  <div className='flex-none'>
    <CartDropdown />
    <ProfileDropdown />
  </div>
)

// Cart Dropdown
const CartDropdown = () => (
  <div className='dropdown dropdown-end'>
    <CartButton />
    <CartDetails />
  </div>
)

// Cart Button
const CartButton = () => (
  <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
    <CartIndicator />
  </div>
)

// Cart Indicator
const CartIndicator = () => (
  <div className='indicator'>
    <CartIcon />
    <span className='badge badge-sm indicator-item'>8</span>
  </div>
)

// Cart Icon
const CartIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    />
  </svg>
)

// Cart Details
const CartDetails = () => (
  <div tabIndex={0} className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'>
    <div className='card-body'>
      <span className='text-lg font-bold'>8 Items</span>
      <span className='text-info'>Subtotal: $999</span>
      <div className='card-actions'>
        <button className='btn btn-primary btn-block'>View cart</button>
      </div>
    </div>
  </div>
)

// Profile Dropdown
const ProfileDropdown = () => (
  <div className='dropdown dropdown-end'>
    <ProfileButton />
    <ProfileMenu />
  </div>
)

// Profile Button
const ProfileButton = () => (
  <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
    <div className='w-10 rounded-full'>
      <img alt='User Avatar' src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
    </div>
  </div>
)

// Profile Menu
const ProfileMenu = () => (
  <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
    <li>
      <a className='justify-between'>
        Profile<span className='badge'>New</span>
      </a>
    </li>
    <li>
      <a>Settings</a>
    </li>
    <li>
      <a>Logout</a>
    </li>
  </ul>
)
