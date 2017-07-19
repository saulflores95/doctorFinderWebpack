import React from 'react'

const MobileSearch = ({}) => (
  <div className='wrapper'>
    <form>
      <input type="text" className="search" placeholder="What are you looking for?" />
    </form>
    <style jsx>
      {`
        .search {
          padding:8px 15px;
          background: white;
          border:3px solid #2d517b;
          width: 90%;
          -webkit-border-radius: 50px;
          -moz-border-radius: 50px;
          border-radius: 50px;
        }
      `}
    </style>
  </div>
)

export default MobileSearch
