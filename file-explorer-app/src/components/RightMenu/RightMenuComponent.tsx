import React, {useContext, useRef} from 'react';
import '../../App.css';
import { FileExplorerContext, FileExplorerContextType } from '../../context/FileExplorerContext';

const RightMenuComponent = ({ fileName}: { fileName: string}) => {

  const {showPopup, togglePopup} = useContext(FileExplorerContext) as FileExplorerContextType;
  const menuRef = useRef<HTMLDivElement | null>(null);

  const rightMenuAction = (action: string) => {
        console.log(`${action} ${fileName}`);
  }

  const closeMenu = () =>{
    togglePopup();
  }
 
   return (
      <div ref={menuRef} style={{ display: (showPopup ? 'block' : 'none') }} className="right-menu">
        <button onClick={() =>closeMenu()}>Close</button>
       <p onClick={()=> rightMenuAction('Copy')}>Copy</p>
       <p onClick={()=> rightMenuAction('Rename')}>Rename</p>
       <p onClick={()=> rightMenuAction('Delete')}>Delete</p>
      </div>
  );
}

export default RightMenuComponent;
