import React from 'react'

const Header = () => {
    const links = [{label:'Projects', href:'/'},{label:'About', href:'/'}]
  return (
    <>
    <div>
        <ul className="flex space-x-3">{links.map(link => <li key={link.label}>{link.label}</li>)}</ul>
    </div>
    </>
  )
}

export default Header