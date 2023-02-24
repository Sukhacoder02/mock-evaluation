import * as React from 'react';
import './NavBar.css';

const NavBar: React.FunctionComponent = (): JSX.Element => {
  return (
    <nav>
      <div className="title">
        <div className="my">
          <p>My </p>
        </div>
        <div className="record">
          <p>
            {' '}
            <b> Record</b>{' '}
          </p>
        </div>
        <div className="shelf">
          <p> Shelf</p>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
